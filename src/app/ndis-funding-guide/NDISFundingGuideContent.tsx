"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CallToAction from "@/components/CallToAction";
import {
  IoHomeOutline,
  IoCheckmarkCircleOutline,
  IoInformationCircleOutline,
  IoArrowForwardOutline,
} from "react-icons/io5";
import { TbSmartHome, TbCoin, TbWheelchair, TbHome } from "react-icons/tb";

const fundingCategories = [
  {
    icon: TbCoin,
    color: "brand-teal",
    label: "Capital Supports",
    anchor: "capital-supports",
    summary:
      "One-off or periodic funding for higher-cost items that last a long time — including assistive technology and home modifications.",
  },
  {
    icon: TbSmartHome,
    color: "brand-green",
    label: "Assistive Technology",
    anchor: "assistive-technology",
    summary:
      "Devices and equipment that help you complete daily tasks — from simple aids to complex smart home systems.",
  },
  {
    icon: IoHomeOutline,
    color: "brand-teal",
    label: "Home Modifications",
    anchor: "home-modifications",
    summary:
      "Structural changes to your home that improve access, safety, and independence.",
  },
  {
    icon: TbHome,
    color: "brand-green",
    label: "Specialist Disability Accommodation",
    anchor: "sda",
    summary:
      "Funding for purpose-built housing for people with extreme functional impairment or very high support needs.",
  },
];

const atExamples = [
  { category: "Low cost (< $1,500)", examples: "Grab rails, shower chairs, walking frames, communication aids" },
  { category: "Mid cost ($1,500–$15,000)", examples: "Powered wheelchairs, home monitoring systems, smart home hubs, voice-control devices" },
  { category: "High cost (> $15,000)", examples: "Complex power wheelchairs, ceiling hoists, environmental control systems" },
];

const modificationExamples = [
  "Ramps and step-free access",
  "Widened doorways for wheelchair access",
  "Accessible bathroom — roll-in shower, grab rails, raised toilet",
  "Lever door handles and tapware",
  "Stair lifts or platform lifts",
  "Kitchen bench lowering or adjustable benchtops",
  "Smart home automation (lights, locks, blinds) where clinically justified",
];

const sdaDesignCategories = [
  {
    name: "High Physical Support",
    desc: "For people with significant physical impairment requiring ceiling hoists, wider corridors, and robust assistive technology. All Innogreen properties are High Physical Support.",
  },
  {
    name: "Robust",
    desc: "For people who may exhibit behaviours of concern — reinforced construction, reduced fire hazards, and secure outdoor areas.",
  },
  {
    name: "Improved Liveability",
    desc: "For people with sensory, cognitive, or intellectual impairment — improved lighting, better way-finding, and lower-stimulus design.",
  },
  {
    name: "Fully Accessible",
    desc: "For people with significant physical impairment who do not need ceiling hoists — full wheelchair access throughout the home.",
  },
];

