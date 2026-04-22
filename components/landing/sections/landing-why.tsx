import { FadeIn } from "@/components/ui/fade-in";

const stats = [
  ["Liturgia",  "A forma da oração"],
  ["Livro",     "A memória da fé"],
  ["Formação",  "O futuro da Tradição"],
] as const;

export const LandingWhy = () => (
  <section
    className="section text-center relative overflow-hidden"
    style={{ background: "linear-gradient(135deg, var(--color-crimson-g) 0%, var(--color-crimson) 50%, var(--color-crimson-g) 100%)" }}
  >
    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(184,151,58,0.12), transparent)" }} />
    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 40% at 50% 50%, rgba(0,0,0,0.3), transparent)" }} />
    <div className="relative z-[1] max-w-[880px] mx-auto">
      <FadeIn>
        <span className="jost text-[10px] font-normal tracking-[0.36em] uppercase" style={{ color: "rgba(240,232,216,0.45)" }}>
          A Razão de Ser
        </span>
        <h2
          className="play font-medium text-white mt-6 mb-9"
          style={{ fontSize: "clamp(24px,3.8vw,44px)", lineHeight: 1.2, textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
        >
          O culto a Deus<br />
          <em className="font-normal text-gold-l">é sagrado.</em>
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="bask text-[16px] leading-[1.95] mb-7" style={{ color: "rgba(240,232,216,0.8)" }}>
          A Missa Tradicional não é um ritual apenas do passado mas também do presente e do futuro — o que é tradicional não envelhece nem se desactualiza. Cada oração, cada gesto de sacralidade, cada silêncio foram vividos pelos nossos antepassados durante muitos séculos. A sacralidade própria deste rito propícia o encontro e a comunhão entre a alma e Deus.
        </p>
      </FadeIn>
      <FadeIn delay={0.25}>
        <p className="bask text-[16px] leading-[1.95]" style={{ color: "rgba(240,232,216,0.8)" }}>
          A Associação Amigos da Cruz dedica-se a tornar essa experiência acessível — através da formação, da publicação e do apoio àqueles que a servem.
        </p>
      </FadeIn>
      <FadeIn delay={0.35}>
        <div className="stats-row mt-[3.25rem]">
          {stats.map(([title, subtitle], i) => (
            <div key={i} className="text-center">
              <div className="play text-[22px] font-medium text-gold-l" style={{ textShadow: "0 0 20px rgba(184,151,58,0.4)" }}>{title}</div>
              <div className="jost text-[9px] tracking-[0.2em] uppercase mt-[7px] font-light" style={{ color: "rgba(240,232,216,0.4)" }}>{subtitle}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);
