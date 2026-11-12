"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, Phone, Sparkles } from "lucide-react";
import { useCart } from "./CartContext";
import { brandConfig } from "@/data/brandConfig";

export default function StickyMobileBar() {
  const { totalItems, openCart } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-sand px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3">
      {/* Call button */}
      <a
        href={`tel:${brandConfig.phone.replace(/[^0-9+]/g, "")}`}
        className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-sand bg-ivory text-stone-700 text-xs font-semibold flex-shrink-0"
        aria-label="Call sleep expert"
      >
        <Phone className="w-4 h-4 text-teal" />
        <span>Expert</span>
      </a>

      {/* Primary Shop CTA */}
      <Link
        href="/collections/orthopaedic"
        className="flex-1 py-2.5 px-4 bg-teal hover:bg-teal-600 text-white font-semibold text-xs rounded-xl text-center shadow-md flex items-center justify-center gap-1.5"
      >
        <Sparkles className="w-3.5 h-3.5 text-sand" />
        <span>Shop Now • From ₹8,499</span>
      </Link>

      {/* Cart button */}
      <button
        onClick={openCart}
        className="relative p-2.5 rounded-xl border border-sand bg-ivory text-stone-800 flex-shrink-0"
        aria-label="Open cart"
      >
        <ShoppingBag className="w-5 h-5 text-stone-800" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-terracotta text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">
            {totalItems}
          </span>
        )}
      </button>
    </div>
  );
}
