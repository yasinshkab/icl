import { ServicePageShell } from "@/components/sections/ServicePageShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";

export default async function HospitalityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services.hospitality");

  const amenities = ["equipped", "hospitality", "security", "parking"] as const;

  return (
    <ServicePageShell
      title={t("title")}
      description={t("description")}
      body={t("body")}
      heroImage="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=85"
      heroTag={locale === "ar" ? "خدمات الضيافة والإقامة" : "Hospitality Services"}
    >
      {/* Property Overview Side-by-Side (Editorial Style) */}
      <FadeIn>
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-md grid md:grid-cols-2">
          <div className="relative h-72 md:h-auto">
            <Image
              src="/images/Oyster.webp"
              alt="Oyster Guest House"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-10 md:p-14 flex flex-col justify-center bg-[#fafafc]">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 relative">
              <span className="relative z-10">{t("propertyTitle")}</span>
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full" />
            </h3>
            <p className="text-base leading-relaxed text-muted font-medium">
              {t("propertyDetails")}
            </p>
            <div className="mt-8 pt-6 border-t border-border flex gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">680m²</p>
                <p className="text-xs uppercase tracking-wider text-muted">Property</p>
              </div>
              <div className="w-px bg-border mx-2" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">530m²</p>
                <p className="text-xs uppercase tracking-wider text-muted">Living Space</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Premium Amenities Grid */}
      <div className="pt-8">
        <FadeIn>
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {locale === "ar" ? "المرافق والخدمات المتميزة" : "Premium Amenities & Services"}
            </h3>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {amenities.map((key, index) => (
            <FadeIn key={key} delay={0.05 * index}>
              <div className="h-full rounded-xl border border-border bg-white p-8 md:p-10 shadow-sm flex flex-col hover:border-accent/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-[#142d4c] flex items-center justify-center text-accent font-bold shadow-sm">
                    0{index + 1}
                  </div>
                  <h4 className="text-xl font-bold text-foreground">
                    {t(`amenities.${key}.title`)}
                  </h4>
                </div>
                <ul className="space-y-3.5 mt-auto">
                  {(t.raw(`amenities.${key}.items`) as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-muted font-medium">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-xs mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </ServicePageShell>
  );
}