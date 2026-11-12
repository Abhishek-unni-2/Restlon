/**
 * Brand Configuration File
 * 
 * To customize the site for a specific client brand, change the BRAND_NAME
 * or update the contact details and policies below. All 18+ pages, schema
 * tags, navigation, and SEO metadata will update automatically.
 */

export const brandConfig = {
  // Brand Name placeholder configurable here:
  name: process.env.NEXT_PUBLIC_BRAND_NAME || "Restora",
  legalName: "Restora Sleep Innovations Pvt. Ltd.",
  tagline: "India's Finest Climate-Adapted Orthopedic Mattresses",
  domain: "https://restorasleep.in",
  phone: "+91 800-REST-SLEEP (737-8753)",
  whatsapp: "+91 98460 12345",
  email: "support@restorasleep.in",
  supportHours: "Monday to Sunday: 9:00 AM – 9:00 PM IST",
  address: {
    street: "Plot 42, Industrial Sleep Park, Near Cyber City",
    city: "Kochi & Bangalore",
    state: "Kerala & Karnataka",
    postalCode: "682024",
    country: "IN",
  },
  social: {
    instagram: "https://instagram.com/restorasleep",
    facebook: "https://facebook.com/restorasleep",
    youtube: "https://youtube.com/@restorasleep",
    linkedin: "https://linkedin.com/company/restorasleep",
  },
  policies: {
    trialDays: 100,
    warrantyYears: 10,
    freeDelivery: true,
    cashOnDelivery: true,
    zeroCostEmi: true,
    recyclingAvailable: true,
  },
  statesServed: ["Kerala", "Tamil Nadu", "Maharashtra"],
};
