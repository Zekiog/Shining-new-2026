import type { Express } from "express";
import { createServer, type Server } from "http";

/**
 * Booking moved to WhatsApp. The visitor form is not stored on the server.
 * `client/src/lib/booking.ts` opens `https://wa.me/<business-number>` with
 * a prefilled message, so:
 *
 *   - No personal data is kept without explicit consent (KVKK).
 *   - `/api/contacts` is gone. It did not run on the Netlify static
 *     deploy (no Express process in production).
 *   - Smaller injection, spam, and scraping surface on contact and booking.
 *
 * If server-side storage is needed again, put the endpoints under
 * `netlify/functions/`, not back in this file. This file only keeps the
 * `registerRoutes` contract used by `server/index.ts`.
 */
export async function registerRoutes(app: Express): Promise<Server> {
  // Intentionally no API routes. See file header.
  return createServer(app);
}
