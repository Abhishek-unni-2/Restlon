"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Phone,
  Sparkles,
  MapPin,
  ShieldCheck,
  Truck,
  ArrowRight,
} from "lucide-react";
import { brandConfig } from "@/data/brandConfig";
import { CATEGORIES } from "@/data/categories";
import { PRODUCT_TYPES } from "@/data/productTypes";
import { LOCATIONS } from "@/data/locations";
import { useCart } from "./CartContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileSectionOpen, setMobileSectionOpen] = useState<{ [key: string]: boolean }>({
    categories: true,
    types: false,
    locations: false,
  });
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  const toggleMobileSection = (section: string) => {
    setMobileSectionOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      {/* Top Serene Announcement Bar */}
      <div className="bg-mist text-charcoal-700 text-xs py-2.5 px-4 border-b border-stone-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-nordic-700" />
              <span>100-Night Free In-Home Trial</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 font-medium text-charcoal-700">
              <Truck className="w-3.5 h-3.5 text-nordic-700" />
              <span>Free In-Room Delivery & Setup Across India</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="hidden lg:inline text-charcoal-700">
              Zero-Cost EMI from ₹1,499/mo
            </span>
            <a
              href={`tel:${brandConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-1.5 hover:text-charcoal font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-nordic-700" />
              <span>Expert Sleep Advice</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/70 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Minimalist Logo */}
          <Link href="/" aria-label={`${brandConfig.name} home`} className="flex items-center">
            <Image
              src="/images/logo.png"
              alt={brandConfig.name}
              width={1758}
              height={590}
              priority
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {/* Category Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("categories")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-xl transition-all ${
                  activeMegaMenu === "categories" || pathname.startsWith("/collections")
                    ? "text-nordic-900 bg-nordic-50"
                    : "text-charcoal-700 hover:text-nordic-900 hover:bg-mist"
                }`}
              >
                <span>Mattress Collections</span>
                <ChevronDown className="w-4 h-4 text-charcoal-500" />
              </button>

              {activeMegaMenu === "categories" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[900px] bg-white rounded-2xl shadow-card-hover border border-stone-200/90 p-6 pt-5 grid grid-cols-3 gap-3.5">
                  <div className="col-span-3 pb-3 border-b border-stone-100 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-charcoal">
                        All 9 Engineered Sleep Collections
                      </h3>
                      <p className="text-xs text-charcoal-500">
                        Designed for tropical Indian climates, spine correction & natural purity
                      </p>
                    </div>
                    <Link
                      href="/collections/orthopaedic"
                      className="text-xs font-bold text-nordic-800 hover:underline flex items-center gap-1"
                    >
                      Compare Ortho Series <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/collections/${cat.slug}`}
                      className="group p-3 rounded-2xl hover:bg-mist transition-all border border-transparent hover:border-stone-200/70"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-charcoal group-hover:text-nordic-800 transition-colors">
                          {cat.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-charcoal-700 font-medium">
                          {cat.firmnessScale.split(" ")[0]}
                        </span>
                      </div>
                      <p className="text-xs text-charcoal-500 mt-1 line-clamp-1">
                        {cat.benefit}
                      </p>
                      <p className="text-[11px] text-nordic-700 mt-1 font-semibold">
                        Ideal for: {cat.audience}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Shop by Size / Product Types Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("sizes")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-xl transition-all ${
                  activeMegaMenu === "sizes" || pathname.startsWith("/mattress-types")
                    ? "text-nordic-900 bg-nordic-50"
                    : "text-charcoal-700 hover:text-nordic-900 hover:bg-mist"
                }`}
              >
                <span>Shop by Size & Type</span>
                <ChevronDown className="w-4 h-4 text-charcoal-500" />
              </button>

              {activeMegaMenu === "sizes" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[650px] bg-white rounded-2xl shadow-card-hover border border-stone-200/90 p-6 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal mb-2.5 pb-2 border-b border-stone-100">
                      Mattress Buying Guides
                    </h4>
                    <div className="space-y-1.5">
                      {PRODUCT_TYPES.map((pt) => (
                        <Link
                          key={pt.slug}
                          href={`/mattress-types/${pt.slug}`}
                          className="block p-2 rounded-xl hover:bg-mist transition-colors group"
                        >
                          <span className="text-sm font-semibold text-charcoal group-hover:text-nordic-800 block">
                            {pt.name}
                          </span>
                          <span className="text-xs text-charcoal-500 line-clamp-1">
                            {pt.angle}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="bg-mist/70 rounded-2xl p-4 border border-stone-200/70">
                    <h4 className="text-sm font-semibold text-charcoal mb-2">
                      Standard Indian Sizes
                    </h4>
                    <ul className="space-y-2 text-xs text-charcoal-700">
                      <li className="flex justify-between py-1 border-b border-stone-200/60">
                        <span className="font-semibold text-charcoal">King Size</span>
                        <span>78 × 72 in (198 × 183 cm)</span>
                      </li>
                      <li className="flex justify-between py-1 border-b border-stone-200/60">
                        <span className="font-semibold text-charcoal">Queen Size</span>
                        <span>78 × 60 in (198 × 152 cm)</span>
                      </li>
                      <li className="flex justify-between py-1 border-b border-stone-200/60">
                        <span className="font-semibold text-charcoal">Double Size</span>
                        <span>72 × 48 in (183 × 122 cm)</span>
                      </li>
                      <li className="flex justify-between py-1">
                        <span className="font-semibold text-charcoal">Single Size</span>
                        <span>72 × 36 in (183 × 91 cm)</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-3 border-t border-stone-200/70">
                      <Link
                        href="/mattress-types/king-size-mattress"
                        className="text-xs text-nordic-800 font-bold flex items-center justify-between hover:underline"
                      >
                        Explore King Collection <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Store Locator / State Hubs */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("locations")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-xl transition-all ${
                  activeMegaMenu === "locations" || pathname.startsWith("/locations")
                    ? "text-nordic-900 bg-nordic-50"
                    : "text-charcoal-700 hover:text-nordic-900 hover:bg-mist"
                }`}
              >
                <MapPin className="w-4 h-4 text-nordic-800" />
                <span>Store Hubs</span>
                <ChevronDown className="w-4 h-4 text-charcoal-500" />
              </button>

              {activeMegaMenu === "locations" && (
                <div className="absolute right-0 top-full w-80 bg-white rounded-2xl shadow-card-hover border border-stone-200/90 p-4 space-y-2">
                  <div className="pb-2 border-b border-stone-100">
                    <p className="text-xs font-bold text-charcoal">
                      Regional Distribution Centers
                    </p>
                    <p className="text-[11px] text-charcoal-500">
                      Express white-glove setup in 3 key states
                    </p>
                  </div>
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="block p-2.5 rounded-xl hover:bg-mist transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-charcoal group-hover:text-nordic-800">
                          {loc.stateName}
                        </span>
                        <span className="text-[10px] text-nordic-800 bg-nordic-100 px-2 py-0.5 rounded-full font-semibold">
                          {loc.cities.length} Cities
                        </span>
                      </div>
                      <p className="text-[11px] text-charcoal-500 mt-0.5 truncate">
                        {loc.positioningLine}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* FAQ Link */}
            <Link
              href="/faq"
              className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-all ${
                pathname === "/faq"
                  ? "text-nordic-900 bg-nordic-50"
                  : "text-charcoal-700 hover:text-nordic-900 hover:bg-mist"
              }`}
            >
              FAQ & Trial
            </Link>
          </nav>

          {/* Action Buttons: Cart & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Basket Button */}
            <button
              onClick={openCart}
              className="relative p-2.5 text-charcoal hover:text-nordic-800 rounded-2xl hover:bg-mist border border-stone-200/80 transition-colors flex items-center gap-2"
              aria-label="View shopping basket"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline text-xs font-bold text-charcoal">
                Basket
              </span>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-clay text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-charcoal rounded-2xl hover:bg-mist border border-stone-200/80 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 max-h-[85vh] overflow-y-auto px-4 py-6 space-y-6">
            {/* Categories Section */}
            <div>
              <button
                onClick={() => toggleMobileSection("categories")}
                className="w-full flex items-center justify-between text-left font-bold text-base text-charcoal pb-2 border-b border-stone-200"
              >
                <span>9 Mattress Collections</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileSectionOpen.categories ? "rotate-180 text-nordic-800" : "text-charcoal-500"
                  }`}
                />
              </button>

              {mobileSectionOpen.categories && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-1">
                  {CATEGORIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/collections/${c.slug}`}
                      className="p-3 rounded-xl bg-mist hover:bg-mist border border-stone-200/60 block"
                    >
                      <div className="text-sm font-bold text-charcoal">{c.name}</div>
                      <div className="text-xs text-charcoal-500 line-clamp-1">{c.benefit}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Types Section */}
            <div>
              <button
                onClick={() => toggleMobileSection("types")}
                className="w-full flex items-center justify-between text-left font-bold text-base text-charcoal pb-2 border-b border-stone-200"
              >
                <span>Shop by Size & Type</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileSectionOpen.types ? "rotate-180 text-nordic-800" : "text-charcoal-500"
                  }`}
                />
              </button>

              {mobileSectionOpen.types && (
                <div className="space-y-1.5 mt-3 pt-1">
                  {PRODUCT_TYPES.map((pt) => (
                    <Link
                      key={pt.slug}
                      href={`/mattress-types/${pt.slug}`}
                      className="block p-2 rounded-xl hover:bg-mist text-sm font-semibold text-charcoal-700"
                    >
                      {pt.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Section */}
            <div>
              <button
                onClick={() => toggleMobileSection("locations")}
                className="w-full flex items-center justify-between text-left font-bold text-base text-charcoal pb-2 border-b border-stone-200"
              >
                <span>Regional Hubs</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileSectionOpen.locations ? "rotate-180 text-nordic-800" : "text-charcoal-500"
                  }`}
                />
              </button>

              {mobileSectionOpen.locations && (
                <div className="space-y-2 mt-3 pt-1">
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-mist border border-stone-200 text-sm font-semibold text-charcoal"
                    >
                      <span>{loc.stateName}</span>
                      <span className="text-xs text-nordic-800 font-bold">
                        {loc.cities.length} Cities →
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-stone-200 space-y-3">
              <Link
                href="/faq"
                className="block text-sm font-bold text-charcoal hover:text-nordic-800"
              >
                Frequently Asked Questions (FAQ)
              </Link>
              <a
                href={`tel:${brandConfig.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-nordic-800 text-white font-bold rounded-2xl text-sm"
              >
                <Phone className="w-4 h-4" /> Call Sleep Consultant: {brandConfig.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
