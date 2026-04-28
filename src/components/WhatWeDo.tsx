"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import {
  IoShieldCheckmarkOutline,
  IoBusinessOutline,
  IoRibbonOutline,
  IoGlobeOutline,
} from "react-icons/io5";

const credentials = [
  {
    icon: IoShieldCheckmarkOutline,
    title: "NDIS Registered Provider",
  },
  {
    icon: IoBusinessOutline,
    title: "Licensed Real Estate Agency",
  },
  {
    icon: IoRibbonOutline,
    title: "REIWA Member",
  },
  {
    icon: IoGlobeOutline,
    title: "WA Police Security Agent",
  },
];

export default function WhatWeDo() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="what-we-do-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <AnimatedSection>
            <h2
              id="what-we-do-heading"
              className="text-3xl font-bold text-brand-slate sm:text-4xl"
            >
              What We Do
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-gray">
              Based in Perth, Innogreen offers smart, secure and accessible
              homes. We are a licensed property management agency and registered
              NDIS provider, specialising in the delivery and support of Smart
              Home and ECU (Environmental Control Units) technology.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-brand-gray">
              Our goal is to help all Australians, including people with
              disabilities and seniors, to live in safe and accessible homes
              using innovative home automation for independence and safety at
              home.
            </p>
          </AnimatedSection>

          {/* Right: Image + Credentials */}
          <AnimatedSection delay={0.2}>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/Web Image 6.png"
                alt="Smart lock being controlled via smartphone app"
                width={600}
                height={340}
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {credentials.map((cred) => (
                <div
                  key={cred.title}
                  className="card-hover rounded-xl border border-brand-border bg-brand-bg-alt p-5"
                >
                  <cred.icon className="h-7 w-7 text-brand-teal" />
                  <h3 className="mt-2 text-sm font-semibold text-brand-slate">
                    {cred.title}
                  </h3>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
