"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import {
  HiOutlineMicrophone,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineChat,
  HiOutlineHeart,
  HiOutlinePuzzle,
  HiOutlinePhone,
  HiOutlineClipboardCheck,
  HiOutlineCog,
  HiOutlineSupport,
} from "react-icons/hi";
import { TbSmartHome } from "react-icons/tb";
import {
  IoCheckmarkCircleOutline,
  IoHelpCircleOutline,
  IoChevronDownOutline,
} from "react-icons/io5";
import { useState } from "react";

const services = [
  {
    icon: HiOutlineMicrophone,
    title: "Voice Control Systems",
    description:
      "Control your entire home using simple voice commands. Compatible with Amazon Alexa, Google Home, and Apple HomeKit.",
    features: [
      "Hands-free home control",
      "Custom voice commands for complex routines",
      "Multi-room voice control",
      "Accessible for all ability levels",
    ],
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Security & Safety",
    description:
      "Advanced security systems that keep you safe while maintaining independence and ease of access.",
    features: [
      "Smart locks with keyless entry",
      "Video doorbells with two-way audio",
      "Motion sensors and cameras",
      "Emergency alert and duress systems",
    ],
  },
  {
    icon: HiOutlineLightBulb,
    title: "Environmental Control",
    description:
      "Automated control of your living environment for comfort, energy efficiency, and accessibility.",
    features: [
      "Automated lighting with schedules",
      "Motorised blinds and curtains",
      "Smart thermostats and climate control",
      "Energy monitoring and optimisation",
    ],
  },
  {
    icon: HiOutlineChat,
    title: "Environmental Control Units (ECU)",
    description:
      "NDIS-funded environmental control technology that connects your home systems for greater independence.",
    features: [
      "Video calling integration",
      "Emergency communication systems",
      "Family connection features",
      "Carer notification systems",
    ],
  },
  {
    icon: HiOutlineHeart,
    title: "Health & Wellness",
    description:
      "Optional health monitoring features that provide peace of mind for residents and their families.",
    features: [
      "Wellness check-in systems",
      "Medication reminders",
      "Activity monitoring",
      "Fall detection capabilities",
    ],
  },
  {
    icon: HiOutlinePuzzle,
    title: "Custom Integration",
    description:
      "We work with your existing devices and preferences to create a personalised smart home ecosystem.",
    features: [
      "Works with existing devices",
      "Custom automation routines",
      "Flexible and scalable setup",
      "Ongoing support and updates",
    ],
  },
];

const process = [
  {
    icon: HiOutlinePhone,
    step: "1",
    title: "Consultation",
    description:
      "We discuss your needs, abilities, and goals to understand the best smart home solutions for you.",
  },
  {
    icon: HiOutlineClipboardCheck,
    step: "2",
    title: "Assessment & Design",
    description:
      "Our team assesses your home and designs a tailored smart home plan that fits your lifestyle.",
  },
  {
    icon: HiOutlineCog,
    step: "3",
    title: "Installation",
    description:
      "Professional installation by our certified technicians, with minimal disruption to your daily routine.",
  },
  {
    icon: HiOutlineSupport,
    step: "4",
    title: "Training & Support",
    description:
      "Comprehensive training and ongoing 24/7 support to ensure you get the most from your smart home.",
  },
];

