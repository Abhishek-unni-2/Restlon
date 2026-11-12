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
  Wind,
} from "lucide-react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CollectionCardGrid from "@/components/CollectionCardGrid";
import ProductQuickAddCard from "@/components/ProductQuickAddCard";
import LayerVisualizer from "@/components/LayerVisualizer";
import FaqAccordion from "@/components/FaqAccordion";
import { brandConfig } from "@/data/brandConfig";
import { CATEGORIES } from "@/data/categories";
import { LOCATIONS } from "@/data/locations";
import { ALL_FAQS } from "@/data/faqData";

export const metadata: Metadata = {
  title: `${brandConfig.name} – Pure Restorative Mattresses & Organic Sleep Systems`,
  description: `Buy high-end Scandinavian-engineered mattresses and beds in India. 100% natural Kerala latex, doctor-recommended orthopedic foam, and climate-ventilated cooling. 100-night trial.`,
};

export default function HomePage() {
  const homeFaqs = ALL_FAQS.slice(0, 7);

  const orthoCategory = CATEGORIES.find((c) => c.slug === "orthopaedic")!;
  const coolCategory = CATEGORIES.find((c) => c.slug === "breathesafe")!;
  const latexCategory = CATEGORIES.find((c) => c.slug === "latex-foam")!;

  return (
    <div className="w-full bg-cloud">
      {/* 1. Bright, Airy & Aspirational Hero */}
      <Hero
        headline="Pure, Restorative Sleep. Born from Nature, Engineered for India."
        subhead="Discover hospital-grade orthopedic spinal alignment, 100% certified organic Kerala latex, and micro-convection cooling designed to give you the deepest restorative sleep of your life."
        primaryCtaText="Explore All 9 Collections"
        primaryCtaLink="#collections"
        secondaryCtaText="Compare Mattress Sizes"
        secondaryCtaLink="/mattress-types/king-size-mattress"
        backgroundImage="/images/home-about-us.jpg"
      />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Brand Promise (2 paragraphs) */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nordic-100/80 text-nordic-900 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-nordic-700" />
            <span>The {brandConfig.name} Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-tight">
            Why Indian Sleep Demands Engineered Resilience & Climate Adaptation
          </h2>

          <div className="space-y-4 text-charcoal-700 text-base sm:text-lg leading-relaxed text-left sm:text-justify font-normal">
            <p>
              At <strong className="text-nordic-900 font-bold">{brandConfig.name}</strong>, we believe sleep is not a commodity—it is the biological foundation of human recovery and daily vitality. For decades, the Indian mattress market has been flooded with low-grade synthetic polyurethane foams and brittle bonded blocks that trap relentless tropical heat, degrade under humidity, and sag within months, causing chronic lower-back stiffness and morning fatigue. We set out to rethink sleep ergonomics from the cellular level up, developing proprietary multi-zone support cores, open-cell AeroFoams, and pure vulcanized latex tapped from our own rubber country in southern India.
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

      {/* 5. Three Featured-Collection Showcases */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/70 space-y-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest text-nordic-700 bg-nordic-100 px-3.5 py-1 rounded-full uppercase">
              Hand-Picked Series
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mt-3 tracking-tight">
              Featured Sleep Solutions
            </h2>
            <p className="text-charcoal-700 text-sm sm:text-base mt-2">
              Explore our highest rated collections designed for medical spinal alignment, tropical cooling, and natural organic purity.
            </p>
          </div>

          {/* Showcase 1: Orthopedic Series */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-stone-100">
              <div>
                <span className="text-xs font-bold text-clay uppercase tracking-wider">
                  Doctor Recommended • 8.0/10 Firmness
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mt-1">
                  1. Orthopaedic & PostureFit Series
                </h3>
                <p className="text-sm text-charcoal-500 mt-1">
                  Engineered with 5-zone differentiated density to reverse daytime desk posture fatigue.
                </p>
              </div>
              <Link
                href="/collections/orthopaedic"
                className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-nordic-800 hover:underline"
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
                  firmnessScore={8.0}
                  firmnessLabel="Doctor Certified Firm (8/10)"
                  keySpecs={p.keySpecs}
                  thicknessOptions={p.thicknessOptions}
                  sizeOptions={p.sizeOptions}
                />
              ))}

              {/* Informational Banner Card */}
              <div className="bg-mist/70 rounded-3xl border border-stone-200/80 p-6 flex flex-col justify-between shadow-subtle">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-nordic-800 text-white flex items-center justify-center mb-4">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-charcoal">
                    Clinical Spinal Decompression
                  </h4>
                  <p className="text-xs text-charcoal-700 mt-2 leading-relaxed">
                    Designed in alignment with spinal therapists. Provides targeted lumbar resistance while cushioning the thoracic cage and pelvis to relieve sciatica and chronic disc strain.
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-charcoal-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-nordic-700" /> Multi-zone load dispersion
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-nordic-700" /> High-density bonded support core
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-nordic-700" /> 10-Year sag-free guarantee
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-200/70">
                  <Link
                    href="/mattress-types/orthopedic-mattress"
                    className="w-full py-3 bg-nordic-800 hover:bg-nordic-900 text-white text-xs font-bold rounded-2xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    Read Orthopedic Buying Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Showcase 2: BreatheSafe Series */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-stone-100">
              <div>
                <span className="text-xs font-bold text-nordic-800 uppercase tracking-wider">
                  Tropical Climate Adapted • Active Airflow
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mt-1">
                  2. BreatheSafe & CoolGel Series
                </h3>
                <p className="text-sm text-charcoal-500 mt-1">
                  Engineered with thermodynamic gel micro-capsules and 360-degree air convection conduits.
                </p>
              </div>
              <Link
                href="/collections/breathesafe"
                className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-nordic-800 hover:underline"
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
                  firmnessScore={6.5}
                  firmnessLabel="Balanced Medium (6.5/10)"
                  keySpecs={p.keySpecs}
                  thicknessOptions={p.thicknessOptions}
                  sizeOptions={p.sizeOptions}
                />
              ))}

              <div className="bg-mist/70 rounded-3xl border border-stone-200/80 p-6 flex flex-col justify-between shadow-subtle">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-nordic-800 text-white flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-charcoal">
                    2.5°C Lower Surface Temperature
                  </h4>
                  <p className="text-xs text-charcoal-700 mt-2 leading-relaxed">
                    Say goodbye to midnight sweats and humid dampness. Our open-cell architecture conducts trapped body heat outwards through perimeter air mesh vents.
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-charcoal-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-nordic-700" /> Bamboo-viscose aerated knit
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-nordic-700" /> Anti-humidity & anti-fungal barrier
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-nordic-700" /> Cool to the touch immediately
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-200/70">
                  <Link
                    href="/collections/coolgel"
                    className="w-full py-3 bg-nordic-800 hover:bg-nordic-900 text-white text-xs font-bold rounded-2xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    Explore CoolGel Arctic Beds
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Showcase 3: Organic Kerala Latex */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-stone-100">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  100% Pure Organic • 15-Year Life
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mt-1">
                  3. Pure Organic Latex Foam Series
                </h3>
                <p className="text-sm text-charcoal-500 mt-1">
                  Harvested sustainably from Kerala rubber plantations with zero toxic VOCs or off-gassing.
                </p>
              </div>
              <Link
                href="/collections/latex-foam"
                className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-nordic-800 hover:underline"
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
                  firmnessScore={6.8}
                  firmnessLabel="Responsive Medium Firm (6.8/10)"
                  keySpecs={p.keySpecs}
                  thicknessOptions={p.thicknessOptions}
                  sizeOptions={p.sizeOptions}
                />
              ))}

              <div className="bg-mist/70 rounded-3xl border border-stone-200/80 p-6 flex flex-col justify-between shadow-subtle">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-nordic-800 text-white flex items-center justify-center mb-4">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-charcoal">
                    Naturally Buoyant Eco Luxury
                  </h4>
                  <p className="text-xs text-charcoal-700 mt-2 leading-relaxed">
                    Zero petroleum chemicals. Unlike memory foam that leaves you feeling stuck, natural latex offers instant dynamic bounce, keeping turning effortless.
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-charcoal-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-nordic-700" /> GOLS-Certified Organic Dunlop
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-nordic-700" /> Pin-core continuous ventilation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-nordic-700" /> Inherently anti-dust mite & mold
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-200/70">
                  <Link
                    href="/mattress-types/king-size-latex-mattress"
                    className="w-full py-3 bg-nordic-800 hover:bg-nordic-900 text-white text-xs font-bold rounded-2xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    Compare King Size Latex Beds
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive Mattress Layer Visualizer */}
      <LayerVisualizer />

      {/* 7. ~400–600 Word SEO Block */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-widest text-nordic-700 bg-nordic-100 px-3.5 py-1 rounded-full uppercase">
              Sleep Science Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mt-2 tracking-tight">
              The Definitive Guide to Buying Mattresses Online in India
            </h2>
          </div>

          <article className="prose prose-stone max-w-none text-charcoal-700 text-base sm:text-lg leading-relaxed space-y-5">
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
              {brandConfig.name} addresses these localized environmental factors by implementing open-cell AeroFoams, high-porosity natural Kerala latex cores, and thermodynamic CoolGel micro-beads. Every sleep system is encased in hypoallergenic, breathable bamboo-viscose or high-GSM jacquard fabrics certified by OEKO-TEX Standard 100. Backed by our direct-to-consumer delivery model, zero-cost EMI financing, and our signature 100-night in-home trial, you can test our sleep engineering in your personal bedroom environment without any financial risk.
            </p>
          </article>
        </div>
      </section>

      {/* 8. Four Product Highlights */}
      <section className="py-20 sm:py-28 bg-mist/60 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest text-nordic-700 bg-nordic-100 px-3.5 py-1 rounded-full uppercase">
              The {brandConfig.name} Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mt-2 tracking-tight">
              Four Hallmarks of Premium Sleep Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-stone-200/80 shadow-subtle space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-nordic-50 text-nordic-800 flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-charcoal">
                1. Biomechanical 5-Zone Core
              </h3>
              <p className="text-xs text-charcoal-500 leading-relaxed">
                Calibrated density zones contour dynamically to the head, thoracic spine, lumbar curve, pelvic girdle, and calves for zero-strain posture.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-stone-200/80 shadow-subtle space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-nordic-50 text-nordic-800 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-charcoal">
                2. 100% Kerala Dunlop Latex
              </h3>
              <p className="text-xs text-charcoal-500 leading-relaxed">
                Sustainably tapped organic tree rubber provides natural buoyant push-back, zero toxic chemicals, and up to 15+ years of resilient performance.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-stone-200/80 shadow-subtle space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-nordic-50 text-nordic-800 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-charcoal">
                3. Zero-Sag Guaranteed Framing
              </h3>
              <p className="text-xs text-charcoal-500 leading-relaxed">
                Reinforced high-resilience perimeter walls prevent edge collapse and roll-off, expanding usable bed surface by up to 20%.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-stone-200/80 shadow-subtle space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-nordic-50 text-nordic-800 flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-charcoal">
                4. White-Glove Doorstep Service
              </h3>
              <p className="text-xs text-charcoal-500 leading-relaxed">
                Free unboxing, room placement, and packaging disposal directly inside your bedroom across all major Indian cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Two More SEO Blocks */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-mist/60 rounded-3xl border border-stone-200/80 p-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-nordic-800">
                Sizing & Custom Fit
              </span>
              <h3 className="text-2xl font-bold text-charcoal">
                Standard Indian Bed Sizes & Tailored Dimensions
              </h3>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                Indian bed frames span a diverse spectrum of heirloom antique cots, modern storage divans, and imported designer platform beds. Whether you require a standard Single (72 × 36 in), Double (72 × 48 in), Queen (78 × 60 in), or spacious King Size (78 × 72 in), our manufacturing facility builds every unit to exact millimeter tolerances. Have an unconventional teakwood heirloom or customized hydraulic cot? We craft bespoke dimensions without expensive custom surcharges, ensuring an airtight, gap-free mattress placement.
              </p>
              <Link
                href="/mattress-types/king-size-mattress"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-nordic-800 hover:underline pt-2"
              >
                Explore King Size Mattress Dimensions →
              </Link>
            </div>

            <div className="bg-mist/60 rounded-3xl border border-stone-200/80 p-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-clay">
                Risk-Free Confidence
              </span>
              <h3 className="text-2xl font-bold text-charcoal">
                Our 100-Night Sleep Trial: Why Showroom Testing Fails
              </h3>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                Lying down on a mattress for three minutes under fluorescent showroom lighting tells you virtually nothing about how your body will feel after eight hours of sleep. Clinical studies demonstrate that the human musculoskeletal system requires between 21 to 30 nights to unlearn chronic postural compensation and adapt to proper ergonomic support. That is why we provide a 100-Night Sleep Trial in your own home. If you are not sleeping deeper and waking up pain-free, we pick it up for free and refund 100% of your money.
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-clay hover:underline pt-2"
              >
                Read 100-Night Trial Guarantee Terms →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. State-Presence Section */}
      <section className="py-20 sm:py-28 bg-mist/60 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest text-nordic-700 bg-nordic-100 px-3.5 py-1 rounded-full uppercase">
              Statewide Delivery Hubs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mt-2 tracking-tight">
              Serving Kerala, Tamil Nadu & Maharashtra
            </h2>
            <p className="text-charcoal-700 text-sm sm:text-base mt-2">
              Direct-from-factory delivery networks ensuring fast, insured shipping and white-glove setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-7 flex flex-col justify-between shadow-subtle hover:shadow-card-hover transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-charcoal">
                      {loc.stateName}
                    </h3>
                    <div className="w-9 h-9 rounded-2xl bg-nordic-100 text-nordic-800 flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs font-bold text-nordic-800 leading-relaxed">
                    {loc.positioningLine}
                  </p>

                  <p className="text-xs text-charcoal-700 leading-relaxed line-clamp-3">
                    {loc.climateParagraph}
                  </p>

                  <div className="pt-3 border-t border-stone-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 block mb-2">
                      Key Cities Served:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.cities.slice(0, 6).map((city) => (
                        <span
                          key={city}
                          className="text-[11px] px-2.5 py-1 rounded-xl bg-mist text-charcoal-700 border border-stone-200/60 font-medium"
                        >
                          {city}
                        </span>
                      ))}
                      {loc.cities.length > 6 && (
                        <span className="text-[11px] px-2.5 py-1 rounded-xl bg-stone-100 text-charcoal-500 font-medium">
                          +{loc.cities.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="w-full py-3 bg-mist hover:bg-nordic-800 hover:text-white text-charcoal text-xs font-bold rounded-2xl border border-stone-200 flex items-center justify-center gap-1.5 transition-colors"
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

      {/* 11. FaqAccordion (7 Qs) */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            faqs={homeFaqs}
            title="Frequently Asked Sleep Questions"
            subtitle="Clear, honest answers about mattress materials, delivery timelines, and our 100-night trial."
          />
          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-nordic-800 hover:underline"
            >
              <span>Explore All FAQs & Warranty Information</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Closing CTA Band */}
      <section className="py-20 sm:py-24 bg-nordic-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-nordic-200 bg-white/10 px-4 py-1.5 rounded-full inline-block backdrop-blur-md">
            100 Nights • Risk-Free In Your Home
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Ready for Your Deepest, Most Restorative Sleep?
          </h2>

          <p className="text-nordic-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Order your {brandConfig.name} sleep system today with free white-glove doorstep delivery, 0% EMI financing, and our 100-night home trial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#collections"
              className="w-full sm:w-auto px-8 py-4 bg-white text-nordic-900 hover:bg-mist font-bold rounded-2xl shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Shop All Mattresses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${brandConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="w-full sm:w-auto px-8 py-4 bg-nordic-800 hover:bg-nordic-700 text-white font-bold rounded-2xl border border-nordic-700 transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-nordic-300" />
              <span>Call Sleep Specialist</span>
            </a>
          </div>

          <p className="text-xs text-nordic-300 pt-2 font-medium">
            Free shipping pan-India • 10-Year non-sag warranty • 100-Night home trial
          </p>
        </div>
      </section>
    </div>
  );
}
