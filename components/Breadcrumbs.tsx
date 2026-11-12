import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { brandConfig } from "@/data/brandConfig";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: brandConfig.domain,
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: item.label,
      item: item.href ? `${brandConfig.domain}${item.href}` : undefined,
    })),
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems,
  };

  return (
    <div className="w-full bg-mist/60 border-b border-stone-200/70 py-3 px-4 sm:px-6 lg:px-8 text-xs text-charcoal-500">
      <JsonLd data={breadcrumbSchema} />
      <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-nordic-800 text-charcoal-700 transition-colors"
        >
          <Home className="w-3.5 h-3.5 text-nordic-700" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-stone-400" />
              {isLast || !item.href ? (
                <span className="font-bold text-charcoal truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-nordic-800 text-charcoal-700 transition-colors truncate max-w-[150px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
