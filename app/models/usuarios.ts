// models/User.ts
import mongoose from "mongoose";
import { User as UserType } from "@/app/types/index";

const userSchema = new mongoose.Schema({
  id: Number,
  nome: String,
  sobrenome: String,
  email: String,
  endereco: String,
  data_nascimento: String,
  data_abertura: String,
  valor_carteira: Number,
  endereco_carteira: String,
});

export const Usuarios =
  mongoose.models.usuarios || mongoose.model<UserType>("usuarios", userSchema);
