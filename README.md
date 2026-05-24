# Umer Makki — Portfolio

Modern, minimal portfolio site built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Supabase**. Deployed on **Netlify**.

## Stack (why this choice)

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next.js + TypeScript** | SEO, fast pages, API routes for contact form |
| Styling | **Tailwind CSS v4** | Gradients, spacing, responsive design |
| Motion | **Framer Motion** | Hero animations, scroll reveals, button feedback |
| Backend | **Supabase** | Contact messages, easy to extend for projects CMS |
| Deploy | **Netlify** | `@netlify/plugin-nextjs` handles Next.js SSR |

React alone is fine for SPAs; **Next.js is the best fit** for a professional portfolio you want found on Google and hosted on Netlify.

## Quick start

```powershell
cd "C:\Users\umr\OneDrive\Desktop\Makki ji pf"
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

- **Profile & links:** `src/data/site.ts`
- **Projects:** `src/data/projects.ts` (replace images, URLs, copy)
- **Colors / theme:** `src/app/globals.css` (`@theme` variables)

## Supabase (contact form)

1. Create a project at [supabase.com](https://supabase.com).
2. Run SQL from `supabase/schema.sql` in the SQL Editor.
3. Copy `.env.example` → `.env.local` and add:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

4. Restart `npm run dev`. Submit the contact form to test.

## Deploy to Netlify

1. Push this folder to GitHub.
2. In Netlify: **Add new site** → Import from Git.
3. Build settings (auto-detected via `netlify.toml`):
   - Build: `npm run build`
   - Plugin: `@netlify/plugin-nextjs`
4. Add the same env variables under **Site settings → Environment variables**.
5. Deploy.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — run production build locally
- `npm run lint` — ESLint
