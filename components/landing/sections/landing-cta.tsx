import { membershipBenefits } from "@/data/landing-content";
import { FadeIn } from "@/components/ui/fade-in";
import { Logo } from "@/components/ui/logo";

type LandingCtaProps = {
  email: string;
  submitted: boolean;
  onChange: (value: string) => void;
  onSubmit: (e: { preventDefault(): void }) => void;
};

export const LandingCta = ({ email, submitted, onChange, onSubmit }: LandingCtaProps) => (
  <section
    id="membro"
    className="section text-center relative overflow-hidden"
    style={{ background: "linear-gradient(180deg, var(--color-bg4) 0%, var(--color-bg2) 100%)" }}
  >
    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(139,26,26,0.12), transparent)" }} />
    <div className="relative z-[1] max-w-[740px] mx-auto">
      <FadeIn>
        <div className="mb-7 flex justify-center">
          <Logo size={48} opacity={0.9} />
        </div>
        <h2
          className="play font-medium text-cream mb-6"
          style={{ fontSize: "clamp(28px,4.5vw,54px)", lineHeight: 1.12, textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
        >
          Torne-se membro<br />
          <em className="font-normal text-crimson-l">desta obra.</em>
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="bask text-[16px] leading-[1.95] mb-12 text-cream-dim">
          A adesão ao Instituto destina-se a quem quer participar com continuidade: rezar, formar-se, apoiar projectos concretos e integrar uma comunidade que leva a Tradição a sério.
        </p>
      </FadeIn>
      <FadeIn delay={0.25}>
        <div className="member-grid">
          {membershipBenefits.map((benefit) => (
            <div key={benefit.title} className="member-card">
              <div className="member-card-title">{benefit.title}</div>
              <div className="member-card-desc">{benefit.desc}</div>
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.35}>
        <div className="border-t border-[rgba(184,151,58,0.12)] pt-11">
          <p className="cta-note">Sem compromisso inicial · resposta pessoal do apostolado</p>
          {submitted ? (
            <p className="play text-[20px] italic text-gold-l">
              Recebemos o seu email. Entraremos em contacto.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="email-form">
              <input
                type="email"
                placeholder="o.teu@email.com"
                value={email}
                onChange={(e) => onChange(e.target.value)}
                className="email-input"
                required
              />
              <button type="submit" className="btn-prim" style={{ padding: "10px 20px", fontSize: 10 }}>
                Subscrever
              </button>
            </form>
          )}
        </div>
      </FadeIn>
    </div>
  </section>
);
