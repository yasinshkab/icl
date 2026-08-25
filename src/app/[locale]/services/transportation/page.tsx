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
    >
      {/* 4 Core Features Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((key, index) => (
          <FadeIn key={key} delay={index * 0.05}>
            <div className="h-full rounded-lg border border-border bg-white p-8 shadow-sm">
              <div className="h-10 w-10 rounded-full bg-surface-elevated flex items-center justify-center text-accent font-bold text-sm mb-5">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {t(`features.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
                {t(`features.${key}.description`)}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Private Jet Charter Feature */}
      <FadeIn delay={0.12}>
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-md grid md:grid-cols-12">
          <div className="p-8 md:p-12 md:col-span-7 flex flex-col justify-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {t("jetCta")}
            </h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {t("jetCtaDesc")}
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-[#090d16] text-white hover:bg-accent hover:text-[#090d16] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all press-scale"
              >
                {locale === "ar" ? "حجز طائرة خاصة" : "Book Charter Flight"}
              </Link>
            </div>
          </div>
          <div className="relative h-64 md:h-auto md:col-span-5">
            <Image
              src="/images/Asset-25.webp"
              alt="Private Jet Charter"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </FadeIn>

      {/* What Makes Us Special */}
      <div>
        <FadeIn>
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {t("whatMakesSpecial")}
            </h3>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {special.map((key, index) => (
            <FadeIn key={key} delay={0.08 + index * 0.05}>
              <div className="h-full rounded-lg border border-border bg-white p-7 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-foreground">
                    {t(`special.${key}.title`)}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {t(`special.${key}.description`)}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60 text-xs font-semibold text-accent uppercase tracking-wider">
                  Premium Aviation
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </ServicePageShell>
  );
}