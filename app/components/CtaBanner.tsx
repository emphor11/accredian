import { ChevronRight, Headphones } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="bg-white py-16">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-xl bg-blue px-8 py-16 text-white sm:px-14">
          <div className="absolute -bottom-48 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full border-[70px] border-white/10" />
          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
            <div className="flex h-24 w-24 items-center justify-center rounded-xl border-8 border-white/40 bg-white text-blue">
              <Headphones size={54} strokeWidth={1.8} />
            </div>
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight">
                Want to Learn More About Our Training Solutions?
              </h2>
              <p className="mt-4 text-2xl font-bold">
                Get Expert Guidance for Your Team&apos;s Success!
              </p>
            </div>
            <a
              href="#home"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-12 py-5 text-2xl font-bold text-blue transition hover:bg-blue-50"
            >
              Contact Us
              <ChevronRight size={26} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
