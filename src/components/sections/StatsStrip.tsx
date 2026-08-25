import { FadeIn } from "@/components/ui/FadeIn";

type StatItem = {
  value: string;
  label: string;
};

type StatsStripProps = {
  title: string;
  items: StatItem[];
};

export function StatsStrip({ title, items }: StatsStripProps) {
  return (
    <section className="border-b border-border bg-surface/35">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <FadeIn>
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-accent">
            {title}
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.06}>
              <div className="xl:border-s xl:border-border xl:ps-8 xl:first:ps-0 xl:first:border-s-0">
                <p className="text-4xl font-semibold tracking-[-0.04em] text-foreground md:text-5xl">
                  {item.value}
                </p>
                <p className="mt-3 max-w-[18ch] text-sm leading-6 text-muted">{item.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
