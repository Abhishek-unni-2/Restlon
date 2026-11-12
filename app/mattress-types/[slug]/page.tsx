import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Info,
  Layers,
  MapPin,
} from "lucide-react";
import { PRODUCT_TYPES, getProductTypeBySlug } from "@/data/productTypes";
import { brandConfig } from "@/data/brandConfig";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import { ProductJsonLd } from "@/components/JsonLd";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return PRODUCT_TYPES.map((pt) => ({
    slug: pt.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const productType = getProductTypeBySlug(params.slug);
  if (!productType) return {};

  return {
    title: productType.metaTitle,
    description: productType.metaDescription,
    openGraph: {
      title: productType.metaTitle,
      description: productType.metaDescription,
      images: [productType.heroImage],
    },
  };
}

export default function ProductTypePage({ params }: Props) {
  const pt = getProductTypeBySlug(params.slug);
  if (!pt) notFound();

  return (
    <div className="w-full">
      {/* Product JSON-LD */}
      <ProductJsonLd
        name={pt.name}
        description={pt.angle}
        image={pt.heroImage}
        price={14999}
        slug={`mattress-types/${pt.slug}`}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Mattress Guides", href: "/#collections" },
          { label: pt.name },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-ivory border-b border-sand py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Specialized Sleep Guide & Catalog</span>
              </div>

              {/* Exact H1 Search Term */}
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
                {pt.name}
              </h1>

              {/* Angle subhead */}
              <p className="text-base sm:text-lg text-teal font-medium">
                {pt.angle} — {pt.emphasize}
              </p>

              {/* Opening Paragraph (~100 words) */}
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed pt-2">
                {pt.openingParagraph}
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href={`/collections/${pt.relatedCategorySlug}`}
                  className="px-6 py-3 bg-teal hover:bg-teal-600 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors shadow-sm flex items-center gap-2"
                >
                  <span>Explore {pt.name} Models</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#dimensions"
                  className="px-6 py-3 bg-white hover:bg-stone-50 text-stone-800 font-semibold rounded-xl text-xs sm:text-sm border border-sand transition-colors"
                >
                  View Dimensions Table
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-84 w-full rounded-2xl overflow-hidden shadow-lg border border-sand">
                <Image
                  src={pt.heroImage}
                  alt={`${pt.name} luxury master bedroom setup`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-wider text-sand font-semibold">
                    100-Night Sleep Trial
                  </div>
                  <div className="font-serif text-lg font-bold">
                    Zero-Sag Medical Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key-Feature Bullets (4–5 Bullets) */}
      <section className="py-16 sm:py-20 bg-white border-b border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3 py-1 rounded-full">
              Engineering Hallmarks
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
              Key Features of {brandConfig.name}&apos;s {pt.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pt.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-ivory/50 border border-sand hover:border-teal/50 transition-colors space-y-2.5"
              >
                <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center font-serif font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-base text-stone-900">
                  {feat.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size & Dimensions Table (Inches + CM) */}
      <section id="dimensions" className="py-16 sm:py-20 bg-ivory border-b border-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3 py-1 rounded-full">
              Standard Indian Measurements
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
              {pt.name} Size & Dimension Specifications
            </h2>
            <p className="text-xs sm:text-sm text-warmgrey mt-1">
              Verify your cot frame dimensions in inches and centimeters before ordering.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-sand p-6 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-sand text-xs font-bold uppercase tracking-wider text-warmgrey bg-ivory/60">
                  <th className="py-3 px-4 rounded-l-lg">Configuration</th>
                  <th className="py-3 px-4">Inches (L × W)</th>
                  <th className="py-3 px-4">Centimeters (L × W)</th>
                  <th className="py-3 px-4">Thickness</th>
                  <th className="py-3 px-4">Recommended Room</th>
                  <th className="py-3 px-4 rounded-r-lg">Price Guide</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand/70 text-xs sm:text-sm">
                {pt.dimensionsTable.map((d, index) => (
                  <tr key={index} className="hover:bg-ivory/40 transition-colors">
                    <td className="py-4 px-4 font-serif font-bold text-stone-900">
                      {d.variant}
                    </td>
                    <td className="py-4 px-4 font-mono font-medium text-teal">
                      {d.lengthWidthInches}
                    </td>
                    <td className="py-4 px-4 font-mono text-stone-600">
                      {d.lengthWidthCm}
                    </td>
                    <td className="py-4 px-4 text-stone-700">
                      {d.recommendedThickness}
                    </td>
                    <td className="py-4 px-4 text-stone-600">
                      {d.idealRoomSize}
                    </td>
                    <td className="py-4 px-4 font-bold text-stone-900">
                      {d.priceRange}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 pt-3 border-t border-sand flex items-center gap-2 text-xs text-warmgrey">
              <Info className="w-4 h-4 text-teal flex-shrink-0" />
              <span>
                Need custom dimensions? Measure your cot cavity and we will hand-craft your {pt.name} to exact dimensions.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* "Why Choose [Brand]'s [type]" Paragraph (~100 words) & Trust/Location (~80 words) */}
      <section className="py-16 sm:py-20 bg-white border-b border-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Why Choose Paragraph */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3 py-1 rounded-full">
              Direct-from-Manufacturer Value
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Why Choose {brandConfig.name}&apos;s {pt.name}?
            </h2>
            <p className="text-stone-700 text-base leading-relaxed text-justify">
              {pt.whyChooseParagraph}
            </p>
          </div>

          {/* Trust / Location Paragraph */}
          <div className="p-6 rounded-2xl bg-ivory border border-sand space-y-3">
            <div className="flex items-center gap-2 text-teal font-semibold text-sm">
              <MapPin className="w-4 h-4" />
              <span>Doorstep Delivery Across India, Kerala, Tamil Nadu & Maharashtra</span>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              {pt.trustLocationParagraph}
            </p>
          </div>
        </div>
      </section>

      {/* Related Category CTA Band */}
      <section className="py-12 bg-teal text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-sand font-semibold">
              Ready to Upgrade?
            </span>
            <h3 className="font-serif text-2xl font-bold mt-1">
              Shop {pt.relatedCategoryName}
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 mt-1">
              Includes 100-night trial, 10-year warranty, and free pan-India door delivery.
            </p>
          </div>

          <Link
            href={`/collections/${pt.relatedCategorySlug}`}
            className="px-8 py-3.5 bg-white text-teal hover:bg-ivory font-bold rounded-xl shadow-lg transition-colors flex items-center gap-2 text-sm flex-shrink-0"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FaqAccordion (2–3 Qs) */}
      <section className="py-16 sm:py-20 bg-white border-b border-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            faqs={pt.faqs}
            title={`${pt.name} FAQs`}
            subtitle={`Essential information regarding dimensions, delivery, and care for ${pt.name}.`}
          />
        </div>
      </section>
    </div>
  );
}
