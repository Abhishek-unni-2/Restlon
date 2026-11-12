export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  category: "Buying & Delivery" | "Product & Materials" | "Warranty & Trial";
  description: string;
  items: FaqItem[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    category: "Buying & Delivery",
    description: "Everything you need to know about placing an order, shipping timelines, packaging, and delivery tracking across India.",
    items: [
      {
        question: "How long does delivery take, and is it free?",
        answer:
          "Yes, standard doorstep delivery is 100% FREE across all locations in India, including Kerala, Tamil Nadu, and Maharashtra. Delivery to major metro cities (Mumbai, Pune, Chennai, Kochi, Bangalore) takes 2 to 4 business days, while non-metro and tier-2/3 locations take 4 to 7 business days.",
      },
      {
        question: "How is the mattress packaged, and will it fit into narrow stairways?",
        answer:
          "Our mattresses are compressed using industrial hydraulic vacuum presses, rolled, and sealed into a heavy-duty cylindrical protective sleeve inside an easy-to-carry cardboard box with built-in handles. This compact packaging fits easily inside residential elevators, spiral stairwells, and narrow doorways.",
      },
      {
        question: "Can I pay via Cash on Delivery (COD) or Zero Cost EMI?",
        answer:
          "Yes! We offer Cash on Delivery (COD) on orders up to ₹25,000 in eligible pincodes. We also offer 3, 6, and 9-month Zero Cost EMI plans across all major credit cards and select debit cards (HDFC, ICICI, Axis, SBI, Kotak).",
      },
      {
        question: "Do you offer old mattress removal or disposal?",
        answer:
          "In select metropolitan areas including Mumbai, Pune, Chennai, and Kochi, our delivery team can assist with disposing of your old mattress for an environmentally responsible recycling fee. Simply check the 'Old Mattress Recycle' option during checkout.",
      },
    ],
  },
  {
    category: "Product & Materials",
    description: "Detailed information regarding mattress thickness, materials, firmness ratings, and climate optimization.",
    items: [
      {
        question: "What is the difference between 100% Natural Latex and Memory Foam?",
        answer:
          "100% Natural Latex is derived organically from rubber tree sap; it offers a buoyant, responsive, and naturally cooling sleep surface that lasts 15+ years. Memory Foam is a viscoelastic polyurethane foam that contours deeply to your body heat and weight, providing exceptional pressure-point relief and 100% motion isolation with a slower rebound.",
      },
      {
        question: "Which mattress thickness should I select: 6, 8, 10, or 12 inches?",
        answer:
          "For single sleepers weighing under 70 kg, 6 inches provides ample support. For couples or sleepers between 70 kg and 90 kg, 8 inches is our most popular recommendation. For individuals weighing over 90 kg or for a plush 5-star hotel feel, choose a 10 or 12-inch mattress.",
      },
      {
        question: "How do your mattresses handle humid tropical Indian weather?",
        answer:
          "Unlike cheap imported mattresses that trap moisture, our mattresses feature vertical pin-core channels (in latex) or open-cell breathable foams (in BreatheSafe and CoolGel), paired with breathable anti-fungal bamboo and jacquard covers. This actively prevents moisture buildup, sweat retention, and mold growth.",
      },
      {
        question: "Can these mattresses be used on standard Indian wooden cots or storage beds?",
        answer:
          "Yes! Our mattresses are engineered to sit flat on any supportive base, including wooden plank beds, box storage cots, hydraulic beds, slatted frames, and even clean, flat floors.",
      },
    ],
  },
  {
    category: "Warranty & Trial",
    description: "Details on our 100-night risk-free trial, return pickup, and 10-year manufacturer warranty guarantee.",
    items: [
      {
        question: "How does the 100-Night Sleep Trial work?",
        answer:
          "We want you to experience our mattress in the comfort of your own bedroom. Because your body takes 2 to 3 weeks to adjust to proper orthopedic alignment, we ask that you try the mattress for at least 21 nights. If anytime before day 100 you aren't completely satisfied, contact our support team and we will arrange a 100% free home pickup with a full refund.",
      },
      {
        question: "What happens to returned mattresses? Are they resold?",
        answer:
          "Never. Restlon maintains a strict zero-resale policy for returned mattresses. Every returned mattress is donated to local vetted charities and community shelters or sent to certified mattress recycling facilities to be repurposed into carpet underlay.",
      },
      {
        question: "What is covered under the 10-Year Warranty?",
        answer:
          "Our warranty covers any physical structural defects, faulty zipper or seam stitching, foam cracking or splitting, and visible sagging or indentation greater than 15mm (0.6 inches) not caused by improper foundation support.",
      },
      {
        question: "How do I claim a warranty replacement if needed?",
        answer:
          "Simply WhatsApp our support desk or email warranty@restorasleep.in with your invoice number, a brief description of the issue, and a photo showing the indentation measured with a straightedge. Our quality team evaluates claims within 48 business hours.",
      },
    ],
  },
];

export const ALL_FAQS: FaqItem[] = FAQ_GROUPS.flatMap((g) => g.items);
