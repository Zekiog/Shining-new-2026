# Shining-new-2026 — Shining Beauty Wellness

Produksjonsklar markedsførings- og bookingside for **Shining Beauty Wellness**, et luksus-spa og skjønnhetssalong i **Adana Seyhan, Tyrkia**.

> **Status:** ✅ Aktiv — distribuert via Netlify/Vercel fra dette monorepo.
> Repositoriet inneholder både React-klienten (`client/`) og Node/Express API (`server/`).

---

## Hva er det?

En fullstack TypeScript-referanseimplementering for et enkeltlokalisert servicenæringssted:

- **Markedsføringssider** — tjenester, priser, team, kontakt
- **WhatsApp deep-link booking** — hovedkonverteringsvei
- **SEO-klar** — geografiske metadata, strukturert data, OpenGraph-koder
- **Tospråklig grensesnitt** — Tyrkisk primær, engelsk fallback
- **Distribuer hvor som helst** — Vercel og Netlify-konfigurasjoner begge inkludert

## Teknologistakk

| Lag | Valg |
|---|---|
| Frontend | React + TypeScript + Vite |
| UI primitiver | Radix UI + Tailwind CSS |
| Backend | Node.js + Express (TypeScript, ESM) |
| Hosting | Vercel *eller* Netlify (dual konfigurasjoner) |

## Repositoriumoppsett

```
.
├── client/        # React SPA (Vite)
├── server/        # Express API
├── attached_assets/
├── components.json # shadcn/ui register
├── vercel.json    # Vercel distribusjon
├── netlify.toml   # Netlify distribusjon
└── package.json   # Arbeidsrom-skript
```

## Lokal utvikling

```bash
npm install
npm run dev           # starter API + Vite dev server
npm run dev:client    # kun klient (port 5000)
npm run build         # produksjonsbuild
npm run start         # server bygget API
npm run check         # tsc --noEmit
```

## Distribusjon

Begge leverandørene er konfigurert ut av esken:

- **Vercel** — `vercel.json` ruter `/api/*` til Express-serveren,
  alt annet til Vite-bygget statisk pakke.
- **Netlify** — `netlify.toml` definerer samme deling ved bruk av Netlify
  Functions-konvensjoner.

Velg en og koble til repositoriet; ingen ekstra konfigurering nødvendig.

## Lisens

[MIT](./LICENSE)
