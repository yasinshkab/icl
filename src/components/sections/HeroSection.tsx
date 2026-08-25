"use client";

import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  label: string;
  description?: string;
  image: string;
  href: string;
};

type HeroSectionProps = {
  slides: Slide[];
  cta: string;
  learnMore?: string;
};

export function HeroSection({ slides, cta, learnMore = "Explore Services" }: HeroSectionProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[90vh] md:min-h-[100dvh] w-full overflow-hidden bg-[#090d16] flex flex-col justify-end">
      {/* Background Image Carousel */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={slide.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.label}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle scrim for pristine legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090d16]/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content - Fixed Height Text Box to Prevent Jumping */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:pb-24 sm:pt-36 lg:px-10 lg:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            International Coverage Logistics
          </p>

          {/* Fixed-height container for smooth slide crossfade without layout shift */}
          <div className="min-h-[180px] sm:min-h-[200px] md:min-h-[220px] flex flex-col justify-start">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45 }}
                className="space-y-4"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                  {slide.label}
                </h1>
                {slide.description && (
                  <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
                    {slide.description}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Anchored Action Buttons */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            <Link
              href={slide.href}
              className="rounded-md bg-accent text-[#090d16] hover:bg-accent-light px-7 py-3 text-xs font-semibold uppercase tracking-wider transition-all press-scale shadow-sm flex items-center gap-2"
            >
              <span>{learnMore}</span>
              <span>↗</span>
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-7 py-3 text-xs font-semibold uppercase tracking-wider transition-all press-scale"
            >
              {cta}
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute end-6 bottom-12 z-20 flex gap-2 lg:end-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === current ? "w-8 bg-accent" : "w-2 bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}