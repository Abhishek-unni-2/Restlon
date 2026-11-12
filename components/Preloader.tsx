"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Deterministic star field (no Math.random, so no hydration mismatch)
const STARS = Array.from({ length: 44 }, (_, i) => ({
  x: (i * 37.7 + 11) % 100,
  y: (i * 61.3 + ((i * i) % 17) * 3) % 100,
  size: 2 + ((i * 7) % 3),
  delay: ((i * 0.37) % 3.2).toFixed(2),
  dur: (2.2 + (((i * 13) % 10) / 10) * 1.8).toFixed(2),
}));

const MIN_MS = 1500; // shortest time the splash stays, so the animation can finish
const MAX_MS = 4000; // never hold the page longer than this

/**
 * Branded splash shown once per visit. The page content is already in the DOM underneath,
 * so search engines and slow connections are never blocked. Returning within the same
 * session skips it (an inline script in the layout sets data-seen before first paint).
 */
export default function Preloader() {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.seen) {
      root.removeAttribute("data-wait");
      setPhase("gone");
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let done = false;
    root.style.overflow = "hidden";

    const finish = () => {
      if (done) return;
      done = true;
      const wait = reduced ? 0 : Math.max(0, MIN_MS - (performance.now() - start));
      t1 = setTimeout(() => {
        setPhase("out");
        root.removeAttribute("data-wait");
        root.style.overflow = "";
        try {
          sessionStorage.setItem("rl_seen", "1");
        } catch {}
        t2 = setTimeout(() => setPhase("gone"), reduced ? 0 : 900);
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    const safety = setTimeout(finish, MAX_MS);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(safety);
      window.removeEventListener("load", finish);
      root.removeAttribute("data-wait");
      root.style.overflow = "";
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`preloader ${phase === "out" ? "is-out" : ""}`} role="status" aria-live="polite" aria-label="Loading">
      <div className="preloader-stars" aria-hidden="true">
        {STARS.map((st, i) => (
          <span
            key={i}
            className="preloader-star"
            style={
              {
                left: `${st.x}%`,
                top: `${st.y}%`,
                width: st.size,
                height: st.size,
                "--d": `${st.delay}s`,
                "--t": `${st.dur}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      <Image
        src="/images/logo.png"
        alt="Restlon Comforts"
        width={1758}
        height={590}
        priority
        className="preloader-logo h-14 w-auto sm:h-16"
      />
      <span className="preloader-bar" aria-hidden="true">
        <span />
      </span>
    </div>
  );
}
