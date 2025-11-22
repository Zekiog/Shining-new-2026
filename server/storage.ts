import { type Contact, type InsertContact, type Appointment, type InsertAppointment, contacts, appointments } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointments(): Promise<Appointment[]>;
}

export class DatabaseStorage implements IStorage {
  async createContact(contact: InsertContact): Promise<Contact> {
    const result = await db.insert(contacts).values(contact).returning();
    return result[0];
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(contacts.createdAt);
  }

  async createAppointment(appointment: InsertAppointment): Promise<Appointment> {
    const result = await db.insert(appointments).values(appointment).returning();
    return result[0];
  }

  async getAppointments(): Promise<Appointment[]> {
    return await db.select().from(appointments).orderBy(appointments.createdAt);
  }
}

export const storage = new DatabaseStorage();
