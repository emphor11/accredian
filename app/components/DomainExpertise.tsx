import { Brain, CircleDollarSign, Globe2, Lightbulb, Settings, TrendingUp, UsersRound } from "lucide-react";

const domains = [
  { title: "Product & Innovation Hub", icon: Lightbulb },
  { title: "Gen-AI Mastery", icon: Brain },
  { title: "Leadership Elevation", icon: UsersRound },
  { title: "Tech & Data Insights", icon: TrendingUp },
  { title: "Operations Excellence", icon: Settings },
  { title: "Digital Enterprise", icon: Globe2 },
  { title: "Fintech Innovation Lab", icon: CircleDollarSign }
];

export function DomainExpertise() {
  return (
    <section id="cat" className="bg-white py-14">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl">
            Our <span className="text-blue">Domain Expertise</span>
          </h2>
          <p className="mt-3 text-lg font-bold text-gray-600">
            <span className="text-blue">Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            const centered = index === domains.length - 1;
            return (
              <article
                key={domain.title}
                className={`soft-card rounded-lg border border-gray-200 bg-white px-6 py-6 text-center ${
                  centered ? "lg:col-start-2" : ""
                }`}
              >
                <Icon className="mx-auto text-blue" size={42} strokeWidth={1.8} />
                <h3 className="mt-4 text-lg font-extrabold text-gray-950">{domain.title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
