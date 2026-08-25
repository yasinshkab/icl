import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/FadeIn";

const articles = [
  {
    tag: "Logistics & Operations",
    title: "Strengthening Family-Centered Communities Through Logistics",
    excerpt:
      "We are committed to supporting community infrastructure and financial services day-to-day for families throughout the region. Through strategic planning, we help strengthen community support, build trust, and cooperate with partners for growth.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    href: "/about",
  },
  {
    tag: "Business Development",
    title: "Building Homes That Shape Better Living Across Libya",
    excerpt:
      "Our commitment to transforming thoughts into a better community quality. By combining today's best practices with the wealth of engagement for generations to come, ICL continues to lead in business development and strategic investments.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    href: "/services/business-development",
  },
];

export function NewsInsights() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-accent">
              News &amp; Insights
            </p>
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-foreground md:text-4xl lg:text-[2.6rem]">
              Stay Informed With Our Latest Updates
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-sm leading-8 text-muted md:text-base lg:pt-14">
              Discover the newest developments, industry insights, and company milestones that
              shape our commitment to quality and innovation. These projects highlight our
              perspective, explore our work, and examine our vision for the future.
            </p>
          </FadeIn>
        </div>

        {/* Article cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {articles.map((article, i) => (
            <FadeIn key={article.title} delay={i * 0.08}>
              <Link
                  href={article.href}
                  className="group block overflow-hidden rounded-xl border border-border bg-background transition-shadow transition-colors duration-300 hover:border-border-hover hover:shadow-sm"
                >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                    {article.tag}
                  </p>
                  <h3 className="mb-3 font-semibold leading-snug text-foreground">
                    {article.title}
                  </h3>
                  <p className="text-sm leading-7 text-muted">{article.excerpt}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
