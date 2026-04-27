import { ChevronRight, Headphones } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="bg-white py-10">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-xl bg-blue px-6 py-10 text-white sm:px-10">
          <div className="absolute -bottom-48 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full border-[54px] border-white/10" />
          <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[auto_1fr_auto]">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg border-4 border-white/40 bg-white text-blue">
              <Headphones size={36} strokeWidth={1.8} />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Want to Learn More About Our Training Solutions?
              </h2>
              <p className="mt-2 text-base font-bold sm:text-lg">
                Get Expert Guidance for Your Team&apos;s Success!
              </p>
            </div>
            <a
              href="#enquire"
              data-enquiry-trigger
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-3.5 text-lg font-bold text-blue transition hover:bg-blue-50"
            >
              Contact Us
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
