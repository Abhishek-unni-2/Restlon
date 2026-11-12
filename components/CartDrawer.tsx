"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, ShoppingBag, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "./CartContext";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-sand bg-ivory">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-teal" />
              <h2 className="text-lg font-serif font-bold text-stone-900">Your Sleep Basket</h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Perks Bar */}
          <div className="bg-teal/10 px-6 py-2.5 flex items-center justify-between text-xs text-teal font-medium border-b border-teal/20">
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4" /> Free Door Delivery
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> 100-Night Trial
            </span>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-sand/40 rounded-full flex items-center justify-center mx-auto text-warmgrey">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-stone-800">Your basket is empty</h3>
                <p className="text-sm text-warmgrey max-w-xs mx-auto">
                  Explore our orthopedic, memory foam, and natural latex mattresses designed for deep, restorative sleep.
                </p>
                <button
                  onClick={closeCart}
                  className="inline-block mt-2 px-6 py-2.5 bg-teal text-white font-medium rounded-lg hover:bg-teal-600 transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.id}-${item.size}-${item.thickness}`}
                  className="flex gap-4 p-3.5 bg-ivory rounded-xl border border-sand/70 hover:border-sand transition-colors"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-stone-100 flex-shrink-0">
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
                      <h4 className="text-sm font-semibold text-stone-900 truncate pr-2">
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
                    <p className="text-xs text-warmgrey mt-0.5">
                      {item.size} • {item.thickness}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1.5 font-semibold text-stone-900 text-sm">
                        <span>₹{item.price.toLocaleString("en-IN")}</span>
                        {item.originalPrice > item.price && (
                          <span className="text-xs line-through text-stone-400 font-normal">
                            ₹{item.originalPrice.toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center border border-sand bg-white rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-stone-50 text-stone-600"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-medium text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-stone-50 text-stone-600"
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

          {/* Footer / Summary */}
          {items.length > 0 && (
            <div className="p-6 border-t border-sand bg-ivory space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-stone-900">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Shipping & Delivery</span>
                  <span className="font-semibold text-teal">FREE (Pan-India)</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>100-Night Sleep Trial</span>
                  <span className="font-semibold text-teal">Included</span>
                </div>
                <div className="border-t border-sand/60 pt-2 flex justify-between text-base font-bold text-stone-900">
                  <span>Estimated Total</span>
                  <span className="text-teal">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => alert("Checkout initiated! In production, this connects to Razorpay / Cashfree / Stripe.")}
                  className="w-full py-3.5 bg-teal hover:bg-teal-600 text-white font-semibold rounded-xl text-center shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  Proceed to Checkout • ₹{subtotal.toLocaleString("en-IN")}
                </button>
                <p className="text-center text-[11px] text-warmgrey">
                  Zero cost EMI available from ₹1,499/mo • 10-Year Warranty
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
