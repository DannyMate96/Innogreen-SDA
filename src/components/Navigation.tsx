"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/smart-homes", label: "Smart Homes" },
  { href: "/sda", label: "SDA" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <Link
          href="/"
          className="flex items-center"
          aria-label="Innogreen - Home"
        >
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
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-brand-gray transition-colors hover:bg-brand-bg-alt hover:text-brand-teal"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Phone */}
        <div className="hidden items-center gap-4 md:flex">
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
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-brand-gray hover:bg-brand-bg-alt md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 border-t border-brand-border" : "max-h-0"
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="space-y-1 px-4 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-brand-gray transition-colors hover:bg-brand-bg-alt hover:text-brand-teal"
            >
              {link.label}
            </Link>
          ))}
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
              onClick={() => setIsOpen(false)}
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
