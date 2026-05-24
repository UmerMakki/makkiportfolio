import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";

function getPublishableKey() {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
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
  const key = getPublishableKey();
  if (!supabaseUrl || !key) {
    return null;
  }
  return createClient(supabaseUrl, key);
}

export function createServerClient() {
  const key = getSecretKey() || getPublishableKey();
  if (!supabaseUrl || !key) {
    return null;
  }
  return createClient(supabaseUrl, key);
}
