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
      title: locale === "ar" ? "Ø§Ù„Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ù…Ù‡Ù†ÙŠØ© ÙˆØ¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù…Ø®Ø§Ø·Ø±" : "Professional & Risk Management",
      description:
        locale === "ar"
          ? "Ø­Ù„ÙˆÙ„ Ù…ØªÙƒØ§Ù…Ù„Ø© Ù„Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù…Ø®Ø§Ø·Ø±ØŒ ÙˆÙØ­Øµ Ø§Ù„Ø³Ø¬Ù„Ø§Øª ÙˆØ§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ø®Ù„ÙÙŠØ§ØªØŒ ÙˆÙØ­Øµ Ø§Ù„Ù…ÙˆØ±Ø¯ÙŠÙ† ÙˆØ§Ø³ØªÙ‚Ø·Ø§Ø¨ Ø§Ù„ÙƒÙØ§Ø¡Ø§Øª Ø§Ù„Ù…ØªØ®ØµØµØ© Ù„Ø¯Ø¹Ù… Ø§Ù„Ø£Ø¹Ù…Ø§Ù„."
          : "Comprehensive risk mitigation, executive background checks, vendor due diligence, and specialized staffing solutions.",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/Asset-23.webp`,
      href: "/services/professional",
    },
    {
      num: "02",
      title: locale === "ar" ? "Ø§Ù„Ø¥Ù‚Ø§Ù…Ø© Ø§Ù„ÙÙ†Ø¯Ù‚ÙŠØ© ÙˆÙ…Ø¨ÙŠØª Oyster" : "Oyster Executive Residences",
      description:
        locale === "ar"
          ? "Ø´Ù‚Ù‚ ÙÙ†Ø¯Ù‚ÙŠØ© Ø±Ø§Ù‚ÙŠØ© (Pearl & Sadafa) ÙÙŠ Ù…Ù†Ø·Ù‚Ø© Ø¨ÙˆØ³Ù†Ø© Ø¨Ø·Ø±Ø§Ø¨Ù„Ø³ Ù…Ø¹ ØªÙ…ÙˆÙŠÙ† Ø·Ø§Ø²Ø¬ØŒ ÙƒÙˆÙ†Ø³ÙŠØ±Ø¬ ÙŠÙˆÙ…ÙŠØŒ ØµØ§Ù„Ø© Ù„ÙŠØ§Ù‚Ø© ÙˆØ£Ù…Ù† Ù…ØªÙˆØ§ØµÙ„."
          : "Serviced executive suites in Bouseta, Tripoli, with gourmet catering, daily concierge, scenic rooftop fitness, and 24/7 security.",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/Oyster.webp`,
      href: "/services/hospitality",
    },
    {
      num: "03",
      title: locale === "ar" ? "Ø§Ù„Ù„ÙˆØ¬Ø³ØªÙŠØ§Øª ÙˆØ§Ù„Ø´Ø­Ù† ÙˆØ§Ù„Ø·ÙŠØ±Ø§Ù† Ø§Ù„Ø®Ø§Øµ" : "Global Logistics & Private Aviation",
      description:
        locale === "ar"
          ? "Ø³Ù„Ø§Ø³Ù„ Ø¥Ù…Ø¯Ø§Ø¯ ÙˆØ´Ø­Ù† Ø¨Ø­Ø±ÙŠ ÙˆØ¬ÙˆÙŠ Ù…ØªÙƒØ§Ù…Ù„ØŒ Ø±Ø­Ù„Ø§Øª Ø·ÙŠØ±Ø§Ù† Ø®Ø§ØµØ© Ù„ÙƒØ¨Ø§Ø± Ø§Ù„Ø´Ø®ØµÙŠØ§ØªØŒ ÙˆØªØ·ÙˆÙŠØ± Ø§Ù„Ø¨Ù†ÙŠØ© Ø§Ù„ØªØ­ØªÙŠØ© Ø§Ù„Ø±Ù‚Ù…ÙŠØ©."
          : "Multimodal ocean and air freight forwarding, bespoke private jet charters, and digital business acceleration.",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/Asset-25.webp`,
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
                {locale === "ar" ? "Ø§Ù„Ù‚Ø·Ø§Ø¹Ø§Øª ÙˆØ§Ù„Ø­Ù„ÙˆÙ„" : "Solutions & Capabilities"}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                {locale === "ar" ? "Ù…Ø§ Ù†Ù‚ÙˆÙ… Ø¨Ù‡" : "What We Do"}
              </h2>
            </div>
            <Link
              href="/services/professional"
              className="text-xs font-semibold uppercase tracking-wider text-accent hover:text-accent-dark transition-colors flex items-center gap-1.5"
            >
              <span>{locale === "ar" ? "Ø¹Ø±Ø¶ ÙƒØ§ÙØ© Ø§Ù„Ù‚Ø·Ø§Ø¹Ø§Øª" : "Explore All Sectors"}</span>
              <span>â†—</span>
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
                    <span>{locale === "ar" ? "Ø§Ø³ØªÙƒØ´Ù Ø§Ù„Ù‚Ø·Ø§Ø¹" : "Explore Division"}</span>
                    <span className="text-base transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                      â†’
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