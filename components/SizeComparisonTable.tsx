"use client";

import React, { useState } from "react";
import { Check, Info } from "lucide-react";

export interface SizeRow {
  size: "Single" | "Double" | "Queen" | "King" | string;
  dimensionsInches: string;
  dimensionsCm: string;
  thickness6Price: number;
  thickness8Price: number;
  thickness10Price: number;
  recommendedFor?: string;
}

interface SizeComparisonTableProps {
  title?: string;
  subtitle?: string;
  customRows?: SizeRow[];
  onSelectSize?: (size: string, thickness: string, price: number) => void;
}

const DEFAULT_ROWS: SizeRow[] = [
  {
    size: "Single",
    dimensionsInches: "72 × 36 in",
    dimensionsCm: "183 × 91 cm",
    thickness6Price: 8499,
    thickness8Price: 10499,
    thickness10Price: 12999,
    recommendedFor: "Kids, guest rooms, single adults, hostels",
  },
  {
    size: "Double",
    dimensionsInches: "72 × 48 in",
    dimensionsCm: "183 × 122 cm",
    thickness6Price: 11499,
    thickness8Price: 13999,
    thickness10Price: 16499,
    recommendedFor: "Compact master bedrooms, teenagers, solo luxury",
  },
  {
    size: "Queen",
    dimensionsInches: "78 × 60 in",
    dimensionsCm: "198 × 152 cm",
    thickness6Price: 14499,
    thickness8Price: 17499,
    thickness10Price: 20999,
    recommendedFor: "Couples, standard master bedrooms (Most Popular)",
  },
  {
    size: "King",
    dimensionsInches: "78 × 72 in",
    dimensionsCm: "198 × 183 cm",
    thickness6Price: 17499,
    thickness8Price: 20999,
    thickness10Price: 24999,
    recommendedFor: "Couples wanting extra room, co-sleeping with children",
  },
];

export default function SizeComparisonTable({
  title = "Mattress Size & Thickness Price Matrix",
  subtitle = "Choose from standard Indian bed dimensions. Custom sizes available on request.",
  customRows,
  onSelectSize,
}: SizeComparisonTableProps) {
  const [unit, setUnit] = useState<"inches" | "cm">("inches");
  const [selectedThickness, setSelectedThickness] = useState<"6" | "8" | "10">("8");

  const rows = customRows || DEFAULT_ROWS;

  const getPrice = (row: SizeRow, thickness: "6" | "8" | "10") => {
    if (thickness === "6") return row.thickness6Price;
    if (thickness === "8") return row.thickness8Price;
    return row.thickness10Price;
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-sand p-6 sm:p-8 shadow-sm">
      {/* Header with Unit and Thickness Toggles */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-sand">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">{title}</h3>
          <p className="text-sm text-warmgrey mt-1">{subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Unit Toggle */}
          <div className="flex items-center bg-ivory p-1 rounded-xl border border-sand">
            <button
              onClick={() => setUnit("inches")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                unit === "inches"
                  ? "bg-teal text-white shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Inches
            </button>
            <button
              onClick={() => setUnit("cm")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                unit === "cm"
                  ? "bg-teal text-white shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Centimeters
            </button>
          </div>

          {/* Quick Thickness Filter */}
          <div className="flex items-center bg-ivory p-1 rounded-xl border border-sand">
            <span className="text-[11px] font-medium text-stone-500 pl-2 pr-1">Loft:</span>
            {(["6", "8", "10"] as const).map((th) => (
              <button
                key={th}
                onClick={() => setSelectedThickness(th)}
                className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedThickness === th
                    ? "bg-stone-900 text-white shadow-sm"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {th}&quot;
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-sand text-xs font-bold uppercase tracking-wider text-warmgrey bg-ivory/60">
              <th className="py-3 px-4 rounded-l-lg">Size Standard</th>
              <th className="py-3 px-4">Dimensions</th>
              <th className="py-3 px-4 text-center">6-Inch Height</th>
              <th className="py-3 px-4 text-center bg-teal/5 border-x border-teal/10">
                8-Inch Height (Popular)
              </th>
              <th className="py-3 px-4 text-center">10-Inch Height</th>
              <th className="py-3 px-4 rounded-r-lg">Recommended Use</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sand/70 text-sm">
            {rows.map((row) => {
              const currentPrice = getPrice(row, selectedThickness);
              const isPopular = row.size === "Queen";

              return (
                <tr
                  key={row.size}
                  className={`hover:bg-ivory/50 transition-colors ${
                    isPopular ? "bg-teal/[0.02]" : ""
                  }`}
                >
                  <td className="py-4 px-4 font-serif font-bold text-stone-900">
                    <div className="flex items-center gap-2">
                      <span>{row.size}</span>
                      {isPopular && (
                        <span className="text-[10px] bg-terracotta/10 text-terracotta font-semibold px-2 py-0.5 rounded-full">
                          Top Choice
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4 font-mono text-xs text-stone-700">
                    {unit === "inches" ? row.dimensionsInches : row.dimensionsCm}
                  </td>
                  <td
                    className={`py-4 px-4 text-center font-semibold ${
                      selectedThickness === "6"
                        ? "text-teal font-bold bg-teal/10 rounded-lg"
                        : "text-stone-800"
                    }`}
                  >
                    ₹{row.thickness6Price.toLocaleString("en-IN")}
                  </td>
                  <td
                    className={`py-4 px-4 text-center font-semibold bg-teal/5 border-x border-teal/10 ${
                      selectedThickness === "8"
                        ? "text-teal font-bold bg-teal/20"
                        : "text-stone-900 font-bold"
                    }`}
                  >
                    ₹{row.thickness8Price.toLocaleString("en-IN")}
                  </td>
                  <td
                    className={`py-4 px-4 text-center font-semibold ${
                      selectedThickness === "10"
                        ? "text-teal font-bold bg-teal/10 rounded-lg"
                        : "text-stone-800"
                    }`}
                  >
                    ₹{row.thickness10Price.toLocaleString("en-IN")}
                  </td>
                  <td className="py-4 px-4 text-xs text-warmgrey">
                    {row.recommendedFor || "Perfect for modern bedroom suites"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Note and CTA banner */}
      <div className="mt-6 pt-4 border-t border-sand flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-warmgrey gap-3">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-teal flex-shrink-0" />
          <span>Need a customized mattress length or width for an antique cot? We build custom sizes at no extra premium!</span>
        </div>
        <a
          href="https://wa.me/919846012345?text=Hi%2C%20I%20need%20a%20custom%20mattress%20size"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-teal hover:underline flex-shrink-0"
        >
          Chat with Size Specialist →
        </a>
      </div>
    </div>
  );
}
