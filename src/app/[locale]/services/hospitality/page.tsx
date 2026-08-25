import { ServicePageShell } from "@/components/sections/ServicePageShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";

const amenityKeys = ["equipped", "hospitality", "security", "parking"] as const;

export default async function HospitalityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services.hospitality");

  const apartments = [
    {
      name: locale === "ar" ? "شقة Pearl" : "Pearl Apartment",
      size: "60 m²",
      floor: locale === "ar" ? "الطابق الأول" : "First Floor",
      features:
        locale === "ar"
          ? ["غرفة نوم رئيسية فاخرة", "صالة معيشة مجهزة", "مطبخ متكامل", "إطلالة بحرية"]
          : ["Master executive bedroom", "Fully furnished living room", "Fitted kitchenette", "Sea view"],
      image: "/images/Oyster-1.webp",
    },
    {
      name: locale === "ar" ? "شقة Sadafa" : "Sadafa Apartment",
      size: "65 m²",
      floor: locale === "ar" ? "الطابق الثاني" : "Second Floor",
      features:
        locale === "ar"
          ? ["جناح تنفيذي متكامل", "صالة استقبال واسعة", "شرفة خاصة", "تجهيزات كونسيرج"]
          : ["Executive luxury suite", "Spacious reception lounge", "Private terrace access", "Concierge setup"],
      image: "/images/Housing.webp",
    },
  ];

  return (
    <ServicePageShell
      title={t("title")}
      description={t("description")}
      body={t("body")}
    >
      {/* Hero Property Showcase */}
      <FadeIn>
        <div className="relative h-[360px] sm:h-[460px] md:h-[520px] w-full overflow-hidden rounded-2xl border border-border shadow-lg">
          <Image
            src="/images/Oyster.webp"
            alt="Oyster Guest House Residence Tripoli"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          <div className="absolute bottom-6 start-6 md:bottom-10 md:start-10 text-white max-w-xl">
            <span className="rounded-sm bg-accent px-3 py-1 text-xs font-bold text-black uppercase tracking-wider">
              Bouseta, Tripoli
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
              Oyster Residency &amp; Executive Suites
            </h2>
            <p className="text-sm sm:text-base text-white/85 mt-2">
              {t("propertyDetails")}
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Suites Grid */}
      <div>
        <FadeIn>
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {locale === "ar" ? "شقق Pearl & Sadafa" : "Pearl & Sadafa Residences"}
            </h3>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {apartments.map((apt, idx) => (
            <FadeIn key={apt.name} delay={idx * 0.08}>
              <div className="group overflow-hidden rounded-lg border border-border bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={apt.image}
                    alt={apt.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 end-4 rounded-full bg-black/70 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-white">
                    {apt.size} • {apt.floor}
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h4 className="text-xl font-bold text-foreground">{apt.name}</h4>
                  <ul className="mt-4 space-y-2">
                    {apt.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-muted">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {locale === "ar" ? "مجهزة بالكامل" : "Fully Furnished"}
                    </span>
                    <Link
                      href="/contact"
                      className="rounded-full bg-[#090d16] text-white hover:bg-accent hover:text-[#090d16] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      {locale === "ar" ? "حجز إقامة" : "Book Suite"}
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Property Amenities */}
      <div>
        <FadeIn>
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {t("propertyTitle")}
            </h3>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenityKeys.map((key, index) => (
            <FadeIn key={key} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-border bg-white p-7 shadow-sm">
                <div className="h-10 w-10 rounded-full bg-surface-elevated flex items-center justify-center text-accent mb-5 font-bold text-sm">
                  0{index + 1}
                </div>
                <h4 className="text-lg font-bold text-foreground">
                  {t(`amenities.${key}.title`)}
                </h4>
                <ul className="mt-4 space-y-2 text-sm text-muted leading-relaxed">
                  {(t.raw(`amenities.${key}.items`) as string[]).map((item: string) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Catering & Hospitality Feature */}
      <FadeIn delay={0.12}>
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-md grid md:grid-cols-12">
          <div className="relative h-64 md:h-auto md:col-span-5">
            <Image
              src="/images/Catering.webp"
              alt="Oyster Catering"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-12 md:col-span-7 flex flex-col justify-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {locale === "ar" ? "تموين طازج وخدمة كونسيرج يومية" : "Gourmet Catering & Daily Concierge"}
            </h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {locale === "ar"
                ? "نوفر لنزلاء Oyster وجبات فطور وغداء فاخرة محضرة بعناية، خدمة تنظيف وتدبير فندقي يومي، صالة لياقة بدنية على السطح، وأمن مدار الساعة لضمان إقامة هادئة ومنتجة."
                : "Providing Oyster residents with carefully curated gourmet dining, daily housekeeping, a scenic rooftop gym, and 24/7 safety to ensure a peaceful and productive executive stay."}
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-[#090d16] text-white hover:bg-accent hover:text-[#090d16] px-7 py-3 text-xs font-semibold uppercase tracking-wider transition-all press-scale"
              >
                {locale === "ar" ? "تواصل لحجز الإقامة" : "Contact For Booking"}
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </ServicePageShell>
  );
}