import { setRequestLocale, getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { DiscoverICL } from "@/components/sections/DiscoverICL";
import { GroupNetwork } from "@/components/sections/GroupNetwork";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { ContactForm } from "@/components/sections/ContactForm";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FadeIn } from "@/components/ui/FadeIn";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");

  type Slide = { label: string; description?: string; image: string; href: string };
  let slides: Slide[] = [];
  try {
    slides = t.raw("heroSlides") as Slide[];
  } catch {
    slides = [
      {
        label: "Transportation Solutions",
        description: "Executive private aviation & bespoke jet charter services.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80",
        href: "/services/transportation",
      },
    ];
  }

  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection
        slides={slides}
        cta={t("heroCta")}
        learnMore={t("heroLearnMore")}
      />

      {/* 2. What We Do - 3 Full-Bleed Cards */}
      <ServiceCards />

      {/* 3. About ICL - DP World Style Centered Stats Section */}
      <DiscoverICL />

      {/* 4. Group Network - VistaJet Alternating Story Blocks */}
      <GroupNetwork />

      {/* 5. Strategic Partners Single Dark Marquee */}
      <PartnerMarquee />

      {/* 6. Contact Us Compact Section */}
      <section className="py-14 md:py-20 bg-background" id="contact">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <FadeIn>
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <CtaBanner
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
        button={t("ctaButton")}
        secondaryButton={t("ctaSecondary")}
      />
    </>
  );
}