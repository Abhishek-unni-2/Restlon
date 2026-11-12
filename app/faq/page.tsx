import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, PhoneCall, ArrowRight, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { brandConfig } from "@/data/brandConfig";
import { FAQ_GROUPS, ALL_FAQS } from "@/data/faqData";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import { FaqPageJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: `FAQs – ${brandConfig.name} Mattress & Bed Shop`,
  description: `Frequently asked questions about ${brandConfig.name} mattresses, 100-night sleep trial, 10-year warranty, delivery timelines, and orthopedic support.`,
};

export default function FaqPage() {
  return (
    <div className="w-full bg-cloud">
      <FaqPageJsonLd faqs={ALL_FAQS} />

      <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

      {/* Header / Intro Section */}
      <section className="bg-gradient-to-b from-mist/70 to-cloud border-b border-stone-200/80 py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nordic-100 text-nordic-900 text-xs font-semibold">
            <HelpCircle className="w-4 h-4 text-nordic-700" />
            <span>Help & Sleep Support Center</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-charcoal-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have questions about finding the right mattress, how our 100-night home trial works, or doorstep delivery in your city? Explore our categorized guide below.
          </p>

          {/* Quick jump anchor links */}
          <div className="pt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
            <a
              href="#buying-delivery"
              className="px-4 py-2 rounded-2xl bg-white border border-stone-200 text-xs font-bold text-charcoal hover:text-nordic-900 hover:border-nordic-400 shadow-subtle transition-colors"
            >
              Buying & Delivery
            </a>
            <a
              href="#product-materials"
              className="px-4 py-2 rounded-2xl bg-white border border-stone-200 text-xs font-bold text-charcoal hover:text-nordic-900 hover:border-nordic-400 shadow-subtle transition-colors"
            >
              Product & Materials
            </a>
            <a
              href="#warranty-trial"
              className="px-4 py-2 rounded-2xl bg-white border border-stone-200 text-xs font-bold text-charcoal hover:text-nordic-900 hover:border-nordic-400 shadow-subtle transition-colors"
            >
              Warranty & 100-Night Trial
            </a>
          </div>
        </div>
      </section>

      {/* Categorized FAQ Sections */}
      <div className="py-20 sm:py-28 space-y-20 bg-white">
        {/* Category 1: Buying & Delivery */}
        <section id="buying-delivery" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-stone-100">
            <div className="w-12 h-12 rounded-2xl bg-nordic-50 border border-nordic-200/60 text-nordic-800 flex items-center justify-center flex-shrink-0 shadow-subtle">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-charcoal">
                1. Buying & Delivery
              </h2>
              <p className="text-xs text-charcoal-500">
                {FAQ_GROUPS[0].description}
              </p>
            </div>
          </div>
          <FaqAccordion faqs={FAQ_GROUPS[0].items} />
        </section>

        {/* Category 2: Product & Materials */}
        <section id="product-materials" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-stone-100">
            <div className="w-12 h-12 rounded-2xl bg-nordic-50 border border-nordic-200/60 text-nordic-800 flex items-center justify-center flex-shrink-0 shadow-subtle">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-charcoal">
                2. Product & Materials
              </h2>
              <p className="text-xs text-charcoal-500">
                {FAQ_GROUPS[1].description}
              </p>
            </div>
          </div>
          <FaqAccordion faqs={FAQ_GROUPS[1].items} />
        </section>

        {/* Category 3: Warranty & Trial */}
        <section id="warranty-trial" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-stone-100">
            <div className="w-12 h-12 rounded-2xl bg-nordic-50 border border-nordic-200/60 text-nordic-800 flex items-center justify-center flex-shrink-0 shadow-subtle">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-charcoal">
                3. Warranty & 100-Night Trial
              </h2>
              <p className="text-xs text-charcoal-500">
                {FAQ_GROUPS[2].description}
              </p>
            </div>
          </div>
          <FaqAccordion faqs={FAQ_GROUPS[2].items} />
        </section>
      </div>

      {/* Closing CTA Band */}
      <section className="py-20 bg-nordic-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Still Have Questions? Talk to Our Sleep Consultant.
          </h2>
          <p className="text-nordic-200 text-sm sm:text-base leading-relaxed">
            Our sleep experts are available every day to assist you with mattress thickness recommendations, custom cot dimensions, or trial policies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <a
              href={`tel:${brandConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="w-full sm:w-auto px-8 py-4 bg-white text-nordic-900 hover:bg-mist font-bold rounded-2xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <PhoneCall className="w-4 h-4 text-nordic-800" />
              <span>Call {brandConfig.phone}</span>
            </a>
            <Link
              href="/#collections"
              className="w-full sm:w-auto px-8 py-4 bg-nordic-800 hover:bg-nordic-700 text-white font-bold rounded-2xl border border-nordic-700 transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <span>Explore All 9 Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
