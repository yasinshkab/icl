import { ServicePageShell } from "@/components/sections/ServicePageShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";

export default async function TransportationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services.transportation");

  const features = ["service", "flexibility", "peace", "convenience"] as const;
  const special = ["health", "experience", "value"] as const;

  return (
    <ServicePageShell
      title={t("title")}
      description={t("description")}
      body={t("body")}
      heroImage="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1920&q=85"
      heroTag={locale === "ar" ? "حلول النقل والطيران" : "Transportation Solutions"}
    >
      {/* 4 Core Features Premium Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((key, index) => (
          <FadeIn key={key} delay={index * 0.05}>
            <div className="h-full rounded-xl border border-border bg-white p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 text-6xl font-bold text-accent/5 select-none pointer-events-none group-hover:text-accent/10 transition-colors">
                0{index + 1}
              </div>
              <div className="h-12 w-12 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-accent font-bold text-base mb-6 shadow-sm">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-foreground relative z-10">
                {t(`features.${key}.title`)}
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted relative z-10">
                {t(`features.${key}.description`)}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Private Jet Charter Feature Block (Dark Premium Theme) */}
      <FadeIn delay={0.12}>
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#142d4c] via-[#0f243f] to-[#090d16] border border-white/10 shadow-2xl grid md:grid-cols-12 relative text-white">
          <div className="p-10 md:p-14 md:col-span-7 flex flex-col justify-center space-y-6 relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              {t("jetCta")}
            </h3>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-lg">
              {t("jetCtaDesc")}
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-accent text-[#090d16] hover:bg-white hover:text-[#090d16] px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl press-scale"
              >
                {locale === "ar" ? "حجز رحلة طيران خاصة" : "Book Charter Flight"}
              </Link>
            </div>
          </div>
          <div className="relative h-64 md:h-auto md:col-span-5 hidden md:block">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/Asset-25.webp`}
              alt="Private Jet Charter"
              fill
              className="object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f243f] via-transparent to-transparent" />
          </div>
        </div>
      </FadeIn>

      {/* What Makes Us Special */}
      <div className="pt-8">
        <FadeIn>
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Executive Aviation
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {t("whatMakesSpecial")}
            </h3>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {special.map((key, index) => (
            <FadeIn key={key} delay={0.08 + index * 0.05}>
              <div className="h-full rounded-xl border border-border bg-white p-8 shadow-sm flex flex-col justify-between hover:border-accent/40 transition-colors">
                <div>
                  <h4 className="text-lg font-bold text-foreground">
                    {t(`special.${key}.title`)}
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {t(`special.${key}.description`)}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-border flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Premium Standard
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </ServicePageShell>
  );
}