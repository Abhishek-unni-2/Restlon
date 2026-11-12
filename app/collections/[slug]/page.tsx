import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Wind,
  ShieldCheck,
  Activity,
  ThermometerSnowflake,
  Sparkles,
  Feather,
  CheckCircle2,
  Layers,
  ArrowRight,
  Award,
  Truck,
  RotateCcw,
} from "lucide-react";
import { CATEGORIES, getCategoryBySlug } from "@/data/categories";
import { brandConfig } from "@/data/brandConfig";
import Breadcrumbs from "@/components/Breadcrumbs";
import SizeComparisonTable from "@/components/SizeComparisonTable";
import FaqAccordion from "@/components/FaqAccordion";
import ProductQuickAddCard from "@/components/ProductQuickAddCard";
import { ProductJsonLd } from "@/components/JsonLd";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);
  if (!category) return {};

  const title = `${category.name} Mattress | Buy Online – ${brandConfig.name}`;
  const description = `Shop the ${category.name} mattress collection. ${category.benefit}. Engineered with ${category.material}. 100-night trial & free doorstep delivery.`.slice(0, 155);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [category.heroImage],
    },
  };
}

const BENEFIT_ICON_MAP = {
  Wind,
  ShieldCheck,
  Activity,
  ThermometerSnowflake,
  Sparkles,
  Feather,
  CheckCircle2,
  Layers,
};

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const crossSell1 = getCategoryBySlug(category.crossSellSlugs[0]);
  const crossSell2 = getCategoryBySlug(category.crossSellSlugs[1]);

  return (
    <div className="w-full bg-cloud">
      <ProductJsonLd
        name={`${category.name} Mattress`}
        description={category.benefit}
        image={category.heroImage}
        price={category.priceTable[0].thickness6Price}
        slug={category.slug}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Collections", href: "/#collections" },
          { label: `${category.name} Mattress` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text details */}
            <div className="lg:col-span-7 space-y-4">

              {/* Exact H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal tracking-tight">
                {category.name} Mattress Collection
              </h1>

              {/* Subhead */}
              <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
                {category.tagline}
              </p>

              <p className="text-sm text-charcoal-500">
                {category.firmnessScale} · {category.warranty}
              </p>

              {/* Action buttons */}
              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="px-6 py-3 bg-nordic-800 hover:bg-nordic-900 text-white font-semibold rounded-full text-base transition-colors duration-300 active:scale-[0.98]"
                >
                  View models, from ₹{category.priceTable[0].thickness6Price.toLocaleString("en-IN")}
                </a>
                <a
                  href="#size-table"
                  className="px-6 py-3 text-nordic-800 hover:bg-mist font-semibold rounded-full text-base transition-colors duration-300"
                >
                  Size guide
                </a>
              </div>
            </div>

            {/* Visual preview */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-mist">
                <Image
                  src={category.heroImage}
                  alt={`${category.name} mattress aesthetic preview`}
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

      {/* Benefit Strip (3 Icons) */}
      <section className="bg-white border-b border-stone-200/70 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {category.benefitsList.map((item, idx) => {
              const IconComp = BENEFIT_ICON_MAP[item.iconName] || CheckCircle2;
              return (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-3xl bg-mist">
                  <div className="w-12 h-12 rounded-2xl bg-white text-nordic-800 flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs text-charcoal-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ProductQuickAddCard Grid */}
      <section id="products" className="py-20 bg-mist border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-nordic-700">
              Choose Configuration
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mt-2 tracking-tight">
              Select Your {category.name} Mattress
            </h2>
            <p className="text-charcoal-700 text-sm mt-1.5">
              Available in Single, Queen, and King sizes with 6, 8, or 10-inch loft options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((prod) => (
              <ProductQuickAddCard
                key={prod.id}
                id={prod.id}
                name={prod.name}
                slug={category.slug}
                image={prod.image}
                startingPrice={prod.startingPrice}
                originalPrice={prod.originalPrice}
                rating={prod.rating}
                reviewsCount={prod.reviewsCount}
                badge={prod.badge}
                keySpecs={prod.keySpecs}
                thicknessOptions={prod.thicknessOptions}
                sizeOptions={prod.sizeOptions}
              />
            ))}

            {/* Custom order banner card */}
            <div className="bg-white rounded-2xl border border-stone-200/80 p-7 flex flex-col justify-between shadow-subtle">
              <div className="space-y-3">
                <span className="text-sm font-medium text-nordic-800">
                  Bespoke Dimensions
                </span>
                <h3 className="text-lg font-semibold text-charcoal">
                  Custom Size Available
                </h3>
                <p className="text-xs text-charcoal-700 leading-relaxed">
                  Need non-standard dimensions for an heirloom wooden cot or imported frame? We manufacture custom sizes for the {category.name} collection in 3 to 5 business days with zero surcharge.
                </p>
                <div className="pt-2 space-y-1.5 text-xs text-charcoal-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-nordic-700" /> 100% Custom Length & Width
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-nordic-700" /> 100-Night Home Trial
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-nordic-700" /> Direct Factory Pricing
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-100">
                <a
                  href={`https://wa.me/919846012345?text=Hello%20Restora%2C%20I%20am%20interested%20in%20a%20custom%20${category.name}%20mattress`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-mist hover:bg-nordic-800 hover:text-white text-charcoal text-xs font-bold rounded-2xl border border-stone-200 flex items-center justify-center gap-1.5 transition-colors"
                >
                  Request Custom Quote via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "What is [name]?" Explainer Section (~150–200 words) */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-medium text-nordic-700">
              Material Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mt-2 tracking-tight">
              What is the {category.name} Mattress?
            </h2>
          </div>

          <div className="prose prose-stone max-w-none text-charcoal-700 text-base sm:text-lg leading-relaxed text-justify space-y-4 font-normal">
            <p>{category.explainerParagraph}</p>
          </div>

          {/* Construction Layer Highlight Box */}
          <div className="mt-12 p-7 rounded-2xl bg-mist border border-stone-200/80 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-charcoal">
                Key Construction Specifications
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700">
                {category.specifications.map((spec, i) => (
                  <li key={i} className="flex justify-between py-1.5 border-b border-stone-200/60">
                    <span className="text-charcoal-500 font-medium">{spec.label}:</span>
                    <span className="font-bold text-charcoal text-right">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-52 w-full rounded-2xl overflow-hidden border border-stone-200/80 bg-white shadow-subtle">
              <Image
                src={category.layerImage}
                alt={`${category.name} internal layered construction`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SizeComparisonTable */}
      <section id="size-table" className="py-20 sm:py-28 bg-mist border-b border-stone-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SizeComparisonTable
            title={`${category.name} Size & Thickness Comparison`}
            subtitle={`Compare dimensions and pricing across Single, Double, Queen, and King options for the ${category.name} collection.`}
            customRows={category.priceTable.map((pt) => ({
              size: pt.size,
              dimensionsInches: pt.dimensionsInches,
              dimensionsCm: pt.dimensionsCm,
              thickness6Price: pt.thickness6Price,
              thickness8Price: pt.thickness8Price,
              thickness10Price: pt.thickness10Price,
            }))}
          />
        </div>
      </section>

      {/* FaqAccordion (3–4 Qs) */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            faqs={category.faqs}
            title={`${category.name} Mattress FAQs`}
            subtitle={`Common questions about firmness, materials, and warranty for the ${category.name} series.`}
          />
        </div>
      </section>

      {/* Cross-Sell Band */}
      {(crossSell1 || crossSell2) && (
        <section className="py-20 bg-mist border-b border-stone-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-sm font-medium text-nordic-700">
                Explore Alternatives
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-charcoal mt-2 tracking-tight">
                Sleepers Also Explored
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[crossSell1, crossSell2].filter(Boolean).map((cross) => (
                <Link
                  key={cross!.slug}
                  href={`/collections/${cross!.slug}`}
                  className="group bg-white rounded-2xl border border-stone-200/80 p-6 flex flex-col justify-between hover:shadow-card-hover transition-all"
                >
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-mist flex-shrink-0 border border-stone-200">
                      <Image
                        src={cross!.heroImage}
                        alt={cross!.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-charcoal group-hover:text-nordic-800 transition-colors">
                          {cross!.name}
                        </h3>
                        <span className="text-[10px] bg-stone-100 px-2.5 py-0.5 rounded-full text-charcoal font-semibold">
                          {cross!.firmnessScale.split(" ")[0]}
                        </span>
                      </div>
                      <p className="text-xs text-charcoal-500 mt-1 line-clamp-2">
                        {cross!.benefit}
                      </p>
                      <p className="text-xs text-nordic-800 mt-1.5 font-bold">
                        From ₹{cross!.priceTable[0].thickness6Price.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-nordic-800 group-hover:translate-x-1 transition-transform">
                    <span>View {cross!.name} Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing SEO Paragraph (~100 words) */}
      <section className="py-14 bg-white border-t border-stone-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm text-charcoal-500 leading-relaxed">
            {category.seoClosingParagraph}
          </p>
        </div>
      </section>
    </div>
  );
}
