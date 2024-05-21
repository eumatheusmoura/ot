"use server";
import { User } from "../types";

export async function getUsers(): Promise<User[]> {
  const baseUrl = process.env.BASE_URL;

  try {
    const req = await fetch(`${baseUrl}/api/users`);
    if (!req.ok) {
      throw new Error(`HTTP error! status: ${req.status}`);
    }
    const res: User[] = await req.json();
    return res;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return [];
  }
}
