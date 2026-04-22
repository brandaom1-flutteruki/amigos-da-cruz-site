import { FadeIn } from "@/components/ui/fade-in";
import { IncenseSmoke } from "@/components/ui/incense-smoke";
import { LOGO_SRC } from "@/components/ui/logo";

type LandingHeroProps = {
  onScrollDown: () => void;
};

export const LandingHero = ({ onScrollDown }: LandingHeroProps) => (
  <section
    id="missao"
    className="hero-section section min-h-screen flex flex-col items-center justify-center pt-[120px] pb-20 relative overflow-hidden bg-bg"
  >
    <div className="hero-ambient" />
    <div className="hero-grid" />
    <div className="hero-glow hero-glow-one" />
    <div className="hero-glow hero-glow-two" />
    <IncenseSmoke />
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-crimson" />
    <div className="absolute top-1 left-0 right-0 h-[1px] opacity-50" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)" }} />

    <div className="hero-art">
      <div className="hero-art-ring" />
      <img src={LOGO_SRC} alt="" aria-hidden="true" className="hero-art-logo" />
    </div>

    <div className="hero-content">
      <div className="relative z-[2]">
        <div className="hero-kicker">
          <span className="hero-kicker-dot" />
          <span className="eyebrow">Ad Majorem Dei Gloriam</span>
        </div>
        <div className="hero-rule" />
        <h1 className="hero-title" aria-label="A fé que edificou a Europa não morreu.">
          {[
            { text: "A fé",          delay: "0.16s" },
            { text: "que edificou",  delay: "0.32s" },
            { text: "a Europa",      delay: "0.48s" },
            { text: "não morreu.",   delay: "0.66s", accent: true },
          ].map((line) => (
            <span key={line.text} className="hero-title-line">
              <span
                className={`hero-title-inner${line.accent ? " accent" : ""}`}
                style={{ transitionDelay: line.delay }}
              >
                {line.text}
              </span>
            </span>
          ))}
        </h1>
      </div>

      <FadeIn delay={0.82} style={{ position: "relative", zIndex: 2 }}>
        <p className="hero-subcopy bask">
          Amigos da Cruz é um apostolado dedicado à promoção da fé católica e da vida virtuosa — através da divulgação de bons livros, da formação contínua e da vivencia da liturgia romana tradicional.
        </p>
      </FadeIn>

      <FadeIn delay={0.96} style={{ position: "relative", zIndex: 2 }} className="hero-actions">
        <div className="hero-btns">
          <a href="#membro" className="btn-prim">Torne-se membro</a>
        </div>
      </FadeIn>
    </div>

    <button
      type="button"
      className="scroll-down-trigger absolute bottom-[30px] left-1/2 -translate-x-1/2"
      onClick={onScrollDown}
      aria-label="Descer para a próxima secção"
    >
      <span className="jost text-[9px] tracking-[0.28em] uppercase text-cream-dim">Descer</span>
      <div className="w-[1px] h-[38px]" style={{ background: "linear-gradient(to bottom, var(--color-crimson), transparent)" }} />
    </button>
  </section>
);
