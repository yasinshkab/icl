import { ServicePageShell } from "@/components/sections/ServicePageShell";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";

export default async function ProfessionalServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services.professional");

  const services = (
    t.raw("services") as { title: string; items: string[] }[]
  ).map((svc) => ({
    title: svc.title,
    items: svc.items,
  }));

  return (
    <ServicePageShell
      title={t("title")}
      description={t("description")}
      body={t("body")}
      heroImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=85"
      heroTag={locale === "ar" ? "الخدمات المهنية والمؤسسية" : "Professional Services"}
    >
      {/* Background Checks Feature - High Contrast Dark Block */}
      <FadeIn>
        <div className="overflow-hidden rounded-2xl bg-[#142d4c] text-white shadow-xl grid md:grid-cols-12">
          <div className="relative h-64 md:h-auto md:col-span-5 hidden md:block">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/Development.webp`}
              alt="Background Checks"
              fill
              className="object-cover opacity-80 mix-blend-luminosity"
            />
          </div>
          <div className="p-10 md:p-14 md:col-span-7 flex flex-col justify-center space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Risk Management
            </p>
            <h2 className="text-3xl font-bold text-white">
              {t("bgChecksTitle")}
            </h2>
            <p className="text-base leading-relaxed text-white/80 max-w-lg">
              {t("bgChecksDesc")}
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Verification & Vendor Side-by-Side Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn delay={0.05}>
          <div className="h-full rounded-xl border border-border bg-white p-10 shadow-sm relative overflow-hidden group hover:border-accent/40 transition-colors">
            <div className="h-12 w-12 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-accent font-bold mb-6 shadow-sm">
              01
            </div>
            <h3 className="text-xl font-bold text-foreground relative z-10">
              {t("verificationTitle")}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted relative z-10">
              {t("verificationDesc")}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="h-full rounded-xl border border-border bg-white p-10 shadow-sm relative overflow-hidden group hover:border-accent/40 transition-colors">
            <div className="h-12 w-12 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-accent font-bold mb-6 shadow-sm">
              02
            </div>
            <h3 className="text-xl font-bold text-foreground relative z-10">
              {t("vendorTitle")}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted relative z-10">
              {t("vendorDesc")}
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Staff Recruitment Feature Box */}
      <FadeIn delay={0.12}>
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-md grid md:grid-cols-12">
          <div className="p-10 md:p-14 md:col-span-7 flex flex-col justify-center space-y-5 bg-[#fafafc]">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Talent Acquisition
            </p>
            <h3 className="text-3xl font-bold text-foreground">
              {t("recruitmentTitle")}
            </h3>
            <p className="text-base text-muted leading-relaxed max-w-lg">
              {t("recruitmentDesc")}
            </p>
          </div>
          <div className="relative h-64 md:h-auto md:col-span-5 hidden md:block">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/Asset-23.webp`}
              alt="Staff Recruitment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </FadeIn>

      {/* Corporate Support Services Grid */}
      <div className="pt-8">
        <FadeIn>
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {locale === "ar" ? "خدمات الدعم اللوجستي والتشغيلي" : "Operational Support & Logistics Facilities"}
            </h3>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((svc, i) => (
            <FadeIn key={svc.title} delay={0.08 + i * 0.05}>
              <div className="h-full rounded-xl border border-border bg-white p-8 md:p-10 shadow-sm">
                <h4 className="text-xl font-bold text-foreground mb-6 pb-4 border-b border-border/60">
                  {svc.title}
                </h4>
                <ul className="space-y-3.5 text-base text-muted font-medium">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
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