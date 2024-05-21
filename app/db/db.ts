import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("A variável MONGODB_URI não está definida.");
  throw new Error(
    "Por favor, defina a variável MONGODB_URI dentro de .env.local"
  );
}

let cachedConnection: mongoose.Connection | null = null;

async function dbConnect(): Promise<mongoose.Connection> {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    const conn = await mongoose.connect(MONGODB_URI);
    cachedConnection = conn.connection;
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
    return cachedConnection;
  } catch (error: any) {
    // Aqui você poderia definir um tipo mais específico se soubesse qual tipo de erro esperar
    console.error("Falha ao conectar com o banco de dados:", error.message);
    throw new Error("Falha na conexão com o banco de dados.");
  }
}

export default dbConnect;
