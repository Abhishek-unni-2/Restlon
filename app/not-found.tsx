import React from "react";
import Link from "next/link";
import { Home, ShoppingBag } from "lucide-react";
import { brandConfig } from "@/data/brandConfig";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-cloud">
      <div className="max-w-md w-full bg-white rounded-2xl border border-stone-200/80 p-8 text-center shadow-card space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-nordic-100 text-nordic-800 flex items-center justify-center mx-auto text-2xl font-mono font-bold">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold text-charcoal">
          Page Not Found
        </h1>

        <p className="text-sm text-charcoal-500 leading-relaxed">
          The sleep page you are looking for may have been moved or is currently being restocked. Explore our 9 orthopedic and cooling mattress collections.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="flex-1 py-3 px-4 bg-nordic-800 hover:bg-nordic-900 text-white font-bold text-xs rounded-2xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/#collections"
            className="flex-1 py-3 px-4 bg-mist hover:bg-stone-100 text-charcoal font-bold text-xs rounded-2xl border border-stone-200 flex items-center justify-center gap-1.5 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>View Mattresses</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
