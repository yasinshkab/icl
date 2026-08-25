import { ServicePageShell } from "@/components/sections/ServicePageShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";

const serviceImages = [
  { src: "/images/3_1.webp", label: "Container Shipping & Port Operations" },
  { src: "/images/2_1.webp", label: "Freight Forwarding & Customs Clearance" },
  { src: "/images/1_1.webp", label: "Multimodal Ground & Air Cargo" },
];

export default async function LogisticsServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services.logistics");

  return (
    <ServicePageShell
      title={t("title")}
      description={t("description")}
      body={t("body")}
    >
      {/* 3 Visual Service Image Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {serviceImages.map((img, i) => (
          <FadeIn key={img.src} delay={i * 0.06}>
            <div className="group relative h-80 w-full overflow-hidden rounded-lg border border-border shadow-sm">
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 start-6 end-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                  0{i + 1}
                </span>
                <p className="text-base font-bold mt-1 leading-snug">
                  {img.label}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Shipment Feature */}
      <FadeIn delay={0.12}>
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-md grid md:grid-cols-12">
          <div className="relative h-64 md:h-auto md:col-span-5">
            <Image
              src="/images/Side.webp"
              alt="Global Freight Shipping"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-12 md:col-span-7 flex flex-col justify-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {t("shipmentTitle")}
            </h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {t("shipmentDesc")}
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-[#090d16] text-white hover:bg-accent hover:text-[#090d16] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all press-scale"
              >
                {locale === "ar" ? "طلب تسعير شحنة" : "Request Freight Quote"}
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </ServicePageShell>
  );
}