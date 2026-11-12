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
    <section className="py-16 sm:py-20 bg-ivory/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3 py-1 rounded-full">
            Sleep Science Engineered for India
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-3 tracking-tight">
            {title}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => {
            const IconComponent = ICON_MAP[cat.slug] || Layers;
            const minPrice = cat.priceTable[0].thickness6Price;

            return (
              <Link
                key={cat.slug}
                href={`/collections/${cat.slug}`}
                className="group bg-white rounded-2xl border border-sand hover:border-teal/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Visual Header / Image thumbnail */}
                <div className="relative h-44 w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={cat.heroImage}
                    alt={`${cat.name} mattress preview`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />

                  {/* Firmness pill */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[11px] font-semibold text-stone-900 px-2.5 py-1 rounded-full shadow-sm">
                    {cat.firmnessScale.split(" ")[0]} Firmness
                  </div>

                  {/* Icon & Title Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal text-white flex items-center justify-center shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-sand transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-[11px] text-stone-300 font-sans line-clamp-1">
                        {cat.material}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Benefit line */}
                    <p className="text-sm font-medium text-stone-800 line-clamp-2">
                      {cat.benefit}
                    </p>

                    {/* Target Audience tag */}
                    <div className="mt-3 pt-3 border-t border-sand/60 flex items-center justify-between text-xs">
                      <span className="text-warmgrey">Recommended for:</span>
                      <span className="font-semibold text-teal truncate max-w-[60%] text-right">
                        {cat.audience}
                      </span>
                    </div>
                  </div>

                  {/* Footer: Price & Arrow CTA */}
                  <div className="mt-5 pt-3 border-t border-sand/80 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-warmgrey block">Starting from</span>
                      <span className="font-serif text-lg font-bold text-stone-900">
                        ₹{minPrice.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal group-hover:translate-x-1 transition-transform">
                      <span>Explore Details</span>
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
