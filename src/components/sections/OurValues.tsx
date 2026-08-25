import { FadeIn } from "@/components/ui/FadeIn";

type Value = {
  icon: string;
  title: string;
  description: string;
};

type OurValuesProps = {
  values: Value[];
};

export function OurValues({ values }: OurValuesProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* Two-column header */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-accent">
              Our Value
            </p>
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-foreground md:text-4xl lg:text-[2.6rem]">
              The Foundation Of Our Commitment
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-sm leading-8 text-muted md:text-base lg:pt-16">
              At ICL, we believe that trust, innovation, and responsibility are the cornerstones of
              financial security. Our values guide us in delivering transformative and building a
              better future for our customers.
            </p>
          </FadeIn>
        </div>

        {/* Value cards */}
        <div className="mt-16 grid gap-6 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.07}>
              <div className="flex flex-col gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-lg">
                  {v.icon}
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.06em] text-foreground">
                  {v.title}
                </h3>
                <p className="text-sm leading-7 text-muted">{v.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
