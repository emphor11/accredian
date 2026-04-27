import { LeadCaptureForm } from "./LeadCaptureForm";

export function LeadFormSection() {
  return (
    <section id="lead-form" className="bg-white py-14">
      <div className="section-shell">
        <div className="grid gap-8 rounded-2xl border border-gray-200 bg-[#f8fbff] p-6 shadow-[0_12px_32px_rgba(15,23,42,0.06)] lg:grid-cols-[0.85fr_1fr] lg:p-8">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue">
              Enquire Now
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              Build a custom enterprise training plan.
            </h2>
            <p className="mt-4 max-w-md text-base font-medium leading-7 text-gray-600">
              Share your team details and Accredian&apos;s enterprise team will
              get back within 24 hours.
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <LeadCaptureForm />
          </div>
        </div>
      </div>
    </section>
  );
}
