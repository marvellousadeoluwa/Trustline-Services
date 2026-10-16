# Trustline Platform

The complete web application and landing page for Trustline Professional Services Ltd.

## Project Structure

This project is built with Next.js App Router and separates the marketing site from the application logic:
- `app/(marketing)` - Public pages like Home, About, Insights, etc.
- `app/(app)` - Logged-in application pages and admin dashboard.

## 🚀 Quick Start (Local Development)

You can get the project up and running in under 15 minutes!

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Ask a team member for the local development credentials or copy the example file:
```bash
cp .env.example .env.local
```
Ensure your `.env.local` contains the `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database (Supabase)

We use Supabase for our database. 
- **Local Dev:** Connects to the development Supabase project (keys in `.env.local`).
- **Migrations:** If you need to set up the database schema, run the SQL scripts found in `supabase/migrations/` in the Supabase SQL Editor.

## 🚀 Deployments & Environments

We use **Vercel** for hosting, which provides seamless environments directly from GitHub:

1. **Production:** Any merge to the `main` branch automatically deploys to Production. (Uses Vercel Production Environment Variables)
2. **Staging (Preview):** Any push or pull request to a non-main branch triggers a Preview Deployment. This gives you a unique staging URL to test changes safely. (Uses Vercel Preview Environment Variables).

*Note: Staging and Production databases are entirely separate. Staging points to a test database so production data is never at risk.*
