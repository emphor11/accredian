import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const badges = ["Tailored Solutions", "Industry Insights", "Expert Guidance"];

export function Hero() {
  return (
    <section id="home" className="bg-white pb-10 pt-[104px]">
      <div className="section-shell">
        <div className="soft-card grid min-h-[430px] overflow-hidden rounded-2xl bg-[#eef5ff] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14">
            <h1 className="max-w-2xl text-[clamp(2.45rem,4.2vw,4.4rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-black">
              Next-Gen <span className="text-blue">Expertise</span>
              <br />
              For Your <span className="text-blue">Enterprise</span>
            </h1>
            <p className="mt-8 max-w-md text-[clamp(1.1rem,1.55vw,1.45rem)] font-bold leading-snug text-black">
              Cultivate high-performance teams through expert learning.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
              {badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm font-bold text-black">
                  <CheckCircle2 className="text-green-500" size={20} />
                  {badge}
                </div>
              ))}
            </div>
            <a
              href="#enquire"
              data-enquiry-trigger
              className="mt-8 inline-flex w-fit rounded-md bg-blue px-7 py-3 text-base font-bold text-white shadow-md shadow-blue/20 transition hover:bg-[#1f66d6]"
            >
              Enquire Now
            </a>
          </div>
          <div className="relative min-h-[340px]">
            <Image
              src="/images/enterprise-hero.png"
              alt="Two enterprise professionals representing Accredian training solutions"
              fill
              priority
              className="object-contain object-bottom"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
