import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/FadeIn";

type Service = {
  num: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

type WhatWeDoProps = {
  services: Service[];
};

export function WhatWeDo({ services }: WhatWeDoProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* Header row */}
        <FadeIn>
          <div className="flex items-end justify-between border-b border-border pb-8">
            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-accent">
                Solutions &amp; Services
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.025em] text-foreground md:text-4xl lg:text-[2.6rem]">
                What We Do
              </h2>
            </div>
            <Link
              href="/services/professional"
              className="hidden items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground md:flex"
            >
              See Details
              <span aria-hidden className="text-xs">↗</span>
            </Link>
          </div>
        </FadeIn>

        {/* Service rows */}
        <div className="divide-y divide-border">
          {services.map((service, i) => (
            <FadeIn key={service.num} delay={i * 0.06}>
              <Link
                href={service.href}
                className="group grid grid-cols-[3rem_1fr] gap-6 py-8 transition-colors hover:bg-surface-elevated/50 md:grid-cols-[3rem_14rem_1fr] md:gap-8 md:px-4"
              >
                {/* Number */}
                <span className="pt-0.5 text-sm font-medium text-muted/60">
                  {service.num}
                </span>

                {/* Title */}
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground">
                  {service.title}
                </p>

                {/* Description + tags */}
                <div className="hidden md:block">
                  <p className="text-sm leading-7 text-muted">{service.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-[11px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
