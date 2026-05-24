-- Run this in Supabase SQL Editor (Dashboard → SQL)

create table if not public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamptz default now()
);

alter table public.contact_messages enable row level security;

-- Allow anonymous inserts from your site (contact form only)
create policy "Allow public insert"
  on public.contact_messages
  for insert
  to anon
  with check (true);

-- No public read — view messages in Supabase dashboard only
create policy "No public select"
  on public.contact_messages
  for select
  to anon
  using (false);
