import { createClient } from "@supabase/supabase-js";

/** URL: NEXT_PUBLIC_* is inlined at build; SUPABASE_URL works at runtime on Netlify. */
function getSupabaseUrl() {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_URL ??
    process.env.SUPABASE_URL ??
    ""
  );
}

function getPublishableKey() {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    process.env.SUPABASE_ANON_KEY ??
    process.env.SUPABASE_PUBLISHABLE_KEY ??
    ""
  );
}

function getSecretKey() {
  return (
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_SECRET_KEY ??
    ""
  );
}

export function createBrowserClient() {
  const url = getSupabaseUrl();
  const key = getPublishableKey();
  if (!url || !key) {
    return null;
  }
  return createClient(url, key);
}

export function createServerClient() {
  const url = getSupabaseUrl();
  const key = getSecretKey() || getPublishableKey();
  if (!url || !key) {
    return null;
  }
  return createClient(url, key);
}
