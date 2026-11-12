"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  CreditCard,
  Mail,
  Send,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { brandConfig } from "@/data/brandConfig";
import { CATEGORIES } from "@/data/categories";
import { PRODUCT_TYPES } from "@/data/productTypes";
import { LOCATIONS } from "@/data/locations";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      {/* Policy Highlights Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-stone-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-11 h-11 rounded-xl bg-stone-800 flex items-center justify-center text-teal-300 flex-shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif font-bold text-sm text-white">100-Night Free Trial</h5>
              <p className="text-xs text-warmgrey-300">Sleep on it at home. Love it or full refund.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-11 h-11 rounded-xl bg-stone-800 flex items-center justify-center text-teal-300 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif font-bold text-sm text-white">10-Year Warranty</h5>
              <p className="text-xs text-warmgrey-300">Unconditional non-sag core protection.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-11 h-11 rounded-xl bg-stone-800 flex items-center justify-center text-teal-300 flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif font-bold text-sm text-white">Free Doorstep Delivery</h5>
              <p className="text-xs text-warmgrey-300">White-glove unboxing across India.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-11 h-11 rounded-xl bg-stone-800 flex items-center justify-center text-teal-300 flex-shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif font-bold text-sm text-white">Zero-Cost EMI</h5>
              <p className="text-xs text-warmgrey-300">Easy monthly installments from ₹1,499.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Column 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal text-white flex items-center justify-center font-serif text-xl font-bold">
              {brandConfig.name.charAt(0)}
            </div>
            <span className="font-serif text-2xl font-bold text-white tracking-tight">
              {brandConfig.name}
            </span>
          </Link>
          <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
            {brandConfig.tagline}. Designed specifically for tropical micro-climates and modern musculoskeletal well-being across India.
          </p>

          <div className="space-y-2 text-xs text-stone-400 pt-2">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal" />
              <span>{brandConfig.phone} (9 AM – 9 PM IST)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal" />
              <span>{brandConfig.email}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
              <span>{brandConfig.address.street}, {brandConfig.address.city}, {brandConfig.address.state}</span>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="pt-2">
            <h5 className="font-serif text-sm font-semibold text-white mb-1">
              Join Our Sleep Wellness Club
            </h5>
            <p className="text-xs text-stone-400 mb-3">
              Receive doctor sleep advice and ₹1,500 off your first mattress.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-teal bg-teal/10 px-3 py-2 rounded-lg border border-teal/20">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! Your discount code has been sent.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="bg-stone-800 border border-stone-700 text-stone-200 text-xs px-3.5 py-2.5 rounded-lg flex-1 focus:outline-none focus:border-teal"
                />
                <button
                  type="submit"
                  className="bg-teal hover:bg-teal-600 text-white px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Column 2: 9 Mattress Collections */}
        <div>
          <h5 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
            Mattress Collections
          </h5>
          <ul className="space-y-2 text-xs">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/collections/${c.slug}`}
                  className="text-stone-400 hover:text-white transition-colors block"
                >
                  {c.name} Mattress
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Shop by Size & Type */}
        <div>
          <h5 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
            Shop by Size & Type
          </h5>
          <ul className="space-y-2 text-xs">
            {PRODUCT_TYPES.map((pt) => (
              <li key={pt.slug}>
                <Link
                  href={`/mattress-types/${pt.slug}`}
                  className="text-stone-400 hover:text-white transition-colors block"
                >
                  {pt.name}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-stone-800">
              <Link href="/faq" className="text-teal hover:underline font-medium block">
                100-Night Trial & FAQ →
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: State Locations */}
        <div>
          <h5 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
            Locations Served
          </h5>
          <ul className="space-y-3 text-xs">
            {LOCATIONS.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="text-stone-400 hover:text-white transition-colors block"
                >
                  <span className="font-semibold text-stone-200 block">{loc.stateName} Hub</span>
                  <span className="text-[11px] text-stone-400 block line-clamp-1">
                    Serving {loc.cities.slice(0, 4).join(", ")} + {loc.cities.length - 4} more
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-stone-800 text-[11px] text-stone-400">
            <span className="block font-medium text-stone-300 mb-1">Pan-India Fulfillment</span>
            <span>All 28 Indian States & 8 Union Territories covered via insured logistics partners.</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
        <p>
          © {new Date().getFullYear()} {brandConfig.legalName}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/faq" className="hover:text-stone-300">
            Warranty Policy
          </Link>
          <Link href="/faq" className="hover:text-stone-300">
            100-Night Trial Terms
          </Link>
          <Link href="/faq" className="hover:text-stone-300">
            Delivery & Shipping
          </Link>
        </div>
      </div>
    </footer>
  );
}
