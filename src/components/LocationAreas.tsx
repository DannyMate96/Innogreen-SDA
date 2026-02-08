"use client";

import AnimatedSection from "./AnimatedSection";
import { IoLocationOutline } from "react-icons/io5";

const areas = [
  "Leederville",
  "Armadale",
  "Baldivis",
  "Morley",
  "Queens Park",
  "Inglewood",
  "Mount Lawley",
  "Bayswater",
  "Dianella",
  "Bedford",
  "Maylands",
  "Bassendean",
];

export default function LocationAreas() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Google Maps embed */}
          <AnimatedSection>
            <div className="overflow-hidden rounded-2xl border border-brand-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d115.8!3d-31.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bad5d5a2e41f%3A0x504f0b535df4d30!2sPerth+WA!5e0!3m2!1sen!2sau!4v1700000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Innogreen service areas across Perth, Western Australia"
              />
            </div>
          </AnimatedSection>

          {/* Right: Content */}
          <AnimatedSection delay={0.2}>
            <h2
              id="location-heading"
              className="text-3xl font-bold text-brand-slate sm:text-4xl"
            >
              Proudly Serving Perth
            </h2>
            <p className="mt-4 text-lg text-brand-gray">
              Quality accessible homes in well-located areas
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 rounded-lg bg-brand-bg-alt px-3 py-2.5"
                >
                  <IoLocationOutline className="h-4 w-4 shrink-0 text-brand-teal" />
                  <span className="text-sm font-medium text-brand-slate">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 rounded-lg border border-brand-border bg-brand-bg-alt p-4 text-sm leading-relaxed text-brand-gray">
              All Innogreen Homes properties are in accessible, well-connected
              locations with easy access to amenities, public transport, and
              community services.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
