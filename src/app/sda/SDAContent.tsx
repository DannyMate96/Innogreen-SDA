"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import {
  IoAccessibilityOutline,
  IoCheckmarkCircleOutline,
  IoLocationOutline,
  IoHomeOutline,
  IoBedOutline,
  IoWifiOutline,
  IoSunnyOutline,
  IoLeafOutline,
  IoCarOutline,
  IoBusOutline,
  IoStorefrontOutline,
  IoMedkitOutline,
} from "react-icons/io5";
import { TbSmartHome, TbSolarPanel } from "react-icons/tb";
import {
  HiOutlineClipboardCheck,
  HiOutlineDocumentText,
  HiOutlineHome,
  HiOutlinePhone,
} from "react-icons/hi";

const properties = [
  {
    name: "Armadale Residence",
    location: "5 Winchester Road, Armadale",
    type: "High Physical Support",
    bedrooms: 3,
    image: "/images/Armadale.png",
    features: [
      "3 accessible bedrooms with ensuites",
      "Onsite Overnight Assistance (OOA) room",
      "Smart home assistive technology",
      "Step-free level entry & wide doorways",
      "Fire sprinklers & slip-resistant flooring",
      "300m from Sherwood Train Station",
    ],
    status: "Available",
    propertyUrl: "https://innogreenhomes.com.au/armadale",
  },
  {
    name: "Butterleaf Retreat",
    location: "48 Butterleaf Road, Baldivis",
    type: "High Physical Support",
    bedrooms: 3,
    image: "/images/Baldivis.png",
    features: [
      "3 accessible bedrooms with ensuites",
      "Onsite Overnight Assistance (OOA) room",
      "Furnished with kitchen & white goods",
      "Step-free access & wide doorways",
      "Outdoor alfresco with low-maintenance garden",
      "Near Baldivis Shopping Centre",
    ],
    status: "Available",
    propertyUrl: "https://innogreenhomes.com.au/Baldivis",
  },
  {
    name: "The Milano Leederville",
    location: "212 Carr Place, Leederville",
    type: "High Physical Support",
    bedrooms: 2,
    image: "/images/Leederville.png",
    features: [
      "Single occupancy accessible living",
      "Ducted AC with zone control",
      "Ceiling hoist provision (250kg)",
      "Concierge service available overnight",
      "200m to Leederville centre",
      "400m to Leederville Train Station",
    ],
    status: "Available",
    propertyUrl: "https://innogreenhomes.com.au/leederville",
  },
  {
    name: "Mangini Apartments Morley",
    location: "1 Mangini St, Morley",
    type: "High Physical Support",
    bedrooms: 2,
    image: "/images/Morley.png",
    features: [
      "8 brand-new SDA apartments",
      "Fully furnished with white goods",
      "Solar panels with 5% energy discount",
      "Smart blinds, CCTV & video intercom",
      "Free unlimited Wi-Fi",
      "Near Morley Galleria Shopping Centre",
    ],
    status: "Available",
    propertyUrl: "https://innogreenhomes.com.au/morley",
  },
];

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

