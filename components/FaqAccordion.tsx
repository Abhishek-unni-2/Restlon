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
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className={`w-full ${className}`}>
      <FaqPageJsonLd faqs={faqs} />

      {title && (
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium text-nordic-700">
            Clear Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mt-3 tracking-tight">
            {title}
          </h2>
          {subtitle && <p className="text-sm text-charcoal-500 mt-2">{subtitle}</p>}
        </div>
      )}

      <div className="space-y-3.5 max-w-3xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "bg-white border-nordic-400 shadow-subtle"
                  : "bg-mist hover:bg-white border-stone-200/80"
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between text-left p-5 sm:p-6 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-charcoal text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-nordic-800" : "text-charcoal-500"
                  }`}
                />
              </button>

              <div className="accordion-panel" data-open={isOpen} aria-hidden={!isOpen}>
                <div>
                  <div className="mx-5 sm:mx-6 pb-6 text-charcoal-700 text-xs sm:text-sm leading-relaxed border-t border-stone-100 pt-3">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
