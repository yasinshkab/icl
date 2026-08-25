"use client";

import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const info = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setError((body && body.error) || "send_error");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("network_error");
    } finally {
      setLoading(false);
    }
  }

  const subjects = [
    { value: "professional", label: t("subjects.professional") },
    { value: "hospitality", label: t("subjects.hospitality") },
    { value: "businessDevelopment", label: t("subjects.businessDevelopment") },
    { value: "transportation", label: t("subjects.transportation") },
    { value: "logistics", label: t("subjects.logistics") },
    { value: "general", label: t("subjects.general") },
  ];

  return (
    <div className="rounded-xl bg-white p-6 sm:p-8 md:p-12 shadow-sm border border-border">
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Left Column: Contact Information */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              {info("title")}
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              {info("subtitle")}
            </p>

            {/* Information List with Direct Clean Colored Icons (No Box Container) */}
            <div className="space-y-4 pt-4 text-sm">
              <div className="flex items-center gap-3 text-foreground/90">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${info("phone").replace(/\s/g, "")}`} className="hover:text-accent transition-colors font-medium">
                  {info("phone")}
                </a>
              </div>

              <div className="flex items-center gap-3 text-foreground/90">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${info("email")}`} className="hover:text-accent transition-colors font-medium">
                  {info("email")}
                </a>
              </div>

              <div className="flex items-center gap-3 text-foreground/90">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">{info("address")}</span>
              </div>

              <div className="flex items-center gap-3 text-foreground/90">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">{info("hours")}</span>
              </div>
            </div>
          </div>

          {/* Full Color Tripoli Map Preview */}
          <div className="relative h-48 w-full overflow-hidden rounded-lg border border-border shadow-xs">
            <iframe
              title="Tripoli Nofleen Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26857.382451381384!2d13.1894!3d32.8872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a892dfd666244f%3A0x6b42b6a0aef86774!2sAn%20Nawfalayin%2C%20Tripoli%2C%20Libya!5e0!3m2!1sen!2sly!4v1700000000000!5m2!1sen!2sly"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-2.5 start-2.5 rounded-md bg-white/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-xs border border-black/5 pointer-events-none">
              {info("mapLocation")}
            </div>
          </div>
        </div>

        {/* Right Column: Message Form */}
        <div className="lg:col-span-7 lg:border-s lg:border-border lg:ps-10">
          <div className="space-y-1.5 mb-8">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              {t("title")}
            </h3>
            <p className="text-sm text-muted">
              {t("subtitle")}
            </p>
          </div>

          {submitted ? (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-8 text-center animate-in fade-in duration-200">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white text-xl">
                ✓
              </div>
              <h4 className="text-lg font-bold text-emerald-900">{t("successTitle")}</h4>
              <p className="mt-2 text-sm text-emerald-700 max-w-md mx-auto">{t("successSubtitle")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground/80 block">
                    {t("firstName")}
                  </label>
                  <input
                    name="firstName"
                    required
                    placeholder={t("firstNamePlaceholder")}
                    className="w-full rounded-md border border-border bg-surface-elevated/40 px-3.5 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground/80 block">
                    {t("lastName")}
                  </label>
                  <input
                    name="lastName"
                    required
                    placeholder={t("lastNamePlaceholder")}
                    className="w-full rounded-md border border-border bg-surface-elevated/40 px-3.5 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground/80 block">
                    {t("email")}
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder={t("emailPlaceholder")}
                    className="w-full rounded-md border border-border bg-surface-elevated/40 px-3.5 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground/80 block">
                    {t("phone")}
                  </label>
                  <input
                    name="phone"
                    placeholder={t("phonePlaceholder")}
                    className="w-full rounded-md border border-border bg-surface-elevated/40 px-3.5 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground/80 block">
                    {t("company")}
                  </label>
                  <input
                    name="company"
                    placeholder={t("companyPlaceholder")}
                    className="w-full rounded-md border border-border bg-surface-elevated/40 px-3.5 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground/80 block">
                    {t("subject")}
                  </label>
                  <select
                    name="subject"
                    defaultValue="general"
                    className="w-full rounded-md border border-border bg-surface-elevated/40 px-3.5 py-2.5 text-sm text-foreground outline-none transition-all focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent cursor-pointer"
                  >
                    {subjects.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground/80 block">
                  {t("message")}
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={t("messagePlaceholder")}
                  className="w-full rounded-md border border-border bg-surface-elevated/40 p-3.5 text-sm text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-md bg-[#090d16] text-white hover:bg-accent hover:text-[#090d16] px-8 py-3 text-xs font-semibold uppercase tracking-wider transition-all press-scale disabled:opacity-60 cursor-pointer shadow-xs"
                >
                  {loading ? t("sending") : t("submit")}
                </button>
                {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}