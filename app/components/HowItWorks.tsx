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
    <section id="howItWorks" className="bg-white py-14">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl">
            How We <span className="text-blue">Deliver Results</span> That Matter?
          </h2>
          <p className="mt-3 text-lg font-bold text-gray-600">
            A Structured Three-Step Approach to <span className="text-blue">Skill Development</span>
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="relative rounded-lg border border-blue/30 bg-[#eef5ff] px-6 py-8 text-center shadow-md shadow-blue/10">
                <div className="absolute -left-1.5 top-14 h-28 w-1.5 rounded-full bg-blue" />
                <div className="absolute -right-1.5 top-14 h-28 w-1.5 rounded-full bg-blue" />
                <div className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border-2 border-blue/25 bg-white text-sm font-extrabold text-gray-950">
                  {index + 1}
                </div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue text-white shadow-md shadow-blue/20">
                  <Icon size={30} strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-gray-950">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm font-semibold leading-6 text-gray-600">{step.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
