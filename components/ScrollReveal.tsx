"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Mount once in the root layout. Fades/slides elements in as they enter the viewport.
 *  - data-reveal        → reveal this element
 *  - data-reveal-group  → reveal each direct child, staggered
 * Respects prefers-reduced-motion (CSS also neutralises the hidden state).
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets: { el: HTMLElement; delay: number }[] = [];
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      targets.push({ el, delay: 0 });
    });
    document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
      Array.from(group.children).forEach((child, i) => {
        targets.push({ el: child as HTMLElement, delay: Math.min(i, 6) * 80 });
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("is-revealed");
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    targets.forEach(({ el, delay }) => {
      el.setAttribute("data-r", "");
      el.style.animationDelay = `${delay}ms`;
      io.observe(el);
    });
    root.classList.add("reveal-ready");

    return () => {
      io.disconnect();
      targets.forEach(({ el }) => {
        el.removeAttribute("data-r");
        el.classList.remove("is-revealed");
        el.style.animationDelay = "";
      });
    };
  }, [pathname]);

  return null;
}
