"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import {
  IoVideocamOutline,
  IoChatbubblesOutline,
  IoNotificationsOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";

const benefits = [
  {
    icon: IoVideocamOutline,
    text: "See who's at the door from anywhere",
  },
  {
    icon: IoChatbubblesOutline,
    text: "Two-way communication",
  },
  {
    icon: IoNotificationsOutline,
    text: "Motion detection alerts",
  },
  {
    icon: IoPhonePortraitOutline,
    text: "Easy smartphone access",
  },
];

export default function SeniorServices() {
  return (
    <section
      className="relative overflow-hidden bg-brand-slate py-20 lg:py-28"
      aria-labelledby="seniors-heading"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='3' fill='%2300BCD4'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <div className="mb-8 overflow-hidden rounded-2xl">
              <Image
                src="/images/Web Image 2.png"
                alt="Elderly woman being assisted with smartphone technology"
                width={600}
                height={340}
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
            <span className="inline-flex items-center rounded-full bg-brand-green/20 px-4 py-1.5 text-sm font-semibold text-brand-green-light">
              Seniors Card Holders
            </span>
            <h2
              id="seniors-heading"
              className="mt-4 text-3xl font-bold text-white sm:text-4xl"
            >
              Video Doorbells for Seniors
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Enhanced safety and peace of mind for seniors with smart doorbell
              technology
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex items-center gap-3 rounded-lg bg-white/10 p-4"
                >
                  <benefit.icon className="h-6 w-6 shrink-0 text-brand-teal-light" />
                  <span className="text-sm font-medium text-white">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl bg-gradient-to-br from-brand-teal to-brand-green p-8 text-center lg:p-12">
              <p className="text-lg font-semibold text-white/90">
                Special Rebate Available
              </p>
              <p className="mt-3 text-5xl font-extrabold text-white">$400</p>
              <p className="mt-2 text-xl font-semibold text-white/90">
                Rebate Available
              </p>
              <p className="mt-4 text-sm text-white/80">
                For eligible Seniors Card holders
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex min-h-[44px] items-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-teal shadow-lg transition-all hover:bg-gray-50"
              >
                Find out about $400 rebate
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
