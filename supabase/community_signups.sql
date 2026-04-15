create extension if not exists pgcrypto;

create table if not exists public.community_signups (
  id uuid primary key default gen_random_uuid(),
  parent_guardian_name text not null,
  email text not null,
  phone_number text,
  child_age text not null,
  interests text[] not null default '{}',
  child_interests text[] not null default '{}',
  newsletter_preference text not null,
  newsletter_opt_in boolean not null default true,
  source text not null default 'workshop_join_community',
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists community_signups_created_at_idx
  on public.community_signups (created_at desc);

create index if not exists community_signups_email_idx
  on public.community_signups (email);
