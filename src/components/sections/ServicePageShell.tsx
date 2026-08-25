import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "@/i18n/navigation";
import { ReactNode } from "react";
import Image from "next/image";

type ServicePageShellProps = {
  title: string;
  description: string;
  body: string;
  heroImage: string;
  heroTag: string;
  children?: ReactNode;
};

export function ServicePageShell({
  title,
  description,
  body,
  heroImage,
  heroTag,
  children,
}: ServicePageShellProps) {
  return (
    <div className="bg-background">
      {/* 1. Hero Banner with High-Resolution Image & Dark Gradient Overlay */}
      <section className="relative h-[440px] sm:h-[500px] md:h-[540px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Corporate Image */}
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Corporate Blue Gradient Overlay for High-Contrast Text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#142d4c]/85 to-[#142d4c]/65" />

        {/* Centered Hero Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 text-center space-y-4 pt-16">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              {heroTag}
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              {title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <div className="py-20 md:py-28 bg-[#fafafc] border-b border-border">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 space-y-20 md:space-y-24">
          
          {/* Intro Narrative Highlight */}
          {body ? (
            <FadeIn delay={0.05}>
              <div className="rounded-2xl border border-border bg-white p-8 sm:p-10 md:p-14 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-10">
                <div className="max-w-2xl">
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground font-medium">
                    {body}
                  </p>
                </div>
                <div className="flex shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#142d4c] text-white hover:bg-accent hover:text-[#090d16] px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all press-scale shadow-md"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            </FadeIn>
          ) : null}

          {/* Service-Specific Content */}
          {children ? <div className="space-y-20">{children}</div> : null}
        </div>
      </div>
    </div>
  );
}