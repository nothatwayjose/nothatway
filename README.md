# Jose Ausejo Rojas — Portfolio

Modern, bilingual (EN/ES) dark-editorial portfolio built with **Next.js (App Router) + TypeScript**.
The contact form is validated on the server and **delivered to your inbox by email** (via Resend). No database to manage.

## How the contact form works
```
Form (browser)  ->  /api/contact (server, re-validates)  ->  Resend  ->  your inbox
```
Secrets live only in server environment variables — never in frontend code.

## Run locally
1. `npm install`
2. `cp .env.example .env` and fill in `RESEND_API_KEY` + `CONTACT_TO_EMAIL`
   (get a free key at resend.com).
3. `npm run dev` → http://localhost:3000
4. `npm test` runs the validation tests.

## Deploy on Cloudflare Pages
1. Push to GitHub, connect the repo in Cloudflare Pages.
2. Add environment variables in **Settings → Environment variables**:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - (optional) `CONTACT_FROM` once you verify a domain in Resend.
3. Redeploy. The `/api/contact` route runs on the edge (`export const runtime = "edge"`), which Cloudflare requires.

## Adding photos & videos to projects
Open `src/components/Portfolio.tsx`. Each project has a `photo` (image URL) and `video` (link) field —
drop in your own URLs. Leave `photo` empty to show the placeholder.

## Security
- Every field re-validated on the server with Zod (never trust the browser).
- Hidden honeypot field silently drops most spam bots.
- HTML in the email is escaped to prevent injection.
