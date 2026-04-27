import { ChartNoAxesColumnIncreasing, MonitorPlay, Presentation } from "lucide-react";

const steps = [
  {
    title: "Skill Gap Analysis",
    body: "Assess team skill gaps and developmental needs.",
    icon: ChartNoAxesColumnIncreasing
  },
  {
    title: "Customized Training Plan",
    body: "Create a tailored roadmap addressing organizational goals.",
    icon: Presentation
  },
  {
    title: "Flexible Program Delivery",
    body: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: MonitorPlay
  }
];

export function HowItWorks() {
  return (
    <section id="howItWorks" className="bg-white py-20">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-950">
            How We <span className="text-blue">Deliver Results</span> That Matter?
          </h2>
          <p className="mt-5 text-2xl font-bold text-gray-600">
            A Structured Three-Step Approach to <span className="text-blue">Skill Development</span>
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="relative rounded-xl border-2 border-blue/35 bg-[#eef5ff] px-8 py-10 text-center shadow-lg shadow-blue/10">
                <div className="absolute -left-3 top-16 h-40 w-3 rounded-full bg-blue" />
                <div className="absolute -right-3 top-16 h-40 w-3 rounded-full bg-blue" />
                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border-4 border-blue/25 bg-white text-xl font-extrabold text-gray-950">
                  {index + 1}
                </div>
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue text-white shadow-lg shadow-blue/25">
                  <Icon size={42} strokeWidth={1.8} />
                </div>
                <h3 className="mt-8 text-2xl font-extrabold text-gray-950">{step.title}</h3>
                <p className="mx-auto mt-5 max-w-xs text-lg font-semibold leading-snug text-gray-600">{step.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
