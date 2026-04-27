import { programs } from "@/app/data/programs";

export async function GET() {
  return Response.json(programs);
}
