"use server";
import { UserResponse } from "../types";

export async function getUsers(): Promise<UserResponse[]> {
  const baseUrl = process.env.BASE_URL;

  try {
    const req = await fetch(`${baseUrl}/api/users`);
    if (!req.ok) {
      throw new Error(`HTTP error! status: ${req.status}`);
    }
    const res: UserResponse[] = await req.json();
    return res;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return [];
  }
}
