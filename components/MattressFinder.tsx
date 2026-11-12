"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

const PROBLEMS = [
  { label: "I sleep hot and sweat at night", slug: "coolgel" },
  { label: "I wake up with back or joint pain", slug: "orthopaedic" },
  { label: "My back is stiff from sitting all day", slug: "posturefit" },
  { label: "My shoulders and hips feel pressure", slug: "memory-foam" },
  { label: "I have allergies or dust sensitivity", slug: "antimicrobial" },
  { label: "I like a firm, traditional feel", slug: "coir" },
  { label: "I want natural, bouncy comfort", slug: "latex-foam" },
  { label: "I feel my partner move at night", slug: "fusiontech" },
];

export default function MattressFinder() {
  const [slug, setSlug] = useState<string | null>(null);
  const cat = slug ? CATEGORIES.find((c) => c.slug === slug) : null;

  return (
    <section className="bg-white py-16 sm:py-24" id="finder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal className="max-w-[680px] mb-10">
          <p className="text-sm font-medium text-nordic-700">Find your mattress</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">What keeps you up at night?</h2>
          <p className="mt-4 text-lg text-charcoal-500">Pick the one that sounds most like you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <div className="lg:col-span-6 rounded-3xl bg-mist p-4 sm:p-6">
            <div role="radiogroup" aria-label="Your biggest sleep problem" className="grid gap-2">
              {PROBLEMS.map((p) => {
                const on = slug === p.slug;
                return (
                  <button
                    key={p.slug}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => setSlug(p.slug)}
                    className={`flex items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-base font-medium transition-colors duration-300 ${
                      on ? "bg-nordic-800 text-white" : "bg-white text-charcoal hover:bg-pebble"
                    }`}
                  >
                    <span>{p.label}</span>
                    <span
                      className={`h-5 w-5 shrink-0 rounded-full border-2 transition-colors duration-300 ${
                        on ? "border-white bg-white shadow-[inset_0_0_0_4px_#173250]" : "border-stone-300"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="h-full min-h-[360px] overflow-hidden rounded-3xl bg-mist">
              {cat ? (
                <div key={cat.slug} className="finder-result flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={cat.heroImage}
                      alt={`${cat.name} mattress`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 560px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <p className="text-sm font-medium text-nordic-700">We recommend</p>
                    <h3 className="mt-1 text-3xl font-semibold tracking-tight">{cat.name}</h3>
                    <p className="mt-2 text-base text-charcoal-500">{cat.tagline}</p>
                    <p className="mt-4 text-sm text-charcoal-700">
                      <span className="font-semibold">Firmness</span> {cat.firmnessScale}
                    </p>
                    <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
                      <Link
                        href={`/collections/${cat.slug}`}
                        className="group inline-flex items-center gap-2 rounded-full bg-nordic-800 px-6 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-nordic-900 active:scale-[0.98]"
                      >
                        View {cat.name}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                      <span className="text-base text-charcoal-500">
                        From ₹{cat.priceTable[0].thickness6Price.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-full min-h-[360px] items-center justify-center p-8 text-center">
                  <p className="max-w-[260px] text-lg text-charcoal-500">Choose an option and we will show you the right collection.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
