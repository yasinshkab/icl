import { ContactForm } from "@/components/sections/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { setRequestLocale, getTranslations } from "next-intl/server";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {t("form.title")}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-muted">
              {t("subtitle")}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}