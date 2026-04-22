"use client";

import { brandName, hrefFromNavigationLabel } from "@/lib/theme";
import { navigationLinks } from "@/data/landing-content";
import { Logo } from "@/components/ui/logo";

type LandingNavProps = {
  scrolled: boolean;
  menuOpen: boolean;
  onMenuChange: (open: boolean) => void;
};

export const LandingNav = ({ scrolled, menuOpen, onMenuChange }: LandingNavProps) => (
  <>
    <nav
      className="landing-nav fixed top-0 left-0 right-0 z-[100] px-8 h-[62px] flex items-center justify-between border-b border-[rgba(184,151,58,0.12)] backdrop-blur-[16px] transition-[background,box-shadow] duration-[400ms]"
      style={{
        background: scrolled ? "rgba(244,239,228,0.98)" : "rgba(244,239,228,0.92)",
        boxShadow: scrolled ? "0 2px 20px rgba(122,21,24,0.08)" : "none",
      }}
    >
      <div className="nav-brand flex items-center gap-[10px] min-w-0">
        <Logo size={28} />
        <span className="nav-brand-name jost text-[12px] tracking-[0.2em] font-normal text-cream truncate">{brandName}</span>
      </div>

      <div className="nav-desktop flex gap-8">
        {navigationLinks.map((l) => (
          <a key={l} href={hrefFromNavigationLabel(l)} className="nav-link">{l}</a>
        ))}
      </div>

      <div className="nav-actions flex items-center gap-3">
        <a href="#membro" className="nav-cta btn-prim" style={{ padding: "8px 18px", fontSize: 10 }}>
          Torne-se membro
        </a>
        <button
          className="hamburger"
          onClick={() => onMenuChange(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </div>
    </nav>

    <div id="mobile-menu" className={`mobile-menu${menuOpen ? " open" : ""}`}>
      {navigationLinks.map((l) => (
        <a key={l} href={hrefFromNavigationLabel(l)} onClick={() => onMenuChange(false)}>{l}</a>
      ))}
    </div>
  </>
);
