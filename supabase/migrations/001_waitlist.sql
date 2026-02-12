-- Waitlist signups table for Trustline Professional Services Ltd
create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

-- RLS: no public read/write; only service role can insert/select
alter table public.waitlist_signups enable row level security;

create policy "Service role only"
  on public.waitlist_signups
  for all
  using (false)
  with check (false);

-- Optional: index for listing by date
create index if not exists waitlist_signups_created_at_idx
  on public.waitlist_signups (created_at desc);

comment on table public.waitlist_signups is 'Landing page waitlist emails';
