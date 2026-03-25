"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import {
  IoShieldCheckmarkOutline,
  IoBusinessOutline,
  IoRibbonOutline,
  IoGlobeOutline,
  IoHeartOutline,
  IoPeopleOutline,
  IoAccessibilityOutline,
  IoSparklesOutline,
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { TbSmartHome } from "react-icons/tb";

const values = [
  {
    icon: IoAccessibilityOutline,
    title: "Accessibility First",
    description:
      "Every decision we make puts accessibility at the forefront. We believe every Australian deserves a home that supports their independence.",
  },
  {
    icon: IoSparklesOutline,
    title: "Innovation",
    description:
      "We leverage cutting-edge smart home technology to create living spaces that adapt to residents' needs and promote independence.",
  },
  {
    icon: IoHeartOutline,
    title: "Genuine Care",
    description:
      "We treat every resident and their family with compassion and respect. Their quality of life is our measure of success.",
  },
  {
    icon: IoPeopleOutline,
    title: "Community",
    description:
      "We build homes in well-connected locations and foster a sense of community, ensuring residents feel part of their neighbourhood.",
  },
];

const accreditations = [
  {
    icon: IoShieldCheckmarkOutline,
    title: "NDIS Registered Provider",
    detail:
      "Registered with the National Disability Insurance Scheme as a qualified provider of Specialist Disability Accommodation and assistive technology services.",
    number: "Provider No: 4050064987",
  },
  {
    icon: IoBusinessOutline,
    title: "Licensed Real Estate Agency",
    detail:
      "Fully licensed real estate agency in Western Australia, ensuring all property management services meet the highest regulatory standards.",
    number: "License No: RA82486",
  },
  {
    icon: IoRibbonOutline,
    title: "REIWA Member",
    detail:
      "Proud member of the Real Estate Institute of Western Australia, committed to the industry's highest ethical and professional standards.",
    number: "Member No: 562753",
  },
  {
    icon: IoGlobeOutline,
    title: "WA Police Security Agent",
    detail:
      "Licensed security agent under the WA Police, meeting the highest standards for safety and security services.",
    number: "Agent No: 72864",
  },
];

const team = [
  {
    name: "Arian David Gorjy",
    role: "Director & Licencee",
    license: "RA72601",
    bio: "With extensive experience in property management and a passion for accessible housing, Arian leads Innogreen's mission to create smart, accessible homes across Perth. His vision combines innovative technology with genuine care for residents' independence.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-bg-alt to-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold text-brand-slate sm:text-5xl">
              About <span className="gradient-text">Innogreen</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-brand-gray">
              Perth&apos;s trusted partner in accessible housing and smart home
              technology, helping Australians live independently and safely.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section
        className="bg-white py-20 lg:py-28"
        aria-labelledby="mission-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <h2
                id="mission-heading"
                className="text-3xl font-bold text-brand-slate sm:text-4xl"
              >
                Our Mission
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-brand-gray">
                Innogreen was founded with a clear purpose: to help all
                Australians, including people with disabilities and seniors, live
                in safe and accessible homes using innovative home automation.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-brand-gray">
                Based in Perth, we combine licensed property management with
                registered NDIS services to deliver Specialist Disability
                Accommodation (SDA) and Smart Home technology solutions. Our
                homes are purpose-built for accessibility, equipped with the
                latest smart home tech, and located in well-connected Perth
                communities.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-brand-gray">
                Through our Innogreen Homes brand, we offer SDA properties that
                include solar panels, energy-efficient design, and integrated
                smart technology — all designed to promote independent living.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="Innogreen team working on smart home solutions"
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-2xl object-cover"
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-brand-teal/10 p-5 text-center">
                  <TbSmartHome className="mx-auto h-8 w-8 text-brand-teal" />
                  <p className="mt-2 text-lg font-bold text-brand-slate">
                    Smart
                  </p>
                </div>
                <div className="rounded-xl bg-brand-green/10 p-5 text-center">
                  <IoShieldCheckmarkOutline className="mx-auto h-8 w-8 text-brand-green" />
                  <p className="mt-2 text-lg font-bold text-brand-slate">
                    Secure
                  </p>
                </div>
                <div className="rounded-xl bg-brand-blue/10 p-5 text-center">
                  <IoAccessibilityOutline className="mx-auto h-8 w-8 text-brand-blue" />
                  <p className="mt-2 text-lg font-bold text-brand-slate">
                    Accessible
                  </p>
                </div>
                <div className="rounded-xl bg-amber-50 p-5 text-center">
                  <IoHeartOutline className="mx-auto h-8 w-8 text-amber-500" />
                  <p className="mt-2 text-lg font-bold text-brand-slate">
                    Caring
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="bg-brand-bg-alt py-20 lg:py-28"
        aria-labelledby="values-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h2
              id="values-heading"
              className="text-3xl font-bold text-brand-slate sm:text-4xl"
            >
              Our Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
              The principles that guide everything we do at Innogreen
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="card-hover flex h-full flex-col items-center rounded-xl border border-brand-border bg-white p-6 text-center shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-teal/10">
                    <value.icon className="h-7 w-7 text-brand-teal" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-brand-slate">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        className="bg-white py-20 lg:py-28"
        aria-labelledby="team-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h2
              id="team-heading"
              className="text-3xl font-bold text-brand-slate sm:text-4xl"
            >
              Our Leadership
            </h2>
          </AnimatedSection>

          <div className="mx-auto max-w-2xl">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="rounded-2xl border border-brand-border bg-brand-bg-alt p-8 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-teal/10">
                    <IoPeopleOutline className="h-10 w-10 text-brand-teal" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-brand-slate">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-teal">
                    {member.role}
                  </p>
                  {member.license && (
                    <p className="mt-1 text-xs text-brand-gray-light">
                      License: {member.license}
                    </p>
                  )}
                  <p className="mt-4 text-base leading-relaxed text-brand-gray">
                    {member.bio}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section
        className="bg-brand-bg-alt py-20 lg:py-28"
        aria-labelledby="accreditations-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h2
              id="accreditations-heading"
              className="text-3xl font-bold text-brand-slate sm:text-4xl"
            >
              Certifications &amp; Accreditations
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
              Fully credentialed to deliver quality accessible housing and
              technology services
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2">
            {accreditations.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="card-hover flex h-full gap-4 rounded-xl border border-brand-border bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10">
                    <item.icon className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-slate">
                      {item.title}
                    </h3>
                    {item.number && (
                      <p className="mt-1 text-sm font-medium text-brand-teal">
                        {item.number}
                      </p>
                    )}
                    <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl gradient-bg p-8 text-center sm:p-12 lg:p-16">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Get In Touch
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
                We&apos;d love to hear from you. Reach out to discuss how we can
                help you or your loved ones find the perfect accessible home.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <a
                  href="tel:1800123000"
                  className="flex items-center gap-2 text-white/90 hover:text-white"
                >
                  <IoCallOutline className="h-5 w-5" />
                  1800 123 000
                </a>
                <a
                  href="mailto:info@innogreen.net.au"
                  className="flex items-center gap-2 text-white/90 hover:text-white"
                >
                  <IoMailOutline className="h-5 w-5" />
                  info@innogreen.net.au
                </a>
                <span className="flex items-center gap-2 text-white/90">
                  <IoLocationOutline className="h-5 w-5" />
                  C1A 15/212 Carr Place, Leederville WA 6007
                </span>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-teal transition-all hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
