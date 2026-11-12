export interface LocationData {
  slug: string;
  stateName: string;
  positioningLine: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  climateParagraph: string;
  whyChooseUsParagraph: string;
  cities: string[];
  recommendedCategorySlugs: string[];
  localDeliveryPromise: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const LOCATIONS: LocationData[] = [
  {
    slug: "kerala",
    stateName: "Kerala",
    positioningLine: "God's Own Country Deserves Pure Organic Comfort & High-Humidity Sleep Resilience",
    heroImage: "/images/home-about-us.jpg",
    metaTitle: "Restora Mattress & Bed Shop in Kerala | Buy Online",
    metaDescription: "Buy premium mattresses in Kerala. Climate-adapted for coastal humidity, 100% natural Kerala latex & orthopedic beds. 100-night trial, free home delivery.",
    climateParagraph:
      "Kerala's tropical maritime climate brings heavy annual monsoon rains, coastal breezes, and relative humidity levels frequently surpassing 85% to 90%. In such moisture-rich conditions, conventional mattresses absorb ambient water vapor, causing synthetic foams to break down prematurely, smell musty, and harbor allergens such as mold and dust mites. Restora's Kerala edition mattresses feature high-ventilation pin-core structures, anti-fungal organic cotton encasements, and natural plantation rubber latex harvested directly from Kerala estates. Our breathable architecture promotes constant cross-airflow, keeping your sleep surface completely dry, odor-free, and refreshing even during the wettest monsoon months.",
    whyChooseUsParagraph:
      "Why choose Restora in Kerala? Because our roots are in the heart of Kerala's natural rubber country. We eliminate dealer markups by shipping directly from our regional manufacturing hub to your doorstep anywhere in Kerala. Whether you are furnishing a traditional nalukettu in Thrissur, a modern apartment in Kochi, or a beachfront villa in Kovalam, we provide complimentary white-glove room setup, old mattress haul-away, and our signature 100-night at-home trial with 10-year warranty protection.",
    cities: [
      "Ernakulam",
      "Alappuzha",
      "Kannur",
      "Kasaragod",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Malappuram",
      "Palakkad",
      "Pathanamthitta",
      "Thrissur",
      "Trivandrum",
      "Wayanad",
    ],
    recommendedCategorySlugs: ["latex-foam", "breathesafe", "orthopaedic"],
    localDeliveryPromise: "Free express delivery across all 14 districts in Kerala within 2 to 5 business days.",
    faqs: [
      {
        question: "How do Restora mattresses handle heavy monsoon humidity in Kerala?",
        answer: "Our mattresses use open-cell foam matrices and natural Kerala Dunlop latex with vertical pin-core ventilation that resist moisture retention, mold formation, and damp odors.",
      },
      {
        question: "Do you deliver to hill station areas like Wayanad and Munnar?",
        answer: "Yes, our regional logistics fleet services all 14 Kerala districts, including high-range towns like Wayanad, Munnar, and Idukki with complete door delivery.",
      },
      {
        question: "Is cash on delivery or zero-cost EMI available in Kerala?",
        answer: "Yes, we support Cash on Delivery (COD) as well as 3, 6, and 9-month Zero Cost EMI across all major Indian credit and debit cards.",
      },
    ],
  },
  {
    slug: "tamil-nadu",
    stateName: "Tamil Nadu",
    positioningLine: "Beat the Southern Heat with Advanced Thermal Dissipation & Ergonomic Posture Care",
    heroImage: "/images/bed-bg-10.jpg",
    metaTitle: "Restora Mattress & Bed Shop in Tamil Nadu | Buy Online",
    metaDescription: "Buy cooling orthopedic mattresses in Tamil Nadu. CoolGel & spinal alignment beds engineered for warm climates. Free delivery in Chennai, Coimbatore & more.",
    climateParagraph:
      "From the intense summer heatwaves of Chennai, Madurai, and Tiruchirappalli to the dry heat of Coimbatore and Salem, Tamil Nadu experiences prolonged periods of high thermal stress. Sleeping on standard foam beds leads to heat entrapment, nocturnal sweating, and frequent awakenings. Restora engineers its Tamil Nadu mattress collection with thermodynamic CoolGel micro-capsules and breathable open-cell matrices that actively draw excess body warmth away from your pressure points. Combined with cool-touch ice-filament knitting, our mattresses maintain a surface temperature up to 2.5°C cooler, providing deep, sweat-free sleep even during peak Agni Nakshatram temperatures.",
    whyChooseUsParagraph:
      "Why choose Restora in Tamil Nadu? We blend cutting-edge thermal comfort engineering with clinical spinal ergonomics. From bustling IT hubs along Chennai's OMR corridor to family homes in Coimbatore and Madurai, over 25,000 satisfied sleepers trust Restora to relieve back pain and keep cool. Enjoy transparent direct-from-factory pricing, 10-year non-sag guarantee, zero-cost EMI, and a 100-night risk-free trial in the comfort of your bedroom.",
    cities: [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Salem",
      "Tirunelveli",
      "Erode",
      "Vellore",
      "Thanjavur",
      "Dindigul",
      "Tiruppur",
    ],
    recommendedCategorySlugs: ["coolgel", "posturefit", "antimicrobial"],
    localDeliveryPromise: "Next-day delivery available across Chennai & Coimbatore; 2-4 days across all other Tamil Nadu cities.",
    faqs: [
      {
        question: "Which mattress is best for Chennai's humid hot weather?",
        answer: "Our CoolGel and BreatheSafe mattresses are engineered specifically for hot, coastal climates, featuring heat-dissipating gel micro-beads and 360° airflow channels.",
      },
      {
        question: "Can I try the mattress at home in Coimbatore before committing?",
        answer: "Absolutely. Restora offers a 100-night home sleep trial. If you are not completely satisfied, we will pick it up and give you a 100% full refund.",
      },
      {
        question: "Do you deliver to apartment buildings with narrow lifts in Chennai?",
        answer: "Yes, our mattresses arrive vacuum-compressed in a compact, easy-to-maneuver box that fits inside any residential lift or stairwell.",
      },
    ],
  },
  {
    slug: "maharashtra",
    stateName: "Maharashtra",
    positioningLine: "Ergonomic Decompression for Fast-Paced Urban Lives Across Mumbai, Pune & Beyond",
    heroImage: "/images/bed-bg-14.jpg",
    metaTitle: "Restora Mattress & Bed Shop in Maharashtra | Buy Online",
    metaDescription: "Buy premium mattresses in Maharashtra. Doctor-recommended orthopedic, hybrid & memory foam beds. Fast delivery across Mumbai, Pune, Nagpur, Nashik.",
    climateParagraph:
      "Maharashtra spans diverse climatic zones—from the intense coastal humidity and heavy monsoons of Mumbai and Thane to the sharp seasonal temperature swings of Pune, Nashik, and Nagpur. Compounding these climate demands is the intense physical stress of long urban commutes and demanding desk work, which takes a heavy toll on the lumbar spine and neck. Restora's Maharashtra collection combines high-resilience multi-zone spinal support with zero-moisture retention fabrics. Our hybrid and orthopedic models deliver immediate spinal decompression after long days on the Mumbai local trains or Pune expressway, ensuring you wake up limber, energized, and ready for the day ahead.",
    whyChooseUsParagraph:
      "Why choose Restora in Maharashtra? We understand the spatial and ergonomic demands of modern apartment living in cities like Mumbai, Pune, and Nagpur. Our mattresses are engineered to fit standard Indian cot sizes as well as hydraulic storage beds without excessive weight. With our regional warehouse in Bhiwandi and Pune, we provide ultra-fast doorstep delivery, complimentary room installation, and flexible payment plans with 0% EMI options. Backed by our 10-year non-sag warranty and 100-night sleep trial, your satisfaction is guaranteed.",
    cities: [
      "Mumbai",
      "Pune",
      "Nagpur",
      "Nashik",
      "Aurangabad",
      "Solapur",
      "Thane",
      "Navi Mumbai",
      "Kolhapur",
      "Amravati",
    ],
    recommendedCategorySlugs: ["fusiontech", "orthopaedic", "memory-foam"],
    localDeliveryPromise: "Same-day or 24-48 hr doorstep delivery across Mumbai MMR and Pune; 3 days pan-Maharashtra.",
    faqs: [
      {
        question: "Do Restora mattresses work with hydraulic storage beds in Mumbai flats?",
        answer: "Yes, our mattresses are engineered with optimal weight-to-density ratios so hydraulic bed pistons lift effortlessly without straining hinges.",
      },
      {
        question: "Does the mattress resist dampness during the Mumbai monsoon?",
        answer: "Yes, our moisture-resistant open-cell foam matrices and anti-microbial outer fabrics prevent mold and damp odors even in 95% coastal monsoon humidity.",
      },
      {
        question: "How long does doorstep delivery take in Pune and Nagpur?",
        answer: "Orders in Pune are fulfilled within 24 to 48 hours directly from our local hub. Deliveries to Nagpur and other Maharashtra cities typically take 2 to 4 days.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
