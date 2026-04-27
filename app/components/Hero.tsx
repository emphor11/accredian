import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const badges = ["Tailored Solutions", "Industry Insights", "Expert Guidance"];

export function Hero() {
  return (
    <section id="home" className="bg-white pb-16 pt-[126px]">
      <div className="section-shell">
        <div className="soft-card grid min-h-[520px] overflow-hidden rounded-[28px] bg-[#eef5ff] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center px-8 py-12 sm:px-14 lg:px-20">
            <h1 className="max-w-3xl text-[clamp(3rem,5.2vw,5.7rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-black">
              Next-Gen <span className="text-blue">Expertise</span>
              <br />
              For Your <span className="text-blue">Enterprise</span>
            </h1>
            <p className="mt-12 max-w-lg text-[clamp(1.35rem,2vw,2rem)] font-bold leading-snug text-black">
              Cultivate high-performance teams through expert learning.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4">
              {badges.map((badge) => (
                <div key={badge} className="flex items-center gap-3 text-lg font-bold text-black">
                  <CheckCircle2 className="text-green-500" size={28} />
                  {badge}
                </div>
              ))}
            </div>
            <a
              href="#faqs"
              className="mt-12 inline-flex w-fit rounded-lg bg-blue px-9 py-4 text-xl font-bold text-white shadow-lg shadow-blue/25 transition hover:bg-[#1f66d6]"
            >
              Enquire Now
            </a>
          </div>
          <div className="relative min-h-[430px]">
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
