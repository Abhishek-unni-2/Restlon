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
    <div className="w-full">
      {/* Product Schema.org JSON-LD */}
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
      <section className="bg-ivory border-b border-sand py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>Engineered Mattress Series</span>
              </div>

              {/* H1 Requirement */}
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
                {category.name} Mattress Collection
              </h1>

              {/* Subhead Requirement */}
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
                {category.tagline}
              </p>

              {/* Quick specs pill row */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-white border border-sand text-stone-800 font-medium">
                  <strong>Firmness:</strong> {category.firmnessScale}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-sand text-stone-800 font-medium">
                  <strong>Core:</strong> {category.material}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-sand text-stone-800 font-medium">
                  <strong>Warranty:</strong> {category.warranty}
                </span>
              </div>

              {/* Action buttons */}
              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="px-6 py-3 bg-teal hover:bg-teal-600 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors shadow-sm"
                >
                  View Models & Pricing • From ₹{category.priceTable[0].thickness6Price.toLocaleString("en-IN")}
                </a>
                <a
                  href="#size-table"
                  className="px-6 py-3 bg-white hover:bg-stone-50 text-stone-800 font-semibold rounded-xl text-xs sm:text-sm border border-sand transition-colors"
                >
                  Size & Dimension Guide
                </a>
              </div>
            </div>

            {/* Visual preview */}
            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-sand">
                <Image
                  src={category.heroImage}
                  alt={`${category.name} mattress aesthetic preview`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-stone-900 shadow">
                  100-Night Trial Included
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Strip (3 Icons) */}
      <section className="bg-white border-b border-sand py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {category.benefitsList.map((item, idx) => {
              const IconComp = BENEFIT_ICON_MAP[item.iconName] || CheckCircle2;
              return (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-ivory/50 border border-sand/60">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
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
      <section id="products" className="py-16 bg-ivory/40 border-b border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Select Your {category.name} Mattress
            </h2>
            <p className="text-stone-600 text-sm mt-1.5">
              Configured with standard thicknesses and high-density foam foundations.
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

            {/* Custom order / contact banner card */}
            <div className="bg-white rounded-2xl border border-sand p-6 flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-teal">
                  Bespoke Sizing
                </span>
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  Custom Size Available
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Need non-standard dimensions for an heirloom wooden frame or imported bed? We manufacture custom sizes for the {category.name} collection in 3 to 5 business days with zero surcharge.
                </p>
                <div className="pt-2 space-y-1.5 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal" /> 100% Custom Length & Width
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal" /> 100-Night Home Trial
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal" /> Direct Factory Pricing
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-sand">
                <a
                  href={`https://wa.me/919846012345?text=Hello%20Restora%2C%20I%20am%20interested%20in%20a%20custom%20${category.name}%20mattress`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-ivory hover:bg-teal hover:text-white text-stone-800 text-xs font-semibold rounded-xl border border-sand flex items-center justify-center gap-1.5 transition-colors"
                >
                  Request Custom Quote via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "What is [name]?" Explainer Section (~150–200 words) */}
      <section className="py-16 sm:py-20 bg-white border-b border-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3 py-1 rounded-full">
              Behind the Innovation
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
              What is the {category.name} Mattress?
            </h2>
          </div>

          <div className="prose prose-stone max-w-none text-stone-700 text-base sm:text-lg leading-relaxed text-justify space-y-4">
            <p>{category.explainerParagraph}</p>
          </div>

          {/* Construction Layer Highlight Box */}
          <div className="mt-10 p-6 rounded-2xl bg-ivory border border-sand grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <h4 className="font-serif text-base font-bold text-stone-900">
                Key Construction Specifications
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                {category.specifications.map((spec, i) => (
                  <li key={i} className="flex justify-between py-1 border-b border-sand/50">
                    <span className="text-warmgrey font-medium">{spec.label}:</span>
                    <span className="font-semibold text-stone-900 text-right">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-48 w-full rounded-xl overflow-hidden border border-sand">
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
      <section id="size-table" className="py-16 sm:py-20 bg-ivory/50 border-b border-sand">
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
      <section className="py-16 sm:py-20 bg-white border-b border-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            faqs={category.faqs}
            title={`${category.name} Mattress FAQs`}
            subtitle={`Common questions about firmness, materials, and warranty for the ${category.name} series.`}
          />
        </div>
      </section>

      {/* Cross-Sell Band (2 Related Categories) */}
      {(crossSell1 || crossSell2) && (
        <section className="py-16 sm:py-20 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3 py-1 rounded-full">
                Compare Related Sleep Technologies
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
                Sleepers Also Explored
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[crossSell1, crossSell2].filter(Boolean).map((cross) => (
                <Link
                  key={cross!.slug}
                  href={`/collections/${cross!.slug}`}
                  className="group bg-white rounded-2xl border border-sand p-6 flex flex-col justify-between hover:border-teal/50 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0 border border-sand">
                      <Image
                        src={cross!.heroImage}
                        alt={cross!.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-teal transition-colors">
                          {cross!.name}
                        </h3>
                        <span className="text-[10px] bg-sand/60 px-2 py-0.5 rounded-full text-stone-700">
                          {cross!.firmnessScale.split(" ")[0]}
                        </span>
                      </div>
                      <p className="text-xs text-warmgrey mt-1 line-clamp-2">
                        {cross!.benefit}
                      </p>
                      <p className="text-xs text-teal mt-1 font-semibold">
                        From ₹{cross!.priceTable[0].thickness6Price.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-sand flex items-center justify-between text-xs font-semibold text-teal group-hover:translate-x-1 transition-transform">
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
      <section className="py-12 bg-white border-t border-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm text-warmgrey leading-relaxed">
            {category.seoClosingParagraph}
          </p>
        </div>
      </section>
    </div>
  );
}
