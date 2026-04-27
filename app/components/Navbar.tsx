"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Stats", href: "#stats", id: "stats" },
  { label: "Clients", href: "#clients", id: "clients" },
  { label: "Accredian Edge", href: "#accredianEdge", id: "accredianEdge" },
  { label: "CAT", href: "#cat", id: "cat" },
  { label: "How It Works", href: "#howItWorks", id: "howItWorks" },
  { label: "FAQs", href: "#faqs", id: "faqs" },
  { label: "Testimonials", href: "#testimonials", id: "testimonials" }
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.2, 0.4] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinkClass = (id: string) =>
    `border-b-2 pb-1 text-sm font-bold transition ${
      activeId === id
        ? "border-blue text-blue"
        : "border-transparent text-black hover:border-blue/40 hover:text-blue"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-[0_2px_10px_rgba(15,23,42,0.1)]">
      <nav className="section-shell flex h-[72px] items-center justify-between gap-6">
        <Link href="#home" className="shrink-0" aria-label="Accredian home">
          <span className="block text-2xl font-extrabold lowercase leading-none tracking-tight text-blue">
            accredian
          </span>
          <span className="block text-[10px] font-medium tracking-[0.24em] text-gray-500">
            credentials that matter
          </span>
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <a key={item.id} href={item.href} className={navLinkClass(item.id)}>
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-900 xl:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className={`${menuOpen ? "block" : "hidden"} border-t border-gray-100 bg-white xl:hidden`}>
        <div className="section-shell grid gap-1 py-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-bold text-gray-900 hover:bg-blue/10 hover:text-blue"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
