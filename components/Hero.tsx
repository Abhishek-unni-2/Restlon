"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  headline?: string;
  subhead?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function Hero({
  headline = "Sleep that holds you up and keeps you cool.",
  subhead = "Natural Kerala latex and orthopedic support, made for Indian homes.",
  primaryCtaText = "Shop collections",
  primaryCtaLink = "#collections",
  secondaryCtaText = "Compare sizes",
  secondaryCtaLink = "/mattress-types/king-size-mattress",
}: HeroProps) {
  const photo = useRef<HTMLDivElement>(null);

  // Gentle scroll parallax on the photo (transform only, rAF throttled)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = photo.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      el.style.setProperty("--py", `${Math.min(window.scrollY, 900) * 0.18}px`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const words = headline.split(" ");
  const d = (i: number) => ({ "--i": i } as React.CSSProperties);

  return (
    <section className="relative flex flex-col overflow-hidden bg-charcoal sm:h-[calc(100vh-120px)] sm:min-h-[560px] sm:max-h-[880px] sm:flex-row sm:items-end">
      <div className="relative h-[46vh] min-h-[300px] w-full overflow-hidden sm:absolute sm:inset-0 sm:h-full">
        <div ref={photo} className="hero-banner-photo absolute inset-x-0 -top-[10%] h-[120%]">
          <Image
            src="/images/home-about-us.jpg"
            alt="A child resting on a Restlon Comforts mattress"
            fill
            priority
            className="hero-zoom object-cover object-[68%_40%]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/10 sm:bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-8 sm:px-6 sm:pb-20 sm:pt-0 lg:px-8">
        <h1
          className="max-w-[760px] text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          aria-label={headline}
        >
          {words.map((w, i) => (
            <React.Fragment key={i}>
              <span className="word-mask" aria-hidden="true">
                <span className="word" style={{ "--w": i } as React.CSSProperties}>
                  {w}
                </span>
              </span>{" "}
            </React.Fragment>
          ))}
        </h1>
        <p style={d(6)} className="hero-in mt-6 max-w-[520px] text-lg text-white/85 sm:text-xl">
          {subhead}
        </p>
        <div style={d(7)} className="hero-in mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href={primaryCtaLink}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-charcoal transition-colors duration-300 hover:bg-pebble active:scale-[0.98]"
          >
            {primaryCtaText}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href={secondaryCtaLink}
            className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-white/10 active:scale-[0.98]"
          >
            {secondaryCtaText}
          </Link>
        </div>
      </div>

      <a
        href="#collections"
        aria-label="Scroll to collections"
        style={d(8)}
        className="hero-in absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-2 text-sm text-white/80 sm:flex lg:right-10"
      >
        <span>Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-white/30">
          <span className="scroll-cue absolute left-0 top-0 h-4 w-px bg-white" />
        </span>
      </a>
    </section>
  );
}
