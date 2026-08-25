"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

export function Footer() {
  const locale = useLocale();
  const contact = useTranslations("contact");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-foreground pt-14 pb-10 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* 4-Column Clean Balanced Grid - Tightly Spaced & Aligned */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 items-start">
          {/* Col 1: Crisp Tight Logo & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-14 sm:h-16 w-52 sm:w-60">
                <Image
                  src="/images/blue_logo_tight.png"
                  alt="ICL Logo"
                  fill
                  className="object-contain object-left rtl:object-right"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-muted max-w-sm">
              {locale === "ar"
                ? "مجموعة التغطية الدولية اللوجستية — حلول متكاملة في سلاسل الإمداد، الضيافة التنفيذية، وتطوير الأعمال."
                : "International Coverage Logistics Holding — Delivering certified supply chains, executive hospitality, and corporate support."}
            </p>
          </div>

          {/* Col 2: Company Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3 lg:ps-2">
            <h4 className="text-sm font-semibold text-foreground">
              {locale === "ar" ? "الشركة" : "Company"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  {locale === "ar" ? "من نحن" : "About Us"}
                </Link>
              </li>
              <li>
                <Link href="/services/professional" className="hover:text-accent transition-colors">
                  {locale === "ar" ? "خدماتنا" : "Our Services"}
                </Link>
              </li>
              <li>
                <Link href="/#network" className="hover:text-accent transition-colors">
                  {locale === "ar" ? "شبكة المجموعة" : "Group Network"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  {locale === "ar" ? "تواصل معنا" : "Contact Us"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Socials (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-foreground">
              {locale === "ar" ? "قنوات التواصل" : "Socials"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-accent transition-colors"
                >
                  <span>LinkedIn</span>
                  <span className="text-xs">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-accent transition-colors"
                >
                  <span>Twitter / X</span>
                  <span className="text-xs">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-accent transition-colors"
                >
                  <span>Instagram</span>
                  <span className="text-xs">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-accent transition-colors"
                >
                  <span>Facebook</span>
                  <span className="text-xs">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-semibold text-foreground">
              {locale === "ar" ? "معلومات الاتصال" : "Contact Information"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted">
              <li className="flex items-center gap-2 text-foreground/85">
                <span className="text-accent text-xs">●</span>
                <a href={`tel:${contact("phone").replace(/\s/g, "")}`} className="hover:text-accent transition-colors font-medium">
                  {contact("phone")}
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/85">
                <span className="text-accent text-xs">●</span>
                <a href={`mailto:${contact("email")}`} className="hover:text-accent transition-colors font-medium">
                  {contact("email")}
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted">
                <span className="text-accent text-xs mt-0.5">●</span>
                <span>{contact("address")}</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-muted/80">
                <span className="text-accent text-xs">●</span>
                <span>{contact("hours")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-6 border-t border-border/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {currentYear} ICL Group. {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}</p>
          <div className="flex items-center gap-4 text-muted">
            <span>Tripoli, Libya</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-accent transition-colors">
              {locale === "ar" ? "الشروط والخصوصية" : "Privacy & Terms"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}