import { pillars } from "@/data/landing-content";
import { FadeIn } from "@/components/ui/fade-in";

export const LandingPillars = () => (
  <section id="apostolado" className="section relative overflow-hidden bg-bg3">
    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(184,151,58,0.05), transparent)" }} />
    <div className="relative z-[1] max-w-[1080px] mx-auto">
      <FadeIn>
        <div className="text-center mb-14">
          <span className="eyebrow">Apostolado</span>
          <h2 className="play font-medium text-cream mt-4" style={{ fontSize: "clamp(24px,3.5vw,42px)" }}>
            O Que Fazemos
          </h2>
        </div>
      </FadeIn>
      <div className="pillar-grid">
        {pillars.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.07}>
            <div className="pillar-card">
              <div className="text-gold text-[13px] mb-4">✦</div>
              <h3 className="play font-medium text-cream text-[19px] mb-[0.4rem]">{p.title}</h3>
              <p className="jost text-[9px] tracking-[0.2em] uppercase mb-[0.85rem] font-light text-gold">{p.latin}</p>
              <p className="bask text-[14px] leading-[1.82] text-cream-dim">{p.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
