import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/FadeIn";

export function LeadershipBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
          alt="ICL headquarters"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0d1f35]/85" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
        <FadeIn>
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">
            Chairman&apos;s Speech
          </p>
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-white md:text-4xl lg:text-[2.6rem]">
            Deeper Understanding. Better Solutions.
          </h2>
          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm font-medium text-white/80 transition-colors hover:border-white hover:text-white"
          >
            Read More
            <span aria-hidden>↗</span>
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm leading-8 text-white/70 md:text-base lg:pt-14">
            At the beginning I would like to welcome you to our website, through which we will
            accompany you through a quick tour of our most important and prominent offers in the
            field of investment and development. The development of the community we want to
            establish is essentially based on a simple equation: man first and innovation,
            providing the general framework for any anticipated development.
          </p>
          <p className="mt-5 text-sm leading-8 text-white/70">
            We are currently processing our strategies to become one of the largest and most
            innovative companies in the world. We strive with enthusiasm and commitment to
            establish a modern solution that affects different sectors, putting most of our
            expertise and qualifications to achieve this goal.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
