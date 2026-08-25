import { ServicePageShell } from "@/components/sections/ServicePageShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "@/i18n/navigation";
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

  const services = t.raw("services") as { title: string; items: string[] }[];

  return (
    <ServicePageShell
      title={t("title")}
      description={t("description")}
      body={t("body")}
    >
      {/* Background Checks */}
      <FadeIn>
        <div className="rounded-lg border border-border bg-white p-8 md:p-10 shadow-sm">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {t("bgChecksTitle")}
            </h2>
            <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-muted">
              {t("bgChecksDesc")}
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Verification & Vendor Side-by-Side */}
      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn delay={0.05}>
          <div className="h-full rounded-lg border border-border bg-white p-8 shadow-sm">
            <div className="h-10 w-10 rounded-full bg-surface-elevated flex items-center justify-center text-accent font-bold mb-4">
              01
            </div>
            <h3 className="text-xl font-bold text-foreground">
              {t("verificationTitle")}
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
              {t("verificationDesc")}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="h-full rounded-lg border border-border bg-white p-8 shadow-sm">
            <div className="h-10 w-10 rounded-full bg-surface-elevated flex items-center justify-center text-accent font-bold mb-4">
              02
            </div>
            <h3 className="text-xl font-bold text-foreground">
              {t("vendorTitle")}
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
              {t("vendorDesc")}
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Staff Recruitment Feature Box */}
      <FadeIn delay={0.12}>
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-md grid md:grid-cols-12">
          <div className="relative h-64 md:h-auto md:col-span-5">
            <Image
              src="/images/Asset-23.webp"
              alt="Staff Recruitment"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-12 md:col-span-7 flex flex-col justify-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {t("recruitmentTitle")}
            </h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {t("recruitmentDesc")}
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-[#090d16] text-white hover:bg-accent hover:text-[#090d16] px-7 py-3 text-xs font-semibold uppercase tracking-wider transition-all press-scale"
              >
                {locale === "ar" ? "طلب استشارة توظيف" : "Request Staffing Consultation"}
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Corporate Support Services Grid */}
      <div>
        <FadeIn>
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {locale === "ar" ? "خدمات التيسير والتشغيل المؤسسي" : "Operational Support & Logistics Facilities"}
            </h3>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((svc, i) => (
            <FadeIn key={svc.title} delay={0.08 + i * 0.05}>
              <div className="h-full rounded-lg border border-border bg-white p-7 shadow-sm">
                <h4 className="text-lg font-bold text-foreground mb-4">
                  {svc.title}
                </h4>
                <ul className="space-y-2.5 text-sm text-muted">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
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