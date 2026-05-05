"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ImageGallery from "./ImageGallery";
import { PropertyInfo, PropertySpec } from "@/lib/property-types";
import {
  IoArrowBackOutline,
  IoLocationOutline,
  IoBedOutline,
  IoCallOutline,
  IoChevronDownOutline,
  IoCheckmarkCircleOutline,
  IoHomeOutline,
  IoCarOutline,
  IoCalendarOutline,
  IoWaterOutline,
} from "react-icons/io5";
import { TbSmartHome } from "react-icons/tb";

const specIcons: Record<string, string> = {
  door: "🚪",
  corridor: "💎",
  bedroom: "🛏️",
  lightbulb: "💡",
  home: "🏠",
  accessibility: "🚶",
  cooling: "❄️",
  hoist: "♿",
  storage: "📦",
  tech: "💻",
  power: "⚡",
};

function SpecAccordion({ spec, defaultOpen = false }: { spec: PropertySpec; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-brand-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="flex items-center gap-3 text-base font-semibold text-brand-slate">
          <span className="text-lg">{specIcons[spec.icon] || "📋"}</span>
          {spec.title}
        </span>
        <IoChevronDownOutline
          className={`h-5 w-5 shrink-0 text-brand-gray transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="pb-4 pl-10 space-y-2">
          {spec.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-brand-gray">
              <IoCheckmarkCircleOutline className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function PropertyPageTemplate({ property }: { property: PropertyInfo }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Header */}
      <section className="bg-brand-slate py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/sda"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            <IoArrowBackOutline className="h-4 w-4" />
            Back to SDA Properties
          </Link>
          <AnimatedSection>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {property.sdaSuitability.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-brand-teal/20 px-3 py-1 text-xs font-semibold text-brand-teal-light"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {property.name}
            </h1>
            <p className="mt-2 text-lg text-white/60">{property.subtitle}</p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/80">
              <span className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
                <IoLocationOutline className="h-4 w-4" />
                {property.address}
              </span>
              <span className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
                <IoBedOutline className="h-4 w-4" />
                {property.bedroomDescription}
              </span>
              <span className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
                <IoWaterOutline className="h-4 w-4" />
                {property.bathroomDescription}
              </span>
              <span className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
                <IoCarOutline className="h-4 w-4" />
                {property.parkingDescription}
              </span>
              <span className="flex items-center gap-2 rounded-lg bg-brand-green/20 px-3 py-2 font-semibold text-brand-green-light">
                <IoCalendarOutline className="h-4 w-4" />
                {property.availability}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand-green px-8 py-3 text-base font-semibold text-white transition-all hover:bg-brand-green-dark"
              >
                Enquire About This Property
              </Link>
              <a
                href="tel:1800123000"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-white/30 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                <IoCallOutline className="mr-2 h-4 w-4" />
                Call 1800 123 000
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <div className="relative aspect-[21/9]">
            <Image
              src={property.heroImage}
              alt={`${property.name} - SDA property in ${property.address}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {property.gallery.length > 1 && (
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-8">
              <h2 className="text-2xl font-bold text-brand-slate sm:text-3xl">Photo Gallery</h2>
            </AnimatedSection>
            <AnimatedSection>
              <ImageGallery images={property.gallery} columns={property.gallery.length > 6 ? 4 : 3} />
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Property Features */}
      <section className="bg-brand-bg-alt py-16 lg:py-20" aria-labelledby="features-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 text-center">
            <h2 id="features-heading" className="text-2xl font-bold text-brand-slate sm:text-3xl">
              Property Features
            </h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {property.features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.08}>
                <div className="card-hover flex h-full flex-col rounded-xl border border-brand-border bg-white p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal/10">
                    <IoCheckmarkCircleOutline className="h-5 w-5 text-brand-teal" />
                  </div>
                  <h3 className="text-base font-semibold text-brand-slate">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-16 lg:py-20" aria-labelledby="location-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <h2 id="location-heading" className="text-2xl font-bold text-brand-slate sm:text-3xl">
                Location
              </h2>
              <ul className="mt-6 space-y-4">
                {property.locationPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <IoCheckmarkCircleOutline className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                    <span className="text-brand-gray">{point}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-brand-border bg-brand-bg-alt p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal/10">
                    <TbSmartHome className="h-5 w-5 text-brand-teal" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-slate">Included With Every Property</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-brand-gray">
                    <IoCheckmarkCircleOutline className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                    <span>Innogreen Rental Benefits available to all SDA tenants</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-brand-gray">
                    <IoCheckmarkCircleOutline className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                    <span>Smart home assistive technology provided by Innogreen Technologies</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-brand-gray">
                    <IoCheckmarkCircleOutline className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                    <span>Solar panels and energy-efficient design</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Floorplans */}
      {property.floorplans.length > 0 && (
        <section className="bg-brand-bg-alt py-16 lg:py-20" aria-labelledby="floorplan-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-8">
              <h2 id="floorplan-heading" className="text-2xl font-bold text-brand-slate sm:text-3xl">
                Floorplans
              </h2>
              {property.apartmentCount && (
                <p className="mt-2 text-brand-gray">
                  {property.floorplans.length} floorplan{property.floorplans.length > 1 ? "s" : ""} across{" "}
                  {property.apartmentCount} apartments
                </p>
              )}
            </AnimatedSection>
            <AnimatedSection>
              <ImageGallery images={property.floorplans} columns={property.floorplans.length > 3 ? 3 : 2} />
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Property Specifications */}
      <section className="py-16 lg:py-20" aria-labelledby="specs-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 id="specs-heading" className="text-2xl font-bold text-brand-slate sm:text-3xl">
              Property Specification
            </h2>
            <p className="mt-2 text-brand-gray">
              Detailed accessibility and building specifications
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="rounded-2xl border border-brand-border bg-white p-6 sm:p-8">
              {property.specifications.map((spec, index) => (
                <SpecAccordion key={spec.title} spec={spec} defaultOpen={false} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-white/10 mb-6">
              <IoHomeOutline className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Get Started?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              The team is ready to help! Contact us to learn more about this property and how NDIS funding can support your accommodation needs.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-teal transition-all hover:bg-gray-50"
              >
                Contact Us
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
    </div>
  );
}
