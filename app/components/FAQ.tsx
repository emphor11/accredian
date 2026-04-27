"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqData = {
  "About the Course": [
    {
      q: "What types of corporate training programs does Accredian offer?",
      a: "Accredian offers customized programs across product, technology, analytics, leadership, AI, operations, and digital transformation."
    },
    {
      q: "What domain specializations are available?",
      a: "Teams can choose from Product & Innovation, Gen-AI, Leadership, Tech & Data, Operations, Digital Enterprise, and Fintech tracks."
    }
  ],
  "About the Delivery": [
    {
      q: "Can programs be delivered for distributed teams?",
      a: "Yes. Programs can be delivered through live online sessions, blended cohorts, workshops, or offline formats based on team needs."
    },
    {
      q: "How are learning outcomes tracked?",
      a: "Cohort progress, participation, assessments, and completion metrics are shared through structured reporting."
    }
  ],
  Miscellaneous: [
    {
      q: "Can Accredian customize the curriculum?",
      a: "Yes. The training plan can be tailored around your organization's goals, learner profiles, and business context."
    },
    {
      q: "How do we get started?",
      a: "Use the Enquire Now button or contact the enterprise team to discuss team size, goals, and preferred delivery model."
    }
  ]
};

const tabs = Object.keys(faqData) as Array<keyof typeof faqData>;

export function FAQ() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("About the Course");
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="bg-white py-14">
      <div className="section-shell">
        <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.03em] text-gray-950 sm:text-5xl">
          Frequently Asked <span className="text-blue">Questions</span>
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[320px_1fr] xl:gap-14">
          <div className="grid content-start gap-5">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  setOpenIndex(0);
                }}
                className={`min-h-[84px] rounded-lg border bg-white px-6 py-5 text-center text-lg font-extrabold shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition ${
                  activeTab === tab
                    ? "border-gray-200 text-blue"
                    : "border-gray-300 text-gray-500 hover:border-blue/30 hover:text-blue"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="pt-1">
            {faqData[activeTab].map((item, index) => {
              const open = openIndex === index;
              return (
                <div key={item.q} className="border-b border-gray-200 py-5 first:pt-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 text-left text-xl font-extrabold leading-tight text-gray-950"
                    aria-expanded={open}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`shrink-0 text-gray-500 transition ${open ? "rotate-180" : ""}`}
                      size={22}
                    />
                  </button>
                  {open ? (
                    <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-gray-500">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              );
            })}

            <a
              href="#enquire"
              data-enquiry-trigger
              className="mx-auto mt-10 flex w-fit rounded-md bg-blue px-9 py-3.5 text-lg font-extrabold text-white shadow-[0_10px_20px_rgba(52,120,229,0.22)] transition hover:bg-[#1f66d6]"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
