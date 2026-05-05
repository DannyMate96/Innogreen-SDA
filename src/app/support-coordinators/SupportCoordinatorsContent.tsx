"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import {
  IoCheckmarkCircleOutline,
  IoDocumentTextOutline,
  IoHomeOutline,
  IoCallOutline,
  IoPersonOutline,
  IoTimeOutline,
  IoStarOutline,
  IoCloudDownloadOutline,
} from "react-icons/io5";
import { TbSmartHome } from "react-icons/tb";
import { HiOutlineClipboardCheck, HiOutlineDocumentText } from "react-icons/hi";

const valueProps = [
  {
    icon: IoCheckmarkCircleOutline,
    title: "NDIS Registered Provider",
    description:
      "Innogreen is a fully registered NDIS provider (Provider No: 4050064987), so your participants are always protected.",
  },
  {
    icon: IoTimeOutline,
    title: "Fast Response",
    description:
      "We respond to all coordinator referrals within one business day and keep you updated at every stage.",
  },
  {
    icon: TbSmartHome,
    title: "Smart Home Expertise",
    description:
      "Every Innogreen property includes integrated assistive technology — voice control, automated access, and environmental controls.",
  },
  {
    icon: IoDocumentTextOutline,
    title: "Transparent Reporting",
    description:
      "We provide clear, plain-language reports on tenancy status and property features to support your participants' NDIS reviews.",
  },
];

const offerings = [
  {
    icon: IoHomeOutline,
    title: "SDA Referrals",
    description:
      "Refer participants to our High Physical Support SDA properties across Perth — Armadale, Baldivis, Leederville, and Morley.",
  },
  {
    icon: TbSmartHome,
    title: "Smart Home Assessments",
    description:
      "We work with your participants and their OT to identify which smart home features best support their independence goals.",
  },
  {
    icon: IoPersonOutline,
    title: "Property Tours",
    description:
      "Book a guided property tour for you and your participant — in person or virtually — at a time that suits you.",
  },
  {
    icon: IoCallOutline,
    title: "Dedicated Coordinator Contact",
    description:
      "You'll have a single point of contact at Innogreen throughout the referral and tenancy process — no runaround.",
  },
];

const steps = [
  {
    step: "1",
    title: "Refer a Participant",
    description:
      "Submit a referral via our contact form or call us directly. Share your participant's SDA eligibility and support needs.",
  },
  {
    step: "2",
    title: "We Assess & Match",
    description:
      "Our team reviews the referral, confirms property suitability, and arranges a property tour within days.",
  },
  {
    step: "3",
    title: "Participant Moves In",
    description:
      "We handle the tenancy onboarding, smart home setup, and keep you informed throughout so your participant settles in smoothly.",
  },
];

const resources = [
  {
    icon: HiOutlineDocumentText,
    title: "SDA Overview PDF",
    description:
      "A concise summary of Innogreen's SDA properties, eligibility criteria, and what NDIS funding covers.",
    link: "#",
  },
  {
    icon: TbSmartHome,
    title: "Smart Home Features Guide",
    description:
      "Detailed breakdown of every assistive technology feature available across our properties — ideal for OT reports.",
    link: "#",
  },
  {
    icon: HiOutlineClipboardCheck,
    title: "Referral Checklist",
    description:
      "A quick checklist to confirm your participant has what they need before submitting a referral.",
    link: "#",
  },
];

