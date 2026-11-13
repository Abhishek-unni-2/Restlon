"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Pause, Layers, Sparkles } from "lucide-react";

interface HeroProps {
  headline?: string;
  subhead?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  videoSrc?: string;
  posterSrc?: string;
}

export default function Hero({
  headline = "Sleep that holds you up and keeps you cool.",
  subhead = "Natural Kerala latex and orthopedic support, made for Indian homes.",
  primaryCtaText = "Shop collections",
  primaryCtaLink = "#collections",
  secondaryCtaText = "Compare sizes",
  secondaryCtaLink = "/mattress-types/king-size-mattress",
  videoSrc = "/videos/hero-sleep-stable.mp4",
  posterSrc = "/images/home-about-us.jpg",
}: HeroProps) {
  const firstRun = useRef(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeVideo, setActiveVideo] = useState(videoSrc);
  const [hasVideoError, setHasVideoError] = useState(false);

  // Handle active video change & safe autoplay
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false; // autoPlay already handles the first load; reloading here made it hiccup
      return;
    }
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [activeVideo]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const words = headline.split(" ");
  const d = (i: number) => ({ "--i": i } as React.CSSProperties);

  return (
    <section className="relative flex flex-col overflow-hidden bg-charcoal sm:h-[calc(100vh-120px)] sm:min-h-[560px] sm:max-h-[880px] sm:flex-row sm:items-end">
      <div className="relative h-[46vh] min-h-[300px] w-full overflow-hidden sm:absolute sm:inset-0 sm:h-full">
        <div className="absolute inset-0">
          {!hasVideoError ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={posterSrc}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={() => setHasVideoError(true)}
              className="h-full w-full object-cover object-[68%_40%]"
            >
              <source src={activeVideo} type="video/mp4" />
              <Image
                src={posterSrc}
                alt="A child resting on a Restlon Comforts mattress"
                fill
                priority
                className="hero-zoom object-cover object-[68%_40%]"
                sizes="100vw"
              />
            </video>
          ) : (
            <Image
              src={posterSrc}
              alt="A child resting on a Restlon Comforts mattress"
              fill
              priority
              className="hero-zoom object-cover object-[68%_40%]"
              sizes="100vw"
            />
          )}
        </div>

        {/* Ambient dark gradient overlay for optimal readability of white text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25 sm:bg-black/40" />

        {/* Sleek video playback & mode switcher controls */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 sm:bottom-8 sm:top-auto sm:left-8 sm:right-auto">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause background video" : "Play background video"}
            className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white/90 border border-white/20 transition-colors duration-300 hover:bg-black/75 hover:text-white active:scale-95"
          >
            {isPlaying ? (
              <>
                <Pause className="h-3.5 w-3.5" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5" />
                <span>Play</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveVideo((curr) =>
                curr.includes("hero-sleep")
                  ? "/videos/hero-mattress-3d.mp4"
                  : "/videos/hero-sleep-stable.mp4"
              );
            }}
            aria-label="Switch video view"
            className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white/90 border border-white/20 transition-colors duration-300 hover:bg-black/75 hover:text-white active:scale-95"
          >
            {activeVideo.includes("hero-sleep") ? (
              <>
                <Layers className="h-3.5 w-3.5 text-amber-300" />
                <span className="hidden sm:inline">3D Tech View</span>
                <span className="sm:hidden">3D Tech</span>
              </>
            ) : (
              <>
                <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
                <span className="hidden sm:inline">Ambient View</span>
                <span className="sm:hidden">Ambient</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-8 sm:px-6 sm:pb-20 sm:pt-0 lg:px-8">
        <h1
          className="max-w-[760px] text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          aria-label={headline}
        >
          {words.map((w, i) => (
            <React.Fragment key={i}>
              <span className="word-mask" aria-hidden="true">
                <span className="word" style={{ "--w": i } as React.CSSProperties}>
                  {w}
                </span>
              </span>{" "}
            </React.Fragment>
          ))}
        </h1>
        <p style={d(6)} className="hero-in mt-6 max-w-[520px] text-lg text-white/85 sm:text-xl">
          {subhead}
        </p>
        <div style={d(7)} className="hero-in mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href={primaryCtaLink}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-charcoal transition-colors duration-300 hover:bg-pebble active:scale-[0.98]"
          >
            {primaryCtaText}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href={secondaryCtaLink}
            className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-white/10 active:scale-[0.98]"
          >
            {secondaryCtaText}
          </Link>
        </div>
      </div>

      <a
        href="#collections"
        aria-label="Scroll to collections"
        style={d(8)}
        className="hero-in absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-2 text-sm text-white/80 sm:flex lg:right-10"
      >
        <span>Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-white/30">
          <span className="scroll-cue absolute left-0 top-0 h-4 w-px bg-white" />
        </span>
      </a>
    </section>
  );
}
