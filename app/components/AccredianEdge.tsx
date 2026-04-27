import { Boxes, ChartNoAxesColumnIncreasing, Goal, Lightbulb, MessageSquareText, RefreshCcw, Settings } from "lucide-react";

const edgeItems = [
  {
    title: "Tailored Solutions",
    body: "Programs customized to your organization's goals and challenges.",
    icon: Lightbulb
  },
  {
    title: "Expert Guidance",
    body: "Learn from industry experts and academic specialists.",
    icon: MessageSquareText
  },
  {
    title: "Innovative Framework",
    body: "Proprietary methods for impactful, application-driven results.",
    icon: RefreshCcw
  },
  {
    title: "Advanced Technology",
    body: "State-of-the-art LMS and learning analytics.",
    icon: Settings
  },
  {
    title: "Diverse Offerings",
    body: "Courses across industries, skill levels, and emerging fields.",
    icon: ChartNoAxesColumnIncreasing
  },
  {
    title: "Proven Impact",
    body: "Trackable learning outcomes for business teams.",
    icon: Goal
  },
  {
    title: "Flexible Delivery",
    body: "Online and offline options tailored to your needs.",
    icon: Boxes
  }
];

export function AccredianEdge() {
  return (
    <section id="accredianEdge" className="overflow-hidden bg-white py-14">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl">
            The <span className="text-blue">Accredian Edge</span>
          </h2>
          <p className="mt-3 text-lg font-bold text-gray-600">
            Key Aspects of <span className="text-blue">Our Strategic Training</span>
          </p>
        </div>

        <div className="hide-scrollbar relative mt-14 overflow-x-auto pb-12">
          <div className="relative mx-auto flex min-w-[1050px] items-center justify-between px-4">
            <div className="absolute left-8 right-8 top-[104px] h-px border-t border-dashed border-gray-300" />
            {edgeItems.map((item, index) => {
              const Icon = item.icon;
              const top = index % 2 === 0;
              return (
                <div key={item.title} className="relative flex w-[140px] flex-col items-center">
                  {top ? (
                    <div className="mb-6 min-h-[100px] text-left">
                      <h3 className="text-base font-extrabold text-black">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-snug text-gray-700">{item.body}</p>
                    </div>
                  ) : (
                    <div className="mb-6 min-h-[100px]" />
                  )}
                  <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border-4 border-blue bg-white shadow-lg shadow-gray-300/60">
                    <div className={`flex h-20 w-20 items-center justify-center rounded-full ${index === 0 ? "bg-cyan" : "bg-blue"} text-white`}>
                      <Icon size={34} strokeWidth={1.8} />
                    </div>
                  </div>
                  {!top ? (
                    <div className="mt-6 min-h-[100px] text-left">
                      <h3 className="text-base font-extrabold text-black">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-snug text-gray-700">{item.body}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
