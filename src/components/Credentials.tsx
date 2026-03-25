"use client";

import AnimatedSection from "./AnimatedSection";
import {
  IoShieldCheckmarkOutline,
  IoBusinessOutline,
  IoRibbonOutline,
  IoGlobeOutline,
} from "react-icons/io5";

const badges = [
  {
    icon: IoShieldCheckmarkOutline,
    title: "NDIS Registered Provider",
    detail: "Provider No: 4050064987",
  },
  {
    icon: IoBusinessOutline,
    title: "Licensed Real Estate Agency",
    detail: "License No: RA82486",
  },
  {
    icon: IoRibbonOutline,
    title: "REIWA Member",
    detail: "Member No: 562753",
  },
  {
    icon: IoGlobeOutline,
    title: "WA Police Security Agent",
    detail: "Agent No: 72864",
  },
];

export default function Credentials() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="credentials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h2
            id="credentials-heading"
            className="text-3xl font-bold text-brand-slate sm:text-4xl"
          >
            Registered, Licensed &amp; Trusted
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {badges.map((badge, index) => (
            <AnimatedSection key={badge.title} delay={index * 0.1}>
              <div className="card-hover flex flex-col items-center rounded-xl border border-brand-border bg-brand-bg-alt p-6 text-center transition-all">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal/10">
                  <badge.icon className="h-8 w-8 text-brand-teal" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-brand-slate">
                  {badge.title}
                </h3>
                <p className="mt-1 text-xs text-brand-gray-light">
                  {badge.detail}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
