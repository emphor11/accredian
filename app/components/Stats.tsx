"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 10,
    suffix: "K+",
    label: "Professionals Trained For Exceptional Career Success"
  },
  {
    value: 200,
    suffix: "+",
    label: "Sessions Delivered With Unmatched Learning Excellence"
  },
  {
    value: 5,
    suffix: "K+",
    label: "Active Learners Engaged In Dynamic Courses"
  }
];

function useCounter(target: number) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / 1000, 1);
      setCount(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return { count, ref };
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value);

  return (
    <div ref={ref} className="relative flex flex-col items-center px-8 text-center">
      <div className="rounded-full bg-[#dceafe] px-8 py-4 text-4xl font-extrabold text-blue">
        {count}
        {suffix}
      </div>
      <p className="mt-7 max-w-sm text-xl font-bold leading-snug text-black">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section id="stats" className="bg-white py-20">
      <div className="section-shell">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-950">
            Our <span className="text-blue">Track Record</span>
          </h2>
          <p className="mt-5 text-2xl font-bold text-gray-600">
            The Numbers Behind <span className="text-blue">Our Success</span>
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3 md:divide-x md:divide-gray-200">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
