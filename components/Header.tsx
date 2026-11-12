"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
  Layers,
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

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  const toggleMobileSection = (section: string) => {
    setMobileSectionOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-teal text-white text-xs py-2 px-4 border-b border-teal-700/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-sand" /> 100-Night Home Sleep Trial
            </span>
            <span className="hidden md:flex items-center gap-1 font-medium text-teal-100">
              <Truck className="w-3.5 h-3.5 text-sand" /> Free White-Glove Doorstep Delivery
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="hidden lg:inline text-teal-100">
              Zero-Cost EMI from ₹1,499/mo
            </span>
            <a
              href={`tel:${brandConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-1 hover:text-sand font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-sand" />
              <span>Talk to a Sleep Expert</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sand shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-teal text-white flex items-center justify-center font-serif text-2xl font-bold shadow-sm group-hover:bg-teal-600 transition-colors">
              {brandConfig.name.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-stone-900 tracking-tight group-hover:text-teal transition-colors">
                {brandConfig.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-warmgrey -mt-1 font-sans">
                Mattress & Beds
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Category Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("categories")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeMegaMenu === "categories" || pathname.startsWith("/collections")
                    ? "text-teal bg-ivory"
                    : "text-stone-800 hover:text-teal hover:bg-ivory"
                }`}
              >
                <span>Mattress Collections</span>
                <ChevronDown className="w-4 h-4 text-warmgrey" />
              </button>

              {/* Mega Menu Dropdown */}
              {activeMegaMenu === "categories" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[900px] bg-white rounded-2xl shadow-2xl border border-sand p-6 pt-5 grid grid-cols-3 gap-4">
                  <div className="col-span-3 pb-3 border-b border-sand flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-base font-bold text-stone-900">
                        Explore All 9 Mattress Collections
                      </h3>
                      <p className="text-xs text-warmgrey">
                        Tailored for Indian climates, orthopedic relief & individual comfort profiles
                      </p>
                    </div>
                    <Link
                      href="/collections/orthopaedic"
                      className="text-xs font-semibold text-teal hover:underline flex items-center gap-1"
                    >
                      Compare Orthopedic Series <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/collections/${cat.slug}`}
                      className="group p-3 rounded-xl hover:bg-ivory transition-all border border-transparent hover:border-sand"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-semibold text-sm text-stone-900 group-hover:text-teal transition-colors">
                          {cat.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-sand/60 text-stone-700 font-medium">
                          {cat.firmnessScale.split(" ")[0]}
                        </span>
                      </div>
                      <p className="text-xs text-warmgrey mt-1 line-clamp-1">
                        {cat.benefit}
                      </p>
                      <p className="text-[11px] text-teal-600 mt-1 font-medium">
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
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeMegaMenu === "sizes" || pathname.startsWith("/mattress-types")
                    ? "text-teal bg-ivory"
                    : "text-stone-800 hover:text-teal hover:bg-ivory"
                }`}
              >
                <span>Shop by Size & Type</span>
                <ChevronDown className="w-4 h-4 text-warmgrey" />
              </button>

              {activeMegaMenu === "sizes" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[650px] bg-white rounded-2xl shadow-2xl border border-sand p-6 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-stone-900 mb-2 pb-2 border-b border-sand">
                      Specialized Mattress Guides
                    </h4>
                    <div className="space-y-2">
                      {PRODUCT_TYPES.map((pt) => (
                        <Link
                          key={pt.slug}
                          href={`/mattress-types/${pt.slug}`}
                          className="block p-2 rounded-lg hover:bg-ivory transition-colors group"
                        >
                          <span className="text-sm font-medium text-stone-900 group-hover:text-teal block">
                            {pt.name}
                          </span>
                          <span className="text-xs text-warmgrey line-clamp-1">
                            {pt.angle}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="bg-ivory rounded-xl p-4 border border-sand">
                    <h4 className="font-serif text-sm font-bold text-stone-900 mb-2">
                      Standard Indian Sizes
                    </h4>
                    <ul className="space-y-2.5 text-xs text-stone-700">
                      <li className="flex justify-between py-1 border-b border-sand/50">
                        <span className="font-semibold text-stone-900">King Size</span>
                        <span>78 × 72 in (198 × 183 cm)</span>
                      </li>
                      <li className="flex justify-between py-1 border-b border-sand/50">
                        <span className="font-semibold text-stone-900">Queen Size</span>
                        <span>78 × 60 in (198 × 152 cm)</span>
                      </li>
                      <li className="flex justify-between py-1 border-b border-sand/50">
                        <span className="font-semibold text-stone-900">Double Size</span>
                        <span>72 × 48 in (183 × 122 cm)</span>
                      </li>
                      <li className="flex justify-between py-1">
                        <span className="font-semibold text-stone-900">Single Size</span>
                        <span>72 × 36 in (183 × 91 cm)</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-3 border-t border-sand">
                      <Link
                        href="/mattress-types/king-size-mattress"
                        className="text-xs text-teal font-semibold flex items-center justify-between hover:underline"
                      >
                        Explore King Mattresses <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Store Locator / State Locations */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("locations")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeMegaMenu === "locations" || pathname.startsWith("/locations")
                    ? "text-teal bg-ivory"
                    : "text-stone-800 hover:text-teal hover:bg-ivory"
                }`}
              >
                <MapPin className="w-4 h-4 text-teal" />
                <span>Store Locator</span>
                <ChevronDown className="w-4 h-4 text-warmgrey" />
              </button>

              {activeMegaMenu === "locations" && (
                <div className="absolute right-0 top-full w-80 bg-white rounded-2xl shadow-2xl border border-sand p-4 space-y-2">
                  <div className="pb-2 border-b border-sand">
                    <p className="text-xs font-serif font-bold text-stone-900">
                      Direct Delivery Across 3 States
                    </p>
                    <p className="text-[11px] text-warmgrey">
                      Regional logistics hubs with white-glove setup
                    </p>
                  </div>
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="block p-2.5 rounded-lg hover:bg-ivory transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-stone-900 group-hover:text-teal">
                          {loc.stateName}
                        </span>
                        <span className="text-[10px] text-teal bg-teal/10 px-2 py-0.5 rounded-full font-medium">
                          {loc.cities.length} Cities
                        </span>
                      </div>
                      <p className="text-[11px] text-warmgrey mt-0.5 truncate">
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
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/faq" ? "text-teal bg-ivory" : "text-stone-800 hover:text-teal hover:bg-ivory"
              }`}
            >
              FAQ & Trial
            </Link>
          </nav>

          {/* Action Buttons: Cart & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Cart Trigger */}
            <button
              onClick={openCart}
              className="relative p-2.5 text-stone-700 hover:text-teal rounded-xl hover:bg-ivory border border-sand transition-colors flex items-center gap-2"
              aria-label="View shopping basket"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline text-xs font-semibold text-stone-800">
                Basket
              </span>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-terracotta text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-stone-700 hover:text-teal rounded-xl hover:bg-ivory border border-sand transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-sand max-h-[85vh] overflow-y-auto px-4 py-6 space-y-6">
            {/* Categories Section */}
            <div>
              <button
                onClick={() => toggleMobileSection("categories")}
                className="w-full flex items-center justify-between text-left font-serif font-bold text-base text-stone-900 pb-2 border-b border-sand"
              >
                <span>9 Mattress Collections</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileSectionOpen.categories ? "rotate-180 text-teal" : "text-warmgrey"
                  }`}
                />
              </button>

              {mobileSectionOpen.categories && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-1">
                  {CATEGORIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/collections/${c.slug}`}
                      className="p-2.5 rounded-lg bg-ivory/60 hover:bg-ivory border border-sand/60 block"
                    >
                      <div className="text-sm font-semibold text-stone-900">{c.name}</div>
                      <div className="text-xs text-warmgrey line-clamp-1">{c.benefit}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mattress Types Section */}
            <div>
              <button
                onClick={() => toggleMobileSection("types")}
                className="w-full flex items-center justify-between text-left font-serif font-bold text-base text-stone-900 pb-2 border-b border-sand"
              >
                <span>Shop by Size & Type</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileSectionOpen.types ? "rotate-180 text-teal" : "text-warmgrey"
                  }`}
                />
              </button>

              {mobileSectionOpen.types && (
                <div className="space-y-1.5 mt-3 pt-1">
                  {PRODUCT_TYPES.map((pt) => (
                    <Link
                      key={pt.slug}
                      href={`/mattress-types/${pt.slug}`}
                      className="block p-2 rounded-lg hover:bg-ivory text-sm font-medium text-stone-800"
                    >
                      {pt.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* State Locations Section */}
            <div>
              <button
                onClick={() => toggleMobileSection("locations")}
                className="w-full flex items-center justify-between text-left font-serif font-bold text-base text-stone-900 pb-2 border-b border-sand"
              >
                <span>Store Locations & States</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileSectionOpen.locations ? "rotate-180 text-teal" : "text-warmgrey"
                  }`}
                />
              </button>

              {mobileSectionOpen.locations && (
                <div className="space-y-2 mt-3 pt-1">
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-ivory border border-sand text-sm font-medium text-stone-900"
                    >
                      <span>{loc.stateName}</span>
                      <span className="text-xs text-teal font-semibold">
                        {loc.cities.length} Cities Covered →
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="pt-2 border-t border-sand space-y-3">
              <Link
                href="/faq"
                className="block text-sm font-semibold text-stone-800 hover:text-teal"
              >
                Frequently Asked Questions (FAQ)
              </Link>
              <a
                href={`tel:${brandConfig.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-teal text-white font-medium rounded-xl text-sm"
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
