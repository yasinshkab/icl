"use client";

import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { useLocale } from "next-intl";
import Image from "next/image";

export function ServiceCards() {
  const locale = useLocale();

  const pillars = [
    {
      num: "01",
      title: locale === "ar" ? "الخدمات المهنية وإدارة المخاطر" : "Professional & Risk Management",
      description:
        locale === "ar"
          ? "حلول متكاملة لإدارة المخاطر، وفحص السجلات والتحقق من الخلفيات، وفحص الموردين واستقطاب الكفاءات المتخصصة لدعم الأعمال."
          : "Comprehensive risk mitigation, executive background checks, vendor due diligence, and specialized staffing solutions.",
      image: "/images/Asset-23.webp",
      href: "/services/professional",
    },
    {
      num: "02",
      title: locale === "ar" ? "الإقامة الفندقية ومبيت Oyster" : "Oyster Executive Residences",
      description:
        locale === "ar"
          ? "شقق فندقية راقية (Pearl & Sadafa) في منطقة بوسنة بطرابلس مع تموين طازج، كونسيرج يومي، صالة لياقة وأمن متواصل."
          : "Serviced executive suites in Bouseta, Tripoli, with gourmet catering, daily concierge, scenic rooftop fitness, and 24/7 security.",
      image: "/images/Oyster.webp",
      href: "/services/hospitality",
    },
    {
      num: "03",
      title: locale === "ar" ? "اللوجستيات والشحن والطيران الخاص" : "Global Logistics & Private Aviation",
      description:
        locale === "ar"
          ? "سلاسل إمداد وشحن بحري وجوي متكامل، رحلات طيران خاصة لكبار الشخصيات، وتطوير البنية التحتية الرقمية."
          : "Multimodal ocean and air freight forwarding, bespoke private jet charters, and digital business acceleration.",
      image: "/images/Asset-25.webp",
      href: "/services/logistics",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 border-b border-border" id="services">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">
                {locale === "ar" ? "القطاعات والحلول" : "Solutions & Capabilities"}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                {locale === "ar" ? "ما نقوم به" : "What We Do"}
              </h2>
            </div>
            <Link
              href="/services/professional"
              className="text-xs font-semibold uppercase tracking-wider text-accent hover:text-accent-dark transition-colors flex items-center gap-1.5"
            >
              <span>{locale === "ar" ? "عرض كافة القطاعات" : "Explore All Sectors"}</span>
              <span>↗</span>
            </Link>
          </div>
        </FadeIn>

        {/* Clean 3 Full-Bleed Image Cards with Sleek Minimalist Structure */}
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((card, idx) => (
            <FadeIn key={card.num} delay={idx * 0.08}>
              <Link
                href={card.href}
                className="group relative flex flex-col justify-between min-h-[460px] sm:min-h-[500px] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-border/80 transition-all duration-300 p-8 text-white"
              >
                {/* 1. Full Background Image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* 2. Color Gradient Tint Layers */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/80 to-[#090d16]/30 group-hover:via-[#090d16]/75 transition-all duration-300" />
                <div className="absolute inset-0 bg-[#163b63]/25 mix-blend-multiply pointer-events-none" />

                {/* Accent Top Hairline on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* 3. Top Content: Only the Elegant Number */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-sm font-bold text-accent tracking-widest">
                    {card.num}
                  </span>
                </div>

                {/* 4. Bottom Content: Title, Description & Action Link */}
                <div className="relative z-10 space-y-4 pt-12">
                  <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-accent transition-colors leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-sm text-white/80 leading-relaxed font-normal">
                    {card.description}
                  </p>

                  {/* Action Link Strip */}
                  <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-accent group-hover:text-accent-light transition-colors">
                    <span>{locale === "ar" ? "استكشف القطاع" : "Explore Division"}</span>
                    <span className="text-base transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}