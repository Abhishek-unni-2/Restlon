"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Wind, ShieldCheck, Sparkles, Layers } from "lucide-react";

interface LayerDetail {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  thickness: string;
  description: string;
  specs: { label: string; value: string }[];
  image: string;
  badge: string;
}

const LAYERS: LayerDetail[] = [
  {
    id: "layer-quilt",
    number: "01",
    name: "AeroBreeze™ Organic Bamboo Quilt",
    subtitle: "Hypoallergenic Comfort Top",
    thickness: "1.0 inch (2.5 cm)",
    description:
      "Treated with Swiss silver-ion Sanitized® technology to repel 99.9% of dust mites, bacteria, and allergens. Naturally wicks moisture 40% faster than cotton, keeping your sleep surface dry during humid monsoon nights.",
    specs: [
      { label: "Fabric", value: "350 GSM Organic Bamboo-Viscose" },
      { label: "Treatment", value: "Anti-Fungal & Anti-Bacterial" },
      { label: "Certification", value: "OEKO-TEX Standard 100" },
    ],
    image: "/images/layer-14.jpg",
    badge: "100% Breathable",
  },
  {
    id: "layer-latex",
    number: "02",
    name: "100% Natural Kerala Dunlop Latex",
    subtitle: "Buoyant Pin-Core Resilience",
    thickness: "2.0 inches (5.0 cm)",
    description:
      "Sustainably tapped organic tree sap from Kerala rubber estates. Features thousands of vertical pin-core ventilation channels that circulate air while providing instantaneous responsive bounce without feeling trapped.",
    specs: [
      { label: "Density", value: "75D – 80D Progressive" },
      { label: "Purity", value: "Zero Synthetic Fillers (SBR-Free)" },
      { label: "Durability", value: "15+ Years Sag-Free" },
    ],
    image: "/images/layer-6.jpg",
    badge: "Eco-Organic",
  },
  {
    id: "layer-ortho",
    number: "03",
    name: "5-Zone Ergonomic Ortho Alignment Core",
    subtitle: "Medical-Grade Lumbar Decompression",
    thickness: "4.0 inches (10.0 cm)",
    description:
      "Engineered with differential firmness zones. Provides softer pressure dispersion beneath shoulders and calves, and firm unyielding support directly beneath the lower back and pelvic girdle to maintain neutral spinal alignment.",
    specs: [
      { label: "Core Density", value: "32D High-Resilience Aerocell" },
      { label: "Zone Design", value: "Head, Shoulders, Lumbar, Hips, Legs" },
      { label: "Approval", value: "Spine Rehabilitation Approved" },
    ],
    image: "/images/layer-12.jpg",
    badge: "Doctor Approved",
  },
  {
    id: "layer-base",
    number: "04",
    name: "DuraGuard™ High-Density Rebound Base",
    subtitle: "Anti-Sag Structural Foundation",
    thickness: "3.0 inches (7.5 cm)",
    description:
      "Forms an unwavering structural foundation that eliminates mattress bottoming out and prevents center sagging. Fortified with reinforced perimeter edge walls so you can sit or sleep right up to the edge without rolling off.",
    specs: [
      { label: "Perimeter", value: "360° Edge Support Encasement" },
      { label: "Testing", value: "100,000 Roller Durability Cycles" },
      { label: "Warranty", value: "10-Year Comprehensive" },
    ],
    image: "/images/layer-6.jpg",
    badge: "Anti-Sag Tech",
  },
];

export default function LayerVisualizer() {
  const [activeLayer, setActiveLayer] = useState<LayerDetail>(LAYERS[1]); // Default to Latex layer

  return (
    <section className="py-20 sm:py-28 bg-white border-y border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-nordic-700">
            Internal Anatomy
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mt-3 tracking-tight">
            See What&apos;s Inside Our Sleep Systems
          </h2>
          <p className="text-charcoal-700 text-sm sm:text-base mt-2.5">
            Click any layer to inspect its material composition, thickness, and certified ergonomic benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Layer Selection Tabs (Left Column) */}
          <div className="lg:col-span-5 space-y-3">
            {LAYERS.map((layer) => {
              const isSelected = activeLayer.id === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all border flex items-center justify-between ${
                    isSelected
                      ? "bg-nordic-50/80 border-nordic-500 shadow-sm"
                      : "bg-white hover:bg-mist/70 border-stone-200/80"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                        isSelected
                          ? "bg-nordic-800 text-white"
                          : "bg-stone-100 text-charcoal-700"
                      }`}
                    >
                      {layer.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4
                          className={`text-sm sm:text-base font-semibold transition-colors ${
                            isSelected ? "text-nordic-900 font-bold" : "text-charcoal"
                          }`}
                        >
                          {layer.name}
                        </h4>
                      </div>
                      <p className="text-xs text-charcoal-500 mt-0.5">
                        {layer.subtitle} • {layer.thickness}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                      isSelected
                        ? "bg-nordic-200/80 text-nordic-900"
                        : "bg-stone-100 text-charcoal-500"
                    }`}
                  >
                    {layer.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Layer Detail Display (Right Column) */}
          <div className="lg:col-span-7 bg-mist rounded-2xl border border-stone-200/80 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200/70">
              <div>
                <span className="text-xs font-mono font-bold text-nordic-700 uppercase tracking-wider">
                  Layer {activeLayer.number} Breakdown
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-charcoal mt-1">
                  {activeLayer.name}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-white border border-stone-200 text-xs font-bold text-charcoal self-start sm:self-auto">
                {activeLayer.thickness}
              </span>
            </div>

            {/* Visual Layer Preview */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-white border border-stone-200/80 shadow-subtle">
              <Image
                src={activeLayer.image}
                alt={activeLayer.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-nordic-900 shadow-sm">
                Certified Non-Toxic
              </div>
            </div>

            <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed">
              {activeLayer.description}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {activeLayer.specs.map((s, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white rounded-xl border border-stone-200/70 text-xs"
                >
                  <span className="text-charcoal-500 block mb-0.5">{s.label}</span>
                  <span className="font-semibold text-charcoal block truncate">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
