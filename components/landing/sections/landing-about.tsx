import type { RefObject } from "react";
import { FadeIn } from "@/components/ui/fade-in";

type LandingAboutProps = {
  sectionRef: RefObject<HTMLElement | null>;
};

export const LandingAbout = ({ sectionRef }: LandingAboutProps) => (
  <section
    ref={sectionRef}
    id="sobre"
    className="section relative overflow-hidden"
    style={{ background: "linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg2) 100%)" }}
  >
    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 0% 50%, rgba(139,26,26,0.08), transparent)" }} />
    <div className="relative z-[1] max-w-[740px] mx-auto">
      <FadeIn><span className="eyebrow">Manifesto</span></FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="play font-medium text-cream mt-6 mb-9" style={{ fontSize: "clamp(26px,4vw,48px)", lineHeight: 1.18 }}>
          Caritas Christi<br />
          <em className="font-normal text-crimson-l">urget nos.</em>
        </h2>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="bask text-[16px] leading-[1.95] text-cream-dim">
          <p className="mb-6">
            São Luís Maria Grignion de Montfort, na <em>Carta Circular aos Amigos da Cruz</em>,
            explica que “Um Amigo da Cruz é um rei todo-poderoso e um herói triunfante do
            demónio, do mundo e da carne nas suas três concupiscências. Pelo amor às humilhações,
            esmaga o orgulho de Satanás; pelo amor à pobreza, triunfa da avareza do mundo; pelo
            amor à dor, amortece a sensualidade da carne.”
          </p>
          <p className="mb-6">
            É essa a vocação que nos define. Publicamos, formamos, apoiamos sacerdotes e
            construímos comunidade em torno da liturgia tradicional — porque a Tradição não se
            transmite sozinha. Precisa de pessoas, de obras e de tempo.
          </p>
          <p>Não por nostalgia — mas por amor à verdade que não envelhece.</p>
        </div>
      </FadeIn>
      <FadeIn delay={0.3}>
        <div className="mt-12 pl-[22px] border-l-2 border-gold-d">
          <p className="play text-[20px] italic font-normal text-gold-l leading-[1.65]">
            “Se alguém quiser vir após mim, negue-se a si mesmo, tome a sua cruz e siga-me.”
          </p>
          <p className="jost text-[11px] text-cream-faint mt-[10px] tracking-[0.12em] font-light">
            Nosso Senhor Jesus Cristo — Mt 16,24
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);
