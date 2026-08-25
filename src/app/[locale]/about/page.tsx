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
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 space-y-20 md:space-y-28">
        {/* Header Block */}
        <FadeIn>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {t("title")}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              {t("intro")}
            </p>
          </div>
        </FadeIn>

        {/* Corporate Image Banner */}
        <FadeIn delay={0.05}>
          <div className="relative h-72 sm:h-96 md:h-[450px] w-full overflow-hidden rounded-xl border border-border shadow-xs">
            <Image
              src="/images/AboutUs.webp"
              alt="About ICL Group"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </FadeIn>

        {/* Chairman's Address Block */}
        <FadeIn delay={0.1}>
          <div className="rounded-xl bg-[#142d4c] text-white p-8 sm:p-12 md:p-16 shadow-md relative overflow-hidden" id="chairman">
            <div className="max-w-3xl space-y-5">
              <span className="rounded-sm bg-white/10 px-3 py-1 text-xs font-semibold text-accent uppercase tracking-widest inline-block">
                {t("chairmanTitle")}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug">
                {t("chairmanSpeech")}
              </h2>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                {t("commitment")}
              </p>
              <div className="pt-2">
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
            <div className="h-full rounded-lg border border-border bg-white p-8 md:p-10 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <h3 className="text-2xl font-bold text-foreground">
                  {t("visionTitle")}
                </h3>
              </div>
              <ul className="space-y-4">
                {(t.raw("visionItems") as string[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-sm sm:text-base text-muted">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-elevated text-xs font-bold text-foreground mt-0.5">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="h-full rounded-lg border border-border bg-white p-8 md:p-10 shadow-xs flex flex-col justify-between">
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
                <span>Global Reach</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Strategic Partners in Full Original Color */}
        <FadeIn delay={0.15}>
          <div className="rounded-xl border border-border bg-white p-8 md:p-12 shadow-xs">
            <div className="max-w-2xl mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                {locale === "ar" ? "شركاؤنا الاستراتيجيون" : "Our Strategic Partners"}
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="h-24 rounded-lg border border-border/80 bg-surface-elevated/40 flex items-center justify-center p-4 hover:border-accent/40 hover:bg-white hover:shadow-xs transition-all duration-200"
                >
                  <img src={p.src} alt={p.name} className="max-h-12 max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}