"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, ShoppingBag, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import { useCart } from "./CartContext";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200 bg-mist/60">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-nordic-100 text-nordic-800 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-charcoal">Your Sleep Basket</h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-charcoal-500 hover:text-charcoal rounded-xl hover:bg-white transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Perks Bar */}
          <div className="bg-nordic-50 px-6 py-2.5 flex items-center justify-between text-xs text-nordic-900 font-semibold border-b border-nordic-200/60">
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-nordic-700" /> Free Doorstep Delivery
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-nordic-700" /> 100-Night Trial
            </span>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <div className="w-16 h-16 bg-mist rounded-full flex items-center justify-center mx-auto text-charcoal-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-charcoal">Your basket is empty</h3>
                <p className="text-xs sm:text-sm text-charcoal-500 max-w-xs mx-auto">
                  Explore our orthopedic, memory foam, and natural latex mattresses designed for deep, restorative sleep.
                </p>
                <button
                  onClick={closeCart}
                  className="inline-block mt-2 px-6 py-3 bg-nordic-800 text-white font-bold rounded-2xl hover:bg-nordic-900 transition-colors text-xs"
                >
                  Start Exploring Mattresses
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.id}-${item.size}-${item.thickness}`}
                  className="flex gap-4 p-3.5 bg-mist/50 rounded-2xl border border-stone-200/70 hover:border-nordic-300 transition-colors"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white border border-stone-200/80 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-bold text-charcoal truncate pr-2">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-stone-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-charcoal-500 mt-0.5">
                      {item.size} • {item.thickness}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1.5 font-bold text-charcoal text-sm">
                        <span>₹{item.price.toLocaleString("en-IN")}</span>
                        {item.originalPrice > item.price && (
                          <span className="text-xs line-through text-stone-400 font-normal">
                            ₹{item.originalPrice.toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center border border-stone-200 bg-white rounded-xl overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1.5 hover:bg-mist text-charcoal-700"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1.5 hover:bg-mist text-charcoal-700"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {items.length > 0 && (
            <div className="p-6 border-t border-stone-200 bg-mist/50 space-y-4">
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between text-charcoal-700">
                  <span>Subtotal</span>
                  <span className="font-semibold text-charcoal">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-charcoal-700">
                  <span>Pan-India Delivery</span>
                  <span className="font-bold text-nordic-800">FREE</span>
                </div>
                <div className="flex justify-between text-charcoal-700">
                  <span>100-Night Home Trial</span>
                  <span className="font-bold text-nordic-800">Included</span>
                </div>
                <div className="border-t border-stone-200 pt-2.5 flex justify-between text-base font-bold text-charcoal">
                  <span>Total Amount</span>
                  <span className="text-nordic-900">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => alert("Proceeding to secure checkout (Razorpay / Cashfree / Stripe).")}
                  className="w-full py-4 bg-nordic-800 hover:bg-nordic-900 text-white font-bold rounded-2xl text-center shadow-md transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[11px] text-charcoal-500">
                  Zero Cost EMI available from ₹1,499/mo • 10-Year Warranty
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
