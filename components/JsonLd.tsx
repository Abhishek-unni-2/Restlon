import React from "react";
import { brandConfig } from "@/data/brandConfig";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brandConfig.name,
    legalName: brandConfig.legalName,
    url: brandConfig.domain,
    logo: `${brandConfig.domain}/images/bed-bg-10.jpg`,
    description: brandConfig.tagline,
    telephone: brandConfig.phone,
    email: brandConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: brandConfig.address.street,
      addressLocality: brandConfig.address.city,
      addressRegion: brandConfig.address.state,
      postalCode: brandConfig.address.postalCode,
      addressCountry: brandConfig.address.country,
    },
    sameAs: [
      brandConfig.social.instagram,
      brandConfig.social.facebook,
      brandConfig.social.youtube,
      brandConfig.social.linkedin,
    ],
  };

  return <JsonLd data={schema} />;
}

export function FaqPageJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return <JsonLd data={schema} />;
}

export function ProductJsonLd({
  name,
  description,
  image,
  price,
  rating = 4.9,
  reviewCount = 380,
  slug,
}: {
  name: string;
  description: string;
  image: string;
  price: number;
  rating?: number;
  reviewCount?: number;
  slug: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    image: image.startsWith("http") ? image : `${brandConfig.domain}${image}`,
    brand: {
      "@type": "Brand",
      name: brandConfig.name,
    },
    offers: {
      "@type": "Offer",
      url: `${brandConfig.domain}/collections/${slug}`,
      priceCurrency: "INR",
      price: price,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: brandConfig.name,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount: reviewCount,
    },
  };

  return <JsonLd data={schema} />;
}

export function LocalBusinessJsonLd({
  stateName,
  slug,
  cities,
}: {
  stateName: string;
  slug: string;
  cities: string[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: `${brandConfig.name} Mattress & Bed Shop – ${stateName}`,
    image: `${brandConfig.domain}/images/home-about-us.jpg`,
    "@id": `${brandConfig.domain}/locations/${slug}`,
    url: `${brandConfig.domain}/locations/${slug}`,
    telephone: brandConfig.phone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressRegion: stateName,
      addressCountry: "IN",
    },
    areaServed: cities.map((c) => ({
      "@type": "City",
      name: `${c}, ${stateName}`,
    })),
  };

  return <JsonLd data={schema} />;
}
