import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "@/i18n/navigation";
import { ReactNode } from "react";

type ServicePageShellProps = {
  title: string;
  description: string;
  body: string;
  children?: ReactNode;
};

export function ServicePageShell({
  title,
  description,
  body,
  children,
}: ServicePageShellProps) {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header Block */}
        <FadeIn>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              <span>ICL Divisions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              {description}
            </p>
          </div>
        </FadeIn>

        {/* Intro Highlight Box */}
        {body ? (
          <FadeIn delay={0.05}>
            <div className="rounded-lg border border-border bg-white p-6 sm:p-8 md:p-10 shadow-sm mb-12">
              <p className="text-base sm:text-lg leading-relaxed text-foreground/85 font-normal">
                {body}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#0d121c] text-white hover:bg-accent hover:text-[#0d121c] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all press-scale shadow-sm"
                >
                  Inquire Now
                </Link>
                <Link
                  href="/#network"
                  className="text-xs font-semibold text-muted hover:text-foreground uppercase tracking-wider transition-colors"
                >
                  Group Network →
                </Link>
              </div>
            </div>
          </FadeIn>
        ) : null}

        {/* Child Components */}
        {children ? <div className="space-y-12">{children}</div> : null}
      </div>
    </div>
  );
}
