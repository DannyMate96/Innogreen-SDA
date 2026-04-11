"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import CallToAction from "@/components/CallToAction";
import {
  IoLocationOutline,
  IoBedOutline,
  IoCheckmarkCircleOutline,
  IoHomeOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { TbSmartHome, TbSolarPanel } from "react-icons/tb";

// Update this array to manage current vacancies.
// Set to an empty array [] to show the "no listings" empty state.
const vacancies = [
  {
    name: "Armadale Residence",
    suburb: "Armadale",
    sdaCategory: "High Physical Support",
    bedrooms: 3,
    image: "/images/Armadale.png",
    features: [
      "Smart home assistive technology",
      "Onsite Overnight Assistance (OOA) room",
      "Solar panels — energy cost savings",
      "Step-free level entry & wide doorways",
      "Accessible ensuite in every bedroom",
      "300m from Sherwood Train Station",
    ],
  },
  {
    name: "Butterleaf Retreat",
    suburb: "Baldivis",
    sdaCategory: "High Physical Support",
    bedrooms: 3,
    image: "/images/Baldivis.png",
    features: [
      "Smart home technology included",
      "Onsite Overnight Assistance (OOA) room",
      "Solar panels & energy-efficient design",
      "Furnished kitchen with white goods",
      "Outdoor alfresco & low-maintenance garden",
      "Near Baldivis Shopping Centre",
    ],
  },
  {
    name: "Mangini Apartments Morley",
    suburb: "Morley",
    sdaCategory: "High Physical Support",
    bedrooms: 2,
    image: "/images/Morley.png",
    features: [
      "Smart blinds, CCTV & video intercom",
      "Solar panels with 5% energy discount",
      "Fully furnished with white goods",
      "Free unlimited Wi-Fi",
      "Ceiling hoist provision available",
      "Near Morley Galleria Shopping Centre",
    ],
  },
];

export default function SDAVacanciesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/1.png"
            alt=""
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-slate/90 via-brand-slate/80 to-brand-slate/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <AnimatedSection className="max-w-2xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <IoHomeOutline className="h-8 w-8 text-brand-green-light" />
            </div>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              SDA{" "}
              <span className="text-brand-green-light">Vacancies</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-200">
              Browse our currently available Specialist Disability Accommodation
              properties in Perth — purpose-built with smart technology, solar
              panels, and full NDIS funding support.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?subject=SDA+Enquiry"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand-green px-8 py-3 text-base font-semibold text-white transition-all hover:bg-brand-green-dark"
              >
                Enquire About a Property
              </Link>
              <Link
                href="/sda"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-brand-slate"
              >
                Learn About SDA
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Listings or Empty State */}
      <section
        className="bg-brand-bg-alt py-20 lg:py-28"
        aria-labelledby="vacancies-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h2
              id="vacancies-heading"
              className="text-3xl font-bold text-brand-slate sm:text-4xl"
            >
              Available Properties
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
              All properties are NDIS-approved SDA homes in Perth with smart
              home technology included.
            </p>
          </AnimatedSection>

          {vacancies.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {vacancies.map((property, index) => (
                <AnimatedSection key={property.name} delay={index * 0.1}>
                  <div className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={property.image}
                        alt={`${property.name} — SDA property in ${property.suburb}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <span className="absolute right-3 top-3 rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-white">
                        Available
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-bold text-brand-slate">
                        {property.name}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-3 text-sm text-brand-gray">
                        <span className="flex items-center gap-1.5">
                          <IoLocationOutline className="h-4 w-4 shrink-0" />
                          {property.suburb}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <IoBedOutline className="h-4 w-4 shrink-0" />
                          {property.bedrooms} Bed{property.bedrooms > 1 ? "s" : ""}
                        </span>
                      </div>

                      <span className="mt-3 inline-flex w-fit items-center rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-semibold text-brand-teal">
                        {property.sdaCategory}
                      </span>

                      <ul className="mt-4 flex flex-1 flex-col space-y-2" role="list">
                        {property.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm text-brand-gray"
                          >
                            <IoCheckmarkCircleOutline className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={`/contact?subject=SDA+Enquiry`}
                        className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand-teal px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-teal-dark"
                      >
                        Enquire About This Property
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            /* Empty state */
            <AnimatedSection>
              <div className="mx-auto max-w-md rounded-2xl border border-brand-border bg-white p-10 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-teal/10">
                  <IoSearchOutline className="h-8 w-8 text-brand-teal" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-brand-slate">
                  No listings currently available
                </h3>
                <p className="mt-3 text-base text-brand-gray">
                  We don&apos;t have any SDA vacancies listed right now, but new
                  properties become available regularly. Join our waitlist and
                  we&apos;ll contact you as soon as something suitable opens up.
                </p>
                <Link
                  href="/contact?subject=SDA+Waitlist"
                  className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand-teal px-8 py-3 text-base font-semibold text-white transition-all hover:bg-brand-teal-dark"
                >
                  Join the Waitlist
                </Link>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Feature highlights strip */}
      <section className="bg-white py-16" aria-label="Why Innogreen SDA">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-brand-slate sm:text-3xl">
              Every Innogreen Property Includes
            </h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: TbSmartHome,
                title: "Smart Home Technology",
                desc: "Voice control, automated lighting, smart locks, and assistive environmental controls.",
              },
              {
                icon: TbSolarPanel,
                title: "Solar Panels",
                desc: "Rooftop solar reduces energy costs — some properties include a guaranteed discount.",
              },
              {
                icon: IoHomeOutline,
                title: "OOA Room",
                desc: "Onsite Overnight Assistance room so support workers can stay close when needed.",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="card-hover flex gap-4 rounded-xl border border-brand-border bg-brand-bg-alt p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-green/10">
                    <item.icon className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-brand-slate">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-brand-gray">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
