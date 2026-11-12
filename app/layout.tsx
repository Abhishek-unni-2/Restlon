import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartContext";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { brandConfig } from "@/data/brandConfig";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(brandConfig.domain),
  title: {
    default: `${brandConfig.name} – Pure Restorative Mattresses & Organic Sleep Systems`,
    template: `%s | ${brandConfig.name}`,
  },
  description: `${brandConfig.name}: ${brandConfig.tagline}. Natural organic Kerala latex, doctor-certified orthopedic spinal alignment, and climate-adaptive airflow. 100-night trial & free doorstep delivery.`,
  keywords: [
    "natural latex mattress india",
    "orthopedic mattress",
    "organic mattress",
    "king size bed",
    "scandinavian sleep",
    "best mattress kerala",
    "chennai cooling mattress",
    "mumbai orthopedic bed",
  ],
  authors: [{ name: brandConfig.legalName }],
  creator: brandConfig.legalName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: brandConfig.domain,
    siteName: brandConfig.name,
    title: `${brandConfig.name} – Pure Restorative Mattresses & Organic Sleep Systems`,
    description: brandConfig.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandConfig.name} – Pure Restorative Mattresses & Organic Sleep Systems`,
    description: brandConfig.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen flex flex-col bg-cloud text-charcoal selection:bg-nordic-800 selection:text-white pb-14 md:pb-0 antialiased">
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
