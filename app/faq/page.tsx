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
    <div className="w-full">
      {/* Sitewide FAQPage JSON-LD for rich search results */}
      <FaqPageJsonLd faqs={ALL_FAQS} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

      {/* Header / Intro Section */}
      <section className="bg-ivory border-b border-sand py-14 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 text-teal text-xs font-semibold">
            <HelpCircle className="w-4 h-4" />
            <span>Help & Sleep Support Center</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have questions about finding the right mattress, how our 100-night home trial works, or doorstep delivery in your city? Explore our categorized guide below.
          </p>

          {/* Quick jump anchor links */}
          <div className="pt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
            <a
              href="#buying-delivery"
              className="px-4 py-2 rounded-xl bg-white border border-sand text-xs font-semibold text-stone-800 hover:text-teal hover:border-teal transition-colors"
            >
              Buying & Delivery
            </a>
            <a
              href="#product-materials"
              className="px-4 py-2 rounded-xl bg-white border border-sand text-xs font-semibold text-stone-800 hover:text-teal hover:border-teal transition-colors"
            >
              Product & Materials
            </a>
            <a
              href="#warranty-trial"
              className="px-4 py-2 rounded-xl bg-white border border-sand text-xs font-semibold text-stone-800 hover:text-teal hover:border-teal transition-colors"
            >
              Warranty & 100-Night Trial
            </a>
          </div>
        </div>
      </section>

      {/* Categorized FAQ Sections */}
      <div className="py-16 sm:py-24 space-y-16 sm:space-y-24 bg-white">
        {/* Category 1: Buying & Delivery */}
        <section id="buying-delivery" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-sand">
            <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                1. Buying & Delivery
              </h2>
              <p className="text-xs text-warmgrey">
                {FAQ_GROUPS[0].description}
              </p>
            </div>
          </div>
          <FaqAccordion faqs={FAQ_GROUPS[0].items} />
        </section>

        {/* Category 2: Product & Materials */}
        <section id="product-materials" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-sand">
            <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                2. Product & Materials
              </h2>
              <p className="text-xs text-warmgrey">
                {FAQ_GROUPS[1].description}
              </p>
            </div>
          </div>
          <FaqAccordion faqs={FAQ_GROUPS[1].items} />
        </section>

        {/* Category 3: Warranty & Trial */}
        <section id="warranty-trial" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-sand">
            <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                3. Warranty & 100-Night Trial
              </h2>
              <p className="text-xs text-warmgrey">
                {FAQ_GROUPS[2].description}
              </p>
            </div>
          </div>
          <FaqAccordion faqs={FAQ_GROUPS[2].items} />
        </section>
      </div>

      {/* Closing CTA Band */}
      <section className="py-16 bg-teal text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="font-serif text-3xl font-bold">
            Still Have Questions? Talk to Our Sleep Doctor.
          </h2>
          <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
            Our sleep consultants are available every day to assist you with mattress thickness recommendations, custom dimensions, or order status.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <a
              href={`tel:${brandConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-teal hover:bg-ivory font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call {brandConfig.phone}</span>
            </a>
            <Link
              href="/#collections"
              className="w-full sm:w-auto px-8 py-3.5 bg-teal-800 hover:bg-teal-700 text-white font-semibold rounded-xl border border-teal-500/30 transition-colors flex items-center justify-center gap-2 text-sm"
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
