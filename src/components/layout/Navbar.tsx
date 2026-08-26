"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";

const serviceLinks = [
  { key: "professional", href: "/services/professional" },
  { key: "hospitality", href: "/services/hospitality" },
  { key: "businessDevelopment", href: "/services/business-development" },
  { key: "logistics", href: "/services/logistics" },
  { key: "transportation", href: "/services/transportation" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const isHome = pathname === "/";
  const switchLocale = locale === "ar" ? "en" : "ar";

  return (
    <header
      className={`absolute top-0 z-50 w-full transition-all duration-300 ${
        isHome
          ? "bg-transparent py-5 md:py-6"
          : "bg-white py-4 md:py-5 border-b border-border shadow-xs"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        {/* Brand: Pure White Blue-Logo Image (No extra text) */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 sm:h-13 md:h-14 w-44 sm:w-48 md:w-52 transition-transform duration-200 hover:scale-105">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/blue_logo_tight.png`}
              alt="ICL Logo"
              fill
              className={`object-contain object-left rtl:object-right transition-all duration-300 ${
                isHome ? "brightness-0 invert drop-shadow-md" : ""
              }`}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link
            href="/"
            className={`text-base lg:text-[17px] font-semibold transition-colors ${
              isHome
                ? pathname === "/"
                  ? "text-accent"
                  : "text-white/90 hover:text-white"
                : pathname === "/"
                ? "text-accent"
                : "text-foreground/80 hover:text-foreground"
            }`}
          >
            {locale === "ar" ? "Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©" : "Home"}
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-2 text-base lg:text-[17px] font-semibold transition-colors py-1 cursor-pointer ${
                isHome
                  ? "text-white/90 hover:text-white"
                  : "text-foreground/80 hover:text-foreground"
              }`}
              aria-expanded={servicesDropdown}
            >
              <span>{locale === "ar" ? "Ø®Ø¯Ù…Ø§ØªÙ†Ø§" : "Our Services"}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdown ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesDropdown && (
              <div className="absolute top-full start-0 mt-2 w-64 rounded-lg border border-border bg-white p-2.5 shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex flex-col gap-1">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesDropdown(false)}
                      className="rounded-md px-3.5 py-2.5 text-sm font-medium text-foreground/85 hover:bg-surface-elevated hover:text-accent transition-colors"
                    >
                      {t(s.key)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`text-base lg:text-[17px] font-semibold transition-colors ${
              isHome
                ? pathname.includes("/about")
                  ? "text-accent"
                  : "text-white/90 hover:text-white"
                : pathname.includes("/about")
                ? "text-accent"
                : "text-foreground/80 hover:text-foreground"
            }`}
          >
            {locale === "ar" ? "Ù…Ù† Ù†Ø­Ù†" : "About Us"}
          </Link>

          <Link
            href="/contact"
            className={`text-base lg:text-[17px] font-semibold transition-colors ${
              isHome
                ? pathname.includes("/contact")
                  ? "text-accent"
                  : "text-white/90 hover:text-white"
                : pathname.includes("/contact")
                ? "text-accent"
                : "text-foreground/80 hover:text-foreground"
            }`}
          >
            {locale === "ar" ? "ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§" : "Contact Us"}
          </Link>

          {/* Theme Gold Language Switcher Button */}
          <Link
            href={pathname}
            locale={switchLocale}
            className="rounded-md bg-accent text-[#090d16] hover:bg-accent-light px-4 py-1.5 text-xs lg:text-sm font-bold uppercase tracking-wider transition-all duration-200 press-scale shadow-xs flex items-center justify-center cursor-pointer"
          >
            {switchLocale.toUpperCase()}
          </Link>
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href={pathname}
            locale={switchLocale}
            className="rounded-md bg-accent text-[#090d16] px-3 py-1.5 text-xs font-bold uppercase shadow-xs"
          >
            {switchLocale.toUpperCase()}
          </Link>
          <button
            type="button"
            className={`rounded-md p-2.5 transition-all ${
              isHome
                ? "bg-white/15 text-white"
                : "bg-surface-elevated text-foreground border border-border"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="mt-3 border-t border-border bg-white p-6 shadow-xl md:hidden text-foreground animate-in fade-in duration-200">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-base font-semibold text-foreground hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {locale === "ar" ? "Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©" : "Home"}
            </Link>

            <div className="border-t border-border/60 pt-3">
              <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
                {locale === "ar" ? "Ø®Ø¯Ù…Ø§ØªÙ†Ø§" : "Our Services"}
              </p>
              <div className="flex flex-col gap-2.5 ps-3">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                  >
                    {t(s.key)}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="text-base font-semibold text-foreground hover:text-accent border-t border-border/60 pt-3"
              onClick={() => setOpen(false)}
            >
              {locale === "ar" ? "Ù…Ù† Ù†Ø­Ù†" : "About Us"}
            </Link>

            <Link
              href="/contact"
              className="text-base font-semibold text-foreground hover:text-accent border-t border-border/60 pt-3"
              onClick={() => setOpen(false)}
            >
              {locale === "ar" ? "ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§" : "Contact Us"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}