"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Check, ShoppingBag, ShieldCheck } from "lucide-react";
import { useCart } from "./CartContext";

export interface ProductQuickAddProps {
  id: string;
  name: string;
  slug: string;
  image: string;
  startingPrice: number;
  originalPrice: number;
  rating?: number;
  reviewsCount?: number;
  badge?: string;
  keySpecs?: string[];
  thicknessOptions?: string[];
  sizeOptions?: string[];
}

export default function ProductQuickAddCard({
  id,
  name,
  slug,
  image,
  startingPrice,
  originalPrice,
  rating = 4.9,
  reviewsCount = 340,
  badge,
  keySpecs = ["Anti-Sag Core", "100-Night Trial", "10-Yr Warranty"],
  thicknessOptions = ["6 inch", "8 inch", "10 inch"],
  sizeOptions = ["Single", "Queen", "King"],
}: ProductQuickAddProps) {
  const [selectedSize, setSelectedSize] = useState(sizeOptions[1] || sizeOptions[0]);
  const [selectedThickness, setSelectedThickness] = useState(thicknessOptions[1] || thicknessOptions[0]);
  const [justAdded, setJustAdded] = useState(false);

  const { addItem } = useCart();

  // Price calculations based on selected size/thickness
  const sizeMultiplier: Record<string, number> = {
    Single: 0.7,
    Double: 0.85,
    Queen: 1.0,
    King: 1.25,
  };

  const thicknessMultiplier: Record<string, number> = {
    "6 inch": 0.85,
    "8 inch": 1.0,
    "10 inch": 1.2,
    "12 inch": 1.35,
  };

  const calculatedPrice = Math.round(
    startingPrice *
      (sizeMultiplier[selectedSize] || 1.0) *
      (thicknessMultiplier[selectedThickness] || 1.0)
  );

  const calculatedOriginal = Math.round(
    originalPrice *
      (sizeMultiplier[selectedSize] || 1.0) *
      (thicknessMultiplier[selectedThickness] || 1.0)
  );

  const handleQuickAdd = () => {
    addItem({
      id: `${id}-${selectedSize}-${selectedThickness}`,
      name,
      slug,
      size: selectedSize,
      thickness: selectedThickness,
      price: calculatedPrice,
      originalPrice: calculatedOriginal,
      image,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-sand hover:border-teal/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
      {/* Image container */}
      <div className="relative h-56 w-full bg-stone-100 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {badge && (
          <span className="absolute top-3 left-3 bg-terracotta text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
            {badge}
          </span>
        )}

        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-sm text-xs font-semibold text-stone-900">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{rating.toFixed(1)}</span>
          <span className="text-warmgrey text-[11px]">({reviewsCount})</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <Link href={`/collections/${slug}`} className="group">
            <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-teal transition-colors">
              {name}
            </h3>
          </Link>

          {/* Quick specs pill list */}
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {keySpecs.slice(0, 3).map((spec, i) => (
              <span
                key={i}
                className="text-[11px] px-2 py-0.5 rounded-md bg-ivory text-stone-700 border border-sand/60"
              >
                {spec}
              </span>
            ))}
          </div>

          {/* Selector options: Size */}
          <div className="mt-3.5 pt-3 border-t border-sand/70">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-warmgrey font-medium">Select Size:</span>
              <span className="font-semibold text-stone-800">{selectedSize}</span>
            </div>
            <div className="flex gap-1.5">
              {sizeOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`flex-1 py-1 text-xs rounded-lg border font-medium transition-colors ${
                    selectedSize === s
                      ? "bg-stone-900 text-white border-stone-900"
                      : "bg-white text-stone-700 border-sand hover:bg-ivory"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Selector options: Thickness */}
          <div className="mt-2.5">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-warmgrey font-medium">Thickness:</span>
              <span className="font-semibold text-stone-800">{selectedThickness}</span>
            </div>
            <div className="flex gap-1.5">
              {thicknessOptions.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedThickness(t)}
                  className={`flex-1 py-1 text-xs rounded-lg border font-medium transition-colors ${
                    selectedThickness === t
                      ? "bg-teal text-white border-teal"
                      : "bg-white text-stone-700 border-sand hover:bg-ivory"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-3 border-t border-sand flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl font-bold text-stone-900">
                ₹{calculatedPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-xs line-through text-stone-400">
                ₹{calculatedOriginal.toLocaleString("en-IN")}
              </span>
            </div>
            <span className="text-[10px] text-teal font-semibold block">
              Free Delivery & 100N Trial
            </span>
          </div>

          <button
            onClick={handleQuickAdd}
            className={`px-4 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center gap-1.5 shadow-sm ${
              justAdded
                ? "bg-emerald-600 text-white scale-95"
                : "bg-teal hover:bg-teal-600 text-white"
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" /> Added!
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" /> Quick Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
