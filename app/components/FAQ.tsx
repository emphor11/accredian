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
    <section id="faqs" className="bg-white py-20">
      <div className="section-shell">
        <h2 className="text-5xl font-extrabold tracking-tight text-gray-950">
          Frequently Asked <span className="text-blue">Questions</span>
        </h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-[340px_1fr]">
          <div className="grid content-start gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  setOpenIndex(0);
                }}
                className={`rounded-lg border bg-white px-8 py-7 text-center text-2xl font-bold shadow-lg shadow-gray-200/50 transition ${
                  activeTab === tab ? "border-gray-200 text-blue" : "border-gray-300 text-gray-500 hover:text-blue"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-10">
            {faqData[activeTab].map((item, index) => {
              const open = openIndex === index;
              return (
                <div key={item.q} className="border-b border-gray-200 pb-8">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 text-left text-2xl font-bold text-gray-950"
                  >
                    {item.q}
                    <ChevronDown className={`shrink-0 text-gray-500 transition ${open ? "rotate-180" : ""}`} size={26} />
                  </button>
                  {open ? <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">{item.a}</p> : null}
                </div>
              );
            })}

            <a
              href="#home"
              className="mx-auto mt-10 flex w-fit rounded-lg bg-blue px-10 py-4 text-xl font-bold text-white shadow-lg shadow-blue/25"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
