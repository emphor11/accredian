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
    <section id="accredianEdge" className="overflow-hidden bg-white py-20">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-950">
            The <span className="text-blue">Accredian Edge</span>
          </h2>
          <p className="mt-5 text-2xl font-bold text-gray-600">
            Key Aspects of <span className="text-blue">Our Strategic Training</span>
          </p>
        </div>

        <div className="hide-scrollbar relative mt-24 overflow-x-auto pb-20">
          <div className="relative mx-auto flex min-w-[1280px] items-center justify-between px-6">
            <div className="absolute left-10 right-10 top-[132px] h-[2px] border-t-2 border-dashed border-gray-300" />
            {edgeItems.map((item, index) => {
              const Icon = item.icon;
              const top = index % 2 === 0;
              return (
                <div key={item.title} className="relative flex w-[172px] flex-col items-center">
                  {top ? (
                    <div className="mb-8 min-h-[130px] text-left">
                      <h3 className="text-xl font-extrabold text-black">{item.title}</h3>
                      <p className="mt-2 text-lg leading-snug text-black">{item.body}</p>
                    </div>
                  ) : (
                    <div className="mb-8 min-h-[130px]" />
                  )}
                  <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full border-[5px] border-blue bg-white shadow-xl">
                    <div className={`flex h-24 w-24 items-center justify-center rounded-full ${index === 0 ? "bg-cyan" : "bg-blue"} text-white`}>
                      <Icon size={44} strokeWidth={1.8} />
                    </div>
                  </div>
                  {!top ? (
                    <div className="mt-8 min-h-[130px] text-left">
                      <h3 className="text-xl font-extrabold text-black">{item.title}</h3>
                      <p className="mt-2 text-lg leading-snug text-black">{item.body}</p>
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
