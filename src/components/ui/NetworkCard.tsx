import { Link } from "@/i18n/navigation";

type NetworkCardProps = {
  title: string;
  subtitle: string;
  description: string;
  action: string;
  href?: string;
  external?: boolean;
  disabled?: boolean;
};

const cardClassName =
  "group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-transform transition-colors duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:bg-surface-elevated will-change-transform";

export function NetworkCard({
  title,
  subtitle,
  description,
  action,
  href,
  external,
  disabled,
}: NetworkCardProps) {
  const content = (
    <>
      <p className="text-xs uppercase tracking-[0.18em] text-accent">{subtitle}</p>
      <h3 className="mt-3 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{description}</p>
      <span
        className={`mt-6 inline-flex text-sm font-medium ${disabled ? "text-muted" : "text-foreground"}`}
      >
        {action}
      </span>
    </>
  );

  if (disabled || !href) {
    return <div className={`${cardClassName} opacity-80`}>{content}</div>;
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cardClassName}>
      {content}
    </Link>
  );
}