const applicationSteps = [
  {
    icon: HiOutlinePhone,
    step: "1",
    title: "Get In Touch",
    description:
      "Contact us to discuss your SDA needs, NDIS plan, and preferred location. We'll answer all your questions.",
  },
  {
    icon: HiOutlineDocumentText,
    step: "2",
    title: "Eligibility Check",
    description:
      "We help verify your SDA eligibility and work with your NDIS plan manager or support coordinator.",
  },
  {
    icon: HiOutlineHome,
    step: "3",
    title: "Property Viewing",
    description:
      "Visit available properties, explore the smart home features, and find the home that's right for you.",
  },
  {
    icon: HiOutlineClipboardCheck,
    step: "4",
    title: "Move In",
    description:
      "Complete the application, set up your smart home preferences, and move into your new accessible home.",
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
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/community-perth.jpg"
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
              Specialist Disability{" "}
              <span className="text-brand-green-light">Accommodation</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-200">
              Purpose-built accessible homes in Perth with smart technology,
              solar panels, and energy-efficient design — all funded through the
              NDIS.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand-green px-8 py-3 text-base font-semibold text-white transition-all hover:bg-brand-green-dark"
              >
                Enquire About SDA
              </Link>
              <a
                href="tel:1800123000"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-brand-slate"
              >
                Call 1800 123 000
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What is SDA */}
      <section
        className="bg-white py-20 lg:py-28"
        aria-labelledby="what-is-sda-heading"
      >
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
                Specialist Disability Accommodation (SDA) is housing designed
                for people with extreme functional impairment or very high
                support needs. The NDIS provides funding for SDA to eligible
                participants, covering the cost of purpose-built accessible
                homes.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-brand-gray">
                Innogreen Homes are purpose-built SDA properties in Perth that
                go beyond minimum requirements. Every home includes integrated
                smart technology, solar panels, and energy-efficient design to
                promote independent living and reduce ongoing costs.
              </p>
              <div className="mt-8 rounded-lg border border-brand-border bg-brand-bg-alt p-6">
                <h3 className="text-base font-semibold text-brand-slate">
                  NDIS SDA Funding
                </h3>
                <p className="mt-2 text-sm text-brand-gray">
                  SDA is funded through reasonable and necessary supports in
                  your NDIS plan. If you believe you may be eligible for SDA,
                  speak with your NDIS planner, Local Area Coordinator (LAC), or
                  support coordinator. We can also help guide you through the
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

      {/* Available Properties */}
      <section
        className="bg-brand-bg-alt py-20 lg:py-28"
        aria-labelledby="properties-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h2
              id="properties-heading"
              className="text-3xl font-bold text-brand-slate sm:text-4xl"
            >
              Available Properties
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
              Explore our current SDA properties in Perth
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {properties.map((property, index) => (
              <AnimatedSection key={property.name} delay={index * 0.1}>
                <div className="card-hover flex h-full flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-brand-border bg-white shadow-sm">
                  {/* Property image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={property.image}
                      alt={`${property.name} - SDA property in ${property.location}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <span
                      className={`absolute right-2 top-2 sm:right-3 sm:top-3 rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold ${
                        property.status === "Available"
                          ? "bg-brand-green text-white"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {property.status}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-3 sm:p-5">
                    <h3 className="text-sm sm:text-lg font-bold text-brand-slate line-clamp-2">
                      {property.name}
                    </h3>

                    <div className="mt-2 sm:mt-3 flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-3 text-xs sm:text-sm text-brand-gray">
                      <span className="flex items-center gap-1">
                        <IoLocationOutline className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                        <span className="line-clamp-1">{property.location}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <IoBedOutline className="h-3 w-3 sm:h-4 sm:w-4" />
                        {property.bedrooms} Bed{property.bedrooms > 1 ? "s" : ""}
                      </span>
                    </div>

                    <span className="mt-2 sm:mt-3 inline-flex w-fit items-center rounded-full bg-brand-teal/10 px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold text-brand-teal">
                      {property.type}
                    </span>

                    {/* Features - hidden on mobile, visible on sm+ */}
                    <ul className="mt-3 hidden sm:flex flex-1 flex-col space-y-1.5" role="list">
                      {property.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-xs text-brand-gray"
                        >
                          <IoCheckmarkCircleOutline className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={property.propertyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 sm:mt-4 inline-flex min-h-[36px] sm:min-h-[44px] items-center justify-center rounded-lg bg-brand-teal px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-brand-teal-dark"
                    >
                      Find Out More
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Property Features */}
      <section
        className="bg-white py-20 lg:py-28"
        aria-labelledby="features-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h2
              id="features-heading"
              className="text-3xl font-bold text-brand-slate sm:text-4xl"
            >
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
                icon: IoLeafOutline,
                title: "Energy Efficient Design",
                desc: "Built with sustainable materials and energy-efficient systems",
              },
              {
                icon: IoAccessibilityOutline,
                title: "Full Accessibility",
                desc: "Wide doorways, accessible bathrooms, ceiling hoists, and ramps",
              },
              {
                icon: IoWifiOutline,
                title: "Connected Living",
                desc: "High-speed internet ready, SCC technology, and video calling",
              },
              {
                icon: IoSunnyOutline,
                title: "Natural Light & Space",
                desc: "Open floor plans with abundant natural light and outdoor areas",
              },
            ].map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.08}>
                <div className="card-hover flex gap-4 rounded-xl border border-brand-border bg-brand-bg-alt p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-green/10">
                    <feature.icon className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-brand-slate">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-brand-gray">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="bg-brand-bg-alt py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-brand-slate sm:text-4xl">
                Well-Located Perth Properties
              </h2>
              <p className="mt-4 text-lg text-brand-gray">
                All our SDA properties are situated in accessible, well-connected
                locations across Perth, providing residents with easy access to
                essential amenities and services.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {locationFeatures.map((feature) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-3 rounded-lg bg-white p-4"
                  >
                    <feature.icon className="h-6 w-6 shrink-0 text-brand-teal" />
                    <span className="text-sm font-medium text-brand-slate">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl bg-white p-8">
                <h3 className="text-xl font-bold text-brand-slate">
                  Application Process
                </h3>
                <div className="mt-6 space-y-6">
                  {applicationSteps.map((step) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-teal text-sm font-bold text-white">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-brand-slate">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-sm text-brand-gray">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
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
              Contact us to learn more about available SDA properties and how
              NDIS funding can support your accommodation needs.
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
