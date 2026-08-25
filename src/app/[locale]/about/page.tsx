import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "@/i18n/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import partners from "@/lib/partners";
import Image from "next/image";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <div className="bg-background">
      {/* 1. Hero Banner with High-Resolution Image & Dark Gradient Overlay */}
      <section className="relative h-[440px] sm:h-[500px] md:h-[540px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Corporate Image */}
        <Image
          src="/images/AboutUs.webp"
          alt="About ICL Group"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Corporate Blue Gradient Overlay for High-Contrast Text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#142d4c]/85 to-[#142d4c]/65" />

        {/* Centered Hero Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 text-center space-y-4 pt-16">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              {locale === "ar" ? "عن المجموعة" : "ABOUT ICL HOLDING"}
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              {t("title")}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
              {t("intro")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Main Content Sections */}
      <div className="py-20 md:py-28 bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 space-y-20 md:space-y-28">
          {/* Chairman's Address Block */}
          <FadeIn>
            <div className="rounded-2xl bg-gradient-to-b from-[#142d4c] via-[#0f243f] to-[#090d16] text-white p-8 sm:p-12 md:p-16 shadow-lg relative overflow-hidden border border-white/10" id="chairman">
              {/* Soft Ambient Background Glow */}
              <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-48 bg-accent/20 blur-[100px] rounded-full" />

              <div className="relative z-10 max-w-3xl space-y-5">
                <span className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold text-accent uppercase tracking-widest inline-block backdrop-blur-md">
                  {t("chairmanTitle")}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug">
                  {t("chairmanSpeech")}
                </h2>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                  {t("commitment")}
                </p>
                <div className="pt-3">
                  <Link
                    href="/contact"
                    className="rounded-md bg-accent text-[#090d16] hover:bg-accent-light px-7 py-3 text-xs font-semibold uppercase tracking-wider transition-all press-scale shadow-xs inline-block"
                  >
                    {locale === "ar" ? "تواصل مع مكتب الإدارة" : "Contact Chairman Office"}
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Vision & Mission Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            <FadeIn delay={0.05}>
              <div className="h-full rounded-xl border border-border bg-[#fafafc] p-8 md:p-10 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  <h3 className="text-2xl font-bold text-foreground">
                    {t("visionTitle")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {(t.raw("visionItems") as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3.5 text-sm sm:text-base text-muted">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white border border-border text-xs font-bold text-foreground mt-0.5 shadow-xs">
                        {i + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="h-full rounded-xl border border-border bg-[#fafafc] p-8 md:p-10 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                    <h3 className="text-2xl font-bold text-foreground">
                      {t("missionTitle")}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-muted">
                    {t("mission")}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs font-semibold text-accent uppercase tracking-wider">
                  <span>Tripoli Headquarters</span>
                  <span>Global Strategic Reach</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Strategic Partners High-Contrast Corporate Showcase */}
          <FadeIn delay={0.15}>
            <div className="rounded-2xl bg-gradient-to-b from-[#142d4c] via-[#0f243f] to-[#090d16] text-white p-8 md:p-14 shadow-lg border border-white/10 relative overflow-hidden">
              {/* Background Ambient Glow */}
              <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-48 bg-accent/20 blur-[100px] rounded-full" />

              <div className="relative z-10 max-w-3xl mb-10 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {locale === "ar" ? "التحالفات الدولية" : "STRATEGIC ALLIANCES"}
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {locale === "ar" ? "شركاء النجاح الاستراتيجيون" : "Our Strategic Partners"}
                </h3>
                <p className="text-sm sm:text-base text-white/75">
                  {locale === "ar"
                    ? "نفخر بالتعاون مع كبرى المؤسسات وشركات الطيران والتأمين والصناعة إقليمياً ودولياً."
                    : "Trusted by leading regional and international aviation, financial, insurance, and industrial leaders."}
                </p>
              </div>

              {/* High-Contrast Partner Logo Grid with Pristine Visibility */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 items-center">
                {partners.map((p) => (
                  <div
                    key={p.name}
                    className="h-28 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center p-5 hover:border-accent/60 hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-xs group"
                  >
                    <img
                      src={p.src}
                      alt={p.name}
                      className="max-h-14 max-w-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}