"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Check, ShoppingBag } from "lucide-react";
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
  firmnessScore?: number;
  firmnessLabel?: string;
  keySpecs?: string[];
  thicknessOptions?: string[];
  sizeOptions?: string[];
}

const SIZE_MULT: Record<string, number> = { Single: 0.7, Double: 0.85, Queen: 1.0, King: 1.25 };
const THICKNESS_MULT: Record<string, number> = { "6 inch": 0.85, "8 inch": 1.0, "10 inch": 1.2, "12 inch": 1.35 };

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
  firmnessLabel,
  thicknessOptions = ["6 inch", "8 inch", "10 inch"],
  sizeOptions = ["Single", "Queen", "King"],
}: ProductQuickAddProps) {
  const [size, setSize] = useState(sizeOptions[1] || sizeOptions[0]);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem } = useCart();

  const thickness = thicknessOptions[1] || thicknessOptions[0];
  const mult = (SIZE_MULT[size] || 1) * (THICKNESS_MULT[thickness] || 1);
  const price = Math.round(startingPrice * mult);
  const original = Math.round(originalPrice * mult);
  const off = Math.round(((original - price) / original) * 100);

  const handleAdd = () => {
    addItem({
      id: `${id}-${size}-${thickness}`,
      name,
      slug,
      size,
      thickness,
      price,
      originalPrice: original,
      image,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div className="tile group flex flex-col overflow-hidden rounded-3xl bg-mist">
      <Link href={`/collections/${slug}`} className="relative block aspect-[4/3] overflow-hidden" aria-label={name}>
        <Image
          src={image}
          alt={name}
          fill
          className="tile-img object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-charcoal">
            {badge}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <Link href={`/collections/${slug}`}>
          <h3 className="text-xl font-semibold tracking-tight transition-colors duration-300 hover:text-nordic-700">{name}</h3>
        </Link>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-charcoal-500">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="font-semibold text-charcoal">{rating.toFixed(1)}</span>
          <span>({reviewsCount})</span>
          {firmnessLabel && <span className="before:mr-1.5 before:content-['·']">{firmnessLabel}</span>}
        </p>

        <div className="mt-5 flex gap-1.5" role="radiogroup" aria-label="Size">
          {sizeOptions.map((s) => (
            <button
              key={s}
              type="button"
              role="radio"
              aria-checked={size === s}
              onClick={() => setSize(s)}
              className={`flex-1 rounded-full border px-2 py-1.5 text-sm font-medium transition-colors duration-300 ${
                size === s
                  ? "border-nordic-800 bg-nordic-800 text-white"
                  : "border-stone-300 bg-white text-charcoal-700 hover:border-nordic-800"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <div>
            <p className="text-2xl font-semibold tracking-tight">₹{price.toLocaleString("en-IN")}</p>
            <p className="text-sm text-charcoal-500">
              <span className="line-through">₹{original.toLocaleString("en-IN")}</span>
              {off > 0 && <span className="ml-2 font-semibold text-clay">{off}% off</span>}
            </p>
          </div>
          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center gap-2 rounded-full bg-nordic-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-nordic-900 active:scale-[0.97]"
          >
            {justAdded ? (
              <>
                <Check className="h-4 w-4" /> Added
              </>
            ) : (
              <>
                <ShoppingBag className="h-4 w-4" /> Add to cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
