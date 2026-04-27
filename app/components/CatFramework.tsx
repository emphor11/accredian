import { ArrowRight, Cog, Lightbulb, Settings } from "lucide-react";

const catItems = [
  {
    step: "01",
    title: "Concept",
    body: "Foundational knowledge for deep subject understanding.",
    icon: Lightbulb
  },
  {
    step: "02",
    title: "Application",
    body: "Practical implementation through real-world scenarios.",
    icon: Cog
  },
  {
    step: "03",
    title: "Tools",
    body: "Resources and techniques for effective skill mastery.",
    icon: Settings
  }
];

export function CatFramework() {
  return (
    <section className="bg-[#f4f8ff] py-14">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl">
            The <span className="text-blue">CAT Framework</span>
          </h2>
          <p className="mt-3 text-lg font-bold text-gray-600">
            Our Proven Approach to <span className="text-blue">Learning Excellence</span>
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-5xl rounded-2xl border border-blue/15 bg-white px-5 py-6 shadow-[0_14px_40px_rgba(52,120,229,0.1)] sm:px-6 lg:px-8">
          <div className="absolute left-[15%] right-[15%] top-[86px] hidden h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent lg:block" />
          <div className="grid gap-4 lg:grid-cols-3">
          {catItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="relative rounded-xl border border-gray-200 bg-[#f8fbff] p-6 text-center transition hover:-translate-y-0.5 hover:border-blue/40 hover:shadow-lg hover:shadow-blue/10">
                {index < catItems.length - 1 ? (
                  <div className="absolute -right-4 top-[60px] z-10 hidden h-8 w-8 items-center justify-center rounded-full border border-blue/20 bg-white text-blue shadow-sm lg:flex">
                    <ArrowRight size={16} />
                  </div>
                ) : null}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-blue text-white shadow-md shadow-blue/20">
                  <Icon size={32} strokeWidth={1.8} />
                </div>
                <div className="mx-auto mt-4 w-fit rounded-full bg-blue/10 px-3 py-1 text-xs font-extrabold tracking-wide text-blue">
                  {item.step}
                </div>
                <h3 className="mt-3 text-2xl font-extrabold text-gray-950">{item.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-base font-medium leading-7 text-gray-600">{item.body}</p>
              </article>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
