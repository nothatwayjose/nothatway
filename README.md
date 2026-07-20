# Jose Ausejo Rojas — Portfolio

A modern, dark-editorial personal portfolio built with **Next.js (App Router) + TypeScript**.
Includes a secure contact form with **server-side validation** (Zod) and submissions stored in **Postgres** via **Prisma**.

## What's inside
- `src/app/page.tsx` — the single-page site (Hero, About, Projects, Timeline, Contact)
- `src/app/api/contact/route.ts` — server endpoint that validates + stores messages
- `src/components/*` — one component per section
- `prisma/schema.prisma` — the `ContactSubmission` table
- `__tests__/*` — automated tests for the validation logic

## Run it locally (beginner-friendly)

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up your secrets.** Copy the example env file and fill in your database URL:
   ```bash
   cp .env.example .env
   ```
   Open `.env` and set `DATABASE_URL`. The easiest free option is **Vercel Postgres** or **Supabase** — create a database there and paste the connection string. Secrets live ONLY in `.env` (which is git-ignored) — they are never sent to the browser.

3. **Create the database table**
   ```bash
   npx prisma migrate dev --name init
   ```

4. **Start the dev server**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

5. **Run the tests**
   ```bash
   npm test
   ```

## Publish it (Vercel — recommended)
1. Push this folder to a GitHub repo.
2. Go to vercel.com → **New Project** → import the repo.
3. Add a **Vercel Postgres** database (Storage tab) — Vercel injects `DATABASE_URL` automatically.
4. In Project Settings → Environment Variables, confirm `DATABASE_URL` is set for Production.
5. Deploy. Vercel runs `prisma generate` and builds automatically.
6. After the first deploy, run the migration against production once:
   ```bash
   npx prisma migrate deploy
   ```

## Security notes
- Database credentials are read from environment variables on the server only — never exposed in frontend code.
- Every field is re-validated on the server (never trust the browser).
- A hidden "honeypot" field silently drops most spam bots.
- Prisma uses parameterized queries, protecting against SQL injection.
