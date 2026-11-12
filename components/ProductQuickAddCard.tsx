"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Check, ShoppingBag, ShieldCheck, Sparkles } from "lucide-react";
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
  firmnessScore?: number; // 1 to 10
  firmnessLabel?: string; // e.g. "Medium Firm (7.0/10)"
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
  reviewsCount = 380,
  badge,
  firmnessScore = 7.0,
  firmnessLabel = "Balanced Medium Firm (7/10)",
  keySpecs = ["Anti-Sag Core", "100-Night Trial", "10-Yr Warranty"],
  thicknessOptions = ["6 inch", "8 inch", "10 inch"],
  sizeOptions = ["Single", "Queen", "King"],
}: ProductQuickAddProps) {
  const [selectedSize, setSelectedSize] = useState(sizeOptions[1] || sizeOptions[0]);
  const [selectedThickness, setSelectedThickness] = useState(thicknessOptions[1] || thicknessOptions[0]);
  const [justAdded, setJustAdded] = useState(false);

  const { addItem } = useCart();

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

  const discountPercent = Math.round(
    ((calculatedOriginal - calculatedPrice) / calculatedOriginal) * 100
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
    <div className="group bg-white rounded-2xl border border-stone-200/80 shadow-subtle hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Product Image Area */}
      <div className="relative h-60 w-full bg-mist overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          {badge ? (
            <span className="bg-nordic-900 text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
              {badge}
            </span>
          ) : (
            <span className="bg-white/95 backdrop-blur-sm text-nordic-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
              Certified Organic
            </span>
          )}

          {discountPercent > 0 && (
            <span className="bg-clay text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Floating Rating Chip */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-sm text-xs font-bold text-charcoal">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{rating.toFixed(1)}</span>
          <span className="text-charcoal-500 font-normal text-[11px]">
            ({reviewsCount})
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <Link href={`/collections/${slug}`} className="block group">
            <h3 className="font-bold text-base sm:text-lg text-charcoal group-hover:text-nordic-800 transition-colors">
              {name}
            </h3>
          </Link>

          {/* Firmness Slider Gauge */}
          <div className="mt-3 pt-3 border-t border-stone-100">
            <div className="flex items-center justify-between text-[11px] mb-1.5">
              <span className="text-charcoal-500 font-medium">Firmness Level:</span>
              <span className="font-bold text-nordic-800">{firmnessLabel}</span>
            </div>
            <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden flex">
              <div
                className="h-full bg-nordic-700 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.max(10, firmnessScore * 10))}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-stone-400 mt-1">
              <span>Plush (1)</span>
              <span>Medium (5)</span>
              <span>Extra Firm (10)</span>
            </div>
          </div>

          {/* Size Selector */}
          <div className="mt-3.5 pt-3 border-t border-stone-100">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-charcoal-500 font-medium">Select Size:</span>
              <span className="font-bold text-charcoal">{selectedSize}</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {sizeOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`py-1.5 text-xs rounded-xl border font-semibold transition-all ${
                    selectedSize === s
                      ? "bg-nordic-900 text-white border-nordic-900 shadow-sm"
                      : "bg-white text-charcoal-700 border-stone-200 hover:bg-mist"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Thickness Selector */}
          <div className="mt-2.5">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-charcoal-500 font-medium">Mattress Loft:</span>
              <span className="font-bold text-charcoal">{selectedThickness}</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {thicknessOptions.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedThickness(t)}
                  className={`py-1.5 text-xs rounded-xl border font-semibold transition-all ${
                    selectedThickness === t
                      ? "bg-nordic-100 text-nordic-900 border-nordic-500"
                      : "bg-white text-charcoal-700 border-stone-200 hover:bg-mist"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing & Quick Add Button */}
        <div className="pt-3.5 border-t border-stone-100 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-charcoal">
                ₹{calculatedPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-xs line-through text-stone-400">
                ₹{calculatedOriginal.toLocaleString("en-IN")}
              </span>
            </div>
            <span className="text-[11px] text-nordic-700 font-semibold block">
              Free Delivery • 100-Night Trial
            </span>
          </div>

          <button
            onClick={handleQuickAdd}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm active:scale-95 ${
              justAdded
                ? "bg-emerald-600 text-white"
                : "bg-nordic-800 hover:bg-nordic-900 text-white"
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
