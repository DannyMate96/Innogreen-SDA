"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { IoCallOutline, IoChevronDownOutline } from "react-icons/io5";
import {
  TbSmartHome,
  TbHome,
  TbHomeHeart,
  TbUserCheck,
  TbBuilding,
  TbStethoscope,
  TbBook2,
  TbCoin,
} from "react-icons/tb";

const servicesLinks = [
  {
    href: "/smart-homes",
    label: "Smart Homes",
    desc: "Assistive smart home technology",
    icon: TbSmartHome,
  },
  {
    href: "/sda",
    label: "SDA Properties",
    desc: "About Specialist Disability Accommodation",
    icon: TbHome,
  },
  {
    href: "/sda-vacancies",
    label: "SDA Vacancies",
    desc: "Currently available properties",
    icon: TbHomeHeart,
  },
  {
    href: "/support-coordinators",
    label: "Support Coordinators",
    desc: "Resources for NDIS coordinators",
    icon: TbUserCheck,
  },
  {
    href: "/property-management",
    label: "Property Management",
    desc: "SDA property management services",
    icon: TbBuilding,
  },
];

const resourcesLinks = [
  {
    href: "/ndis-funding-guide",
    label: "NDIS Funding Guide",
    desc: "Capital Supports, AT, home modifications & SDA explained",
    icon: TbCoin,
  },
  {
    href: "/ot-resource-centre",
    label: "OT Resource Centre",
    desc: "Tools & guides for occupational therapists",
    icon: TbStethoscope,
  },
  {
    href: "/blog",
    label: "Blog",
    desc: "News, tips, and NDIS updates",
    icon: TbBook2,
  },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  const isServicesActive = servicesLinks.some((l) => pathname === l.href);
  const isResourcesActive = resourcesLinks.some((l) => pathname === l.href);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "border-b border-brand-border"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label="Innogreen - Home">
          <Image
            src="/images/Innogreen Homes text only.png"
            alt="Innogreen Homes"
            width={180}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">

          {/* Services dropdown */}
          <div ref={servicesRef} className="relative">
            <button
              onClick={() => { setServicesOpen((o) => !o); setResourcesOpen(false); }}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-brand-bg-alt hover:text-brand-teal ${
                isServicesActive ? "text-brand-teal" : "text-brand-gray"
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <IoChevronDownOutline
                className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-1.5 w-72 rounded-xl border border-brand-border bg-white py-2 shadow-lg ring-1 ring-black/5">
                {servicesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-start gap-3 px-4 py-3 transition-colors hover:bg-brand-bg-alt ${
                      pathname === link.href ? "bg-brand-bg-alt" : ""
                    }`}
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10">
                      <link.icon className="h-4 w-4 text-brand-teal" />
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${pathname === link.href ? "text-brand-teal" : "text-brand-slate"}`}>
                        {link.label}
                      </p>
                      <p className="mt-0.5 text-xs text-brand-gray">{link.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Resources dropdown */}
          <div ref={resourcesRef} className="relative">
            <button
              onClick={() => { setResourcesOpen((o) => !o); setServicesOpen(false); }}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-brand-bg-alt hover:text-brand-teal ${
                isResourcesActive ? "text-brand-teal" : "text-brand-gray"
              }`}
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
            >
              Resources
              <IoChevronDownOutline
                className={`h-3.5 w-3.5 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {resourcesOpen && (
              <div className="absolute left-0 top-full mt-1.5 w-64 rounded-xl border border-brand-border bg-white py-2 shadow-lg ring-1 ring-black/5">
                {resourcesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-start gap-3 px-4 py-3 transition-colors hover:bg-brand-bg-alt ${
                      pathname === link.href ? "bg-brand-bg-alt" : ""
                    }`}
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10">
                      <link.icon className="h-4 w-4 text-brand-teal" />
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${pathname === link.href ? "text-brand-teal" : "text-brand-slate"}`}>
                        {link.label}
                      </p>
                      <p className="mt-0.5 text-xs text-brand-gray">{link.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-brand-bg-alt hover:text-brand-teal ${
              pathname === "/about" ? "text-brand-teal" : "text-brand-gray"
            }`}
          >
            About Us
          </Link>
        </div>

        {/* Desktop CTA + Phone */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:1800123000"
            className="flex items-center gap-1.5 text-sm font-medium text-brand-gray-light hover:text-brand-teal"
            aria-label="Call us at 1800 123 000"
          >
            <IoCallOutline className="h-4 w-4" />
            1800 123 000
          </a>
          <Link
            href="/contact"
            className="rounded-lg bg-brand-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-teal-dark"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-brand-gray hover:bg-brand-bg-alt lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[600px] border-t border-brand-border" : "max-h-0"
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="space-y-1 px-4 py-3">

          {/* Services accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen((o) => !o)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-brand-gray hover:bg-brand-bg-alt hover:text-brand-teal"
            >
              Services
              <IoChevronDownOutline
                className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="ml-3 mt-1 space-y-1 border-l-2 border-brand-border pl-3">
                {servicesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-brand-bg-alt hover:text-brand-teal ${
                      pathname === link.href ? "text-brand-teal" : "text-brand-gray"
                    }`}
                  >
                    <link.icon className="h-4 w-4 shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Resources accordion */}
          <div>
            <button
              onClick={() => setMobileResourcesOpen((o) => !o)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-brand-gray hover:bg-brand-bg-alt hover:text-brand-teal"
            >
              Resources
              <IoChevronDownOutline
                className={`h-4 w-4 transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileResourcesOpen && (
              <div className="ml-3 mt-1 space-y-1 border-l-2 border-brand-border pl-3">
                {resourcesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-brand-bg-alt hover:text-brand-teal ${
                      pathname === link.href ? "text-brand-teal" : "text-brand-gray"
                    }`}
                  >
                    <link.icon className="h-4 w-4 shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-brand-bg-alt hover:text-brand-teal ${
              pathname === "/about" ? "text-brand-teal" : "text-brand-gray"
            }`}
          >
            About Us
          </Link>

          <div className="border-t border-brand-border pt-3">
            <a
              href="tel:1800123000"
              className="flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-brand-gray-light hover:text-brand-teal"
            >
              <IoCallOutline className="h-5 w-5" />
              1800 123 000
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block rounded-lg bg-brand-teal px-5 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-brand-teal-dark"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
