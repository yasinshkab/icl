import { Link } from "@/i18n/navigation";
import { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
};

export function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-transform transition-colors duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:bg-surface-elevated will-change-transform"
    >
      {icon ? (
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm text-accent">
          {icon}
        </div>
      ) : null}
      <h3 className="mb-3 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mb-6 flex-1 text-sm leading-6 text-muted">{description}</p>
      <span className="text-sm font-medium text-accent transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
        →
      </span>
    </Link>
  );
}
