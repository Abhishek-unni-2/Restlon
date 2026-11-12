"use client";

import { useEffect, useRef } from "react";

/** Large statement where each word darkens, one by one, as it scrolls into view. */
export default function TaglineReveal({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const words = ref.current?.querySelectorAll<HTMLElement>("[data-w]");
    if (!words) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      words.forEach((w) => w.classList.add("is-on"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-on");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -28% 0px" }
    );
    words.forEach((w) => io.observe(w));
    return () => io.disconnect();
  }, []);

  return (
    <p ref={ref} aria-label={text} className="max-w-[880px] mx-auto text-center text-3xl sm:text-5xl font-semibold tracking-tight">
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden="true" data-w className="tagline-word">
          {w}{" "}
        </span>
      ))}
    </p>
  );
}
