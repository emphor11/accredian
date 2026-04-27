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

## Supabase Setup

Create a `.env.local` file in the project root with:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

The API also supports `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, or `SUPABASE_SERVICE_ROLE_KEY` if you prefer server-only naming.

The lead API inserts into a Supabase table named `leads` with these columns:

```sql
create table leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text not null,
  team_size text not null,
  message text,
  created_at timestamptz not null default now()
);
```

For a public/demo form, enable an insert policy that allows anonymous inserts into `leads`, or swap the route to a server-only service role key in production.

For the demo policy, run:

```sql
alter table leads enable row level security;

create policy "Allow anonymous lead inserts"
on leads
for insert
to anon
with check (true);
```

## API Routes

- `GET /api/programs` returns mock enterprise program data.
- `POST /api/leads` validates lead payloads with Zod and stores them in Supabase.

Lead validation rules:

- Name is required and must be at least 2 characters.
- Work Email is required, must be valid, and cannot use common personal domains such as Gmail, Yahoo, Hotmail, Outlook, or iCloud.
- Company Name is required.
- Team Size is required and must be one of `1-10`, `11-50`, `51-200`, or `200+`.
- Message is optional and limited to 500 characters.

## Deployment

Deploy on Vercel by connecting the repository. No environment variables are required for this version.

## Testing Notes

This time-boxed submission relies on `npm run build`, linting, and manual browser QA. The first automated tests to add would be Zod schema and lead route unit tests, followed by a Playwright smoke test that verifies page rendering, navigation hash links, FAQ tabs, and the CTA path.
