import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, PhoneCall, Award } from "lucide-react";
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
  headline = "Wake Up Restored. Engineered for Indian Sleep & Tropical Climates.",
  subhead = "Discover medical-grade orthopedic support, 100% natural Kerala latex, and climate-ventilated cooling foam designed to give you the deepest restorative sleep of your life.",
  primaryCtaText = "Explore All 9 Collections",
  primaryCtaLink = "#collections",
  secondaryCtaText = "Find Your Mattress Type",
  secondaryCtaLink = "/mattress-types/orthopedic-mattress",
  backgroundImage = "/images/Screenshot-2023-11-06-133120-1-1-1-2048x915.png",
}: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-stone-900 min-h-[620px] lg:min-h-[700px] flex items-center">
      {/* Background Image with warm gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={`${brandConfig.name} luxury mattress setting`}
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-900/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/20 border border-teal-500/30 text-teal-200 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-sand" />
            <span>Certified Orthopedic & 100% Natural Latex Beds</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
            {headline}
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-sans max-w-2xl">
            {subhead}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href={primaryCtaLink}
              className="px-8 py-4 bg-teal hover:bg-teal-600 text-white font-semibold rounded-xl text-center shadow-lg hover:shadow-teal-900/50 transition-all flex items-center justify-center gap-2 group"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href={secondaryCtaLink}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-center backdrop-blur-md border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>{secondaryCtaText}</span>
            </Link>
          </div>

          {/* Feature Badges Strip */}
          <div className="pt-8 mt-6 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sand flex-shrink-0" />
              <span>100-Night Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-sand flex-shrink-0" />
              <span>10-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sand flex-shrink-0" />
              <span>Doctor Recommended</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-sand flex-shrink-0" />
              <span>Free Doorstep Unboxing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