const featureCards = [
  {
    image: "/images/Create_a_premium_commercial-grade_lifestyle_image_-1775651543096.png",
    imageAlt: "Smart video doorbell installed at front door",
    title: "Smart Video Doorbell",
    summary:
      "See and speak to whoever is at your door — from anywhere in the home, or anywhere in the world.",
    body: `For people who find it difficult or unsafe to answer the door, a smart video doorbell is life-changing. With a tap on your phone or tablet, you can see who is at your door, speak with them through two-way audio, and even unlock the door remotely — all without leaving your seat or bed.\n\nFor NDIS participants, this means far greater independence. No longer do you need a carer nearby every time someone knocks. Families and support coordinators also gain peace of mind knowing entry can be monitored and controlled remotely.\n\nInnogreen is a registered NDIS supplier and can assist you in accessing this technology through your NDIS plan under Assistive Technology or Home Modifications funding.`,
    features: [
      "HD live video feed accessible from any device",
      "Two-way audio — speak from anywhere in the home",
      "Motion-triggered alerts sent to your phone",
      "Remote door unlock capability",
      "Night vision for around-the-clock visibility",
      "NDIS funding may apply",
    ],
  },
  {
    image: "/images/Create_a_premium_commercial-grade_close-up_image_f-1775651545415.png",
    imageAlt: "Smart electronic door lock with keypad",
    title: "Smart Door Locks & Keyless Entry",
    summary:
      "Secure, keyless access that puts independence back in your hands — no fumbling for keys required.",
    body: `Traditional keys can be a barrier for people with limited hand strength, dexterity issues, or cognitive challenges. Smart door locks eliminate that barrier entirely. Doors can be unlocked via voice command, smartphone app, PIN code, fingerprint, or scheduled to open automatically at set times.\n\nFor NDIS and SDA residents, this technology significantly reduces reliance on others for basic daily tasks like letting in a support worker or locking up at night. Innogreen programs each lock to suit the resident's specific routine and ability level.\n\nAs a registered NDIS supplier, Innogreen can guide you through how this may be funded under your plan — often under Assistive Technology or SDA home modification categories.`,
    features: [
      "Unlock by voice, app, PIN, or fingerprint",
      "Auto-lock and scheduled access",
      "Grant or revoke access remotely for carers",
      "Access logs — see who entered and when",
      "Works with Alexa, Google Home, and Apple HomeKit",
      "Suitable for SDA and NDIS-funded homes",
    ],
  },
  {
    image: "/images/Create_a_premium_commercial-grade_in-home_marketin-1775651535131.png",
    imageAlt: "CCTV security dome camera mounted on exterior wall",
    title: "CCTV & Indoor Security Cameras",
    summary:
      "Round-the-clock monitoring that keeps residents and families informed and reassured.",
    body: `Smart security cameras give residents, families, and carers a real-time view of what's happening at home. Whether placed at entry points, common areas, or outdoor spaces, these cameras deter unwanted visitors and provide a clear record if anything does occur.\n\nFor people with high support needs, cameras can also serve a wellness role — carers or family members can check in remotely without interrupting the resident's routine. This balance of safety and privacy is something Innogreen takes seriously; all camera placements are discussed and agreed upon with residents.\n\nInnogreen's CCTV solutions integrate seamlessly with smart doorbells, locks, and alert systems to create a complete, connected security ecosystem.`,
    features: [
      "HD cameras with night vision",
      "Live view and recorded footage via app",
      "Motion detection with instant alerts",
      "Indoor and outdoor models available",
      "Cloud or local storage options",
      "Integrates with smart locks and doorbells",
    ],
  },
  {
    image: "/images/Create_a_premium_commercial-grade_lifestyle_image_-1775651549950.png",
    imageAlt: "Automated roller shutters with smart home wall controller",
    title: "Automated Roller Shutters & Smart Blinds",
    summary:
      "Control light, privacy, and temperature at the touch of a button — or automatically on a schedule.",
    body: `Managing curtains, blinds, and shutters manually can be physically demanding or simply impossible for many people with disabilities. Motorised shutters and smart blinds remove that challenge entirely. With a voice command, app tap, or set schedule, your home environment adjusts itself.\n\nThis is especially valuable in Perth's warm climate, where managing heat and glare directly impacts comfort, energy bills, and quality of sleep. Smart shutters can be programmed to close at midday to keep rooms cool and open again in the evening — automatically.\n\nFor SDA and NDIS participants, this kind of environmental control supports daily routines and reduces the need for carer assistance with basic tasks. Innogreen installs and programs all systems to match each resident's lifestyle and preferences.`,
    features: [
      "Voice, app, or wall-switch control",
      "Automated schedules for time-of-day or sun position",
      "Reduces heat and glare — energy-efficient",
      "Suitable for windows, doors, and external openings",
      "Quiet motor systems for minimal disruption",
      "Can be integrated with climate control systems",
    ],
  },
  {
    image: "/images/Create_a_premium_commercial-grade_in-home_marketin-1775651548127.png",
    imageAlt: "Outdoor security cameras and roller shutters on residential building at dusk",
    title: "Complete Outdoor Security System",
    summary:
      "A fully integrated outdoor security setup — cameras, shutters, and smart lighting working together.",
    body: `True home security isn't just one product — it's a system. Innogreen designs and installs complete outdoor security setups that combine CCTV cameras, automated roller shutters, smart lighting, and motion-activated alerts into one unified, easy-to-manage system.\n\nFor NDIS participants and SDA residents, a secure outdoor environment means greater confidence in living independently. Knowing that your home is monitored and protected — and that you can control it all from a single app or voice assistant — removes a significant source of stress and anxiety.\n\nInnogreen's team handles the full installation, programming, and training. We also provide ongoing technical support, so if something changes or needs adjusting, help is always a phone call away. As a registered NDIS supplier, we can work alongside your support coordinator to identify the right funding pathway for your setup.`,
    features: [
      "Multi-camera outdoor coverage",
      "Automated shutters for perimeter security",
      "Smart lighting with motion-triggered activation",
      "Centralised control via single app or voice",
      "24/7 remote monitoring capability",
      "Ongoing support from a registered NDIS supplier",
    ],
  },
];

