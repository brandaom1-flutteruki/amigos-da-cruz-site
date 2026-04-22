import { brandName, footerTheme } from "@/lib/theme";
import { footerColumns } from "@/data/landing-content";
import { Logo } from "@/components/ui/logo";

export const LandingFooter = () => (
  <footer className="relative overflow-hidden border-t-2 border-crimson" style={{ background: "var(--color-cream)" }}>
    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 80%, rgba(122,21,24,0.04), transparent)" }} />

    <div className="footer-shell">
      <div className="footer-brand">
        <div className="flex items-center gap-[10px]">
          <Logo size={22} opacity={0.8} />
          <span className="jost text-[11px] tracking-[0.18em] font-normal" style={{ color: footerTheme.strong }}>{brandName}</span>
        </div>
        <p className="jost text-[9px] tracking-[0.12em] font-light leading-[1.7] max-w-[200px]" style={{ color: footerTheme.muted }}>
          {brandName}<br />Portugal · Europa
        </p>
      </div>
      <div className="footer-nav">
        {footerColumns.map((col) => (
          <div key={col.heading} className="footer-column">
            <p className="jost text-[9px] tracking-[0.22em] uppercase font-medium mb-1" style={{ color: footerTheme.heading }}>{col.heading}</p>
            {col.links.map((l) => (
              <a key={l} href="#" className="jost footer-link text-[9px] tracking-[0.12em] font-light">{l}</a>
            ))}
          </div>
        ))}
      </div>
    </div>

    <div className="border-t border-[rgba(240,232,216,0.12)] mx-6" />

    <div className="footer-motto-wrap">
      <p className="play footer-motto">SCHOLA SERVITII FIDEI</p>
    </div>

    <div className="footer-bottom">
      <p className="jost text-[9px] tracking-[0.08em] font-light" style={{ color: footerTheme.soft }}>
        © {new Date().getFullYear()} {brandName} · Todos os direitos reservados
      </p>
      <p className="jost text-[9px] tracking-[0.1em] font-light uppercase" style={{ color: footerTheme.soft }}>
        Christus Vincit · Christus Regnat · Christus Imperat
      </p>
    </div>
  </footer>
);
