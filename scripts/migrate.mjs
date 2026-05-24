import { readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function loadEnvLocal() {
  try {
    const raw = readFileSync(join(root, ".env.local"), "utf8");
    for (const line of raw.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim();
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    /* ignore */
  }
}

loadEnvLocal();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const PROJECT_REF = process.env.SUPABASE_PROJECT_REF;
const DB_PASSWORD = process.env.SUPABASE_DB_PASSWORD;
const ACCESS_TOKEN = process.env.SUPABASE_ACCESS_TOKEN?.startsWith("sbp_")
  ? process.env.SUPABASE_ACCESS_TOKEN
  : undefined;

function getProjectRef() {
  if (PROJECT_REF) return PROJECT_REF;
  if (!SUPABASE_URL) return null;
  try {
    const host = new URL(SUPABASE_URL).hostname;
    return host.replace(".supabase.co", "");
  } catch {
    return null;
  }
}

function resolveDatabaseUrl() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  const ref = getProjectRef();
  if (!ref || !DB_PASSWORD) return null;
  return `postgresql://postgres:${encodeURIComponent(DB_PASSWORD)}@db.${ref}.supabase.co:5432/postgres`;
}

const DATABASE_URL = resolveDatabaseUrl();

async function runViaManagementApi(sql) {
  const ref = getProjectRef();
  if (!ACCESS_TOKEN || !ref) {
    return { ok: false, reason: "missing SUPABASE_ACCESS_TOKEN or project ref" };
  }

  const res = await fetch(
    `https://api.supabase.com/v1/projects/${ref}/database/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: sql }),
    },
  );

  const body = await res.text();
  if (!res.ok) {
    return { ok: false, reason: `Management API ${res.status}: ${body}` };
  }
  return { ok: true };
}

async function runViaPg(sql) {
  const { default: pg } = await import("pg");
  const client = new pg.Client({ connectionString: DATABASE_URL });
  await client.connect();
  try {
    await client.query(sql);
  } finally {
    await client.end();
  }
  return { ok: true };
}

function loadMigrations() {
  const dir = join(root, "supabase", "migrations");
  return readdirSync(dir)
    .filter((f) => f.endsWith(".sql"))
    .sort()
    .map((f) => ({
      name: f,
      sql: readFileSync(join(dir, f), "utf8"),
    }));
}

async function main() {
  const migrations = loadMigrations();
  console.log(`Found ${migrations.length} migration(s).`);

  if (!DATABASE_URL && !(ACCESS_TOKEN && getProjectRef())) {
    console.error(`
Cannot run migrations yet — add ONE of these to .env.local:

1) Project URL (required for the app):
   NEXT_PUBLIC_SUPABASE_URL=https://YOUR_REF.supabase.co
   (Supabase Dashboard → Settings → API → Project URL)

2) Database password (to run migrations):
   SUPABASE_DB_PASSWORD=your-database-password
   (Dashboard → Settings → Database → Database password)

   OR full URI:
   DATABASE_URL=postgresql://postgres.[ref]:[password]@...pooler.supabase.com:6543/postgres

   OR Supabase CLI token:
   SUPABASE_ACCESS_TOKEN=sbp_...  (supabase.com/dashboard/account/tokens)
`);
    process.exit(1);
  }

  for (const { name, sql } of migrations) {
    console.log(`Applying ${name}...`);
    try {
      if (DATABASE_URL) {
        await runViaPg(sql);
      } else {
        const result = await runViaManagementApi(sql);
        if (!result.ok) throw new Error(result.reason);
      }
      console.log(`  ✓ ${name}`);
    } catch (err) {
      console.error(`  ✗ ${name} failed:`, err.message ?? err);
      process.exit(1);
    }
  }

  console.log("\nAll migrations applied.");
}

main();
