import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const personalEmailDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com"];

const leadSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z
    .string()
    .trim()
    .email("Use a valid email address.")
    .refine((email) => {
      const domain = email.split("@")[1]?.toLowerCase();
      return Boolean(domain) && !personalEmailDomains.includes(domain);
    }, "Use a work email, not a personal email."),
  company: z.string().trim().min(1, "Company name is required."),
  teamSize: z.enum(["1-10", "11-50", "51-200", "200+"], {
    errorMap: () => ({ message: "Select a valid team size." })
  }),
  message: z.string().max(500, "Message must be 500 characters or fewer.").optional()
});

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

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return Response.json(
      {
        success: false,
        message: "Supabase credentials are not configured."
      },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });

  const { error } = await supabase.from("leads").insert({
    name: result.data.name,
    email: result.data.email,
    company: result.data.company,
    team_size: result.data.teamSize,
    message: result.data.message || null
  });

  if (error) {
    console.error("Supabase lead insert failed:", error.message);
    return Response.json(
      {
        success: false,
        message: "We could not save your request right now. Please try again."
      },
      { status: 500 }
    );
  }

  return Response.json({
    success: true,
    message: "We'll be in touch within 24 hours."
  });
}
