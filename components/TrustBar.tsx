import React from "react";
import { ThermometerSnowflake, Activity, ShieldCheck, Truck } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    {
      icon: ThermometerSnowflake,
      title: "Climate-Adapted",
      subtitle: "360° airflow channels for humid tropical weather",
    },
    {
      icon: Activity,
      title: "Orthopedic Support",
      subtitle: "Multi-zone alignment recommended by spine experts",
    },
    {
      icon: ShieldCheck,
      title: "Hypoallergenic",
      subtitle: "Anti-fungal, anti-mite & non-toxic OEKO-TEX materials",
    },
    {
      icon: Truck,
      title: "Nationwide Delivery",
      subtitle: "Free white-glove doorstep delivery & 100-night trial",
    },
  ];

  return (
    <section className="bg-ivory border-y border-sand py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-sand shadow-sm flex items-center justify-center text-teal flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs text-warmgrey mt-0.5 leading-relaxed">
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
