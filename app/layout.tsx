import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bureauanaxa.com"),
  title: {
    default: "Bureau ANAXA | Expertise comptable, audit et conseil",
    template: "%s | Bureau ANAXA",
  },
  description:
    "Bureau ANAXA accompagne entreprises, dirigeants et organisations en expertise comptable, commissariat aux comptes, audit et conseil.",
  openGraph: {
    title: "Bureau ANAXA",
    description:
      "Expertise comptable, commissariat aux comptes, audit et conseil.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.bureauanaxa.com",
    siteName: "Bureau ANAXA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bureau ANAXA",
    description:
      "Expertise comptable, commissariat aux comptes, audit et conseil.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
