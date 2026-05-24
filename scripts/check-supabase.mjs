import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function loadEnv() {
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
}

loadEnv();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const res = await fetch(`${url}/rest/v1/contact_messages?select=id&limit=1`, {
  headers: { apikey: key, Authorization: `Bearer ${key}` },
});

if (res.ok) {
  console.log("✓ contact_messages table exists");
} else {
  const body = await res.text();
  console.log("✗ Table not ready:", res.status, body);
  console.log(
    "\nRun migration: open SQL Editor → paste supabase/migrations/20250524120000_contact_messages.sql",
  );
  console.log(
    `https://supabase.com/dashboard/project/${process.env.SUPABASE_PROJECT_REF}/sql/new`,
  );
}
