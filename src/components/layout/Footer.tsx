"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

export function Footer() {
  const locale = useLocale();
  const contact = useTranslations("contact");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#fbfcfd] text-foreground pt-16 md:pt-24 pb-8 overflow-hidden border-t border-border/60">
      {/* Rich Radiant Blue Gradient Aura (Stronger Corporate Blue / Electric Azure / Cyan Glow - Zero Gold) */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-96 sm:h-[480px] z-0"
        style={{
          background: "radial-gradient(ellipse 90% 70% at 50% 100%, rgba(20, 75, 145, 0.35) 0%, rgba(14, 116, 144, 0.22) 40%, rgba(20, 45, 76, 0.12) 65%, rgba(251, 252, 253, 0) 100%)"
        }}
      />
      <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-gradient-to-t from-[#144b91]/30 via-[#0e7490]/20 to-transparent blur-3xl rounded-full z-0" />

      {/* Organic Background Contour Lines */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-25 z-0"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 200 C300 100, 600 400, 1100 150 C1300 50, 1500 300, 1600 200"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-border"
        />
        <path
          d="M-50 450 C400 300, 800 550, 1200 350 C1400 250, 1550 400, 1650 350"
          stroke="currentColor"
          strokeWidth="1"
          className="text-border/60"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Top 3-Column Minimal Information Architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* Column 1: Explore (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-dark">
              {locale === "ar" ? "استكشف" : "Explore"}
            </p>
            <ul className="space-y-2.5 text-sm sm:text-[15px] font-medium text-foreground/80">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  {locale === "ar" ? "من نحن" : "About"}
                </Link>
              </li>
              <li>
                <Link href="/services/professional" className="hover:text-accent transition-colors">
                  {locale === "ar" ? "خدماتنا" : "Services"}
                </Link>
              </li>
              <li>
                <Link href="/#network" className="hover:text-accent transition-colors">
                  {locale === "ar" ? "منظومة المجموعة" : "Group Network"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  {locale === "ar" ? "تواصل معنا" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Connect (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-dark">
              {locale === "ar" ? "تواصل" : "Connect"}
            </p>
            <ul className="space-y-2.5 text-sm sm:text-[15px] font-medium text-foreground/80">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                >
                  <span>LinkedIn</span>
                  <span className="text-xs text-muted">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                >
                  <span>X / Twitter</span>
                  <span className="text-xs text-muted">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                >
                  <span>Instagram</span>
                  <span className="text-xs text-muted">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                >
                  <span>Facebook</span>
                  <span className="text-xs text-muted">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Headquarters (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-dark">
              {locale === "ar" ? "المقر والاتصال" : "Contact"}
            </p>
            <div className="space-y-3 text-sm sm:text-[15px] font-medium text-foreground/85">
              <div>
                <a
                  href={`mailto:${contact("email")}`}
                  className="inline-block text-base sm:text-lg font-semibold text-foreground hover:text-accent transition-colors"
                >
                  {contact("email")}
                </a>
              </div>
              <p className="text-muted leading-relaxed max-w-sm">
                {contact("address")}
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-muted">
                <a href={`tel:${contact("phone").replace(/\s/g, "")}`} className="hover:text-accent transition-colors font-semibold text-foreground">
                  {contact("phone")}
                </a>
                <span>•</span>
                <span>{contact("hours")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Centered Grand Statement Text: "International Coverage Logistics" */}
        <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-border/40 select-none text-center">
          <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] font-black tracking-tight leading-[1.05] text-[#0d1726] block hover:text-[#144b91] transition-colors duration-500 max-w-5xl mx-auto">
            {locale === "ar"
              ? "مجموعة التغطية الدولية اللوجستية"
              : "International Coverage Logistics"}
          </span>
        </div>

        {/* Bottom Utility Strip */}
        <div className="mt-10 pt-6 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-accent transition-colors">
              {locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              {locale === "ar" ? "الشروط والأحكام" : "Terms & Imprint"}
            </Link>
          </div>
          <p>© {currentYear} International Coverage Logistics (ICL) Holding. {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}</p>
        </div>
      </div>
    </footer>
  );
}