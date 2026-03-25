"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { TbSmartHome, TbSolarPanel } from "react-icons/tb";
import {
  IoAccessibilityOutline,
  IoLocationOutline,
  IoPeopleOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

const features = [
  { icon: TbSmartHome, label: "Smart home technology included" },
  { icon: TbSolarPanel, label: "Solar panels & energy efficient" },
  { icon: IoAccessibilityOutline, label: "Accessible design (High Physical Support)" },
  { icon: IoLocationOutline, label: "Well-located Perth areas" },
  { icon: IoPeopleOutline, label: "Single, two and three resident options" },
  { icon: IoCheckmarkCircleOutline, label: "NDIS SDA funding accepted" },
];

export default function InnoGreenHomes() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      aria-labelledby="innogreen-homes-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/accessible-home.jpg"
          alt=""
          fill
          className="object-cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/90 to-brand-green/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2
            id="innogreen-homes-heading"
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            Introducing Innogreen Homes
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
            Through our Innogreen Homes brand, we offer Specialist Disability
            Accommodation (SDA) to NDIS Participants with all homes including
            smart home tech to promote independent living, with solar panels and
            an energy efficient design.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex flex-col items-center gap-3 rounded-xl bg-white/15 p-6 backdrop-blur-sm"
              >
                <feature.icon className="h-8 w-8 text-white" />
                <span className="text-sm font-medium text-white">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <Link
            href="/sda"
            className="mt-10 inline-flex min-h-[44px] items-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-teal shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
          >
            Explore Innogreen Homes &rarr;
          </Link>
          <p className="mt-4 text-sm text-white/70">
            Innogreen Homes is a licensed real estate agency (RA82486) and REIWA
            member
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
