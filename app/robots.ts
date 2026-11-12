import { MetadataRoute } from "next";
import { brandConfig } from "@/data/brandConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${brandConfig.domain}/sitemap.xml`,
  };
}
