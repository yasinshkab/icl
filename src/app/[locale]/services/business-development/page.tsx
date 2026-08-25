import { ServicePageShell } from "@/components/sections/ServicePageShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { setRequestLocale, getTranslations } from "next-intl/server";

export default async function BusinessDevelopmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services.businessDevelopment");

  const offerings = [
    "webDesign",
    "seo",
    "ppc",
    "consulting",
    "onlineMarketing",
    "branding",
  ] as const;

  return (
    <ServicePageShell
      title={t("title")}
      description={t("description")}
      body={t("body")}
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85"
      heroTag={locale === "ar" ? "تطوير الأعمال" : "Business Development"}
    >
      {/* Strategic Offerings 3-Column Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offerings.map((key, index) => (
          <FadeIn key={key} delay={index * 0.05}>
            <div className="group h-full rounded-xl border border-border bg-white p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
              
              {/* Animated Accent Line Top */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
              
              <div>
                <div className="h-12 w-12 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-accent font-bold mb-6 shadow-sm">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {t(`offerings.${key}.title`)}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-muted font-medium">
                  {t(`offerings.${key}.description`)}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="h-1 w-4 rounded-full bg-accent" />
                Strategic Initiative
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </ServicePageShell>
  );
}