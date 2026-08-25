import { FadeIn } from "@/components/ui/FadeIn";

type TeamMember = {
  name: string;
  title: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: "Mohamed Al-Sharif",
    title: "Founder & Chairman",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Khalid Ibrahim",
    title: "Chief Operations Officer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tariq Mansour",
    title: "Head of Business Development",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
];

export function TeamSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-accent">
              Our Team
            </p>
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-foreground md:text-4xl lg:text-[2.6rem]">
              Faces Behind ICL
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-sm leading-8 text-muted md:text-base lg:pt-14">
              Our leadership brings decades of expertise in risk management, strategic insight,
              and client-value maximization — the team that makes ICL exceptional.
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.08}>
              <div className="group overflow-hidden rounded-xl border border-border bg-white">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-5 py-4">
                  <p className="font-semibold text-foreground">{member.name}</p>
                  <p className="mt-1 text-sm text-muted">{member.title}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
