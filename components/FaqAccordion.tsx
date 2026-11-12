"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaqPageJsonLd } from "./JsonLd";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function FaqAccordion({
  faqs,
  title,
  subtitle,
  className = "",
}: FaqAccordionProps) {
  // First item open by default
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className={`w-full ${className}`}>
      {/* Schema.org FAQPage JSON-LD generated automatically */}
      <FaqPageJsonLd faqs={faqs} />

      {title && (
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            {title}
          </h2>
          {subtitle && <p className="text-sm text-warmgrey mt-2">{subtitle}</p>}
        </div>
      )}

      <div className="space-y-3 max-w-3xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div
              key={index}
              className={`rounded-xl border transition-all ${
                isOpen
                  ? "bg-white border-teal/40 shadow-sm"
                  : "bg-ivory/60 hover:bg-white border-sand"
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between text-left p-5 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-serif font-semibold text-stone-900 text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-teal" : "text-warmgrey"
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-sand/40 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
