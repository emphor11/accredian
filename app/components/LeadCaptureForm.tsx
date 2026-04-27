"use client";

import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

type FieldErrors = Partial<Record<"name" | "email" | "company" | "teamSize" | "message", string>>;

const teamSizes = ["1-10", "11-50", "51-200", "200+"];

export function LeadCaptureForm({
  variant = "section"
}: {
  variant?: "section" | "modal";
}) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const compact = variant === "modal";

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    setErrors({});
    setStatus("");
    setSubmitting(true);

    const form = new FormData(formElement);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      company: String(form.get("company") || ""),
      teamSize: String(form.get("teamSize") || ""),
      message: String(form.get("message") || "")
    };

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    setSubmitting(false);

    if (!response.ok) {
      const nextErrors: FieldErrors = {};
      Object.entries(result.errors || {}).forEach(([field, messages]) => {
        nextErrors[field as keyof FieldErrors] = Array.isArray(messages) ? String(messages[0]) : String(messages);
      });
      setErrors(nextErrors);
      setStatus(Object.keys(nextErrors).length ? "Please fix the highlighted fields." : result.message || "We could not save your request right now.");
      return;
    }

    setStatus(result.message || "We'll be in touch within 24 hours.");
    formElement.reset();
  };

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-5" : "grid gap-5"}>
      <Field label="Name" error={errors.name}>
        <input name="name" placeholder="Enter Name" className={inputClass} />
      </Field>

      <Field label="Work Email" error={errors.email}>
        <input name="email" type="email" placeholder="name@company.com" className={inputClass} />
      </Field>

      <Field label="Company Name" error={errors.company}>
        <input name="company" placeholder="Enter company name" className={inputClass} />
      </Field>

      <Field label="Team Size" error={errors.teamSize}>
        <select name="teamSize" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select team size
          </option>
          {teamSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" error={errors.message}>
        <textarea
          name="message"
          rows={compact ? 3 : 4}
          placeholder="Tell us about your training goals."
          className={`${inputClass} resize-none`}
        />
      </Field>

      {status ? (
        <p className={`text-sm font-bold ${status.startsWith("We'll") ? "text-green-600" : "text-red-500"}`}>
          {status}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-blue px-5 py-3.5 text-base font-extrabold text-white transition hover:bg-[#1f66d6] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? <Loader2 className="animate-spin" size={18} /> : null}
        Submit
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-base font-semibold text-gray-950 placeholder:text-gray-400 focus:border-blue";

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-gray-700">{label}</span>
      {children}
      {error ? <span className="mt-1.5 block text-sm font-bold text-red-500">{error}</span> : null}
    </label>
  );
}
