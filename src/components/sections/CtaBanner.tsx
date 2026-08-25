import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { useLocale } from "next-intl";

type CtaBannerProps = {
  title: string;
  subtitle: string;
  button: string;
  secondaryButton?: string;
};

export function CtaBanner({
  title,
  subtitle,
  button,
}: CtaBannerProps) {
  const locale = useLocale();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#142d4c] via-[#0d2139] to-[#090d16] text-white px-6 py-16 sm:px-12 sm:py-20 md:px-16 md:py-20 shadow-md text-center">
            {/* Ambient Curves */}
            <div className="pointer-events-none absolute inset-0 opacity-10 overflow-hidden">
              <svg
                className="absolute -top-24 -left-24 w-[140%] h-[180%] stroke-white/40"
                viewBox="0 0 1000 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-100,300 C200,100 400,500 800,200 C1000,50 1100,400 1200,300"
                  strokeWidth="2.5"
                  strokeDasharray="8 6"
                />
                <path
                  d="M-50,450 C300,250 500,550 900,350 C1050,200 1150,500 1250,400"
                  strokeWidth="3.5"
                />
              </svg>
            </div>

            {/* Content Column */}
            <div className="relative z-10 mx-auto max-w-2xl space-y-5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.14]">
                {title}
              </h2>
              <p className="mx-auto max-w-xl text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                {subtitle}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="rounded-md bg-white text-[#090d16] hover:bg-accent hover:text-[#090d16] px-8 py-3 text-xs font-semibold uppercase tracking-wider transition-all press-scale shadow-sm"
                >
                  {button}
                </Link>
                <Link
                  href="/services/professional"
                  className="rounded-md border border-white/25 bg-white/5 backdrop-blur-sm text-white hover:bg-white/15 px-7 py-3 text-xs font-semibold uppercase tracking-wider transition-all press-scale"
                >
                  {locale === "ar" ? "استكشف الخدمات" : "Our Services"}
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}