import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://grupocarvatel.com"),
  title: "Carvatel | Soluciones tecnológicas, soporte Zebra, Motorola y Hytera en Quito",
  description:
    "Carvatel ofrece soluciones tecnológicas empresariales, servicio técnico Zebra, soporte para radios Motorola, equipos Hytera y soluciones de software en Quito, Ecuador.",
  keywords: [
    "Carvatel",
    "servicio técnico Zebra Quito",
    "radios Motorola Quito",
    "radios Hytera Ecuador",
    "bodycams Hytera Ecuador",
    "equipos Zebra Ecuador",
    "soluciones tecnológicas",
    "software empresarial",
    "soporte técnico empresarial",
    "venta de equipos Zebra",
    "venta de radios Motorola",
    "venta de equipos Hytera",
  ],
  openGraph: {
    title: "Carvatel | Soluciones tecnológicas para empresas",
    description:
      "Soporte técnico, equipos Zebra, Motorola y Hytera, y soluciones empresariales en Quito, Ecuador.",
    type: "website",
    locale: "es_EC",
    images: [{ url: "/images/logo-carvatel.png", alt: "Carvatel - Soluciones, Soporte e Innovación" }],
  },
  icons: { icon: "/images/logo-carvatel.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
