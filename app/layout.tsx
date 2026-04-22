import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Amigos da Cruz",
  description:
    "Amigos da Cruz — apostolado católico tradicional dedicado à liturgia, formação e publicação.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}
