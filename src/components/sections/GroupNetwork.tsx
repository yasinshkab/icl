import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

export function GroupNetwork() {
  const t = useTranslations("home");
  const net = useTranslations("network");
  const locale = useLocale();

  const entities = [
    {
      id: "al-nakhla",
      title: net("alNakhla.title"),
      eyebrow: locale === "ar" ? "الخدمات المالية والصرافة" : "FINANCIAL & EXCHANGE SERVICES",
      description: net("alNakhla.description"),
      action: net("alNakhla.action"),
      href: "https://alnakhlaxc.ly/",
      external: true,
      image: "/images/currency-exchange.jpg",
      imageAlt: "Al Nakhla Financial & Currency Exchange",
    },
    {
      id: "oyster",
      title: net("oyster.title"),
      eyebrow: locale === "ar" ? "الضيافة الفندقية الفاخرة" : "EXECUTIVE HOSPITALITY & RESIDENCES",
      description: net("oyster.description"),
      action: net("oyster.action"),
      href: "/services/hospitality",
      image: "/images/Oyster.webp",
      imageAlt: "Oyster Guest House Luxury Suites",
    },
    {
      id: "logistics",
      title: net("logisticsAviation.title"),
      eyebrow: locale === "ar" ? "الشحن الدولي والطيران الخاص" : "GLOBAL FREIGHT & PRIVATE AVIATION",
      description: net("logisticsAviation.description"),
      action: net("logisticsAviation.action"),
      href: "/services/logistics",
      image: "/images/Side.webp",
      imageAlt: "ICL Logistics & Freight Operations",
    },
    {
      id: "contracting",
      title: net("contracting.title"),
      eyebrow: locale === "ar" ? "المقاولات العامة والبنية التحتية" : "INFRASTRUCTURE & GENERAL CONTRACTING",
      description: net("contracting.description"),
      action: net("contracting.action"),
      href: "#",
      disabled: true,
      image: "/images/Development.webp",
      imageAlt: "ICL General Contracting & Infrastructure",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 border-b border-border" id="network">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">
              {locale === "ar" ? "منظومة المجموعة" : "Holding Ecosystem & Subsidiaries"}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {t("networkTitle")}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted">
              {t("networkSubtitle")}
            </p>
          </div>
        </FadeIn>

        {/* VistaJet Style Alternating Story Blocks */}
        <div className="space-y-16 md:space-y-24">
          {entities.map((item, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <FadeIn key={item.id} delay={0.06}>
                <div className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-12 items-center">
                  {/* Image Column */}
                  <div
                    className={`md:col-span-6 ${
                      isEven ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden rounded-xl border border-border shadow-xs group">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`md:col-span-6 space-y-4 ${
                      isEven ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      {item.eyebrow}
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-muted leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-3">
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md bg-[#090d16] text-white hover:bg-accent hover:text-[#090d16] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all press-scale shadow-xs"
                        >
                          <span>{item.action}</span>
                          <span>↗</span>
                        </a>
                      ) : item.disabled ? (
                        <span className="inline-block rounded-md bg-surface-elevated text-muted px-5 py-2 text-xs font-semibold uppercase tracking-wider border border-border">
                          {item.action}
                        </span>
                      ) : (
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-2 rounded-md bg-[#090d16] text-white hover:bg-accent hover:text-[#090d16] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all press-scale shadow-xs"
                        >
                          <span>{item.action}</span>
                          <span>→</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}