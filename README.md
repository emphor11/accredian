# Accredian Enterprise

A Next.js 14 App Router implementation of an Accredian Enterprise landing page with Tailwind CSS, Lucide React, and Zod.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## API Routes

- `GET /api/programs` returns mock enterprise program data.
- `POST /api/leads` is available as a bonus demo endpoint. It validates lead payloads with Zod and stores them in a module-level in-memory array.

Lead submissions sent to the demo endpoint are lost between server restarts, deployments, and Vercel cold starts. A production build should replace this store with Postgres, Supabase, or another durable database.

## Deployment

Deploy on Vercel by connecting the repository. No environment variables are required for this version.

## Testing Notes

This time-boxed submission relies on `npm run build`, linting, and manual browser QA. The first automated tests to add would be Zod schema and lead route unit tests, followed by a Playwright smoke test that verifies page rendering, navigation hash links, FAQ tabs, and the CTA path.
