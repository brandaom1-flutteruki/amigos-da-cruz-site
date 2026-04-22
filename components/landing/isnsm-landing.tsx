"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

import { LandingNav } from "./sections/landing-nav";
import { LandingHero } from "./sections/landing-hero";
import { LandingAbout } from "./sections/landing-about";
import { LandingPillars } from "./sections/landing-pillars";
import { LandingWhy } from "./sections/landing-why";
import { LandingVision } from "./sections/landing-vision";
import { LandingCta } from "./sections/landing-cta";
import { LandingFooter } from "./sections/landing-footer";

export default function ISNSMLanding() {
  const [email, setEmail]                 = useState("");
  const [submitted, setSubmitted]         = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [heroReady, setHeroReady]         = useState(false);
  const [heroParallax, setHeroParallax]   = useState(0);
  const aboutSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40);
      setShowBackToTop(window.scrollY > window.innerHeight * 0.85);
      setHeroParallax(window.scrollY * 0.18);
    };
    window.addEventListener("scroll", fn);
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => setHeroReady(true), 120);
    return () => window.clearTimeout(id);
  }, []);

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  const cssVars = {
    "--hero-rule-width":      heroReady ? "180px" : "0px",
    "--hero-title-transform": heroReady ? "translateY(0)" : "translateY(115%)",
    "--hero-title-blur":      heroReady ? "0px" : "10px",
    "--hero-title-opacity":   heroReady ? "1" : "0.15",
    "--hero-art-opacity":     heroReady ? "0.46" : "0",
    "--hero-parallax":        `${heroParallax}px`,
    "--hero-parallax-tablet": `${heroParallax * 0.7}px`,
    "--hero-parallax-mobile": `${heroParallax * 0.5}px`,
  } as CSSProperties;

  return (
    <div
      className="font-[Georgia,serif] bg-bg text-cream min-h-screen overflow-x-hidden"
      style={cssVars}
    >
      <LandingNav
        scrolled={scrolled}
        menuOpen={menuOpen}
        onMenuChange={(open) => setMenuOpen(open)}
      />
      <LandingHero onScrollDown={() => aboutSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })} />
      <LandingAbout sectionRef={aboutSectionRef} />
      <LandingPillars />
      <LandingWhy />
      <LandingVision />
      <LandingCta email={email} submitted={submitted} onChange={setEmail} onSubmit={handleSubmit} />
      <LandingFooter />

      {showBackToTop && (
        <button
          type="button"
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
        >
          ↑
        </button>
      )}
    </div>
  );
}
