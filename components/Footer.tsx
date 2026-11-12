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
    <footer className="bg-charcoal text-stone-300 pt-16 pb-12 border-t border-stone-800">
      {/* Policy Highlights Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-stone-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-11 h-11 rounded-2xl bg-stone-800/80 flex items-center justify-center text-nordic-300 flex-shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-sm text-white">100-Night Free Trial</h5>
              <p className="text-xs text-stone-400">Sleep on it at home. Love it or full refund.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-11 h-11 rounded-2xl bg-stone-800/80 flex items-center justify-center text-nordic-300 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-sm text-white">10-Year Warranty</h5>
              <p className="text-xs text-stone-400">Unconditional non-sag core protection.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-11 h-11 rounded-2xl bg-stone-800/80 flex items-center justify-center text-nordic-300 flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-sm text-white">Free Doorstep Delivery</h5>
              <p className="text-xs text-stone-400">White-glove unboxing across India.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-11 h-11 rounded-2xl bg-stone-800/80 flex items-center justify-center text-nordic-300 flex-shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-sm text-white">Zero-Cost EMI</h5>
              <p className="text-xs text-stone-400">Easy monthly installments from ₹1,499.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Column 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-nordic-700 text-white flex items-center justify-center font-bold text-lg">
              {brandConfig.name.charAt(0)}
            </div>
            <span className="text-2xl font-extrabold text-white tracking-tight">
              {brandConfig.name}
            </span>
          </Link>
          <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
            {brandConfig.tagline}. Handcrafted with certified organic materials for tranquil sleep and musculoskeletal renewal.
          </p>

          <div className="space-y-2 text-xs text-stone-400 pt-2">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-nordic-400" />
              <span>{brandConfig.phone} (9 AM – 9 PM IST)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-nordic-400" />
              <span>{brandConfig.email}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-nordic-400 flex-shrink-0 mt-0.5" />
              <span>{brandConfig.address.street}, {brandConfig.address.city}, {brandConfig.address.state}</span>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="pt-2">
            <h5 className="text-sm font-bold text-white mb-1">
              Join Our Sleep Wellness Club
            </h5>
            <p className="text-xs text-stone-400 mb-3">
              Receive physician sleep advice and ₹1,500 off your first mattress.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-nordic-300 bg-nordic-900/60 px-3 py-2 rounded-xl border border-nordic-700">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! Your discount code has been sent.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-stone-800/80 border border-stone-700 text-stone-200 text-xs px-3.5 py-2.5 rounded-xl flex-1 focus:outline-none focus:border-nordic-500"
                />
                <button
                  type="submit"
                  className="bg-nordic-700 hover:bg-nordic-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors"
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
          <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
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
          <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
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
              <Link href="/faq" className="text-nordic-300 hover:underline font-bold block">
                100-Night Trial & FAQ →
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Regional Hubs */}
        <div>
          <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
            Regional Hubs
          </h5>
          <ul className="space-y-3 text-xs">
            {LOCATIONS.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="text-stone-400 hover:text-white transition-colors block"
                >
                  <span className="font-bold text-stone-200 block">{loc.stateName} Hub</span>
                  <span className="text-[11px] text-stone-400 block line-clamp-1">
                    Serving {loc.cities.slice(0, 4).join(", ")} + {loc.cities.length - 4} more
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-stone-800 text-[11px] text-stone-400">
            <span className="block font-bold text-stone-300 mb-1">Pan-India Logistics</span>
            <span>All 28 States & 8 UTs served with insured white-glove unboxing.</span>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
        <p>
          © {new Date().getFullYear()} {brandConfig.legalName}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/faq" className="hover:text-stone-200">
            Warranty Policy
          </Link>
          <Link href="/faq" className="hover:text-stone-200">
            100-Night Trial Terms
          </Link>
          <Link href="/faq" className="hover:text-stone-200">
            Delivery & Shipping
          </Link>
        </div>
      </div>
    </footer>
  );
}
