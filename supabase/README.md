# Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. In the SQL Editor, run the migration: copy the contents of `migrations/001_waitlist.sql` and execute it.
3. In Project Settings → API, copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **service_role** key (secret) → `SUPABASE_SERVICE_ROLE_KEY`
4. Add these and `ADMIN_PASSWORD` to your `.env.local` (see `.env.example`).
