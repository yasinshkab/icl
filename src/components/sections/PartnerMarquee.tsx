import partners from "@/lib/partners";
import { useTranslations, useLocale } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";

export function PartnerMarquee() {
  const t = useTranslations("home");
  const locale = useLocale();
  // Duplicate 4 times to ensure continuous seamless looping with large spacing
  const marqueeItems = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="bg-gradient-to-b from-[#142d4c] via-[#0f243f] to-[#090d16] text-white py-20 md:py-28 relative overflow-hidden" id="partners">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">
              {locale === "ar" ? "الشركاء والعملاء" : "Strategic Alliances"}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {t("partnersTitle")}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/80">
              {t("partnersSubtitle")}
            </p>
          </div>
        </FadeIn>

        {/* Clean Infinite Seamless Carousel without Artificial Side Masks */}
        <div className="relative overflow-hidden py-4">
          <div className="animate-marquee items-center gap-16 sm:gap-24 md:gap-32 px-8">
            {marqueeItems.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="flex h-24 sm:h-28 md:h-32 w-48 sm:w-60 md:w-72 shrink-0 items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={p.src}
                  alt={p.name}
                  className="max-h-20 sm:max-h-24 md:max-h-28 w-auto max-w-full object-contain drop-shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}