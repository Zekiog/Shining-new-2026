# Shining-new-2026 — Shining Beauty Wellness

Production-ready marketing & booking website for **Shining Beauty
Wellness**, a luxury spa and beauty salon in **Adana Seyhan, Turkey**.

> **Status:** ✅ Live — deployed via Netlify/Vercel from this monorepo.
> Repo contains both the React client (`client/`) and the Node/Express
> API (`server/`).

---

## What is it?

A fullstack TypeScript reference implementation for a single-location
service business site:

- **Marketing pages** — services, pricing, team, contact
- **WhatsApp deep-link booking** — primary conversion path
- **SEO-ready** — geo metadata, structured data, OpenGraph tags
- **Bilingual surface** — Turkish primary, English fallback
- **Deploy anywhere** — Vercel and Netlify configs both included

## Tech stack

| Layer | Choice |
|---|---|
| Frontend | React + TypeScript + Vite |
| UI primitives | Radix UI + Tailwind CSS |
| Backend | Node.js + Express (TypeScript, ESM) |
| Hosting | Vercel *or* Netlify (dual configs) |

## Repo layout

```
.
├── client/        # React SPA (Vite)
├── server/        # Express API
├── attached_assets/
├── components.json # shadcn/ui registry
├── vercel.json    # Vercel deployment
├── netlify.toml   # Netlify deployment
└── package.json   # Workspace scripts
```

## Local development

```bash
npm install
npm run dev           # starts API + Vite dev server
npm run dev:client    # client only (port 5000)
npm run build         # production build
npm run start         # serve built API
npm run check         # tsc --noEmit
```

## Deployment

Both providers are configured out of the box:

- **Vercel** — `vercel.json` routes `/api/*` to the Express server,
  everything else to the Vite-built static bundle.
- **Netlify** — `netlify.toml` defines the same split using Netlify
  Functions conventions.

Pick one and connect the repo; no extra config needed.

## License

[MIT](./LICENSE)
