import { ContactForm } from "@/components/sections/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <div className="bg-background">
      {/* Hero Banner with High-Resolution Architectural Image & Dark Gradient Overlay */}
      <section className="relative h-[420px] sm:h-[480px] md:h-[520px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85"
          alt="Contact ICL Group"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Corporate Dark Gradient Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#142d4c]/80 to-[#142d4c]/60" />

        {/* Centered Hero Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 text-center space-y-4 pt-16">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              {locale === "ar" ? "تواصل معنا" : "CONTACT US"}
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              {locale === "ar"
                ? "تواصل مع مجموعة التغطية الدولية"
                : "Connect with ICL Group"}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
              {locale === "ar"
                ? "نحن هنا للإجابة على استفساراتكم ومناقشة متطلبات مشاريعكم وشراكاتكم الاستراتيجية."
                : "We are here to answer your inquiries, support your operations, and explore strategic partnerships."}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Section: Direct Contact Form Component */}
      <section className="py-16 md:py-24 bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <FadeIn delay={0.15}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}