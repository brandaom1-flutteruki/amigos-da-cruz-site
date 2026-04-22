import { visionItems } from "@/data/landing-content";
import { FadeIn } from "@/components/ui/fade-in";
import { Logo } from "@/components/ui/logo";

export const LandingVision = () => (
  <section
    id="visao"
    className="section relative overflow-hidden"
    style={{ background: "linear-gradient(180deg, var(--color-bg2) 0%, var(--color-bg4) 100%)" }}
  >
    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(139,26,26,0.06), transparent)" }} />
    <div className="relative z-[1] max-w-[1080px] mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <span className="eyebrow">Visão</span>
          <h2 className="play font-medium text-cream mt-4" style={{ fontSize: "clamp(24px,3.5vw,42px)" }}>
            O Que Estamos a Construir
          </h2>
        </div>
      </FadeIn>
      <div className="vision-cols">
        <div className="flex-1">
          {visionItems.map((v, i) => (
            <FadeIn key={v.num} delay={i * 0.1}>
              <div className="flex gap-5 mb-[2.2rem]">
                <span className="play italic text-[14px] text-crimson-l min-w-[22px] mt-[3px]">{v.num}</span>
                <p className="bask text-[15px] leading-[1.88] text-cream-dim">{v.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="flex-1">
          <FadeIn delay={0.3}>
            <div className="quote-box">
              <div className="mb-5 flex justify-center">
                <Logo size={40} opacity={0.8} />
              </div>
              <p className="play text-[21px] italic font-normal text-cream-dim leading-[1.65] mb-6">
                "Não somos os últimos. Somos os primeiros de uma geração que vai recuperar o que foi perdido."
              </p>
              <div className="w-8 h-[1px] mb-5" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)" }} />
              <p className="jost text-[9px] tracking-[0.2em] uppercase font-normal text-cream-faint">
                Amigos da Cruz
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);
