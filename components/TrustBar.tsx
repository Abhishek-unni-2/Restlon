import React from "react";
import { Wind, Activity, ShieldCheck, Truck } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    {
      icon: Wind,
      title: "Climate-Adapted Airflow",
      subtitle: "360° cross-flow aeration for high tropical humidity",
    },
    {
      icon: Activity,
      title: "Orthopedic Alignment",
      subtitle: "5-zone posture support co-developed with spine clinics",
    },
    {
      icon: ShieldCheck,
      title: "Hypoallergenic Purity",
      subtitle: "Sanitized® silver-ion defense against mites & mold",
    },
    {
      icon: Truck,
      title: "Free White-Glove Setup",
      subtitle: "In-room placement & unboxing across all 28 states",
    },
  ];

  return (
    <section className="bg-white border-b border-stone-200/70 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-nordic-50 group-hover:bg-nordic-100 border border-nordic-200/60 shadow-subtle flex items-center justify-center text-nordic-800 transition-colors flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs text-charcoal-500 mt-0.5 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
