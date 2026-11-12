import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Wind,
  Activity,
  ShieldCheck,
  ThermometerSnowflake,
  HeartPulse,
  Sparkles,
  TreePine,
  Feather,
  Layers,
  ArrowRight,
} from "lucide-react";
import { CATEGORIES } from "@/data/categories";

const ICON_MAP: Record<string, React.ElementType> = {
  breathesafe: Wind,
  posturefit: Activity,
  antimicrobial: ShieldCheck,
  coolgel: ThermometerSnowflake,
  orthopaedic: HeartPulse,
  "memory-foam": Feather,
  coir: TreePine,
  "latex-foam": Sparkles,
  fusiontech: Layers,
};

export default function CollectionCardGrid({
  title = "Explore Our 9 Engineered Mattress Collections",
  subtitle = "From orthopedic spine correction to 100% organic Kerala latex and climate-adaptive cooling.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-20 sm:py-28 bg-mist/60 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-semibold tracking-widest text-nordic-700 bg-nordic-100 px-3.5 py-1 rounded-full uppercase">
            Curated Sleep Collections
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mt-3 tracking-tight">
            {title}
          </h2>
          <p className="text-charcoal-700 text-sm sm:text-base mt-2.5">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => {
            const IconComponent = ICON_MAP[cat.slug] || Layers;
            const minPrice = cat.priceTable[0].thickness6Price;

            return (
              <Link
                key={cat.slug}
                href={`/collections/${cat.slug}`}
                className="group bg-white rounded-3xl border border-stone-200/80 shadow-subtle hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Visual Header / Image thumbnail */}
                <div className="relative h-48 w-full bg-mist overflow-hidden">
                  <Image
                    src={cat.heroImage}
                    alt={`${cat.name} mattress preview`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                  {/* Firmness pill */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[11px] font-bold text-charcoal px-3 py-1 rounded-full shadow-sm">
                    {cat.firmnessScale.split(" ")[0]}
                  </div>

                  {/* Title & Icon Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-nordic-800 text-white flex items-center justify-center shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-nordic-200 transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-stone-200 line-clamp-1 font-normal">
                        {cat.material}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Benefit line */}
                    <p className="text-sm font-medium text-charcoal-700 line-clamp-2">
                      {cat.benefit}
                    </p>

                    {/* Target Audience tag */}
                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span className="text-charcoal-500 font-medium">Best for:</span>
                      <span className="font-semibold text-nordic-800 truncate max-w-[65%] text-right">
                        {cat.audience}
                      </span>
                    </div>
                  </div>

                  {/* Footer: Starting Price & CTA */}
                  <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-charcoal-500 block">Starting from</span>
                      <span className="text-lg font-bold text-charcoal">
                        ₹{minPrice.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-nordic-800 group-hover:translate-x-1 transition-transform">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
