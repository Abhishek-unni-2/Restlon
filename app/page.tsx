import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import Hero from "@/components/Hero";
import FeatureTiles from "@/components/FeatureTiles";
import TrustStrip from "@/components/TrustStrip";
import MattressFinder from "@/components/MattressFinder";
import TaglineReveal from "@/components/TaglineReveal";
import CollectionCardGrid from "@/components/CollectionCardGrid";
import ProductQuickAddCard from "@/components/ProductQuickAddCard";
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
  const homeFaqs = ALL_FAQS.slice(0, 5);
  const featured = ["posturefit", "breathesafe", "latex-foam"]
    .map((slug) => CATEGORIES.find((c) => c.slug === slug)!)
    .map((cat) => ({ cat, p: cat.products[0] }));

  return (
    <div className="w-full bg-cloud">
      <Hero
        headline="Sleep that holds you up and keeps you cool."
        subhead="Natural Kerala latex and orthopedic support, made for Indian homes. Sleep on it for 100 nights before you decide."
        primaryCtaText="Shop all collections"
        primaryCtaLink="#collections"
        secondaryCtaText="Compare sizes"
        secondaryCtaLink="/mattress-types/king-size-mattress"
      />

      <TrustStrip />

      <section className="py-24 sm:py-36 bg-white px-4">
        <TaglineReveal text="Built for hot summers and long days at a desk. It supports your spine and lets you sleep cool." />
      </section>

      <FeatureTiles />

      <MattressFinder />

      <div id="collections">
        <CollectionCardGrid />
      </div>

      <section className="py-16 sm:py-24 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal className="max-w-[680px] mb-12">
            <p className="text-sm font-medium text-nordic-700">Your first 100 nights</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              Try it at home before you decide.
            </h2>
          </div>
          <ol data-reveal-group className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              ["Day 1", "It arrives set up", "Free doorstep delivery and placement in your bedroom, with the packaging taken away."],
              ["Nights 1 to 100", "Sleep on it", "Give your body time to adjust. Use it exactly as you would your own mattress."],
              ["Night 100", "Keep it or send it back", "If it is not right, we collect it for free and refund you in full."],
            ].map(([when, title, body], i) => (
              <li key={title} className="rounded-3xl bg-white p-8">
                <span className="text-sm font-semibold text-nordic-700">{when}</span>
                <p className="mt-6 text-5xl font-semibold tracking-tight text-stone-300" aria-hidden="true">
                  0{i + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-base text-charcoal-700">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="max-w-[680px]">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Bestsellers</h2>
              <p className="text-base text-charcoal-700 mt-3">
                One favourite from each of our most popular ranges.
              </p>
            </div>
            <Link
              href="#collections"
              className="inline-flex items-center gap-2 text-base font-semibold text-nordic-800 link-grow w-fit"
            >
              Browse all collections <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map(({ cat, p }) => (
              <ProductQuickAddCard
                key={p.id}
                id={p.id}
                name={p.name}
                slug={cat.slug}
                image={p.image}
                startingPrice={p.startingPrice}
                originalPrice={p.originalPrice}
                rating={p.rating}
                reviewsCount={p.reviewsCount}
                badge={p.badge}
                firmnessScore={parseFloat(cat.firmnessScale)}
                firmnessLabel={cat.firmnessScale.replace(/^[\d.]+ \/ 10 \(?/, "").replace(/\)$/, "") + ` (${parseFloat(cat.firmnessScale)}/10)`}
                keySpecs={p.keySpecs}
                thicknessOptions={p.thicknessOptions}
                sizeOptions={p.sizeOptions}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal className="max-w-[680px] mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Free delivery and setup</h2>
            <p className="text-base text-charcoal-700 mt-3">
              Insured doorstep delivery and in room placement across three states.
            </p>
          </div>
          <div data-reveal-group className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex items-center justify-between rounded-3xl bg-white p-7 transition-shadow duration-300 hover:shadow-card-hover"
              >
                <div>
                  <h3 className="text-xl font-semibold">{loc.stateName}</h3>
                  <p className="text-sm text-charcoal-500 mt-1">{loc.cities.length} cities</p>
                </div>
                <ArrowRight className="w-5 h-5 text-nordic-800 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion faqs={homeFaqs} title="Questions, answered" />
          <div className="text-center mt-8">
            <Link href="/faq" className="inline-flex items-center gap-2 text-base font-semibold text-nordic-800 link-grow">
              All FAQs and warranty <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-mist">
        <div data-reveal className="max-w-[680px] mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-charcoal">
            Try it for 100 nights. Keep it only if you sleep better.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Link
              href="#collections"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-nordic-800 text-white hover:bg-nordic-900 font-semibold rounded-full transition-colors duration-300 active:scale-[0.98]"
            >
              Shop all mattresses <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${brandConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-nordic-800 hover:bg-white font-semibold rounded-full transition-colors duration-300 active:scale-[0.98]"
            >
              <PhoneCall className="w-4 h-4" /> Talk to a sleep specialist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
