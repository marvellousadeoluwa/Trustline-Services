# Trustline Professional Services Ltd

Landing page for Trustline Professional Services Ltd — tax and accounting in Nigeria. Goal: instant authority; address the pain point (fear of penalty) with the solution (correctness).

## What’s included

- **Landing page**: Hero, Who We Serve, Value Proposition, Practice Areas, How It Works, Footer
- **Waitlist**: Hero CTA with email signup; emails stored in Supabase
- **Admin dashboard** at `/admin`: password-protected view of signups, total count, Export to CSV

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Waitlist + Admin

1. Copy `.env.example` to `.env.local`.
2. Create a [Supabase](https://supabase.com) project, run `supabase/migrations/001_waitlist.sql` in the SQL Editor.
3. Set in `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL` — project URL
   - `SUPABASE_SERVICE_ROLE_KEY` — service role key
   - `ADMIN_PASSWORD` — password for `/admin`
4. Restart the dev server. Use the waitlist on the home page; open `/admin` to view and export signups.
