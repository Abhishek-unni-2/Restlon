import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Truck,
  Award,
  Layers,
  PhoneCall,
  Activity,
  HeartPulse,
} from "lucide-react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CollectionCardGrid from "@/components/CollectionCardGrid";
import ProductQuickAddCard from "@/components/ProductQuickAddCard";
import FaqAccordion from "@/components/FaqAccordion";
import { brandConfig } from "@/data/brandConfig";
import { CATEGORIES } from "@/data/categories";
import { LOCATIONS } from "@/data/locations";
import { ALL_FAQS } from "@/data/faqData";

export const metadata: Metadata = {
  title: `${brandConfig.name} – Premium Mattresses & Bed Shop in India`,
  description: `Buy high-end mattresses and beds in India. 100% natural Kerala latex, doctor-recommended orthopedic foam, and climate-ventilated cooling. 100-night trial.`,
};

export default function HomePage() {
  // Curated FAQs for the homepage (7 questions)
  const homeFaqs = ALL_FAQS.slice(0, 7);

  // 3 Featured showcase collections
  const orthoCategory = CATEGORIES.find((c) => c.slug === "orthopaedic")!;
  const coolCategory = CATEGORIES.find((c) => c.slug === "breathesafe")!;
  const latexCategory = CATEGORIES.find((c) => c.slug === "latex-foam")!;

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <Hero
        headline="Crafted for Deeper Sleep. Calibrated for India's Diverse Climates."
        subhead="Experience medical-grade spine support, 100% certified organic Kerala latex, and micro-ventilation technology designed to deliver cool, undisturbed rest night after night."
        primaryCtaText="Explore All 9 Collections"
        primaryCtaLink="#collections"
        secondaryCtaText="Compare Mattress Sizes"
        secondaryCtaLink="/mattress-types/king-size-mattress"
        backgroundImage="/images/Screenshot-2023-11-06-133120-1-1-1-2048x915.png"
      />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Brand Promise (2 paragraphs) */}
      <section className="py-16 sm:py-20 bg-white border-b border-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand/50 text-stone-800 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-teal" />
            <span>The {brandConfig.name} Sleep Architecture</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
            Why Indian Sleep Demands Engineered Resilience & Climate Adaptation
          </h2>

          <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed text-left sm:text-justify">
            <p>
              At <strong className="text-teal font-semibold">{brandConfig.name}</strong>, we believe great sleep is not a luxury—it is the biological foundation of human recovery and daily vitality. For decades, the Indian mattress market has been dominated by low-grade synthetic polyurethane foams and brittle bonded blocks that trap relentless tropical heat, break down under humidity, and sag within months, causing chronic lower-back tightness and morning fatigue. We set out to rethink sleep ergonomics from the cellular level up, developing proprietary multi-zone support cores, open-cell AeroFoams, and pure vulcanized latex tapped from our own rubber country in southern India.
            </p>
            <p>
              By bypassing traditional retail distributors, middleman commissions, and high showroom markups, we deliver hospital-grade orthopedic alignment and five-star resort comfort directly to your bedroom at honest, transparent factory pricing. Every mattress undergoes rigorous 100,000-cycle durability roller testing to ensure absolute dimensional stability, backed by our unconditional 10-year warranty, free white-glove doorstep unboxing, and a risk-free 100-night home sleep trial.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CollectionCardGrid (All 9 Categories) */}
      <div id="collections">
        <CollectionCardGrid />
      </div>

      {/* 5. Three Featured-Collection Showcases / Carousels */}
      <section className="py-16 sm:py-24 bg-white border-b border-sand space-y-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3 py-1 rounded-full">
              Hand-Picked Series
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-3">
              Featured Sleep Solutions
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Explore our highest rated collections designed for medical spinal alignment, tropical cooling, and natural organic purity.
            </p>
          </div>

          {/* Carousel Showcase 1: Orthopedic Series */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-sand">
              <div>
                <span className="text-xs font-semibold text-terracotta uppercase tracking-wider">
                  Doctor Recommended • 8.0/10 Firmness
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  1. Orthopaedic & PostureFit Series
                </h3>
                <p className="text-sm text-warmgrey mt-1">
                  Engineered with 5-zone differentiated density to reverse daytime desk posture fatigue.
                </p>
              </div>
              <Link
                href="/collections/orthopaedic"
                className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline"
              >
                View Orthopedic Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {orthoCategory.products.map((p) => (
                <ProductQuickAddCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  slug={orthoCategory.slug}
                  image={p.image}
                  startingPrice={p.startingPrice}
                  originalPrice={p.originalPrice}
                  rating={p.rating}
                  reviewsCount={p.reviewsCount}
                  badge={p.badge}
                  keySpecs={p.keySpecs}
                  thicknessOptions={p.thicknessOptions}
                  sizeOptions={p.sizeOptions}
                />
              ))}
              {/* Highlight Banner Card */}
              <div className="bg-ivory rounded-2xl border border-sand p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal text-white flex items-center justify-center mb-4">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-stone-900">
                    Clinical Spinal Decompression
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Designed in alignment with spinal therapists. Provides targeted lumbar resistance while cushioning the thoracic cage and pelvis to relieve sciatica and chronic disc strain.
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-stone-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal" /> Multi-zone load dispersion
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal" /> High-density bonded support core
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal" /> 10-Year sag-free guarantee
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-sand">
                  <Link
                    href="/mattress-types/orthopedic-mattress"
                    className="w-full py-2.5 bg-teal text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 hover:bg-teal-600 transition-colors"
                  >
                    Read Orthopedic Buying Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Showcase 2: BreatheSafe & Climate Cooling Series */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-sand">
              <div>
                <span className="text-xs font-semibold text-teal uppercase tracking-wider">
                  Tropical Climate Adapted • Active Airflow
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  2. BreatheSafe & CoolGel Series
                </h3>
                <p className="text-sm text-warmgrey mt-1">
                  Engineered with thermodynamic gel micro-capsules and 360-degree air convection conduits.
                </p>
              </div>
              <Link
                href="/collections/breathesafe"
                className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline"
              >
                View Cooling Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coolCategory.products.map((p) => (
                <ProductQuickAddCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  slug={coolCategory.slug}
                  image={p.image}
                  startingPrice={p.startingPrice}
                  originalPrice={p.originalPrice}
                  rating={p.rating}
                  reviewsCount={p.reviewsCount}
                  badge={p.badge}
                  keySpecs={p.keySpecs}
                  thicknessOptions={p.thicknessOptions}
                  sizeOptions={p.sizeOptions}
                />
              ))}
              <div className="bg-ivory rounded-2xl border border-sand p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal text-white flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-stone-900">
                    2.5°C Lower Surface Temperature
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Say goodbye to midnight sweats and humid dampness. Our open-cell architecture conducts trapped body heat outwards through perimeter air mesh vents.
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-stone-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal" /> Bamboo-viscose aerated knit
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal" /> Anti-humidity & anti-fungal barrier
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal" /> Cool to the touch immediately
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-sand">
                  <Link
                    href="/collections/coolgel"
                    className="w-full py-2.5 bg-teal text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 hover:bg-teal-600 transition-colors"
                  >
                    Explore CoolGel Arctic Beds
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Showcase 3: 100% Organic Kerala Latex Series */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-sand">
              <div>
                <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  100% Pure Organic • 15-Year Life
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  3. Pure Organic Latex Foam Series
                </h3>
                <p className="text-sm text-warmgrey mt-1">
                  Harvested sustainably from Kerala rubber plantations with zero toxic VOCs or off-gassing.
                </p>
              </div>
              <Link
                href="/collections/latex-foam"
                className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline"
              >
                View Latex Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latexCategory.products.map((p) => (
                <ProductQuickAddCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  slug={latexCategory.slug}
                  image={p.image}
                  startingPrice={p.startingPrice}
                  originalPrice={p.originalPrice}
                  rating={p.rating}
                  reviewsCount={p.reviewsCount}
                  badge={p.badge}
                  keySpecs={p.keySpecs}
                  thicknessOptions={p.thicknessOptions}
                  sizeOptions={p.sizeOptions}
                />
              ))}
              <div className="bg-ivory rounded-2xl border border-sand p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal text-white flex items-center justify-center mb-4">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-stone-900">
                    Naturally Buoyant Eco Luxury
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Zero petroleum chemicals. Unlike memory foam that leaves you feeling stuck, natural latex offers instant dynamic bounce, keeping turning effortless.
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-stone-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal" /> GOLS-Certified Organic Dunlop
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal" /> Pin-core continuous ventilation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal" /> Inherently anti-dust mite & mold
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-sand">
                  <Link
                    href="/mattress-types/king-size-latex-mattress"
                    className="w-full py-2.5 bg-teal text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 hover:bg-teal-600 transition-colors"
                  >
                    Compare King Size Latex Beds
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Gallery Section: Construction, Layers & Master Suites */}
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3 py-1 rounded-full">
              Inside Our Mattresses
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-3">
              Uncompromising Material Architecture
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Every millimeter is thoughtfully engineered with certified non-toxic layers for long-term spinal support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-sand overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-60 w-full bg-stone-100">
                <Image
                  src="/images/layer-6.jpg"
                  alt="Multi-layer breathable foam construction"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-base font-bold text-stone-900">
                  Open-Cell Breathable AeroFoam
                </h3>
                <p className="text-xs text-warmgrey mt-1.5 leading-relaxed">
                  Thousands of vertical pin-holes and open cellular chambers actively circulate air, dispelling heat and body moisture.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-sand overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-60 w-full bg-stone-100">
                <Image
                  src="/images/layer-12.jpg"
                  alt="Multi-zone orthopedic core layer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-base font-bold text-stone-900">
                  5-Zone Orthopedic Alignment Base
                </h3>
                <p className="text-xs text-warmgrey mt-1.5 leading-relaxed">
                  Calibrated high-density rebound support that prevents center sagging while cushioning shoulders and hips.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-sand overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-60 w-full bg-stone-100">
                <Image
                  src="/images/layer-14.jpg"
                  alt="Sanitized hypoallergenic antimicrobial cover"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-base font-bold text-stone-900">
                  OEKO-TEX Hypoallergenic Shield
                </h3>
                <p className="text-xs text-warmgrey mt-1.5 leading-relaxed">
                  Permanent silver-ion fabric infusion repellent to 99.9% of dust mites, bacteria, and allergens for family safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ~400–600 Word SEO Block (Collapsible on mobile) */}
      <section className="py-16 sm:py-20 bg-white border-b border-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3 py-1 rounded-full">
              Comprehensive Sleep Guide
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
              The Definitive Guide to Buying Mattresses Online in India
            </h2>
          </div>

          <article className="prose prose-stone max-w-none text-stone-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Purchasing the ideal mattress online in India has evolved from an uncertain gamble into a scientifically validated decision. Modern consumers are no longer satisfied with generic cotton beds or cheap bonded foam that develops deep impressions within months. When selecting a sleep system in India, three critical factors determine long-term sleep health: anatomical spinal alignment, thermal dissipation in tropical climates, and hygienic resistance to high-humidity moisture.
            </p>
            <p>
              Musculoskeletal health relies directly on the horizontal alignment of the vertebral column. During sleep, your spinal cord must remain in a neutral plane—replicating the natural posture of standing erect with good form. A mattress that is excessively soft allows the heavy pelvic and lumbar girdle to sink downwards, creating a painful hammock effect that stretches spinal ligaments and compresses lumbar discs. Conversely, an excessively hard, rigid surface creates harsh pressure points at the shoulder blades and greater trochanter of the hips, causing blood vessel constriction, numbness, and repetitive waking cycles.
            </p>
            <p>
              Furthermore, India&apos;s distinct geographic micro-climates present unique sleep challenges. Coastal states like Kerala and Maharashtra experience intense monsoons and sustained relative humidity above 80%, while inland cities across Tamil Nadu face prolonged summer heatwaves. Under these conditions, conventional closed-cell polyurethane foams trap ambient humidity and body warmth, creating an ideal breeding environment for microscopic dust mites and microbial spores.
            </p>
            <p>
              Restora addresses these localized environmental factors by implementing open-cell AeroFoams, high-porosity natural Kerala latex cores, and thermodynamic CoolGel micro-beads. Every sleep system is encased in hypoallergenic, breathable bamboo-viscose or high-GSM jacquard fabrics certified by OEKO-TEX Standard 100. Backed by our direct-to-consumer delivery model, zero-cost EMI financing, and our signature 100-night in-home trial, you can test our sleep engineering in your personal bedroom environment without any financial risk.
            </p>
          </article>
        </div>
      </section>

      {/* 8. Product Highlights (4 Bullets with Icons) */}
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3 py-1 rounded-full">
              The {brandConfig.name} Distinction
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900 mt-2">
              Four Hallmarks of Premium Sleep Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-sand shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                1. Biomechanical 5-Zone Core
              </h3>
              <p className="text-xs text-warmgrey leading-relaxed">
                Calibrated density zones contour dynamically to the head, thoracic spine, lumbar curve, pelvic girdle, and calves for zero-strain posture.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-sand shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                2. 100% Kerala Dunlop Latex
              </h3>
              <p className="text-xs text-warmgrey leading-relaxed">
                Sustainably tapped organic tree rubber provides natural buoyant push-back, zero toxic chemicals, and up to 15+ years of resilient performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-sand shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                3. Zero-Sag Guaranteed Framing
              </h3>
              <p className="text-xs text-warmgrey leading-relaxed">
                Reinforced high-resilience perimeter walls prevent edge collapse and roll-off, expanding usable bed surface by up to 20%.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-sand shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                4. White-Glove Doorstep Service
              </h3>
              <p className="text-xs text-warmgrey leading-relaxed">
                Free unboxing, room placement, and packaging disposal directly inside your bedroom across all major Indian cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Two More SEO Blocks (~150 words each) */}
      <section className="py-16 sm:py-20 bg-white border-b border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Block 1: Standard Indian Sizes & Customization */}
            <div className="bg-ivory/60 rounded-2xl border border-sand p-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                Sizing & Custom Fit
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Standard Indian Bed Sizes & Tailored Dimensions
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                Indian bed frames span a diverse spectrum of heirloom antique cots, modern storage divans, and imported designer platform beds. Whether you require a standard Single (72 × 36 in), Double (72 × 48 in), Queen (78 × 60 in), or spacious King Size (78 × 72 in), our manufacturing facility builds every unit to exact millimeter tolerances. Have an unconventional teakwood heirloom or customized hydraulic cot? We craft bespoke dimensions without expensive custom surcharges, ensuring an airtight, gap-free mattress placement.
              </p>
              <Link
                href="/mattress-types/king-size-mattress"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:underline pt-2"
              >
                Explore King Size Mattress Dimensions →
              </Link>
            </div>

            {/* Block 2: 100-Night Risk-Free Trial Philosophy */}
            <div className="bg-ivory/60 rounded-2xl border border-sand p-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                Risk-Free Confidence
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Our 100-Night Sleep Trial: Why Showroom Testing Fails
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                Lying down on a mattress for three minutes under fluorescent showroom lighting tells you virtually nothing about how your body will feel after eight hours of sleep. Clinical studies demonstrate that the human musculoskeletal system requires between 21 to 30 nights to unlearn chronic postural compensation and adapt to proper ergonomic support. That is why we provide a 100-Night Sleep Trial in your own home. If you are not sleeping deeper and waking up pain-free, we pick it up for free and refund 100% of your money.
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-terracotta hover:underline pt-2"
              >
                Read 100-Night Trial Guarantee Terms →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. State-Presence Section (Kerala, Tamil Nadu, Maharashtra) */}
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3 py-1 rounded-full">
              Regional Delivery Hubs
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
              Serving Kerala, Tamil Nadu & Maharashtra
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Direct-from-factory delivery networks ensuring fast, insured shipping and white-glove setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="bg-white rounded-2xl border border-sand p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl font-bold text-stone-900">
                      {loc.stateName}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-teal/10 text-teal flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs font-medium text-teal leading-relaxed">
                    {loc.positioningLine}
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                    {loc.climateParagraph}
                  </p>

                  <div className="pt-3 border-t border-sand">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-2">
                      Key Cities Served:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.cities.slice(0, 6).map((city) => (
                        <span
                          key={city}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-ivory text-stone-700 border border-sand/60"
                        >
                          {city}
                        </span>
                      ))}
                      {loc.cities.length > 6 && (
                        <span className="text-[11px] px-2 py-0.5 rounded-md bg-sand/50 text-stone-600">
                          +{loc.cities.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-sand">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="w-full py-2.5 bg-ivory hover:bg-teal hover:text-white text-stone-800 text-xs font-semibold rounded-xl border border-sand flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View {loc.stateName} Delivery Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FaqAccordion (6–8 Qs) */}
      <section className="py-16 sm:py-24 bg-white border-b border-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            faqs={homeFaqs}
            title="Frequently Asked Sleep Questions"
            subtitle="Clear, honest answers about mattress materials, delivery timelines, and our 100-night trial."
          />
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline"
            >
              <span>Explore All FAQs & Warranty Information</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Closing CTA Band */}
      <section className="py-16 sm:py-20 bg-teal text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sand bg-white/10 px-3.5 py-1.5 rounded-full inline-block backdrop-blur-md">
            100 Nights. Zero Risk.
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Ready for Your Deepest, Most Restorative Sleep?
          </h2>

          <p className="text-teal-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Order your {brandConfig.name} mattress today with free white-glove doorstep delivery, 0% EMI financing, and our 100-night home trial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#collections"
              className="w-full sm:w-auto px-8 py-4 bg-white text-teal hover:bg-ivory font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Shop All Mattresses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${brandConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="w-full sm:w-auto px-8 py-4 bg-teal-800/80 hover:bg-teal-800 text-white font-semibold rounded-xl border border-teal-500/30 transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-sand" />
              <span>Call Sleep Specialist</span>
            </a>
          </div>

          <p className="text-xs text-teal-200 pt-2">
            Free shipping pan-India • 10-Year non-sag warranty • 100-Night home trial
          </p>
        </div>
      </section>
    </div>
  );
}
