"use client";

import AnimatedSection from "./AnimatedSection";
import {
  IoShieldCheckmarkOutline,
  IoRibbonOutline,
  IoHardwareChipOutline,
  IoLayersOutline,
} from "react-icons/io5";

const differentiators = [
  {
    icon: IoShieldCheckmarkOutline,
    title: "NDIS Expertise",
    points: [
      "Registered NDIS provider",
      "Deep understanding of SDA requirements",
      "Experience with NDIS funding processes",
      "Dedicated support for participants",
    ],
  },
  {
    icon: IoRibbonOutline,
    title: "Licensed & Trusted",
    points: [
      "Licensed real estate agency",
      "REIWA member",
      "WA Police licensed security agent",
      "Perth-based local knowledge",
    ],
  },
  {
    icon: IoHardwareChipOutline,
    title: "Technology Leaders",
    points: [
      "Smart home specialists",
      "Low cost AT options",
      "Latest automation solutions",
      "Accessible tech focus",
    ],
  },
  {
    icon: IoLayersOutline,
    title: "Comprehensive Service",
    points: [
      "Property management",
      "Technology installation",
      "Ongoing support",
      "Maintenance included",
    ],
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="bg-brand-bg-alt py-20 lg:py-28"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h2
            id="why-choose-heading"
            className="text-3xl font-bold text-brand-slate sm:text-4xl"
          >
            Why Choose Innogreen?
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1}>
              <div className="card-hover flex h-full flex-col rounded-xl border border-brand-border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-slate">
                  {item.title}
                </h3>
                <ul className="mt-4 flex-1 space-y-2" role="list">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-brand-gray"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
