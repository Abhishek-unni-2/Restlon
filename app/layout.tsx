import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartContext";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { brandConfig } from "@/data/brandConfig";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brandConfig.domain),
  title: {
    default: `${brandConfig.name} – Premium Mattresses & Bed Shop in India`,
    template: `%s | ${brandConfig.name}`,
  },
  description: `${brandConfig.name}: ${brandConfig.tagline}. Orthopedic spinal support, 100% natural Kerala latex, and climate-adapted mattresses with 100-night trial and free doorstep delivery.`,
  keywords: [
    "mattress online india",
    "orthopedic mattress",
    "natural latex mattress",
    "king size mattress",
    "memory foam mattress",
    "best mattress kerala",
    "mattress shop tamil nadu",
    "buy mattress mumbai pune",
  ],
  authors: [{ name: brandConfig.legalName }],
  creator: brandConfig.legalName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: brandConfig.domain,
    siteName: brandConfig.name,
    title: `${brandConfig.name} – Premium Mattresses & Bed Shop in India`,
    description: brandConfig.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandConfig.name} – Premium Mattresses & Bed Shop in India`,
    description: brandConfig.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory text-stone-900 selection:bg-teal selection:text-white pb-14 md:pb-0">
        <OrganizationJsonLd />
        <CartProvider>
          <Header />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <StickyMobileBar />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
