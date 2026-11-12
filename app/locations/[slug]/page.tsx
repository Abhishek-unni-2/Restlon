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
    <div className="w-full bg-cloud">
      <LocalBusinessJsonLd
        stateName={loc.stateName}
        slug={loc.slug}
        cities={loc.cities}
      />

      <Breadcrumbs
        items={[
          { label: "Locations", href: "/#locations" },
          { label: `${loc.stateName} Sleep Hub` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">

              {/* Exact H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal tracking-tight">
                {brandConfig.name} Mattress & Bed Shop in {loc.stateName}
              </h1>

              {/* Positioning Line */}
              <p className="text-lg sm:text-xl text-charcoal-700">
                {loc.positioningLine}
              </p>
              <p className="text-base text-charcoal-500">{loc.localDeliveryPromise}</p>

              <div className="pt-3 flex flex-wrap gap-3">
                <a
                  href="#recommended-models"
                  className="px-6 py-3 bg-nordic-800 hover:bg-nordic-900 text-white font-semibold rounded-full text-base transition-colors duration-300 active:scale-[0.98] flex items-center gap-2"
                >
                  <span>Explore {loc.stateName} Editions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#cities"
                  className="px-6 py-3 text-nordic-800 hover:bg-mist font-semibold rounded-full text-base transition-colors duration-300"
                >
                  Cities Served ({loc.cities.length})
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-mist">
                <Image
                  src={loc.heroImage}
                  alt={`${brandConfig.name} mattress in ${loc.stateName} home`}
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

      {/* Climate Adaptation Section */}
      <section className="py-20 bg-white border-b border-stone-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">

          <h2 className="text-3xl font-semibold text-charcoal">
            Engineered Specifically for {loc.stateName}&apos;s Unique Climate
          </h2>

          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed text-justify">
            {loc.climateParagraph}
          </p>
        </div>
      </section>

      {/* Recommended Categories */}
      <section id="recommended-models" className="py-20 sm:py-28 bg-mist border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-medium text-nordic-700">
              Regional Favorites
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mt-2 tracking-tight">
              Top Recommended Mattresses for {loc.stateName} Homes
            </h2>
            <p className="text-charcoal-700 text-sm mt-1">
              Selected by sleep specialists based on regional temperatures, humidity, and lifestyles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedCats.map((cat) => (
              <div
                key={cat!.slug}
                className="bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-7 flex flex-col justify-between shadow-subtle hover:shadow-card-hover transition-all group"
              >
                <div>
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 bg-mist border border-stone-200">
                    <Image
                      src={cat!.heroImage}
                      alt={cat!.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-white/95 text-charcoal text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {cat!.firmnessScale.split(" ")[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-charcoal group-hover:text-nordic-800 transition-colors">
                    {cat!.name} Mattress
                  </h3>
                  <p className="text-xs text-charcoal-500 mt-1 line-clamp-2">
                    {cat!.benefit}
                  </p>

                  <div className="mt-4 pt-3 border-t border-stone-100 space-y-1 text-xs text-charcoal-700">
                    <div>
                      <strong className="text-charcoal">Material:</strong> {cat!.material}
                    </div>
                    <div>
                      <strong className="text-charcoal">Ideal For:</strong> {cat!.audience}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-charcoal-500 block">Starting from</span>
                    <span className="text-lg font-bold text-charcoal">
                      ₹{cat!.priceTable[0].thickness6Price.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <Link
                    href={`/collections/${cat!.slug}`}
                    className="px-4 py-2 bg-nordic-800 hover:bg-nordic-900 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1 shadow-sm"
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

      {/* "Why Choose Us in [State]" */}
      <section className="py-20 bg-white border-b border-stone-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">

          <h2 className="text-3xl font-semibold text-charcoal">
            Why Choose {brandConfig.name} in {loc.stateName}?
          </h2>

          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed text-justify">
            {loc.whyChooseUsParagraph}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            <div className="p-5 rounded-2xl bg-mist border border-stone-200/70 text-center space-y-1.5">
              <Truck className="w-5 h-5 text-nordic-700 mx-auto" />
              <div className="font-bold text-sm text-charcoal">Free In-Room Delivery</div>
              <div className="text-[11px] text-charcoal-500">Direct to your bedroom</div>
            </div>
            <div className="p-5 rounded-2xl bg-mist border border-stone-200/70 text-center space-y-1.5">
              <ShieldCheck className="w-5 h-5 text-nordic-700 mx-auto" />
              <div className="font-bold text-sm text-charcoal">10-Year Warranty</div>
              <div className="text-[11px] text-charcoal-500">Non-sag core protection</div>
            </div>
            <div className="p-5 rounded-2xl bg-mist border border-stone-200/70 text-center space-y-1.5">
              <Clock className="w-5 h-5 text-nordic-700 mx-auto" />
              <div className="font-bold text-sm text-charcoal">100-Night Sleep Trial</div>
              <div className="text-[11px] text-charcoal-500">100% money-back guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities List Section */}
      <section id="cities" className="py-20 sm:py-24 bg-mist border-b border-stone-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-sm font-medium text-nordic-700">
            Full Coverage Across {loc.stateName}
          </span>

          <h2 className="text-3xl font-semibold text-charcoal">
            Cities & Towns Covered for Rapid Doorstep Delivery
          </h2>

          <p className="text-xs sm:text-sm text-charcoal-700 max-w-2xl mx-auto">
            Our specialized regional logistics fleet guarantees delivery, room placement, and unboxing across all major municipal and district headquarters:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-4">
            {loc.cities.map((city) => (
              <div
                key={city}
                className="p-3.5 rounded-2xl bg-white border border-stone-200/80 text-xs font-bold text-charcoal flex items-center justify-center gap-2 shadow-subtle"
              >
                <MapPin className="w-3.5 h-3.5 text-nordic-700 flex-shrink-0" />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FaqAccordion (3 Qs) */}
      <section className="py-20 bg-white border-b border-stone-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            faqs={loc.faqs}
            title={`${loc.stateName} Delivery & Order FAQs`}
            subtitle={`Common delivery, payment, and trial questions from customers across ${loc.stateName}.`}
          />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-nordic-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Get Your Mattress Delivered in {loc.stateName}
          </h2>
          <p className="text-nordic-200 text-sm leading-relaxed">
            Experience 100 nights of deeper, cooler rest. Free doorstep delivery and zero-cost EMI available.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#collections"
              className="px-8 py-4 bg-white text-nordic-900 hover:bg-mist font-bold rounded-2xl shadow-subtle transition-colors text-sm"
            >
              Shop All Mattresses
            </Link>
            <a
              href={`tel:${brandConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="px-8 py-4 bg-nordic-800 hover:bg-nordic-700 text-white font-bold rounded-2xl border border-nordic-700 transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <PhoneCall className="w-4 h-4 text-nordic-300" />
              <span>Call Local Support Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