function FeatureCard({ card }: { card: (typeof featureCards)[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-brand-border bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={card.image}
          alt={card.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-brand-slate">{card.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-gray">
          {card.summary}
        </p>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand-teal transition-colors hover:text-brand-teal-dark"
          aria-expanded={isOpen}
        >
          {isOpen ? "Show less" : "Learn more"}
          <IoChevronDownOutline
            className={`h-4 w-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 border-t border-brand-border pt-4">
            {card.body.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="mb-3 text-sm leading-relaxed text-brand-gray"
              >
                {para}
              </p>
            ))}
            <ul className="mt-4 space-y-2" role="list">
              {card.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-brand-gray"
                >
                  <IoCheckmarkCircleOutline className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "Is smart home technology covered by NDIS funding?",
    answer:
      "Yes, many smart home solutions fall under NDIS Assistive Technology or Home Modifications categories. Environmental Control Units (ECU) technology is specifically funded under the NDIS. We can help you understand what's covered in your plan.",
  },
  {
    question: "Do I need to replace all my existing devices?",
    answer:
      "Not at all. We design smart home systems that integrate with your existing devices and appliances. Our goal is to enhance what you already have, not replace it unnecessarily.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most installations can be completed within one to two days, depending on the complexity of the setup. We work efficiently to minimise disruption to your daily routine.",
  },
  {
    question: "What happens if something stops working?",
    answer:
      "We provide ongoing support and monitoring. If any issues arise, our team is available to troubleshoot remotely or arrange an on-site visit. We also perform regular maintenance checks.",
  },
  {
    question: "Is the technology easy to use?",
    answer:
      "Absolutely. We specialise in accessible technology. All our systems are designed to be intuitive and can be controlled by voice, touch, or automated routines. We provide thorough training tailored to each individual's needs.",
  },
  {
    question: "Can smart home features be customised for specific disabilities?",
    answer:
      "Yes, every smart home setup we create is tailored to the individual's specific needs and abilities. Whether it's motor, sensory, cognitive, or communication needs, we design solutions that work for you.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-base font-semibold text-brand-slate">
          {question}
        </span>
        <IoChevronDownOutline
          className={`h-5 w-5 shrink-0 text-brand-gray transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-base leading-relaxed text-brand-gray">{answer}</p>
      </div>
    </div>
  );
}

export default function SmartHomesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/Web Image 3.png"
            alt=""
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-slate/90 via-brand-slate/80 to-brand-slate/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <AnimatedSection className="max-w-2xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <TbSmartHome className="h-8 w-8 text-brand-teal-light" />
            </div>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Smart Home <span className="text-brand-teal-light">Solutions</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-200">
              We supply, install &amp; integrate easy-to-use smart homes,
              tailored for you and your existing devices. Our technology promotes
              independence, safety, and quality of life.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand-teal px-8 py-3 text-base font-semibold text-white transition-all hover:bg-brand-teal-dark"
              >
                Get a Free Quote
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

      {/* Services Grid */}
      <section
        className="bg-white py-20 lg:py-28"
        aria-labelledby="smart-services-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h2
              id="smart-services-heading"
              className="text-3xl font-bold text-brand-slate sm:text-4xl"
            >
              Our Smart Home Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
              Comprehensive technology solutions designed for accessibility and
              independence
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="card-hover flex h-full flex-col rounded-xl border border-brand-border bg-brand-bg-alt p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-teal/10">
                    <service.icon className="h-6 w-6 text-brand-teal" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-brand-slate">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-gray">
                    {service.description}
                  </p>
                  <ul className="mt-4 flex-1 space-y-2" role="list">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-brand-gray"
                      >
                        <IoCheckmarkCircleOutline className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* In-Depth Feature Cards with Images */}
      <section
        className="bg-brand-bg-alt py-20 lg:py-28"
        aria-labelledby="feature-cards-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-4 text-center">
            <span className="inline-block rounded-full bg-brand-teal/10 px-4 py-1 text-sm font-semibold text-brand-teal">
              Registered NDIS Supplier
            </span>
          </AnimatedSection>
          <AnimatedSection className="mb-12 text-center">
            <h2
              id="feature-cards-heading"
              className="text-3xl font-bold text-brand-slate sm:text-4xl"
            >
              Technology That Changes Lives
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
              Smart home technology isn&apos;t just about convenience — for people
              living with disability, it can mean the difference between needing
              support for every small task and living with genuine independence.
              As a registered NDIS supplier, Innogreen brings these solutions
              directly to NDIS participants and SDA residents in Perth.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 0.08}>
                <FeatureCard card={card} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center" delay={0.3}>
            <p className="mx-auto max-w-2xl text-base text-brand-gray">
              Every solution Innogreen installs is tailored to the individual.
              We work with your support coordinator, occupational therapist, and
              family to design a smart home system that fits your life — not a
              one-size-fits-all package.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand-teal px-8 py-3 text-base font-semibold text-white transition-all hover:bg-brand-teal-dark"
              >
                Get a Free Quote
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section
        className="bg-white py-20 lg:py-28"
        aria-labelledby="process-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h2
              id="process-heading"
              className="text-3xl font-bold text-brand-slate sm:text-4xl"
            >
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
              From consultation to ongoing support, we make the process simple
            </p>
          </AnimatedSection>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.1}>
                <div className="relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-brand-slate">
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

      {/* FAQ */}
      <section
        className="bg-white py-20 lg:py-28"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal/10">
              <IoHelpCircleOutline className="h-6 w-6 text-brand-teal" />
            </div>
            <h2
              id="faq-heading"
              className="text-3xl font-bold text-brand-slate sm:text-4xl"
            >
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-xl border border-brand-border bg-brand-bg-alt p-6 sm:p-8">
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="gradient-bg py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Make Your Home Smarter?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Innogreen is a registered NDIS supplier. Get a free quote today
              and discover how smart home technology can give you greater
              independence, safety, and quality of life — funded through your
              NDIS plan where eligible.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-teal transition-all hover:bg-gray-50"
              >
                Get a Free Quote
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
