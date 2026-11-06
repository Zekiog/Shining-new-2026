# Shining Beauty Wellness

Marketing and WhatsApp booking site for **Shining Beauty Wellness** in Adana, Türkiye. React client (`client/`) ships as a static SPA; Express (`server/`) is for local development only.

**Live site:** https://shining-beauty-wellness.vercel.app

`shining.icu` is expired at Hostinger (NS `dns-expired.com`). It is not renewed. Canonical host is the Vercel URL above.

## Identity

Canonical identity is the business location. Developer OS language or timezone does not override it.

| Field | Value |
|---|---|
| Market | Adana, Türkiye |
| Primary language | `tr-TR` |
| Secondary language | `en` via `?lang=en` or the nav language toggle |
| Time zone | `Europe/Istanbul` |
| Currency | `TRY` |
| Country | `TR` |
| Region | `TR-01` |
| Source of truth | `client/src/lib/business.ts` |

Address: Kurtuluş Mahallesi, 64009 Sokak, Atakan Apartmanı B Blok Kat:1 No:2, 01130 Seyhan/Adana. Map pin is street-center, not a surveyed door coordinate.

## What it does

- Services, atmosphere gallery, contact, map
- WhatsApp deep-link booking (primary conversion; no server-side PII store)
- LocalBusiness JSON-LD, Open Graph, `hreflang`
- TR-first UI with English strings in `client/src/lib/i18n.ts`

## Stack

| Layer | Choice |
|---|---|
| UI | React, TypeScript, Vite |
| Components | Radix UI, Tailwind CSS |
| Local API (dev) | Node.js, Express (ESM) — empty routes in production path |
| Hosting | **Vercel** static deploy of `dist/public` |

## Local run

```bash
npm install
npm run dev            # Express + Vite; default port 5000
PORT=5173 npm run dev  # if macOS AirPlay holds :5000
npm run build
npm run check          # tsc
```

## Language

Detection order in `client/src/lib/i18n.ts`:

1. `?lang=tr` / `?lang=en`
2. Cookie `shining_dil`
3. `<html lang="tr">` in `client/index.html`

`navigator.language` is not used.

## Deploy

- **Vercel** — `vercel.json`: `vite build`, output `dist/public`, SPA rewrite to `index.html`. Production auto-deploys from `main` to shining-beauty-wellness.vercel.app.
- Booking never posts to a server function; the contact form opens WhatsApp.

Optional env (Vercel → Project Settings → Environment Variables): `VITE_GA4_MEASUREMENT_ID`, `VITE_GOOGLE_SITE_VERIFICATION`.

## Human follow-ups

- Update Google Business Profile to Kurtuluş address/hours
- Google Place ID if live reviews should replace illustrative atelier notes
- Restore mailbox/domain only if a new domain is chosen (not `shining.icu` renew)

## License

[MIT](./LICENSE)
