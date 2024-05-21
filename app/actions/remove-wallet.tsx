"use server";

import { revalidatePath } from "next/cache";
const baseUrl = process.env.BASE_URL;

export async function removeUser(itemId: number) {
  try {
    const response = await fetch(`${baseUrl}/api/users?id=${itemId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`erro de HTTP! Status: ${response.status}`);
    }

    const res = await response.json();
    revalidatePath("/");
    return res;
  } catch (error) {
    return `Erro ao remover item: ${error}`;
  }
}
