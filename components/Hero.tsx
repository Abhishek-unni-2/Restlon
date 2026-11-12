"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Star, Award, RotateCcw } from "lucide-react";
import { brandConfig } from "@/data/brandConfig";

interface HeroProps {
  headline?: string;
  subhead?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

export default function Hero({
  headline = "Pure, Restorative Sleep. Born from Nature, Engineered for India.",
  subhead = "Experience medical-grade orthopedic spinal alignment, 100% certified organic Kerala latex, and micro-convection cooling designed to bring tranquil, undisturbed sleep to every Indian bedroom.",
  primaryCtaText = "Explore All 9 Collections",
  primaryCtaLink = "#collections",
  secondaryCtaText = "Find Your Mattress Type",
  secondaryCtaLink = "/mattress-types/orthopedic-mattress",
  backgroundImage = "/images/home-about-us.jpg",
}: HeroProps) {
  return (
    <section className="relative w-full bg-gradient-to-b from-mist/70 via-cloud to-white border-b border-stone-200/80 py-16 sm:py-24 overflow-hidden">
      {/* Subtle organic background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-nordic-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-clay-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Nordic Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nordic-100/80 border border-nordic-200 text-nordic-900 text-xs font-semibold shadow-subtle">
              <Sparkles className="w-3.5 h-3.5 text-nordic-700" />
              <span>Scandinavian Ergonomics • 100% Natural Organic Materials</span>
            </div>

            {/* Impactful Minimalist Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-[1.12]">
              {headline}
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl font-normal">
              {subhead}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <Link
                href={primaryCtaLink}
                className="px-8 py-4 bg-nordic-800 hover:bg-nordic-900 text-white font-bold rounded-2xl text-center shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={secondaryCtaLink}
                className="px-8 py-4 bg-white hover:bg-mist text-charcoal font-semibold rounded-2xl text-center border border-stone-200/90 shadow-subtle transition-all flex items-center justify-center gap-2"
              >
                <span>{secondaryCtaText}</span>
              </Link>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-stone-200/70 grid grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-nordic-100 text-nordic-800 flex items-center justify-center flex-shrink-0">
                  <RotateCcw className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-charcoal block">100 Nights</span>
                  <span className="text-[11px] text-charcoal-500">Risk-Free Trial</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-nordic-100 text-nordic-800 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-charcoal block">10 Years</span>
                  <span className="text-[11px] text-charcoal-500">Non-Sag Warranty</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-nordic-100 text-nordic-800 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-charcoal block">Zero-Cost EMI</span>
                  <span className="text-[11px] text-charcoal-500">From ₹1,499/mo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Column (Bright, airy master bedroom image with floating badges) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-80 sm:h-96 lg:h-[460px] w-full rounded-3xl overflow-hidden shadow-card border border-stone-200/80 bg-white">
              <Image
                src={backgroundImage}
                alt={`${brandConfig.name} serene bedroom ambiance`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Floating Customer Rating Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-md border border-stone-100 flex items-center gap-2.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <div className="text-[11px] text-charcoal font-semibold">
                  <span className="font-bold">4.9/5</span> (12,400+ Indian Sleepers)
                </div>
              </div>

              {/* Floating Material Chip */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-stone-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-nordic-700 block">
                    Kerala Plantation Harvest
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-charcoal">
                    100% GOLS-Certified Organic Latex
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-xl bg-nordic-100 text-nordic-900">
                  Zero Off-Gas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