export default function SupportCoordinatorsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-slate">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-slate via-brand-slate to-brand-teal/20" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <AnimatedSection className="max-w-3xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <IoPersonOutline className="h-8 w-8 text-brand-green-light" />
            </div>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              For Support{" "}
              <span className="text-brand-green-light">Coordinators</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-200">
              Partner with Innogreen to find the right SDA and smart home
              solution for your participants — fast, transparent, and NDIS
              registered.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?subject=SDA+Enquiry"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand-green px-8 py-3 text-base font-semibold text-white transition-all hover:bg-brand-green-dark"
              >
                Refer a Participant
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

      {/* Why partner with us */}
      <section
        className="bg-white py-20 lg:py-28"
        aria-labelledby="why-partner-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h2
              id="why-partner-heading"
              className="text-3xl font-bold text-brand-slate sm:text-4xl"
            >
              Why Partner With Innogreen?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
              We make it easy for support coordinators to find quality SDA
              placements for participants who need them most.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop, index) => (
              <AnimatedSection key={prop.title} delay={index * 0.1}>
                <div className="card-hover flex h-full flex-col gap-4 rounded-xl border border-brand-border bg-brand-bg-alt p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10">
                    <prop.icon className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-brand-slate">
                      {prop.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Independence Visual */}
      <section aria-label="Supporting independence through technology">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-[380px]">
            <Image
              src="/images/elderly-smartphone.jpg"
              alt="Support coordinator helping an elderly NDIS participant use a smartphone in the community"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex items-center bg-brand-slate px-8 py-12 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-green-light">
                Supporting Independence
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Technology that works for your participants
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-300">
                Every Innogreen SDA property includes integrated smart home assistive technology — voice-controlled environments, automated access, and environmental controls — designed to give participants greater independence and reduce reliance on support.
              </p>
              <Link
                href="/smart-homes"
                className="mt-6 inline-flex items-center text-sm font-semibold text-brand-green-light transition-colors hover:text-brand-green"
              >
                Explore Smart Home Features →
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What we offer coordinators */}
      <section
        className="bg-brand-bg-alt py-20 lg:py-28"
        aria-labelledby="offerings-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h2
              id="offerings-heading"
              className="text-3xl font-bold text-brand-slate sm:text-4xl"
            >
              What We Offer Coordinators
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
              End-to-end support from initial referral through to your
              participant settling into their new home.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2">
            {offerings.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="card-hover flex gap-4 rounded-xl border border-brand-border bg-white p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-green/10">
                    <item.icon className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-brand-slate">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        className="bg-white py-20 lg:py-28"
        aria-labelledby="how-it-works-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h2
              id="how-it-works-heading"
              className="text-3xl font-bold text-brand-slate sm:text-4xl"
            >
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
              A simple three-step process designed to minimise your admin and
              get your participant housed quickly.
            </p>
          </AnimatedSection>

          <div className="relative grid gap-8 sm:grid-cols-3">
            {steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.15}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal text-xl font-extrabold text-white shadow-md">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className="absolute left-[calc(50%+2rem)] top-8 hidden h-0.5 w-[calc(100%-4rem)] bg-brand-border sm:block"
                      aria-hidden="true"
                    />
                  )}
                  <h3 className="mt-6 text-lg font-bold text-brand-slate">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Referral CTA */}
      <section className="gradient-bg py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <IoStarOutline className="mx-auto mb-4 h-10 w-10 text-white/70" />
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Refer a Participant?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Submit a referral today and our team will be in touch within one
              business day to discuss the best available SDA placement.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact?subject=SDA+Enquiry"
                className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-teal transition-all hover:bg-gray-50"
              >
                Refer a Participant
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

      {/* Resources */}
      <section
        className="bg-brand-bg-alt py-20 lg:py-28"
        aria-labelledby="resources-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h2
              id="resources-heading"
              className="text-3xl font-bold text-brand-slate sm:text-4xl"
            >
              Coordinator Resources
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
              Download our guides to help assess suitability and prepare your
              participants for a referral.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-3">
            {resources.map((resource, index) => (
              <AnimatedSection key={resource.title} delay={index * 0.1}>
                <a
                  href={resource.link}
                  className="card-hover flex h-full flex-col gap-4 rounded-xl border border-brand-border bg-white p-6 transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-teal/10">
                    <resource.icon className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-brand-slate">
                      {resource.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                      {resource.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-teal">
                    <IoCloudDownloadOutline className="h-4 w-4" />
                    Download
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
