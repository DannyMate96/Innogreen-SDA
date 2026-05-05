"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { getAllProperties } from "@/lib/properties";
import {
  IoAccessibilityOutline,
  IoCheckmarkCircleOutline,
  IoLocationOutline,
  IoBedOutline,
  IoBusOutline,
  IoStorefrontOutline,
  IoMedkitOutline,
  IoCarOutline,
  IoArrowForwardOutline,
} from "react-icons/io5";
import { TbSmartHome, TbSolarPanel } from "react-icons/tb";

const properties = getAllProperties();

const sdaCategories = [
  {
    icon: IoAccessibilityOutline,
    title: "High Physical Support",
    description:
      "Designed for people who require very high levels of physical support. Features include wider doorways, ceiling hoists, accessible bathrooms, and automated environmental controls.",
  },
  {
    icon: TbSmartHome,
    title: "Smart Technology",
    description:
      "All Innogreen Homes include integrated smart home technology — voice control, automated lighting, security systems, and communication tools for maximum independence.",
  },
  {
    icon: TbSolarPanel,
    title: "Energy Efficient",
    description:
      "Every home features solar panels and energy-efficient design, reducing environmental impact and keeping utility costs low for residents.",
  },
];

const locationFeatures = [
  { icon: IoBusOutline, text: "Close to public transport" },
  { icon: IoStorefrontOutline, text: "Near shopping centres" },
  { icon: IoMedkitOutline, text: "Access to medical facilities" },
  { icon: IoCarOutline, text: "Accessible parking" },
];

export default function SDAContent() {
  return (
    <>
      {/* Compact Intro - Property First */}
      <section className="bg-brand-slate pt-20 pb-12 lg:pt-28 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Our <span className="text-brand-green-light">SDA Properties</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Purpose-built accessible homes in Perth with smart technology, solar panels, and
              energy-efficient design — all funded through the NDIS.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Property Cards Grid */}
      <section className="bg-brand-bg-alt py-16 lg:py-20" aria-labelledby="properties-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="properties-heading" className="sr-only">
            Available Properties
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {properties.map((property, index) => (
              <AnimatedSection key={property.slug} delay={index * 0.1}>
                <Link href={`/sda/${property.slug}`} className="group block">
                  <div className="card-hover flex flex-col overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm sm:flex-row">
                    <div className="relative aspect-[4/3] w-full sm:aspect-auto sm:h-auto sm:w-72 shrink-0">
                      <Image
                        src={property.cardImage}
                        alt={`${property.name} - SDA property in ${property.address}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 288px"
                      />
                      <span className="absolute right-3 top-3 rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-white">
                        {property.status === "available" ? "Available" : property.availability}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="text-lg font-bold text-brand-slate group-hover:text-brand-teal transition-colors">
                        {property.name}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-3 text-sm text-brand-gray">
                        <span className="flex items-center gap-1">
                          <IoLocationOutline className="h-4 w-4 shrink-0" />
                          {property.address}
                        </span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="flex items-center gap-1 rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-semibold text-brand-teal">
                          {property.sdaCategory}
                        </span>
                        <span className="flex items-center gap-1 rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">
                          <IoBedOutline className="h-3 w-3" />
                          {property.bedroomDescription}
                        </span>
                      </div>
                      <ul className="mt-4 flex-1 space-y-1.5">
                        {property.features.slice(0, 3).map((feature) => (
                          <li
                            key={feature.title}
                            className="flex items-start gap-2 text-sm text-brand-gray"
                          >
                            <IoCheckmarkCircleOutline className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                            <span className="line-clamp-1">{feature.title}</span>
                          </li>
                        ))}
                      </ul>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-teal">
                        View Property Details
                        <IoArrowForwardOutline className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What is SDA */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="what-is-sda-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <h2
                id="what-is-sda-heading"
                className="text-3xl font-bold text-brand-slate sm:text-4xl"
              >
                What is SDA?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-brand-gray">
                Specialist Disability Accommodation (SDA) is housing designed for people with
                extreme functional impairment or very high support needs. The NDIS provides funding
                for SDA to eligible participants, covering the cost of purpose-built accessible homes.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-brand-gray">
                Innogreen Homes are purpose-built SDA properties in Perth that go beyond minimum
                requirements. Every home includes integrated smart technology, solar panels, and
                energy-efficient design to promote independent living and reduce ongoing costs.
              </p>
              <div className="mt-8 rounded-lg border border-brand-border bg-brand-bg-alt p-6">
                <h3 className="text-base font-semibold text-brand-slate">NDIS SDA Funding</h3>
                <p className="mt-2 text-sm text-brand-gray">
                  SDA is funded through reasonable and necessary supports in your NDIS plan. If you
                  believe you may be eligible for SDA, speak with your NDIS planner, Local Area
                  Coordinator (LAC), or support coordinator. We can also help guide you through the
                  process.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                {sdaCategories.map((category) => (
                  <div
                    key={category.title}
                    className="card-hover flex gap-4 rounded-xl border border-brand-border bg-brand-bg-alt p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10">
                      <category.icon className="h-6 w-6 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-brand-slate">
                        {category.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                        {category.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What Every Innogreen Home Includes */}
      <section className="bg-brand-bg-alt py-20 lg:py-28" aria-labelledby="includes-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h2 id="includes-heading" className="text-3xl font-bold text-brand-slate sm:text-4xl">
              What Every Innogreen Home Includes
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: TbSmartHome,
                title: "Smart Home Technology",
                desc: "Voice control, automated lighting, smart locks, and environmental controls",
              },
              {
                icon: TbSolarPanel,
                title: "Solar Panels",
                desc: "Reduce energy costs and environmental impact with rooftop solar",
              },
              {
                icon: IoAccessibilityOutline,
                title: "Full Accessibility",
                desc: "Wide doorways, accessible bathrooms, ceiling hoists, and ramps",
              },
            ].map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.08}>
                <div className="card-hover flex gap-4 rounded-xl border border-brand-border bg-white p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-green/10">
                    <feature.icon className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-brand-slate">{feature.title}</h3>
                    <p className="mt-1 text-sm text-brand-gray">{feature.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-brand-slate sm:text-4xl">
              Well-Located Perth Properties
            </h2>
            <p className="mt-4 text-lg text-brand-gray">
              All our SDA properties are situated in accessible, well-connected locations across
              Perth, providing residents with easy access to essential amenities and services.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {locationFeatures.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 rounded-lg bg-brand-bg-alt p-4"
                >
                  <feature.icon className="h-6 w-6 shrink-0 text-brand-teal" />
                  <span className="text-sm font-medium text-brand-slate">{feature.text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Find Your Accessible Home
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Contact us to learn more about available SDA properties and how NDIS funding can
              support your accommodation needs.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-teal transition-all hover:bg-gray-50"
              >
                Enquire Now
              </Link>
              <a
                href="tel:1800123000"
                className="inline-flex min-h-[44px] items-center rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-brand-teal"
              >
                Call 1800 123 000
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
