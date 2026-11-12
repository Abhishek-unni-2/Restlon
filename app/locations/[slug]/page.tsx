import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ThermometerSun,
  Award,
  PhoneCall,
  Clock,
} from "lucide-react";
import { LOCATIONS, getLocationBySlug } from "@/data/locations";
import { CATEGORIES, getCategoryBySlug } from "@/data/categories";
import { brandConfig } from "@/data/brandConfig";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import { LocalBusinessJsonLd } from "@/components/JsonLd";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const loc = getLocationBySlug(params.slug);
  if (!loc) return {};

  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      images: [loc.heroImage],
    },
  };
}

export default function LocationPage({ params }: Props) {
  const loc = getLocationBySlug(params.slug);
  if (!loc) notFound();

  const recommendedCats = loc.recommendedCategorySlugs
    .map((slug) => getCategoryBySlug(slug))
    .filter(Boolean);

  return (
    <div className="w-full">
      {/* LocalBusiness JSON-LD */}
      <LocalBusinessJsonLd
        stateName={loc.stateName}
        slug={loc.slug}
        cities={loc.cities}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Locations", href: "/#locations" },
          { label: `${loc.stateName} Sleep Hub` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-ivory border-b border-sand py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Regional Fulfillment Hub • {loc.stateName}</span>
              </div>

              {/* Exact H1 */}
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
                {brandConfig.name} Mattress & Bed Shop in {loc.stateName}
              </h1>

              {/* Positioning Line */}
              <p className="text-base sm:text-lg text-teal font-medium">
                {loc.positioningLine}
              </p>

              {/* Delivery Promise Pill */}
              <div className="p-3.5 rounded-xl bg-white border border-sand flex items-center gap-3 text-xs sm:text-sm text-stone-800">
                <Truck className="w-5 h-5 text-teal flex-shrink-0" />
                <span className="font-medium">{loc.localDeliveryPromise}</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap gap-3">
                <a
                  href="#recommended-models"
                  className="px-6 py-3 bg-teal hover:bg-teal-600 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors shadow-sm flex items-center gap-2"
                >
                  <span>Explore {loc.stateName} Editions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#cities"
                  className="px-6 py-3 bg-white hover:bg-stone-50 text-stone-800 font-semibold rounded-xl text-xs sm:text-sm border border-sand transition-colors"
                >
                  Cities Served ({loc.cities.length})
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-84 w-full rounded-2xl overflow-hidden shadow-lg border border-sand">
                <Image
                  src={loc.heroImage}
                  alt={`${brandConfig.name} mattress in ${loc.stateName} home`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-wider text-sand font-semibold">
                    Direct Factory Logistics
                  </div>
                  <div className="font-serif text-lg font-bold">
                    Fast Doorstep Delivery in {loc.stateName}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Adaptation Section */}
      <section className="py-16 bg-white border-b border-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand/50 text-stone-800 text-xs font-semibold">
            <ThermometerSun className="w-3.5 h-3.5 text-terracotta" />
            <span>Climate & Environment Engineering</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Engineered Specifically for {loc.stateName}&apos;s Unique Climate
          </h2>

          <p className="text-stone-700 text-base sm:text-lg leading-relaxed text-justify">
            {loc.climateParagraph}
          </p>
        </div>
      </section>

      {/* Recommended 2-3 Categories */}
      <section id="recommended-models" className="py-16 sm:py-20 bg-ivory/60 border-b border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3 py-1 rounded-full">
              Regional Favorites
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
              Top Recommended Mattresses for {loc.stateName} Homes
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Selected by sleep specialists based on regional temperatures, humidity, and lifestyles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedCats.map((cat) => (
              <div
                key={cat!.slug}
                className="bg-white rounded-2xl border border-sand p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 bg-stone-100 border border-sand">
                    <Image
                      src={cat!.heroImage}
                      alt={cat!.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-white/90 text-stone-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                      {cat!.firmnessScale.split(" ")[0]}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-teal transition-colors">
                    {cat!.name} Mattress
                  </h3>
                  <p className="text-xs text-warmgrey mt-1">
                    {cat!.benefit}
                  </p>

                  <div className="mt-4 pt-3 border-t border-sand/70 space-y-1 text-xs text-stone-600">
                    <div>
                      <strong className="text-stone-900">Material:</strong> {cat!.material}
                    </div>
                    <div>
                      <strong className="text-stone-900">Ideal For:</strong> {cat!.audience}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-sand flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-warmgrey block">Starting from</span>
                    <span className="font-serif text-lg font-bold text-stone-900">
                      ₹{cat!.priceTable[0].thickness6Price.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <Link
                    href={`/collections/${cat!.slug}`}
                    className="px-4 py-2 bg-teal hover:bg-teal-600 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1"
                  >
                    <span>View Models</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Why Choose Us in [State]" Section */}
      <section className="py-16 bg-white border-b border-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Direct-to-Consumer Service</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Why Choose {brandConfig.name} in {loc.stateName}?
          </h2>

          <p className="text-stone-700 text-base sm:text-lg leading-relaxed text-justify">
            {loc.whyChooseUsParagraph}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-ivory border border-sand text-center space-y-1">
              <Truck className="w-5 h-5 text-teal mx-auto" />
              <div className="font-serif font-bold text-sm text-stone-900">Free In-Room Delivery</div>
              <div className="text-[11px] text-warmgrey">Direct to your bedroom</div>
            </div>
            <div className="p-4 rounded-xl bg-ivory border border-sand text-center space-y-1">
              <ShieldCheck className="w-5 h-5 text-teal mx-auto" />
              <div className="font-serif font-bold text-sm text-stone-900">10-Year Warranty</div>
              <div className="text-[11px] text-warmgrey">Non-sag core protection</div>
            </div>
            <div className="p-4 rounded-xl bg-ivory border border-sand text-center space-y-1">
              <Clock className="w-5 h-5 text-teal mx-auto" />
              <div className="font-serif font-bold text-sm text-stone-900">100-Night Sleep Trial</div>
              <div className="text-[11px] text-warmgrey">100% money-back guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities List Section */}
      <section id="cities" className="py-16 bg-ivory/50 border-b border-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3 py-1 rounded-full">
            Full Coverage Across {loc.stateName}
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Cities & Towns Covered for Rapid Doorstep Delivery
          </h2>

          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto">
            Our specialized regional logistics fleet guarantees delivery, room placement, and unboxing across all major municipal and district headquarters:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-4">
            {loc.cities.map((city) => (
              <div
                key={city}
                className="p-3 rounded-xl bg-white border border-sand text-xs font-semibold text-stone-800 flex items-center justify-center gap-2 shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FaqAccordion (3 Qs) */}
      <section className="py-16 bg-white border-b border-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            faqs={loc.faqs}
            title={`${loc.stateName} Delivery & Order FAQs`}
            subtitle={`Common delivery, payment, and trial questions from customers across ${loc.stateName}.`}
          />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-teal text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-serif text-3xl font-bold">
            Get Your Mattress Delivered in {loc.stateName}
          </h2>
          <p className="text-teal-100 text-sm leading-relaxed">
            Experience 100 nights of deeper, cooler rest. Free doorstep delivery and zero-cost EMI available.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#collections"
              className="px-8 py-3.5 bg-white text-teal hover:bg-ivory font-bold rounded-xl shadow-md transition-colors text-sm"
            >
              Shop All Mattresses
            </Link>
            <a
              href={`tel:${brandConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="px-8 py-3.5 bg-teal-800 hover:bg-teal-700 text-white font-semibold rounded-xl border border-teal-500/30 transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Local Support Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
