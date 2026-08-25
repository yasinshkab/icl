import { FadeIn } from "@/components/ui/FadeIn";
import { useLocale } from "next-intl";

export function DiscoverICL() {
  const locale = useLocale();

  const metrics = [
    {
      value: "2014",
      label: locale === "ar" ? "سنة التأسيس في طرابلس" : "Founded in Tripoli",
      unit: "",
    },
    {
      value: "05",
      label: locale === "ar" ? "قطاعات تشغيلية متخصصة" : "Core Operating Divisions",
      unit: "+",
    },
    {
      value: "10",
      label: locale === "ar" ? "شركاء وتحالفات دولية" : "Global Strategic Alliances",
      unit: "+",
    },
    {
      value: "100",
      label: locale === "ar" ? "التزام ومعايير معتمدة" : "Certified Compliance Rate",
      unit: "%",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#142d4c] via-[#0f243f] to-[#090d16] text-white py-20 md:py-28 relative overflow-hidden" id="about">
      {/* Subtle Background Accent Lighting */}
      <div className="pointer-events-none absolute inset-0 opacity-15 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-accent/20 blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Centered High-Impact Headline & Concise Overview */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              {locale === "ar" ? "عن المجموعة" : "ABOUT ICL GROUP"}
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              {locale === "ar"
                ? "نقود سلاسل الإمداد والخدمات المؤسسية بتميز"
                : "Engineering Global Logistics & Enterprise Solutions"}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              {locale === "ar"
                ? "نربط الأسواق المحلية والإقليمية بالعالم عبر سلاسل إمداد لوجستية معتمدة، ضيافة تنفيذية فاخرة، وحلول أعمال متكاملة."
                : "Connecting regional and global markets through certified multimodal supply chains, luxury hospitality, and corporate support."}
            </p>
          </FadeIn>
        </div>

        {/* Horizontal Metrics Strip with Vertical Hairline Dividers */}
        <FadeIn delay={0.15}>
          <div className="mt-16 pt-12 border-t border-white/15">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/15 rtl:lg:divide-x-reverse">
              {metrics.map((m) => (
                <div key={m.label} className="text-center px-4 lg:px-8 space-y-1.5">
                  <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                    <span>{m.value}</span>
                    {m.unit && <span className="text-accent text-3xl sm:text-4xl">{m.unit}</span>}
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 font-medium leading-snug">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}