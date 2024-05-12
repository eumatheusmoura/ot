import data from "../../db/data.json";

export async function GET() {
  try {
    return Response.json(data);
  } catch (error) {
    return Response.json(error);
  }
}
