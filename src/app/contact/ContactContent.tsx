"use client";

import { useState, FormEvent, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoTimeOutline,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoSendOutline,
  IoCheckmarkCircle,
} from "react-icons/io5";

const contactInfo = [
  {
    icon: IoCallOutline,
    label: "Phone",
    value: "1800 123 000",
    href: "tel:1800123000",
  },
  {
    icon: IoMailOutline,
    label: "Email",
    value: "info@innogreen.net.au",
    href: "mailto:info@innogreen.net.au",
  },
  {
    icon: IoLocationOutline,
    label: "Address",
    value: "C1A 15/212 Carr Place, Leederville WA 6007",
    href: "https://maps.google.com/?q=C1A+15/212+Carr+Place+Leederville+WA+6007",
  },
  {
    icon: IoTimeOutline,
    label: "Office Hours",
    value: "Mon–Fri: 9–5 PM | Sat: 9–1 PM",
    href: null,
  },
];

const subjects = [
  "Smart Homes",
  "SDA Enquiry",
  "SDA Vacancy Enquiry",
  "SDA Waitlist",
  "Property Management",
  "General Enquiry",
];

const enquirerTypes = [
  "NDIS Participant",
  "Carer / Family Member",
  "Support Coordinator",
  "Builder / Developer",
  "Other",
];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  enquirerType: "",
  supportNeed: "",
  message: "",
};

export default function ContactContent() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setFormData((prev) => ({ ...prev, subject: subjectParam }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-bg-alt to-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold text-brand-slate sm:text-5xl">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-brand-gray">
              We&apos;d love to hear from you. Whether you&apos;re interested in
              Smart Home solutions, SDA properties, or have a general question,
              we&apos;re here to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-brand-slate">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-base text-brand-gray">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>

                {submitted ? (
                  <div className="mt-8 flex flex-col items-center rounded-2xl border border-brand-green/30 bg-brand-green/5 p-12 text-center">
                    <IoCheckmarkCircle className="h-16 w-16 text-brand-green" />
                    <h3 className="mt-4 text-xl font-bold text-brand-slate">
                      Message Sent!
                    </h3>
                    <p className="mt-2 text-base text-brand-gray">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 1 business day.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData(emptyForm); }}
                      className="mt-6 rounded-lg bg-brand-teal px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-teal-dark"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {/* Enquirer type */}
                    <div>
                      <label
                        htmlFor="enquirerType"
                        className="mb-2 block text-sm font-medium text-brand-slate"
                      >
                        I am a… <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="enquirerType"
                        name="enquirerType"
                        required
                        value={formData.enquirerType}
                        onChange={(e) =>
                          setFormData({ ...formData, enquirerType: e.target.value, supportNeed: "" })
                        }
                        className="w-full rounded-lg border border-brand-border bg-brand-bg-alt px-4 py-3 text-base text-brand-slate transition-colors focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                      >
                        <option value="">Select your role</option>
                        {enquirerTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Support Coordinator — extra field */}
                    {formData.enquirerType === "Support Coordinator" && (
                      <div>
                        <label
                          htmlFor="supportNeed"
                          className="mb-2 block text-sm font-medium text-brand-slate"
                        >
                          Client&apos;s primary support need
                        </label>
                        <input
                          type="text"
                          id="supportNeed"
                          name="supportNeed"
                          value={formData.supportNeed}
                          onChange={(e) =>
                            setFormData({ ...formData, supportNeed: e.target.value })
                          }
                          className="w-full rounded-lg border border-brand-border bg-brand-bg-alt px-4 py-3 text-base text-brand-slate placeholder-brand-gray-light transition-colors focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                          placeholder="e.g. High physical support, SDA housing, assistive technology"
                        />
                      </div>
                    )}

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-brand-slate"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full rounded-lg border border-brand-border bg-brand-bg-alt px-4 py-3 text-base text-brand-slate placeholder-brand-gray-light transition-colors focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-brand-slate"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full rounded-lg border border-brand-border bg-brand-bg-alt px-4 py-3 text-base text-brand-slate placeholder-brand-gray-light transition-colors focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium text-brand-slate"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full rounded-lg border border-brand-border bg-brand-bg-alt px-4 py-3 text-base text-brand-slate placeholder-brand-gray-light transition-colors focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                          placeholder="04XX XXX XXX"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="mb-2 block text-sm font-medium text-brand-slate"
                        >
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          className="w-full rounded-lg border border-brand-border bg-brand-bg-alt px-4 py-3 text-base text-brand-slate transition-colors focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                        >
                          <option value="">Select a subject</option>
                          {subjects.map((subject) => (
                            <option key={subject} value={subject}>
                              {subject}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-brand-slate"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full rounded-lg border border-brand-border bg-brand-bg-alt px-4 py-3 text-base text-brand-slate placeholder-brand-gray-light transition-colors focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-600">{error}</p>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-brand-teal px-8 py-3 text-base font-semibold text-white transition-all hover:bg-brand-teal-dark disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <IoSendOutline className="h-5 w-5" />
                      {loading ? "Sending…" : "Send Message"}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="rounded-2xl border border-brand-border bg-brand-bg-alt p-8">
                  <h2 className="text-xl font-bold text-brand-slate">
                    Contact Information
                  </h2>
                  <p className="mt-2 text-sm text-brand-gray">
                    Reach out through any of these channels
                  </p>

                  <div className="mt-8 space-y-6">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10">
                          <info.icon className="h-5 w-5 text-brand-teal" />
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-light">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="mt-0.5 text-base font-medium text-brand-slate hover:text-brand-teal"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="mt-0.5 text-base font-medium text-brand-slate">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social links */}
                  <div className="mt-8 border-t border-brand-border pt-6">
                    <p className="text-sm font-medium text-brand-gray-light">
                      Follow Us
                    </p>
                    <div className="mt-3 flex gap-3">
                      <a
                        href="https://www.facebook.com/Innogreen.perth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal transition-colors hover:bg-brand-teal hover:text-white"
                        aria-label="Follow us on Facebook"
                      >
                        <IoLogoFacebook className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/innogreenhomes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal transition-colors hover:bg-brand-teal hover:text-white"
                        aria-label="Follow us on LinkedIn"
                      >
                        <IoLogoLinkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>

                  {/* Credentials */}
                  <div className="mt-8 border-t border-brand-border pt-6">
                    <p className="text-xs text-brand-gray-light">
                      NDIS Provider No: 4050064987
                    </p>
                    <p className="mt-1 text-xs text-brand-gray-light">
                      Licensed Real Estate Agency: RA82486
                    </p>
                    <p className="mt-1 text-xs text-brand-gray-light">
                      REIWA Member | WA Police Security Agent 72864
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="bg-brand-bg-alt py-20 lg:py-28" aria-labelledby="map-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 id="map-heading" className="text-2xl font-bold text-brand-slate">
              Our Location
            </h2>
            <p className="mt-2 text-base text-brand-gray">
              Based in Perth, Western Australia — serving the greater Perth
              metropolitan area
            </p>
            <p className="mt-2 text-sm text-brand-gray">
              C1A 15/212 Carr Place, Leederville WA 6007
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-brand-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.5!2d115.8427839!3d-31.9372638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31caa7!2s212+Carr+Pl%2C+Leederville+WA+6007!5e0!3m2!1sen!2sau!4v1700000000000"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Innogreen office location - C1A 15/212 Carr Place, Leederville WA 6007"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
