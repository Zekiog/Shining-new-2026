import type { Express } from "express";
import { createServer, type Server } from "http";

/**
 * The site has fully migrated to a WhatsApp-first booking flow.
 *
 * Visitor form data is no longer stored server-side. The form opens
 * `https://wa.me/<business-number>` with a pre-filled message via the
 * `client/src/lib/booking.ts` helper. This eliminates:
 *
 *   - PII storage without explicit consent (KVKK exposure).
 *   - A broken `/api/contacts` endpoint under the Netlify static deploy
 *     (the Express server does not run in production).
 *   - Server-side attack surface (injection, spam, scraping) on contact
 *     and appointment endpoints.
 *
 * If the business ever needs server-side capture again, port these
 * endpoints to Netlify Functions (`netlify/functions/`) rather than
 * reintroducing them here. Keeping this file empty preserves the
 * `registerRoutes` contract used by `server/index.ts`.
 */
export async function registerRoutes(app: Express): Promise<Server> {
  // Intentionally no API routes. See file header.
  return createServer(app);
}
