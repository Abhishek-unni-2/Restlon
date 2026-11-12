"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const go = (dir: 1 | -1) =>
    ref.current?.scrollBy({ left: dir * Math.max(320, ref.current.clientWidth * 0.8), behavior: "smooth" });

  const btn =
    "hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full border border-stone-300 bg-white text-charcoal transition-colors duration-300 hover:bg-pebble active:scale-95";

  return (
    <div>
      <div className="flex justify-end gap-2 mb-4">
        <button type="button" aria-label="Previous" onClick={() => go(-1)} className={btn}>
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button type="button" aria-label="Next" onClick={() => go(1)} className={btn}>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div
        ref={ref}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
      >
        {children}
      </div>
    </div>
  );
}
