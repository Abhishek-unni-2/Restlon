"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { brandConfig } from "@/data/brandConfig";
import { CATEGORIES } from "@/data/categories";
import { PRODUCT_TYPES } from "@/data/productTypes";
import { LOCATIONS } from "@/data/locations";

const linkCls = "text-sm text-charcoal-500 transition-colors duration-300 hover:text-charcoal";
const headCls = "text-sm font-semibold text-charcoal mb-4";

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
    <footer className="bg-mist text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <Link href="/" aria-label={`${brandConfig.name} home`} className="inline-block">
            <Image src="/images/logo.png" alt={brandConfig.name} width={1758} height={590} className="h-11 w-auto" />
          </Link>
          <p className="mt-4 max-w-[320px] text-sm text-charcoal-500">
            Natural latex and orthopedic mattresses, made for Indian homes.
          </p>

          <div className="mt-6">
            <p className="text-sm font-semibold">Get sleep advice in your inbox</p>
            {subscribed ? (
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-nordic-700">
                <Check className="h-4 w-4" /> You are subscribed.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-3 flex max-w-[360px] gap-2">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="min-w-0 flex-1 rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm focus:border-nordic-800 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-nordic-800 text-white transition-colors duration-300 hover:bg-nordic-900"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="lg:col-span-3 lg:col-start-6">
          <h5 className={headCls}>Collections</h5>
          <ul className="space-y-2.5">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/collections/${c.slug}`} className={linkCls}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h5 className={headCls}>Shop by size</h5>
          <ul className="space-y-2.5">
            {PRODUCT_TYPES.map((pt) => (
              <li key={pt.slug}>
                <Link href={`/mattress-types/${pt.slug}`} className={linkCls}>
                  {pt.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h5 className={headCls}>Delivery and help</h5>
          <ul className="space-y-2.5">
            {LOCATIONS.map((loc) => (
              <li key={loc.slug}>
                <Link href={`/locations/${loc.slug}`} className={linkCls}>
                  {loc.stateName}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/faq" className={linkCls}>
                FAQ and warranty
              </Link>
            </li>
            <li>
              <a href={`tel:${brandConfig.phone.replace(/[^0-9+]/g, "")}`} className={linkCls}>
                {brandConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${brandConfig.email}`} className={linkCls}>
                {brandConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-charcoal-500">
          <p>
            © {new Date().getFullYear()} {brandConfig.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/faq" className="transition-colors duration-300 hover:text-charcoal">
              Warranty
            </Link>
            <Link href="/faq" className="transition-colors duration-300 hover:text-charcoal">
              Trial terms
            </Link>
            <Link href="/faq" className="transition-colors duration-300 hover:text-charcoal">
              Delivery
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
