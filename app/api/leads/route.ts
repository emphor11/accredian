import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Use a valid work email."),
  company: z.string().min(2, "Company must be at least 2 characters."),
  teamSize: z.string().min(1, "Select a team size."),
  message: z.string().max(500, "Message must be 500 characters or fewer.").optional()
});

type Lead = z.infer<typeof leadSchema> & {
  createdAt: string;
};

const leads: Lead[] = [];

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const result = leadSchema.safeParse(body);

  if (!result.success) {
    return Response.json(
      {
        success: false,
        errors: result.error.flatten().fieldErrors
      },
      { status: 400 }
    );
  }

  leads.push({
    ...result.data,
    createdAt: new Date().toISOString()
  });

  return Response.json({
    success: true,
    message: "We'll be in touch within 24 hours."
  });
}