export default function NDISFundingGuideContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-bg-alt to-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-teal/10">
              <TbCoin className="h-8 w-8 text-brand-teal" />
            </div>
            <h1 className="text-4xl font-extrabold text-brand-slate sm:text-5xl">
              NDIS <span className="gradient-text">Funding Guide</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-brand-gray">
              A plain-language guide to NDIS Capital Supports — what&apos;s
              covered, how to access it, and how Innogreen can help you make the
              most of your plan.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick navigation */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="mb-8 text-center text-2xl font-bold text-brand-slate">
              What&apos;s in this guide
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {fundingCategories.map((cat, index) => (
                <a
                  key={cat.label}
                  href={`#${cat.anchor}`}
                  className="card-hover flex flex-col gap-3 rounded-xl border border-brand-border bg-brand-bg-alt p-5 transition-colors hover:border-brand-teal"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal/10">
                    <cat.icon className="h-5 w-5 text-brand-teal" />
                  </div>
                  <h3 className="text-sm font-semibold text-brand-slate">{cat.label}</h3>
                  <p className="text-xs leading-relaxed text-brand-gray">{cat.summary}</p>
                  <span className="mt-auto flex items-center gap-1 text-xs font-semibold text-brand-teal">
                    Read more <IoArrowForwardOutline className="h-3 w-3" />
                  </span>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capital Supports */}
      <section id="capital-supports" className="scroll-mt-24 bg-brand-bg-alt py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal/10">
              <TbCoin className="h-6 w-6 text-brand-teal" />
            </div>
            <h2 className="text-3xl font-bold text-brand-slate sm:text-4xl">
              Capital Supports
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-gray">
              Capital Supports is the NDIS budget category that funds higher-cost
              items with a long useful life. Unlike Core Supports (day-to-day
              assistance) or Capacity Building, Capital Supports covers equipment
              and housing that you don&apos;t replace frequently.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              Capital Supports has two sub-categories relevant to most
              participants: <strong>Assistive Technology</strong> and{" "}
              <strong>Home Modifications</strong>. A third type —{" "}
              <strong>Specialist Disability Accommodation</strong> — is a
              separate funding stream for eligible participants who need
              purpose-built housing.
            </p>
            <div className="mt-8 rounded-xl border border-brand-teal/30 bg-brand-teal/5 p-5">
              <div className="flex gap-3">
                <IoInformationCircleOutline className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                <p className="text-sm leading-relaxed text-brand-slate">
                  Capital Supports funding is generally <strong>not flexible</strong> —
                  it must be used for the specific items quoted and approved in your NDIS plan.
                  Work with your Support Coordinator or OT to ensure items are justified in
                  your plan before purchasing.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Assistive Technology */}
      <section id="assistive-technology" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10">
              <TbSmartHome className="h-6 w-6 text-brand-green" />
            </div>
            <h2 className="text-3xl font-bold text-brand-slate sm:text-4xl">
              Assistive Technology
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-gray">
              Assistive Technology (AT) covers equipment that compensates for
              functional limitations — helping you do things more safely and
              independently. Smart home technology is increasingly funded as AT
              when it provides a clear functional benefit.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-brand-slate">
              Cost tiers
            </h3>
            <div className="mt-4 overflow-hidden rounded-xl border border-brand-border">
              {atExamples.map((tier, i) => (
                <div
                  key={tier.category}
                  className={`flex flex-col gap-1 p-4 sm:flex-row sm:items-start sm:gap-6 ${
                    i < atExamples.length - 1 ? "border-b border-brand-border" : ""
                  }`}
                >
                  <span className="min-w-[180px] text-sm font-semibold text-brand-slate">
                    {tier.category}
                  </span>
                  <span className="text-sm text-brand-gray">{tier.examples}</span>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-semibold text-brand-slate">
              Smart home technology as AT
            </h3>
            <p className="mt-3 text-base leading-relaxed text-brand-gray">
              Smart home systems — voice control, automated lighting, smart
              locks, motorised blinds, and environmental controls — can be
              funded through AT when your OT justifies them in a functional
              capacity assessment. All Innogreen SDA properties come with smart
              home technology built in, reducing what participants need to fund
              themselves.
            </p>
            <div className="mt-6">
              <Link
                href="/smart-homes"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-green px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-green-dark"
              >
                <TbSmartHome className="h-4 w-4" />
                Explore our Smart Home solutions
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Home Modifications */}
      <section id="home-modifications" className="scroll-mt-24 bg-brand-bg-alt py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal/10">
              <IoHomeOutline className="h-6 w-6 text-brand-teal" />
            </div>
            <h2 className="text-3xl font-bold text-brand-slate sm:text-4xl">
              Home Modifications
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-gray">
              Home Modifications funding covers structural or non-structural
              changes to your home (or a home you&apos;re moving into) that
              improve your safety, accessibility, and independence.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              An Occupational Therapist assessment is required for any
              modification over $1,500. For complex modifications, your OT will
              produce a detailed report recommending specific works.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-brand-slate">
              What can be funded
            </h3>
            <ul className="mt-4 space-y-3">
              {modificationExamples.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <IoCheckmarkCircleOutline className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                  <span className="text-base text-brand-gray">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-brand-border bg-white p-5">
              <p className="text-sm font-semibold text-brand-slate">
                Need an OT assessment?
              </p>
              <p className="mt-1 text-sm text-brand-gray">
                Our OT Resource Centre has guides and tools to help you prepare
                for a home assessment and understand what to expect.
              </p>
              <Link
                href="/ot-resource-centre"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal hover:underline"
              >
                Visit the OT Resource Centre <IoArrowForwardOutline className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SDA */}
      <section id="sda" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10">
              <TbHome className="h-6 w-6 text-brand-green" />
            </div>
            <h2 className="text-3xl font-bold text-brand-slate sm:text-4xl">
              Specialist Disability Accommodation
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-gray">
              SDA funding pays for purpose-built or significantly modified
              housing for NDIS participants with extreme functional impairment or
              very high support needs. It covers the cost of the building and
              land — not your day-to-day support.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              To be eligible, you must have SDA included in your NDIS plan. Your
              NDIS planner or LAC will assess eligibility based on your level of
              functional impairment and the evidence provided (usually an OT
              report).
            </p>

            <h3 className="mt-8 text-xl font-semibold text-brand-slate">
              SDA design categories
            </h3>
            <div className="mt-4 space-y-4">
              {sdaDesignCategories.map((cat) => (
                <div
                  key={cat.name}
                  className="rounded-xl border border-brand-border bg-brand-bg-alt p-5"
                >
                  <p className="text-sm font-semibold text-brand-slate">{cat.name}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-gray">{cat.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/sda"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-green px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-green-dark"
              >
                <TbWheelchair className="h-4 w-4" />
                About our SDA properties
              </Link>
              <Link
                href="/sda-vacancies"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand-green px-6 py-3 text-sm font-semibold text-brand-green transition-all hover:bg-brand-green hover:text-white"
              >
                View current vacancies
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How to access funding */}
      <section className="bg-brand-bg-alt py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-brand-slate sm:text-4xl">
              How to access your funding
            </h2>
            <div className="mt-8 space-y-6">
              {[
                {
                  step: "1",
                  title: "Check your current plan",
                  desc: "Log in to the myNDIS portal or contact your LAC to confirm whether Capital Supports, AT, or SDA is included in your plan and how much is allocated.",
                },
                {
                  step: "2",
                  title: "Get an OT assessment",
                  desc: "For home modifications or complex AT, an Occupational Therapist assessment is required. Your OT will write a report recommending specific items and justifying the functional need.",
                },
                {
                  step: "3",
                  title: "Get quotes and seek approval",
                  desc: "For AT over $1,500 or home modifications over $1,500, you'll need quotes from registered providers and NDIS approval before proceeding.",
                },
                {
                  step: "4",
                  title: "Work with a registered provider",
                  desc: "Innogreen is a registered NDIS provider (No: 4050064987). We can assist with smart home AT installation and SDA housing enquiries.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-teal text-base font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-brand-slate">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-brand-gray">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
