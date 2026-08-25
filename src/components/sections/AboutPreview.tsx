import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/FadeIn";

type AboutPreviewProps = {
  label: string;
  heading: string;
  body: string;
  discover: string;
  coreValuesLabel: string;
  coreValues: string;
};

const stats = [
  { value: "2014", label: "Year Established in Tripoli, Libya" },
  { value: "5+", label: "Service Areas & Divisions" },
  { value: "10+", label: "Strategic Partners Worldwide" },
];

export function AboutPreview({
  label,
  heading,
  body,
  discover,
}: AboutPreviewProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* Top: two-column */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.28em] text-accent">
              {label}
            </p>
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-foreground md:text-4xl lg:text-[2.6rem]">
              {heading}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex h-full flex-col justify-between gap-8 lg:pt-16">
              <p className="text-sm leading-8 text-muted md:text-base">{body}</p>
              <Link
                href="/about"
                className="group inline-flex w-fit items-center gap-2 border-b border-foreground/20 pb-1 text-sm font-medium text-foreground transition-colors hover:border-foreground"
              >
                {discover}
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Stats row */}
        <FadeIn delay={0.15}>
          <div className="mt-16 grid grid-cols-3 gap-0 border-t border-border pt-10">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-0 ${i > 0 ? "border-s border-border ps-8 lg:ps-12" : ""}`}
              >
                <p className="text-3xl font-semibold tracking-[-0.04em] text-foreground md:text-4xl lg:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 max-w-[16ch] text-xs leading-5 text-muted md:text-sm md:leading-6">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Full-width image divider */}
      <div className="h-[320px] w-full overflow-hidden md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80"
          alt="ICL team collaboration"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
