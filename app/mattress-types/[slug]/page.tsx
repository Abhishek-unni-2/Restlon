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
    <div className="w-full bg-cloud">
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
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">

              {/* Exact H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal tracking-tight">
                {pt.name}
              </h1>

              {/* Angle subhead */}
              <p className="text-lg sm:text-xl text-charcoal-700">
                {pt.angle} — {pt.emphasize}
              </p>

              {/* Opening Paragraph (~100 words) */}
              <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed pt-2">
                {pt.openingParagraph}
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href={`/collections/${pt.relatedCategorySlug}`}
                  className="px-6 py-3 bg-nordic-800 hover:bg-nordic-900 text-white font-semibold rounded-full text-base transition-colors duration-300 active:scale-[0.98] flex items-center gap-2"
                >
                  <span>Explore {pt.name} Models</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#dimensions"
                  className="px-6 py-3 text-nordic-800 hover:bg-mist font-semibold rounded-full text-base transition-colors duration-300"
                >
                  View Dimensions Table
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-mist">
                <Image
                  src={pt.heroImage}
                  alt={`${pt.name} luxury master bedroom setup`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key-Feature Bullets (4–5 Bullets) */}
      <section className="py-20 bg-white border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-medium text-nordic-700">
              Engineering Hallmarks
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mt-2 tracking-tight">
              Key Features of {brandConfig.name}&apos;s {pt.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pt.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-mist border border-stone-200/80 hover:border-nordic-400 transition-colors space-y-2.5"
              >
                <div className="w-10 h-10 rounded-2xl bg-nordic-100 text-nordic-900 flex items-center justify-center font-mono font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-semibold text-base text-charcoal">
                  {feat.title}
                </h3>
                <p className="text-xs text-charcoal-500 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size & Dimensions Table */}
      <section id="dimensions" className="py-20 sm:py-28 bg-mist border-b border-stone-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-nordic-700">
              Indian Dimensions
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mt-2 tracking-tight">
              {pt.name} Size & Dimension Specifications
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
              Verify your cot frame cavity in inches and centimeters before ordering.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200/80 p-7 shadow-card overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200 text-sm font-medium text-charcoal-500 bg-mist">
                  <th className="py-3 px-4 rounded-l-xl">Configuration</th>
                  <th className="py-3 px-4">Inches (L × W)</th>
                  <th className="py-3 px-4">Centimeters (L × W)</th>
                  <th className="py-3 px-4">Thickness</th>
                  <th className="py-3 px-4">Recommended Room</th>
                  <th className="py-3 px-4 rounded-r-xl">Price Guide</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-xs sm:text-sm">
                {pt.dimensionsTable.map((d, index) => (
                  <tr key={index} className="hover:bg-mist/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-charcoal">
                      {d.variant}
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-nordic-800">
                      {d.lengthWidthInches}
                    </td>
                    <td className="py-4 px-4 font-mono text-charcoal-700">
                      {d.lengthWidthCm}
                    </td>
                    <td className="py-4 px-4 text-charcoal-700">
                      {d.recommendedThickness}
                    </td>
                    <td className="py-4 px-4 text-charcoal-500">
                      {d.idealRoomSize}
                    </td>
                    <td className="py-4 px-4 font-bold text-charcoal">
                      {d.priceRange}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2 text-xs text-charcoal-500">
              <Info className="w-4 h-4 text-nordic-700 flex-shrink-0" />
              <span>
                Need custom dimensions? Measure your bed frame cavity and we will craft your {pt.name} to exact millimeter specifications.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* "Why Choose [Brand]'s [type]" Paragraph & Trust */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4">
            <span className="text-sm font-medium text-nordic-700">
              Direct-from-Manufacturer Value
            </span>
            <h2 className="text-3xl font-semibold text-charcoal">
              Why Choose {brandConfig.name}&apos;s {pt.name}?
            </h2>
            <p className="text-charcoal-700 text-base leading-relaxed text-justify">
              {pt.whyChooseParagraph}
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-mist border border-stone-200/80 space-y-3">
            <div className="flex items-center gap-2 text-nordic-900 font-bold text-sm">
              <MapPin className="w-4 h-4" />
              <span>Doorstep Delivery Across India, Kerala, Tamil Nadu & Maharashtra</span>
            </div>
            <p className="text-charcoal-700 text-xs sm:text-sm leading-relaxed">
              {pt.trustLocationParagraph}
            </p>
          </div>
        </div>
      </section>

      {/* Related Category CTA Band */}
      <section className="py-14 bg-nordic-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-sm font-medium text-nordic-200">
              Ready to Upgrade?
            </span>
            <h3 className="text-2xl font-semibold mt-1 text-white">
              Shop {pt.relatedCategoryName}
            </h3>
            <p className="text-xs sm:text-sm text-nordic-200 mt-1">
              Includes 100-night trial, 10-year warranty, and free pan-India door delivery.
            </p>
          </div>

          <Link
            href={`/collections/${pt.relatedCategorySlug}`}
            className="px-8 py-4 bg-white text-nordic-900 hover:bg-mist font-bold rounded-2xl shadow-subtle transition-colors flex items-center gap-2 text-sm flex-shrink-0"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FaqAccordion (2–3 Qs) */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/70">
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
