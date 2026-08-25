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
      heroImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=85"
      heroTag={locale === "ar" ? "الخدمات اللوجستية" : "Logistics Services"}
    >
      {/* 3 Visual Service Image Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {serviceImages.map((img, i) => (
          <FadeIn key={img.src} delay={i * 0.06}>
            <div className="group relative w-full overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-[#090d16]">
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeIn>
        ))}
      </div>

      {/* High-Impact Shipment Feature */}
      <FadeIn delay={0.12}>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#142d4c] via-[#0f243f] to-[#090d16] text-white shadow-2xl grid md:grid-cols-12 relative">
          <div className="p-10 md:p-14 md:col-span-7 flex flex-col justify-center space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur-md w-fit">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>Global Reach</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              {t("shipmentTitle")}
            </h3>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              {t("shipmentDesc")}
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-accent text-[#090d16] hover:bg-accent-light px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl press-scale"
              >
                {locale === "ar" ? "طلب تسعير شحنة" : "Request Freight Quote"}
              </Link>
            </div>
          </div>
          <div className="relative h-64 md:h-auto md:col-span-5 hidden md:block">
            <Image
              src="/images/Side.webp"
              alt="Global Freight Shipping"
              fill
              className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f243f] via-transparent to-transparent" />
          </div>
        </div>
      </FadeIn>
    </ServicePageShell>
  );
}