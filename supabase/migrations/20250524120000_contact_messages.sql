-- Contact form messages table
create table if not public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamptz default now()
);

alter table public.contact_messages enable row level security;

drop policy if exists "Allow public insert" on public.contact_messages;
create policy "Allow public insert"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "No public select" on public.contact_messages;
create policy "No public select"
  on public.contact_messages
  for select
  to anon
  using (false);

-- Allow publishable/secret keys (new API keys use authenticated role)
drop policy if exists "Service role full access" on public.contact_messages;
create policy "Service role full access"
  on public.contact_messages
  for all
  to service_role
  using (true)
  with check (true);
