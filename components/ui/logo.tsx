import { brandName } from "@/lib/theme";

export const LOGO_SRC = "/images/logo-transparent.png";

type LogoProps = {
  size?: number;
  opacity?: number;
  className?: string;
};

export const Logo = ({ size = 32, opacity = 1, className }: LogoProps) => (
  <img
    src={LOGO_SRC}
    alt={brandName}
    className={className}
    style={{ width: size, height: size, opacity, objectFit: "contain" }}
  />
);
