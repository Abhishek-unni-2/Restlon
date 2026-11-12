# Restora — Premium Mattress & Bed E-Commerce Platform

A production-ready, high-performance mattress and bed e-commerce website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed specifically for Indian mattress retail, featuring climate-adapted cooling, hospital-grade orthopedic spinal alignment, 100% natural organic Kerala latex, and statewide logistics.

---

## 🎨 Design System & Palette

- **Ivory (`#F8F6F2`)**: Light, warm background surfaces
- **Sand (`#E8E1D5`)**: Card borders, dividers, subtle neutral accents
- **Warm Grey (`#6B6660`)**: Readable secondary copy and subheadings
- **Dark Stone (`#1C1917`)**: High-contrast, elegant typography
- **Deep Teal (`#0F5C56`)**: Primary accent for buttons, CTAs, links, and badges
- **Terracotta (`#C96F4A`)**: Highlights, sale ribbons, and trust markers
- **Typography**: `Playfair Display` (warm serif for H1/H2 headings) and `Inter` (clean sans-serif for UI and body copy)
- **Spacing**: Generous whitespace, 10–12px rounded corners, soft borders, no heavy drop shadows

---

## 🏷️ How to Change the Client Brand Name

The entire website is centrally parameterized in [`data/brandConfig.ts`](file:///home/abhishek/Desktop/Dspace/bedclient/data/brandConfig.ts).

To replace the brand with your real client brand name:
1. Open [`data/brandConfig.ts`](file:///home/abhishek/Desktop/Dspace/bedclient/data/brandConfig.ts).
2. Change:
   ```ts
   export const brandConfig = {
     name: "YourClientBrand", // Replace here or set NEXT_PUBLIC_BRAND_NAME in .env
     legalName: "YourClientBrand Retail Pvt. Ltd.",
     domain: "https://yourdomain.in",
     phone: "+91 98765 43210",
     // ...
   };
   ```
Every single page title, meta description, header logo, footer, and schema.org Organization JSON-LD tag will automatically reflect the change across all 19 routes.

---

## 🗺️ Site Architecture & 19 Routed Pages

| Page Route | Description | SEO Features |
|---|---|---|
| `/` | Homepage | Hero, Brand Promise, 9-Category Grid, 3 Showcases, Gallery, 3 SEO blocks, State presence, FAQ, CTA |
| `/collections/breathesafe` | BreatheSafe (Airflow & Cooling) | H1, 3 icons, Quick-Add, Explainer, Size Matrix, Category FAQ, Cross-sell |
| `/collections/posturefit` | PostureFit (Spinal Alignment) | H1, 3 icons, Quick-Add, Explainer, Size Matrix, Category FAQ, Cross-sell |
| `/collections/antimicrobial` | Antimicrobial (Allergy & Hygiene) | H1, 3 icons, Quick-Add, Explainer, Size Matrix, Category FAQ, Cross-sell |
| `/collections/coolgel` | CoolGel (Thermoregulating) | H1, 3 icons, Quick-Add, Explainer, Size Matrix, Category FAQ, Cross-sell |
| `/collections/orthopaedic` | Orthopaedic (Back & Joint Care) | H1, 3 icons, Quick-Add, Explainer, Size Matrix, Category FAQ, Cross-sell |
| `/collections/memory-foam` | Memory Foam (Pressure Relief) | H1, 3 icons, Quick-Add, Explainer, Size Matrix, Category FAQ, Cross-sell |
| `/collections/coir` | Coir (Traditional Firm Support) | H1, 3 icons, Quick-Add, Explainer, Size Matrix, Category FAQ, Cross-sell |
| `/collections/latex-foam` | Latex Foam (100% Organic Dunlop) | H1, 3 icons, Quick-Add, Explainer, Size Matrix, Category FAQ, Cross-sell |
| `/collections/fusiontech` | FusionTech (Pocket Spring + Foam) | H1, 3 icons, Quick-Add, Explainer, Size Matrix, Category FAQ, Cross-sell |
| `/mattress-types/king-size-mattress` | King Size Mattress (78×72 in) | Exact search H1, 500–700 words, dimension table (in + cm), trust copy, FAQ |
| `/mattress-types/orthopedic-mattress` | Orthopedic Mattress (Medical) | Exact search H1, 500–700 words, dimension table (in + cm), trust copy, FAQ |
| `/mattress-types/memory-foam-mattress` | Memory Foam Mattress (Zero-G) | Exact search H1, 500–700 words, dimension table (in + cm), trust copy, FAQ |
| `/mattress-types/king-size-latex-mattress` | King Size Latex Mattress | Exact search H1, 500–700 words, dimension table (in + cm), trust copy, FAQ |
| `/mattress-types/natural-latex-mattress` | Natural Latex Mattress | Exact search H1, 500–700 words, dimension table (in + cm), trust copy, FAQ |
| `/faq` | FAQ Page | Grouped into 3 sections (Buying, Materials, Warranty), min 12 Q&As, FAQPage JSON-LD |
| `/locations/kerala` | Kerala Sleep Hub | 14 districts, coastal humidity climate analysis, local delivery |
| `/locations/tamil-nadu` | Tamil Nadu Sleep Hub | 11 cities, heat dissipation analysis, CoolGel recommendations |
| `/locations/maharashtra` | Maharashtra Sleep Hub | 10 cities, Mumbai & Pune urban ergonomics, monsoon protection |

---

## 🧩 Reusable Components (`/components`)

1. **`Header`**: Logo, full desktop mega-menu with all 9 collections, shop-by-size guides, state locator, cart badge count, and accessible mobile menu.
2. **`Footer`**: Brand overview, collections links, size guides, statewide logistics, social links, and email newsletter form.
3. **`TrustBar`**: 4 icon callouts: Climate-Adapted, Orthopedic Support, Hypoallergenic, and Nationwide Delivery.
4. **`SizeComparisonTable`**: Single, Double, Queen, King × 6", 8", 10" thickness price matrix with unit toggle (Inches vs Centimeters).
5. **`FaqAccordion`**: Interactive accordion with automatic schema.org `FAQPage` JSON-LD generation.
6. **`CollectionCardGrid`**: Responsive 3-column grid mapping all 9 categories with benefits, icons, and starting prices.
7. **`ProductQuickAddCard`**: Live e-commerce card with interactive size/thickness selector, pricing recalculation, and cart state.
8. **`Hero`**: Full-bleed responsive banner with headline, 2 CTAs, and trust badges.
9. **`CartDrawer` & `CartContext`**: Functional shopping cart with quantity controls, slide-over drawer, and zero-cost EMI calculator.
10. **`JsonLd`**: Schema.org Organization, Product, LocalBusiness, BreadcrumbList, and FAQPage structured data.
11. **`StickyMobileBar`**: Persistent mobile bottom navigation bar with direct call and "Shop Now" CTAs.

---

## ➕ How Content Updates Work (Zero Layout Code Touch)

Content is strictly decoupled into [`/data`](file:///home/abhishek/Desktop/Dspace/bedclient/data):

### 1. Adding a New Mattress Category
Open [`data/categories.ts`](file:///home/abhishek/Desktop/Dspace/bedclient/data/categories.ts) and append a new object to the `CATEGORIES` array:
```ts
{
  slug: "smart-rebound",
  name: "SmartRebound",
  benefit: "Zero-gravity adaptive foam for athletes",
  audience: "Athletes & active lifestyles",
  material: "Graphite-infused dynamic latex",
  // ... explainerParagraph, priceTable, products, faqs
}
```
Next.js will automatically:
- Generate `/collections/smart-rebound` via static site generation (`generateStaticParams`).
- Add it to the Header mega-menu.
- Add it to the `sitemap.xml`.
- Add it to the Homepage collection grid.

### 2. Adding a New Product/SEO Landing Page
Open [`data/productTypes.ts`](file:///home/abhishek/Desktop/Dspace/bedclient/data/productTypes.ts) and append a new object to `PRODUCT_TYPES`. The page will immediately be generated at `/mattress-types/[new-slug]`.

### 3. Adding a New Location Page
Open [`data/locations.ts`](file:///home/abhishek/Desktop/Dspace/bedclient/data/locations.ts) and append a new state object to `LOCATIONS`. The route `/locations/[state-slug]` will be statically pre-rendered with city listings, climate details, and LocalBusiness JSON-LD.

---

## 🚀 Running Locally & Deploying

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

### Vercel Deployment
This repository is 100% standard Next.js 14 App Router. To deploy to Vercel:
1. Push this repository to GitHub / GitLab / Bitbucket.
2. Import the project into your Vercel Dashboard.
3. Framework Preset: **Next.js** (auto-detected).
4. Click **Deploy**.
