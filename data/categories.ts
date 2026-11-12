export interface CategoryProduct {
  id: string;
  name: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  startingPrice: number;
  originalPrice: number;
  image: string;
  thicknessOptions: string[];
  sizeOptions: string[];
  keySpecs: string[];
}

export interface CategoryData {
  slug: string;
  name: string;
  benefit: string;
  audience: string;
  material: string;
  tagline: string;
  heroImage: string;
  layerImage: string;
  firmnessScale: string; // e.g. "7 / 10 - Medium Firm"
  warranty: string;
  explainerParagraph: string; // ~150-200 words
  benefitsList: {
    iconName: "Wind" | "ShieldCheck" | "Activity" | "ThermometerSnowflake" | "Sparkles" | "Feather" | "CheckCircle2" | "Layers";
    title: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  priceTable: {
    size: "Single" | "Double" | "Queen" | "King";
    dimensionsInches: string;
    dimensionsCm: string;
    thickness6Price: number;
    thickness8Price: number;
    thickness10Price: number;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  crossSellSlugs: [string, string];
  seoClosingParagraph: string;
  products: CategoryProduct[];
}

export const CATEGORIES: CategoryData[] = [
  {
    slug: "breathesafe",
    name: "BreatheSafe",
    benefit: "Maximum airflow & cooling for humid climates",
    audience: "Hot sleepers, tropical climates",
    material: "Ventilated, open-cell breathable foam",
    tagline: "Engineered for Humid Indian Climates with Active Heat Dissipation",
    heroImage: "/images/bed-bg-10.jpg",
    layerImage: "/images/layer-6.jpg",
    firmnessScale: "6.5 / 10 (Balanced Medium)",
    warranty: "10 Years Manufacturer Warranty",
    explainerParagraph:
      "The BreatheSafe mattress collection is specifically crafted to tackle India's notoriously humid coastal and monsoon weather patterns. Traditional memory foam traps body heat, causing restless tossing and nighttime perspiration. BreatheSafe solves this through an architectural 3D matrix of interconnected ventilation chambers that continuously pull ambient air through the core mattress layer while expelling trapped humidity. Each breathable layer is bonded without toxic chemical adhesives, ensuring that sleeper skin remains fresh and dry even during 90%+ humidity conditions in states like Kerala, Tamil Nadu, and Maharashtra. Combined with an organic bamboo-cotton aerated cover that wicks away moisture 40% faster than cotton, BreatheSafe delivers an uninterrupted deep sleep cycle.",
    benefitsList: [
      {
        iconName: "Wind",
        title: "360° Cross-Flow Ventilation",
        description: "Thousands of pinpoint air channels constantly circulate fresh air through the core.",
      },
      {
        iconName: "ThermometerSnowflake",
        title: "Active Thermal Dissipation",
        description: "Zero heat retention even during sultry summer nights without continuous AC.",
      },
      {
        iconName: "ShieldCheck",
        title: "Anti-Mildew & Anti-Odor",
        description: "Inhibits moisture build-up, dampness, and bacterial odor in high-humidity zones.",
      },
    ],
    specifications: [
      { label: "Comfort Layer", value: "AeroCell™ Open-Cell Breathable Foam" },
      { label: "Core Support", value: "High-Resilience Aerated Ortho Foam" },
      { label: "Top Fabric", value: "350 GSM Organic Bamboo-Viscose Fabric" },
      { label: "Best For", value: "Coastal cities, warm sleepers, tropical summers" },
    ],
    priceTable: [
      { size: "Single", dimensionsInches: "72 × 36", dimensionsCm: "183 × 91", thickness6Price: 8499, thickness8Price: 10499, thickness10Price: 12999 },
      { size: "Double", dimensionsInches: "72 × 48", dimensionsCm: "183 × 122", thickness6Price: 11499, thickness8Price: 13999, thickness10Price: 16499 },
      { size: "Queen", dimensionsInches: "78 × 60", dimensionsCm: "198 × 152", thickness6Price: 14499, thickness8Price: 17499, thickness10Price: 20999 },
      { size: "King", dimensionsInches: "78 × 72", dimensionsCm: "198 × 183", thickness6Price: 17499, thickness8Price: 20999, thickness10Price: 24999 },
    ],
    faqs: [
      {
        question: "How does BreatheSafe keep cool without synthetic chemicals?",
        answer: "BreatheSafe uses open-cell structure physics and physical vertical air ducts rather than chemical phase-change sprays. It naturally expels warm air every time you shift positions, creating an active cooling bellows effect.",
      },
      {
        question: "Is BreatheSafe suitable for monsoon dampness in coastal India?",
        answer: "Yes, BreatheSafe is formulated with moisture-resistant hydro-phobic cellular walls that prevent moisture condensation and mold growth, making it ideal for coastal regions like Kerala and Mumbai.",
      },
      {
        question: "Can I use this mattress on a flat cot, box bed, or floor?",
        answer: "While BreatheSafe performs on all flat bed bases, we recommend a slatted or aerated bed frame to maximize the 360-degree bottom airflow capabilities.",
      },
    ],
    crossSellSlugs: ["coolgel", "antimicrobial"],
    seoClosingParagraph:
      "Looking for a cooling mattress designed specifically for the Indian climate? The BreatheSafe collection offers high-grade thermal regulation, ergonomic body support, and anti-humidity resilience. Order online with our 100-night trial, free pan-India door delivery, and up to 10 years of non-sag warranty.",
    products: [
      {
        id: "breathesafe-core",
        name: "BreatheSafe Air-Cool Ortho Mattress",
        badge: "Bestseller Coastal Edition",
        rating: 4.9,
        reviewsCount: 384,
        startingPrice: 14499,
        originalPrice: 19999,
        image: "/images/bed-bg-10.jpg",
        thicknessOptions: ["6 inch", "8 inch", "10 inch"],
        sizeOptions: ["Single", "Double", "Queen", "King"],
        keySpecs: ["Open-Cell AeroFoam", "360° Breathability", "Hypoallergenic Quilt"],
      },
      {
        id: "breathesafe-pro",
        name: "BreatheSafe Dual-Climate Hybrid Mattress",
        badge: "Dual Comfort",
        rating: 4.8,
        reviewsCount: 219,
        startingPrice: 17499,
        originalPrice: 23999,
        image: "/images/bed-bg-14.jpg",
        thicknessOptions: ["8 inch", "10 inch"],
        sizeOptions: ["Queen", "King"],
        keySpecs: ["Reversible Firm/Medium", "Active Air Core", "Organic Bamboo Cover"],
      },
    ],
  },
  {
    slug: "posturefit",
    name: "PostureFit",
    benefit: "Spinal alignment & posture correction",
    audience: "Back-pain sufferers, desk workers",
    material: "Zoned high-density support foam",
    tagline: "Orthopedic 5-Zone Ergonomic Alignment for Sedentary Lifestyles",
    heroImage: "/images/bed-bg-14.jpg",
    layerImage: "/images/layer-12.jpg",
    firmnessScale: "7.5 / 10 (Orthopedic Firm)",
    warranty: "10 Years Manufacturer Warranty",
    explainerParagraph:
      "Sitting at a desk for 8 to 10 hours daily places excessive compressive stress on the lumbar spine and pelvic sacroiliac joints. The PostureFit collection is biomechanically engineered to counteract this postural degeneration during your sleep. Featuring calibrated 5-zone differentiated density foam, PostureFit delivers softer cushioning beneath your shoulders and calves while exerting firm, non-compromising support beneath your lower back and hip girdles. This maintains the natural S-curve of the human spine regardless of whether you sleep on your back or your side. Certified high-density rebound foam prevents the dangerous center sinking that triggers morning stiffness, helping desk workers, drivers, and athletes wake up free from spinal tightness.",
    benefitsList: [
      {
        iconName: "Activity",
        title: "5-Zone Ergonomic Support",
        description: "Contoured firmness zones relieve lumbar tension while maintaining spine symmetry.",
      },
      {
        iconName: "ShieldCheck",
        title: "Anti-Sag Core Technology",
        description: "High-density 32D rebound base prevents center depression and hammock curvature.",
      },
      {
        iconName: "CheckCircle2",
        title: "Physiotherapist Approved",
        description: "Designed in collaboration with spinal rehabilitation specialists for pain relief.",
      },
    ],
    specifications: [
      { label: "Core Density", value: "32D High-Resilience Zoned Foam" },
      { label: "Target Zones", value: "Head, Shoulders, Lumbar, Hips, Lower Legs" },
      { label: "Cover Fabric", value: "Anti-Pilling Heavy Jacquard Quilted Cover" },
      { label: "Ideal Sleeper", value: "Desk workers, back pain sufferers, stomach sleepers" },
    ],
    priceTable: [
      { size: "Single", dimensionsInches: "72 × 36", dimensionsCm: "183 × 91", thickness6Price: 8999, thickness8Price: 11299, thickness10Price: 13999 },
      { size: "Double", dimensionsInches: "72 × 48", dimensionsCm: "183 × 122", thickness6Price: 12499, thickness8Price: 14999, thickness10Price: 17999 },
      { size: "Queen", dimensionsInches: "78 × 60", dimensionsCm: "198 × 152", thickness6Price: 15999, thickness8Price: 18999, thickness10Price: 22499 },
      { size: "King", dimensionsInches: "78 × 72", dimensionsCm: "198 × 183", thickness6Price: 18999, thickness8Price: 22499, thickness10Price: 26499 },
    ],
    faqs: [
      {
        question: "Is PostureFit too hard for side sleepers?",
        answer: "Not at all. While the core is firm to prevent sagging, the shoulder zone is specially zoned to yield comfortably beneath the humeral head, eliminating numb arms while keeping the spine straight.",
      },
      {
        question: "How quickly does it relieve lower back stiffness?",
        answer: "Most users notice a marked reduction in morning stiffness within 7 to 14 days as their spinal posture decompresses and muscles adapt to proper ergonomic support.",
      },
      {
        question: "Does it come with a non-sag warranty?",
        answer: "Yes, every PostureFit mattress includes an unconditional 10-year warranty covering any structural sagging greater than 15mm.",
      },
    ],
    crossSellSlugs: ["orthopaedic", "memory-foam"],
    seoClosingParagraph:
      "Invest in your spinal longevity with the PostureFit mattress collection. Engineered with targeted ergonomic zones, it provides unmatched lumbar support to reverse daytime postural strain. Buy online with fast delivery, zero-cost EMI, and a 100-night trial.",
    products: [
      {
        id: "posturefit-spine",
        name: "PostureFit 5-Zone Lumbar Mattress",
        badge: "Spine Care Choice",
        rating: 4.9,
        reviewsCount: 512,
        startingPrice: 15999,
        originalPrice: 21999,
        image: "/images/bed-bg-14.jpg",
        thicknessOptions: ["6 inch", "8 inch"],
        sizeOptions: ["Single", "Queen", "King"],
        keySpecs: ["5 Ergonomic Zones", "Lumbar Decompression", "High Resilience Core"],
      },
      {
        id: "posturefit-ultra",
        name: "PostureFit Ultra Firm Ortho Plus",
        badge: "Heavy Duty Support",
        rating: 4.8,
        reviewsCount: 198,
        startingPrice: 18999,
        originalPrice: 24999,
        image: "/images/bed-bg-10.jpg",
        thicknessOptions: ["8 inch", "10 inch"],
        sizeOptions: ["Queen", "King"],
        keySpecs: ["Triple Zone Reinforcement", "Anti-Sag Guarantee", "Zero Motion Transfer"],
      },
    ],
  },
  {
    slug: "antimicrobial",
    name: "Antimicrobial",
    benefit: "Hygienic, allergy-safe sleep surface",
    audience: "Allergy-prone sleepers, families with kids",
    material: "Anti-fungal, hypoallergenic fabric treatment",
    tagline: "Medical-Grade Hygiene Shield for Allergy-Free Restful Sleep",
    heroImage: "/images/sleep-solution-1.jpg",
    layerImage: "/images/layer-14.jpg",
    firmnessScale: "6.5 / 10 (Gentle Medium Firm)",
    warranty: "10 Years Manufacturer Warranty",
    explainerParagraph:
      "A typical mattress accumulates over 2 million microscopic dust mites, fungal spores, and allergen particles within just two years of regular use in humid environments. The Antimicrobial mattress collection eradicates this hazard through an advanced Swiss-engineered silver-ion fabric infusion. This permanent anti-fungal, anti-mite, and anti-bacterial barrier inhibits 99.9% of bacterial colonization and prevents dead skin flakes from fueling allergen growth. Specifically formulated for young families, infants, and adults suffering from chronic sinusitis, asthma, or contact dermatitis, Antimicrobial sleep surfaces remain impeccably hygienic and odor-free for over a decade. The breathable outer casing is machine washable and certified OEKO-TEX Standard 100 Class 1 safe.",
    benefitsList: [
      {
        iconName: "ShieldCheck",
        title: "99.9% Dust Mite & Bacterial Defense",
        description: "Silver-ion nanoparticle barrier stops allergens at the contact layer.",
      },
      {
        iconName: "Sparkles",
        title: "OEKO-TEX Certified Clean",
        description: "Zero harmful chemicals, heavy metals, formaldehyde, or toxic flame retardants.",
      },
      {
        iconName: "Wind",
        title: "Anti-Odor & Freshness Lock",
        description: "Prevents sweat-induced bacterial odor even in hot and muggy monsoon weather.",
      },
    ],
    specifications: [
      { label: "Fabric Tech", value: "Sanitized® Silver Ion Infused Organic Fabric" },
      { label: "Core Layer", value: "Hypoallergenic Pure Virgin Latex & Foam Blend" },
      { label: "Certifications", value: "OEKO-TEX Class 1, CertiPUR-US" },
      { label: "Recommended For", value: "Kids, asthma sufferers, pet owners, sensitive skin" },
    ],
    priceTable: [
      { size: "Single", dimensionsInches: "72 × 36", dimensionsCm: "183 × 91", thickness6Price: 9499, thickness8Price: 11999, thickness10Price: 14499 },
      { size: "Double", dimensionsInches: "72 × 48", dimensionsCm: "183 × 122", thickness6Price: 12999, thickness8Price: 15499, thickness10Price: 18499 },
      { size: "Queen", dimensionsInches: "78 × 60", dimensionsCm: "198 × 152", thickness6Price: 16499, thickness8Price: 19499, thickness10Price: 22999 },
      { size: "King", dimensionsInches: "78 × 72", dimensionsCm: "198 × 183", thickness6Price: 19499, thickness8Price: 22999, thickness10Price: 26999 },
    ],
    faqs: [
      {
        question: "Does the antimicrobial treatment wash off over time?",
        answer: "No, the silver ions are molecularly bonded into the fabric yarn during spinning, meaning it retains over 95% efficacy even after repeated washes and years of use.",
      },
      {
        question: "Is this safe for newborns and infants?",
        answer: "Yes, it is certified OEKO-TEX Standard 100 Class 1, which is the strictest international health standard specifically designed for infant skin contact.",
      },
      {
        question: "Does it help people with morning sneezing or dust allergies?",
        answer: "Extremely. Dust mites cannot survive on the treated fibers, resulting in a dramatic reduction in nocturnal histamine reactions and morning nasal congestion.",
      },
    ],
    crossSellSlugs: ["breathesafe", "latex-foam"],
    seoClosingParagraph:
      "Protect your family's health with the Antimicrobial mattress collection. Crafted with allergy-safe technology and medical-grade protection, it ensures an ultra-clean sleeping environment every single night. Order direct with 10-year warranty coverage and home delivery.",
    products: [
      {
        id: "antimicrobial-guard",
        name: "Antimicrobial Pure Shield Mattress",
        badge: "Family & Kids Safe",
        rating: 4.9,
        reviewsCount: 287,
        startingPrice: 16499,
        originalPrice: 21999,
        image: "/images/sleep-solution-1.jpg",
        thicknessOptions: ["6 inch", "8 inch", "10 inch"],
        sizeOptions: ["Single", "Queen", "King"],
        keySpecs: ["Sanitized® Shield", "Dust-Mite Repellent", "Hypoallergenic Quilt"],
      },
    ],
  },
  {
    slug: "coolgel",
    name: "CoolGel",
    benefit: "Temperature-regulated, gel-infused comfort",
    audience: "Night sweats, warm sleepers",
    material: "Gel-infused memory foam",
    tagline: "Thermoregulating Gel Micro-Beads for Cool, Sweat-Free Nights",
    heroImage: "/images/bed-bg-15-300x300.jpg",
    layerImage: "/images/layer-6.jpg",
    firmnessScale: "6.0 / 10 (Medium Plush Cloud)",
    warranty: "10 Years Manufacturer Warranty",
    explainerParagraph:
      "Sleeping hot is one of the leading causes of sleep fragmentation, waking sleepers up repeatedly during rapid eye movement (REM) cycles. The CoolGel collection integrates millions of thermodynamic blue gel micro-capsules directly into premium viscoelastic memory foam. When your body lies down, these cooling beads absorb excess thermal energy and channel it horizontally away from your contact points, actively lowering your skin temperature by up to 2.5°C. As you drift off, the temperature-regulated core keeps you within the optimal sleep-inducing thermal zone, preventing night sweats even during intense Indian summer heatwaves. Combined with a cool-touch crystalline weave cover, CoolGel turns bedtime into a soothing, refreshingly cool retreat.",
    benefitsList: [
      {
        iconName: "ThermometerSnowflake",
        title: "2.5°C Lower Surface Temperature",
        description: "Infused gel beads absorb and conduct excess body heat away from your skin.",
      },
      {
        iconName: "Feather",
        title: "Pressure-Relieving Cloud Cradle",
        description: "Deep viscoelastic contouring relieves tension on hips and shoulder joints.",
      },
      {
        iconName: "Wind",
        title: "Cool-Touch Ice Yarn Fabric",
        description: "Instant cooling sensation the moment you lay down on the breathable surface.",
      },
    ],
    specifications: [
      { label: "Top Layer", value: "HydroGel Infused 60D Viscoelastic Foam" },
      { label: "Transition Layer", value: "High-Airflow Resilient Transition Foam" },
      { label: "Support Base", value: "High Density Ultra-Firm Polyurethane Base" },
      { label: "Cooling Tech", value: "IceFeel™ Thermal Micro-Beads" },
    ],
    priceTable: [
      { size: "Single", dimensionsInches: "72 × 36", dimensionsCm: "183 × 91", thickness6Price: 9999, thickness8Price: 12499, thickness10Price: 15499 },
      { size: "Double", dimensionsInches: "72 × 48", dimensionsCm: "183 × 122", thickness6Price: 13499, thickness8Price: 16499, thickness10Price: 19999 },
      { size: "Queen", dimensionsInches: "78 × 60", dimensionsCm: "198 × 152", thickness6Price: 16999, thickness8Price: 20499, thickness10Price: 24499 },
      { size: "King", dimensionsInches: "78 × 72", dimensionsCm: "198 × 183", thickness6Price: 20499, thickness8Price: 24499, thickness10Price: 28999 },
    ],
    faqs: [
      {
        question: "Does the cooling gel lose its coolness after a few hours?",
        answer: "No, because the gel beads continuously conduct heat through horizontal air conduits into the mattress side-mesh, creating an uninterrupted thermal dissipation cycle all night long.",
      },
      {
        question: "Is CoolGel memory foam too soft for back pain?",
        answer: "Not at all. Underneath the cooling comfort layer is a rigid orthopedic high-density support base that guarantees proper spinal alignment without excessive sinkage.",
      },
      {
        question: "Do I need air conditioning for CoolGel to work?",
        answer: "CoolGel works effectively even with standard ceiling fans, maintaining a noticeably cooler surface feel than conventional memory foam or cotton beds.",
      },
    ],
    crossSellSlugs: ["breathesafe", "memory-foam"],
    seoClosingParagraph:
      "Say goodbye to sweaty sleepless nights with the CoolGel mattress collection. Powered by thermodynamic gel beads and responsive pressure-relief contouring, it keeps you comfortably cool throughout the night. Enjoy 100 nights risk-free trial and free delivery across India.",
    products: [
      {
        id: "coolgel-arctic",
        name: "CoolGel Arctic Ice Memory Mattress",
        badge: "Top Rated for Hot Sleepers",
        rating: 4.9,
        reviewsCount: 462,
        startingPrice: 16999,
        originalPrice: 22999,
        image: "/images/bed-bg-15-300x300.jpg",
        thicknessOptions: ["6 inch", "8 inch", "10 inch"],
        sizeOptions: ["Single", "Queen", "King"],
        keySpecs: ["Gel Bead Memory Foam", "IceFeel™ Quilt", "Motion Isolation"],
      },
    ],
  },
  {
    slug: "orthopaedic",
    name: "Orthopaedic",
    benefit: "Doctor-recommended back & joint support",
    audience: "Chronic back/joint pain, elderly",
    material: "Multi-zone orthopedic support foam",
    tagline: "Orthopedist-Recommended Medical Spinal Alignment & Pain Alleviation",
    heroImage: "/images/home-about-us.jpg",
    layerImage: "/images/layer-12.jpg",
    firmnessScale: "8.0 / 10 (Doctor-Certified Firm)",
    warranty: "10 Years Manufacturer Warranty",
    explainerParagraph:
      "Chronic musculoskeletal pain in the lumbar, cervical, and sacroiliac regions affects millions of Indians due to aging, heavy lifting, or poor sleep support. Our Orthopaedic mattress collection is developed in partnership with leading orthopedic surgeons and physical therapists to provide clinically validated relief. Built with high-density bonded multi-zone foam engineered specifically to resist spinal deflection, this mattress distributes body weight evenly across 7 key pressure zones. It prevents the pelvic tilt that exacerbates herniated discs and sciatica while cushioning stiff knee and shoulder joints. Recommended especially for senior citizens, individuals recovering from spine surgery, or those seeking uncompromising firm orthopedic support.",
    benefitsList: [
      {
        iconName: "Activity",
        title: "Medical-Grade Multi-Zone Core",
        description: "Reinforced lumbar zone prevents sagging while supporting correct spinal posture.",
      },
      {
        iconName: "ShieldCheck",
        title: "Clinically Validated Joint Relief",
        description: "Reduces pressure concentration on sensitive hips, sacroiliac joints, and lumbar discs.",
      },
      {
        iconName: "CheckCircle2",
        title: "Zero Motion Disturbance",
        description: "High-density molecular structure ensures partner movement never disturbs your sleep.",
      },
    ],
    specifications: [
      { label: "Core Construction", value: "Orthopedic Multi-Zone Bonded & Rebound Core" },
      { label: "Firmness", value: "Orthopedic Extra Firm (8/10)" },
      { label: "Edge Reinforcement", value: "360° High-Density Edge Support Walls" },
      { label: "Certification", value: "ISO 9001, Indian Orthopedic Association Approved" },
    ],
    priceTable: [
      { size: "Single", dimensionsInches: "72 × 36", dimensionsCm: "183 × 91", thickness6Price: 9299, thickness8Price: 11799, thickness10Price: 14799 },
      { size: "Double", dimensionsInches: "72 × 48", dimensionsCm: "183 × 122", thickness6Price: 12999, thickness8Price: 15999, thickness10Price: 18999 },
      { size: "Queen", dimensionsInches: "78 × 60", dimensionsCm: "198 × 152", thickness6Price: 16499, thickness8Price: 19999, thickness10Price: 23999 },
      { size: "King", dimensionsInches: "78 × 72", dimensionsCm: "198 × 183", thickness6Price: 19999, thickness8Price: 23999, thickness10Price: 27999 },
    ],
    faqs: [
      {
        question: "Is an orthopedic mattress recommended for elderly parents?",
        answer: "Yes, elderly sleepers benefit significantly from the reinforced firm core and firm edges, which make getting in and out of bed effortless without balance loss.",
      },
      {
        question: "How does it help with sciatica and slip disc issues?",
        answer: "By keeping the spine in neutral horizontal alignment, it eliminates downward pressure on the sciatic nerve and allows inflamed spinal discs to rehydrate overnight.",
      },
      {
        question: "Can I flip or rotate this mattress?",
        answer: "We recommend rotating the mattress head-to-toe every 6 months to maintain optimal wear and long-lasting orthopedic support.",
      },
    ],
    crossSellSlugs: ["posturefit", "coir"],
    seoClosingParagraph:
      "Wake up pain-free with the doctor-recommended Orthopaedic mattress collection. Designed for maximum spinal correction, joint pressure relief, and long-lasting durability. Buy online today with zero-cost EMI and direct manufacturer warranty.",
    products: [
      {
        id: "ortho-rx",
        name: "Doctor Ortho Spinal Pro Mattress",
        badge: "Doctor Recommended",
        rating: 5.0,
        reviewsCount: 642,
        startingPrice: 16499,
        originalPrice: 22499,
        image: "/images/home-about-us.jpg",
        thicknessOptions: ["6 inch", "8 inch", "10 inch"],
        sizeOptions: ["Single", "Double", "Queen", "King"],
        keySpecs: ["Multi-Zone Spinal Core", "Reinforced Edge Wall", "Anti-Sag Tech"],
      },
    ],
  },
  {
    slug: "memory-foam",
    name: "Memory Foam",
    benefit: "Body-contouring pressure relief",
    audience: "Side sleepers, pressure-point pain",
    material: "High-density viscoelastic memory foam",
    tagline: "Weightless Body-Contouring Viscoelastic Foam for Pressure-Free Sleep",
    heroImage: "/images/sleep-solution-3.jpg",
    layerImage: "/images/layer-14.jpg",
    firmnessScale: "5.5 / 10 (Plush Adaptive Medium)",
    warranty: "10 Years Manufacturer Warranty",
    explainerParagraph:
      "Originally engineered by NASA aeronautical scientists to cushion astronauts during extreme G-force acceleration, memory foam remains the gold standard for adaptive pressure relief. The Memory Foam collection conforms precisely to the contours of your body in response to heat and body weight. By redistributing pressure away from bony prominences such as the shoulders, hips, and knees, it reduces tossing and turning by up to 80%. Side sleepers in particular experience immediate relief from shoulder impingement and hip numbness. Our formula uses high-density 60D viscoelastic foam that slowly recovers its shape without bottoming out, delivering zero motion transfer so you sleep undisturbed even if your partner tosses or gets up during the night.",
    benefitsList: [
      {
        iconName: "Feather",
        title: "Zero Gravity Pressure Relief",
        description: "Distributes body weight evenly to eliminate pressure hotspots on hips and shoulders.",
      },
      {
        iconName: "ShieldCheck",
        title: "100% Motion Isolation",
        description: "Absorbs all movement so tossing or late night awakenings never disturb your partner.",
      },
      {
        iconName: "Sparkles",
        title: "Slow-Recovery Visco Core",
        description: "Adapts millimetre-by-millimetre to your individual curves without trapping heat.",
      },
    ],
    specifications: [
      { label: "Comfort Foam", value: "60D High-Density Pure Viscoelastic Foam" },
      { label: "Transition Base", value: "Ultra-Resilient Transitional Support Layer" },
      { label: "Outer Encasement", value: "Breathable Knitted Jacquard with Zipper" },
      { label: "Motion Transfer", value: "Zero (Zero Partner Disturbance)" },
    ],
    priceTable: [
      { size: "Single", dimensionsInches: "72 × 36", dimensionsCm: "183 × 91", thickness6Price: 8999, thickness8Price: 11499, thickness10Price: 14299 },
      { size: "Double", dimensionsInches: "72 × 48", dimensionsCm: "183 × 122", thickness6Price: 12499, thickness8Price: 15299, thickness10Price: 18499 },
      { size: "Queen", dimensionsInches: "78 × 60", dimensionsCm: "198 × 152", thickness6Price: 15499, thickness8Price: 18999, thickness10Price: 22999 },
      { size: "King", dimensionsInches: "78 × 72", dimensionsCm: "198 × 183", thickness6Price: 18499, thickness8Price: 22499, thickness10Price: 26999 },
    ],
    faqs: [
      {
        question: "Does memory foam make you feel stuck or sink too much?",
        answer: "No. We formulate our memory foam with a fast-recovery responsive transition layer directly underneath, ensuring you get comforting contouring without feeling trapped.",
      },
      {
        question: "Is this mattress suitable for side sleepers?",
        answer: "It is the ideal choice for side sleepers, as the foam yields deeply under the shoulder and hip joints while maintaining natural spinal alignment.",
      },
      {
        question: "Will the mattress develop permanent body impressions?",
        answer: "No, our 60D grade memory foam is certified to rebound to within 98% of its original shape for over 10 years of daily use.",
      },
    ],
    crossSellSlugs: ["coolgel", "fusiontech"],
    seoClosingParagraph:
      "Experience cloud-like contouring and zero motion disturbance with our Memory Foam mattress collection. Engineered for pressure-point relief and sound sleep, backed by a 100-night trial and a 10-year warranty. Order online today.",
    products: [
      {
        id: "memory-cloud",
        name: "CloudRest Contour Memory Foam Mattress",
        badge: "Pressure Relief Star",
        rating: 4.8,
        reviewsCount: 395,
        startingPrice: 15499,
        originalPrice: 20999,
        image: "/images/sleep-solution-3.jpg",
        thicknessOptions: ["6 inch", "8 inch", "10 inch"],
        sizeOptions: ["Single", "Queen", "King"],
        keySpecs: ["60D Visco Foam", "Zero Motion Transfer", "Removable Washable Cover"],
      },
    ],
  },
  {
    slug: "coir",
    name: "Coir",
    benefit: "Firm, breathable, traditional support",
    audience: "Firm-mattress preference, budget-conscious buyers",
    material: "Natural coconut-coir / rubberized coir",
    tagline: "Natural Coconut Fiber & Rubberized Latex for Traditional Firmness",
    heroImage: "/images/bed-bg-10.jpg",
    layerImage: "/images/layer-6.jpg",
    firmnessScale: "8.5 / 10 (Traditional Extra Firm)",
    warranty: "7 Years Manufacturer Warranty",
    explainerParagraph:
      "Coconut coir has been trusted in Indian households for generations for its naturally rigid, naturally ventilating, and durable sleep surface. The Coir mattress collection takes this heritage material into the modern era through advanced rubberization technology. Natural coconut husk fibers are cleaned, curled, and treated with 100% natural liquid rubber latex before being steam-vulcanized into dense, resilient interlocking pads. This prevents the clumping and sagging common in cheap coir mattresses while creating millions of natural micro-tunnels that dissipate body heat effortlessly. Ideal for sleepers who prefer a rock-solid, grounded sleep foundation that remains cool, supportive, and budget-friendly across years of tropical use.",
    benefitsList: [
      {
        iconName: "Wind",
        title: "Naturally Breathable Fiber Matrix",
        description: "Dense coconut fibers allow continuous air exchange, staying completely cool.",
      },
      {
        iconName: "ShieldCheck",
        title: "Rubberized Latex Vulcanization",
        description: "Natural rubber infusion binds fibers tightly to prevent center settling and crumbling.",
      },
      {
        iconName: "Sparkles",
        title: "Eco-Friendly & Biodegradable",
        description: "Renewable agricultural coconut coir from Kerala and Tamil Nadu plantations.",
      },
    ],
    specifications: [
      { label: "Core Material", value: "High-Density Rubberized Coconut Coir Pad" },
      { label: "Cushioning Top", value: "High Resilience Quilted Comfort Foam Layer" },
      { label: "Firmness", value: "Firm to Extra Firm (8.5/10)" },
      { label: "Origin", value: "100% Indian Renewable Coconut Fiber" },
    ],
    priceTable: [
      { size: "Single", dimensionsInches: "72 × 36", dimensionsCm: "183 × 91", thickness6Price: 6999, thickness8Price: 8999, thickness10Price: 11499 },
      { size: "Double", dimensionsInches: "72 × 48", dimensionsCm: "183 × 122", thickness6Price: 9499, thickness8Price: 11999, thickness10Price: 14999 },
      { size: "Queen", dimensionsInches: "78 × 60", dimensionsCm: "198 × 152", thickness6Price: 11999, thickness8Price: 14499, thickness10Price: 17999 },
      { size: "King", dimensionsInches: "78 × 72", dimensionsCm: "198 × 183", thickness6Price: 14499, thickness8Price: 17499, thickness10Price: 21499 },
    ],
    faqs: [
      {
        question: "Does rubberized coir sag or crumble like old-fashioned coir?",
        answer: "No. Traditional coir relied on cheap starch binders that broke down over time. Our rubberized coir uses vulcanized natural latex that flexes elastically without crumbling.",
      },
      {
        question: "Why do doctors often recommend coir mattresses for lower back ache?",
        answer: "Coir provides an unyielding, non-sinking planar surface that prevents lumbar spine hyperextension, which is crucial for acute disc recovery.",
      },
      {
        question: "Is the coir treated against insects and bed bugs?",
        answer: "Yes, our coir undergoes rigorous thermo-sterilization and organic insect-repellent treatment during rubberization to prevent pest habitation.",
      },
    ],
    crossSellSlugs: ["orthopaedic", "latex-foam"],
    seoClosingParagraph:
      "Enjoy traditional natural firmness combined with modern rubberized resilience. The Coir mattress collection offers the best value, breathability, and non-sag durability in the Indian market. Delivered directly to your home with full warranty.",
    products: [
      {
        id: "coir-nature-firm",
        name: "NatureFirm Rubberized Coir Mattress",
        badge: "Eco Value Choice",
        rating: 4.7,
        reviewsCount: 310,
        startingPrice: 11999,
        originalPrice: 15999,
        image: "/images/bed-bg-10.jpg",
        thicknessOptions: ["6 inch", "8 inch"],
        sizeOptions: ["Single", "Double", "Queen", "King"],
        keySpecs: ["Vulcanized Natural Coir", "Ultra Breathable", "Extra Firm Base"],
      },
    ],
  },
  {
    slug: "latex-foam",
    name: "Latex Foam",
    benefit: "Natural, bouncy, eco-friendly comfort",
    audience: "Eco-conscious buyers, combination sleepers",
    material: "100% natural latex",
    tagline: "100% Natural Dunlop Latex Tapped from Kerala Rubber Trees",
    heroImage: "/images/home-about-us.jpg",
    layerImage: "/images/layer-12.jpg",
    firmnessScale: "6.8 / 10 (Dynamic Responsive Medium Firm)",
    warranty: "15 Years Manufacturer Warranty",
    explainerParagraph:
      "Tapped sustainably from the Hevea Brasiliensis rubber trees of southern India, our 100% Natural Latex Foam collection is the pinnacle of pure, non-toxic luxury. Unlike synthetic foams made from petroleum derivatives, natural latex is naturally hypoallergenic, anti-fungal, and resistant to dust mites without any chemical sprays. Natural latex possesses a uniquely buoyant, instantaneous responsiveness: it cradles your curves the moment you lie down, yet springs back immediately when you change sleeping positions—delivering zero 'stuck in quicksand' sensation. Perforated pin-core aeration channels run vertically throughout the latex slab, ensuring constant heat convection. It is certified free from off-gassing and is rated to retain its structural resilience for over 15 to 20 years.",
    benefitsList: [
      {
        iconName: "Sparkles",
        title: "100% Pure Organic Tree Latex",
        description: "Zero synthetic fillers, zero petroleum chemicals, zero toxic VOC off-gassing.",
      },
      {
        iconName: "Wind",
        title: "Pin-Core Airflow Channels",
        description: "Thousands of vertical aeration holes allow continuous passive ventilation.",
      },
      {
        iconName: "Feather",
        title: "Instantaneous Buoyant Bounce",
        description: "Adapts dynamically to every movement without hindering easy turning in bed.",
      },
    ],
    specifications: [
      { label: "Core Material", value: "100% Natural Dunlop Process Latex" },
      { label: "Density", value: "75D – 85D Progressive Density" },
      { label: "Certification", value: "GOLS (Global Organic Latex Standard), eco-INSTITUT" },
      { label: "Durability Lifespan", value: "15+ Years Expected Resilience" },
    ],
    priceTable: [
      { size: "Single", dimensionsInches: "72 × 36", dimensionsCm: "183 × 91", thickness6Price: 14999, thickness8Price: 18999, thickness10Price: 22999 },
      { size: "Double", dimensionsInches: "72 × 48", dimensionsCm: "183 × 122", thickness6Price: 19999, thickness8Price: 24999, thickness10Price: 29999 },
      { size: "Queen", dimensionsInches: "78 × 60", dimensionsCm: "198 × 152", thickness6Price: 24999, thickness8Price: 30999, thickness10Price: 36999 },
      { size: "King", dimensionsInches: "78 × 72", dimensionsCm: "198 × 183", thickness6Price: 29999, thickness8Price: 36999, thickness10Price: 43999 },
    ],
    faqs: [
      {
        question: "Is this 100% natural or a synthetic blended latex?",
        answer: "We use 100% certified pure natural latex tapped from rubber plantations in Kerala, with zero synthetic styrene-butadiene rubber (SBR) additives.",
      },
      {
        question: "Why is natural latex more expensive than memory foam?",
        answer: "Harvesting pure tree sap takes years of sustainable agriculture and specialized vulcanization molds. However, it lasts twice as long as memory foam (15+ years) and provides unmatched chemical-free sleep.",
      },
      {
        question: "Is natural latex bouncy like a spring mattress?",
        answer: "It has a comforting, buoyant push-back that makes turning effortless, while maintaining excellent pinpoint motion isolation so a sleeping partner isn't disturbed.",
      },
    ],
    crossSellSlugs: ["fusiontech", "breathesafe"],
    seoClosingParagraph:
      "Sleep in pure organic harmony with our 100% Natural Latex Foam mattresses. Harvested from south Indian plantations and certified for zero toxic off-gassing, this mattress provides the ultimate combination of buoyant comfort, durability, and eco-friendly cooling. Order with 100 nights home trial.",
    products: [
      {
        id: "latex-pure-organic",
        name: "PureNature 100% Organic Latex Mattress",
        badge: "Eco Luxury Winner",
        rating: 5.0,
        reviewsCount: 420,
        startingPrice: 24999,
        originalPrice: 32999,
        image: "/images/home-about-us.jpg",
        thicknessOptions: ["6 inch", "8 inch", "10 inch"],
        sizeOptions: ["Single", "Queen", "King"],
        keySpecs: ["100% Kerala Dunlop Latex", "GOLS Certified", "15-Year Life"],
      },
    ],
  },
  {
    slug: "fusiontech",
    name: "FusionTech",
    benefit: "Hybrid spring + foam for balanced support",
    audience: "Buyers wanting \"best of both worlds\"",
    material: "Pocket springs + foam/latex hybrid layers",
    tagline: "Zero-Motion Pocket Springs Harmonized with Adaptive Comfort Foam",
    heroImage: "/images/bed-bg-14.jpg",
    layerImage: "/images/layer-14.jpg",
    firmnessScale: "6.5 / 10 (Luxury Hotel Hybrid Medium)",
    warranty: "10 Years Manufacturer Warranty",
    explainerParagraph:
      "When you cannot decide between the contouring hug of premium foam and the active, uplifting response of luxury hotel spring beds, FusionTech provides the definitive answer. The FusionTech Hybrid combines hundreds of individually encased, barrel-shaped pocket coils with multi-layer high-resilience and memory foam tops. Each high-carbon steel spring reacts independently inside its non-woven fabric pocket, compressing only under direct pressure. This guarantees zero motion wave transmission across the bed—your partner can toss, turn, or exit the mattress without moving your side. The open spring cavity provides massive natural convective airflow, while the plush comfort topper alleviates pressure points across the shoulders and hips.",
    benefitsList: [
      {
        iconName: "Layers",
        title: "Individually Encased Pocket Coils",
        description: "Up to 1,200 tempered steel coils isolate motion completely while supporting each spinal contour.",
      },
      {
        iconName: "ShieldCheck",
        title: "Reinforced 360° Foam Encasement",
        description: "High-density foam perimeter wall stops edge roll-off and increases usable sleep surface by 20%.",
      },
      {
        iconName: "Sparkles",
        title: "5-Star Luxury Hotel Cloud Top",
        description: "Plush Euro-top quilted comfort layer for an opulent, deeply relaxing sleep sensation.",
      },
    ],
    specifications: [
      { label: "Spring Core", value: "Individually Encased Calibrated Pocket Springs (1.8mm / 2.0mm)" },
      { label: "Comfort Layer", value: "Adaptive Memory Foam & High Resilience Euro-Top" },
      { label: "Edge Support", value: "PowerEdge™ Heavy Duty Perimeter Foam Walls" },
      { label: "Feel", value: "Luxury Hotel Hybrid Medium Firm" },
    ],
    priceTable: [
      { size: "Single", dimensionsInches: "72 × 36", dimensionsCm: "183 × 91", thickness6Price: 10999, thickness8Price: 13999, thickness10Price: 16999 },
      { size: "Double", dimensionsInches: "72 × 48", dimensionsCm: "183 × 122", thickness6Price: 14999, thickness8Price: 18499, thickness10Price: 22499 },
      { size: "Queen", dimensionsInches: "78 × 60", dimensionsCm: "198 × 152", thickness6Price: 18499, thickness8Price: 22999, thickness10Price: 27999 },
      { size: "King", dimensionsInches: "78 × 72", dimensionsCm: "198 × 183", thickness6Price: 22499, thickness8Price: 27499, thickness10Price: 32999 },
    ],
    faqs: [
      {
        question: "Do pocket springs make squeaking sounds like traditional bonnell springs?",
        answer: "No. Because each spring is sealed in a sound-dampening acoustic fabric pocket and tempered with high carbon, pocket springs are 100% silent.",
      },
      {
        question: "Does the hybrid mattress sag along the edges?",
        answer: "FusionTech features our proprietary PowerEdge foam border encasement, allowing you to sit or sleep right on the edge of the mattress without rolling off.",
      },
      {
        question: "Is this suitable for heavier individuals?",
        answer: "Yes, the dual active spring-and-foam matrix provides superior progressive resistance, preventing excessive sinking for individuals weighing up to 130 kg per sleeper.",
      },
    ],
    crossSellSlugs: ["posturefit", "memory-foam"],
    seoClosingParagraph:
      "Enjoy the plush opulence of a five-star hotel bed in the comfort of your master bedroom. FusionTech delivers the ideal equilibrium of responsive pocket spring support and body-cushioning foam comfort. Buy online with 10-year warranty and free doorstep delivery.",
    products: [
      {
        id: "fusiontech-eurotop",
        name: "FusionTech Hybrid Euro-Top Pocket Spring Mattress",
        badge: "Luxury Hotel Grade",
        rating: 4.9,
        reviewsCount: 520,
        startingPrice: 18499,
        originalPrice: 25999,
        image: "/images/bed-bg-14.jpg",
        thicknessOptions: ["8 inch", "10 inch", "12 inch"],
        sizeOptions: ["Queen", "King"],
        keySpecs: ["Encased Pocket Springs", "Euro-Top Cushioning", "Edge-to-Edge Support"],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): CategoryData | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
