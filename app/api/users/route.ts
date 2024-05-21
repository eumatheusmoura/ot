import dbConnect from "@/app/db/db";
import { Usuarios } from "@/app/models/usuarios";

export async function GET() {
  try {
    await dbConnect();
    const usuarios = await Usuarios.find();
    return Response.json(usuarios);
  } catch (error: unknown) {
    return Response.json(error);
  }
}

export async function DELETE(request: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const deleteUser = await Usuarios.deleteOne({ id: id });
    if (!deleteUser) {
      return Response.json({ error: "Usuário não encontrado" });
    }
    return Response.json({ message: "Usuário deletado com sucesso" });
  } catch (error: unknown) {
    return Response.json(error);
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const res = await request.json();

    const {
      id,
      nome,
      sobrenome,
      email,
      endereco,
      data_nascimento,
      data_abertura,
      valor_carteira,
      endereco_carteira,
    } = res;

    if (
      !id ||
      !nome ||
      !sobrenome ||
      !email ||
      !endereco ||
      !data_nascimento ||
      !data_abertura ||
      valor_carteira === undefined ||
      !endereco_carteira
    ) {
      return Response.json({
        error: "Por favor, forneça todos os campos necessários.",
      });
    }

    const novoUsuario = new Usuarios({
      id,
      nome,
      sobrenome,
      email,
      endereco,
      data_nascimento,
      data_abertura,
      valor_carteira,
      endereco_carteira,
    });

    const usuarioSalvo = await novoUsuario.save();
    return Response.json({ message: "Usuário inserido!", usuarioSalvo });
  } catch (error: unknown) {
    return Response.json({
      error: error.message || "Algum erro ocorreu ao salvar o usuário.",
    });
  }
}
