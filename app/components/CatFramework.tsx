import { Cog, Lightbulb, Settings } from "lucide-react";

const catItems = [
  {
    title: "Concept",
    body: "Foundational knowledge for deep subject understanding.",
    icon: Lightbulb
  },
  {
    title: "Application",
    body: "Practical implementation through real-world scenarios.",
    icon: Cog
  },
  {
    title: "Tools",
    body: "Resources and techniques for effective skill mastery.",
    icon: Settings
  }
];

export function CatFramework() {
  return (
    <section className="bg-[#f4f8ff] py-20">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-950">
            The <span className="text-blue">CAT Framework</span>
          </h2>
          <p className="mt-5 text-2xl font-bold text-gray-600">
            Our Proven Approach to <span className="text-blue">Learning Excellence</span>
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-7xl gap-8 lg:grid-cols-3">
          {catItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`relative mx-auto flex h-80 w-80 flex-col items-center justify-center rounded-full border-[8px] border-blue bg-[#f4f8ff] text-center ${
                  index > 0 ? "lg:-ml-10" : ""
                }`}
              >
                <Icon className="text-blue" size={62} strokeWidth={1.6} />
                <h3 className="mt-8 text-4xl font-extrabold text-black">{item.title}</h3>
                <p className="mt-4 max-w-[230px] text-xl leading-snug text-black">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
