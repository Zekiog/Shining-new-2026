import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertAppointmentSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contacts", async (req, res) => {
    try {
      const validated = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validated);
      res.json(contact);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/appointments", async (req, res) => {
    try {
      const validated = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(validated);
      res.json(appointment);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/appointments", async (req, res) => {
    try {
      const appointments = await storage.getAppointments();
      res.json(appointments);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
