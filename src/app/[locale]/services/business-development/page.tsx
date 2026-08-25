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
    >
      <div>
        <FadeIn>
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {locale === "ar" ? "مجالات تطوير الأعمال" : "Core Development Offerings"}
            </h3>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((key, index) => (
            <FadeIn key={key} delay={index * 0.05}>
              <div className="group h-full rounded-lg border border-border bg-white p-8 shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-full bg-surface-elevated flex items-center justify-center text-accent font-bold text-sm mb-6">
                    0{index + 1}
                  </div>
                  <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {t(`offerings.${key}.title`)}
                  </h4>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
                    {t(`offerings.${key}.description`)}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-accent uppercase tracking-wider">
                  <span>{locale === "ar" ? "حلول متكاملة" : "Tailored Solution"}</span>
                  <span className="text-base transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </ServicePageShell>
  );
}