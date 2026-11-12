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
import Carousel from "./Carousel";

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
  title = "Find the one that fits how you sleep.",
  subtitle = "Nine collections, from firm orthopedic to soft memory foam.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal className="max-w-[680px] mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
            {title}
          </h2>
          <p className="text-charcoal-700 text-base mt-3">{subtitle}</p>
        </div>

        <Carousel>
          {CATEGORIES.map((cat) => {
                        const minPrice = cat.priceTable[0].thickness6Price;

            return (
              <Link
                key={cat.slug}
                href={`/collections/${cat.slug}`}
                className="tile group shrink-0 snap-start w-[78%] sm:w-[320px] overflow-hidden rounded-3xl bg-mist"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cat.heroImage}
                    alt={`${cat.name} mattress`}
                    fill
                    className="tile-img object-cover"
                    sizes="(max-width: 768px) 80vw, 320px"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold tracking-tight">{cat.name}</h3>
                  <p className="mt-1 text-base text-charcoal-500 line-clamp-2 min-h-[48px]">{cat.material}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-base font-semibold">From ₹{minPrice.toLocaleString("en-IN")}</span>
                    <span className="inline-flex items-center gap-1 text-base font-semibold text-nordic-800">
                      Explore <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
