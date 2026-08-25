"use client";

import React, { useEffect, useRef, useState } from "react";
import partners from "@/lib/partners";
import Image from "next/image";

export default function PartnerCarousel() {
  const items = partners;
  const [index, setIndex] = useState(0);
  const pauseRef = useRef(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const start = () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        if (!pauseRef.current) setIndex((i) => (i + 1) % items.length);
      }, 4500);
    };
    start();
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [items.length]);

  function prev() {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }
  function next() {
    setIndex((i) => (i + 1) % items.length);
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div
        className="relative flex items-center justify-between"
        onMouseEnter={() => (pauseRef.current = true)}
        onMouseLeave={() => (pauseRef.current = false)}
      >
        <button
          aria-label="Previous partner"
          onClick={prev}
          className="absolute left-0 z-20 ml-2 hidden h-12 w-12 items-center justify-center rounded-full bg-white/6 text-white hover:bg-white/10 md:flex"
        >
          ‹
        </button>

        <div className="mx-auto flex w-full items-center justify-center px-6 py-8">
          <div className="flex h-40 w-full items-center justify-center">
            <Image
              src={items[index].src}
              alt={items[index].name}
              width={520}
              height={180}
              className="h-28 max-h-36 w-auto object-contain"
              unoptimized
            />
          </div>
        </div>

        <button
          aria-label="Next partner"
          onClick={next}
          className="absolute right-0 z-20 mr-2 hidden h-12 w-12 items-center justify-center rounded-full bg-white/6 text-white hover:bg-white/10 md:flex"
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-3">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to partner ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 rounded-full transition-colors duration-300 ${
              i === index ? "bg-accent" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
