import { z } from "zod";

export type Role = "ADMIN" | "STAFF";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export const loginSchema = z.object({
  email: z.string().email("Email Tidak Valid"),
  password: z.string().min(6, "Password Minimal 6 Karakter "),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  name: z.string().min(3, "Nama Minimal 3 Karater"),
  email: z.string().email("Email Tidak Valid"),
  password: z.string().min(6, "Password Minimal 6 Karakter "),
});


export type RegisterFormValues = z.infer<typeof registerSchema>