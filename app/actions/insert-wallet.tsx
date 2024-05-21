"use server";

import { revalidatePath } from "next/cache";
import { User } from "../types";
const baseUrl = process.env.BASE_URL;

export async function insertWallet(data: User) {
  try {
    const response = await fetch(`${baseUrl}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`erro de HTTP! Status: ${response.status}`);
    }

    const res = await response.json();
    revalidatePath("/");
    return res;
  } catch (error) {
    return `Erro ao inserir item: ${error}`;
  }
}
