"use server";
import { User } from "../types";

export async function updateUser(
  userId: number,
  userData: Partial<User>
): Promise<User[]> {
  const baseUrl = process.env.BASE_URL;

  try {
    const req = await fetch(`${baseUrl}/api/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!req.ok) {
      throw new Error(`HTTP error! status: ${req.status}`);
    }

    const res: User[] = await req.json();
    return res;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    return [];
  }
}
