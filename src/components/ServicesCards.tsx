"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { TbSmartHome } from "react-icons/tb";
import { IoAccessibilityOutline } from "react-icons/io5";
import {
  HiOutlineMicrophone,
  HiOutlineShieldCheck,
  HiOutlineCog,
  HiOutlineDeviceMobile,
  HiOutlineSun,
  HiOutlineHome,
  HiOutlineLocationMarker,
  HiOutlineUsers,
} from "react-icons/hi";

const services = [
  {
    icon: TbSmartHome,
    title: "Smart Homes",
    description:
      "We supply, install & integrate easy-to-use smart homes, tailored for you and your existing devices",
    image: "/images/smart-home-voice.jpg",
    features: [
      { icon: HiOutlineMicrophone, text: "Voice-controlled home automation" },
      { icon: HiOutlineCog, text: "Environmental Control Units (ECU)" },
      { icon: HiOutlineShieldCheck, text: "Security and safety systems" },
      { icon: HiOutlineDeviceMobile, text: "Integration with existing devices" },
      { icon: HiOutlineCog, text: "24/7 support and monitoring" },
    ],
    cta: "Find out more",
    href: "/smart-homes",
    accent: "brand-teal",
  },
  {
    icon: IoAccessibilityOutline,
    title: "Specialist Disability Accommodation (SDA)",
    description:
      "Specialist Disability Accommodation (SDA) through our Innogreen Homes brand",
    image: "/images/modern-living.jpg",
    features: [
      { icon: HiOutlineHome, text: "Purpose-built accessible design" },
      { icon: TbSmartHome, text: "Smart home tech included" },
      { icon: HiOutlineSun, text: "Solar panels & energy efficient" },
      { icon: HiOutlineUsers, text: "Single and two-resident options" },
      { icon: HiOutlineLocationMarker, text: "Well-located Perth areas" },
    ],
    cta: "SDA Available Now",
    href: "/sda",
    accent: "brand-green",
  },
];

export default function ServicesCards() {
  return (
    <section
      className="bg-brand-bg-alt py-20 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h2
            id="services-heading"
            className="text-3xl font-bold text-brand-slate sm:text-4xl"
          >
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
            Two specialised service lines dedicated to accessibility,
            independence, and quality of life
          </p>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.15}>
              <div className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                    service.accent === "brand-teal"
                      ? "bg-brand-teal/10 text-brand-teal"
                      : "bg-brand-green/10 text-brand-green"
                  }`}
                >
                  <service.icon className="h-7 w-7" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-brand-slate">
                  {service.title}
                </h3>
                <p className="mt-3 text-base text-brand-gray">
                  {service.description}
                </p>

                <ul className="mt-6 flex-1 space-y-3" role="list">
                  {service.features.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-start gap-3 text-sm text-brand-gray"
                    >
                      <feature.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className={`mt-8 inline-flex min-h-[44px] items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-all ${
                    service.accent === "brand-teal"
                      ? "bg-brand-teal text-white hover:bg-brand-teal-dark"
                      : "bg-brand-green text-white hover:bg-brand-green-dark"
                  }`}
                >
                  {service.cta}
                </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
