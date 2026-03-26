"use client";

import { useCart } from "@/store/useCart";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartPage() {
    const { items, removeItem, clearCart, addItem } = useCart();
    const [mounted, setMounted] = useState(false);

    // Prevents hydration errors by waiting for the browser
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh]">
                <h2 className="text-2xl font-semibold">Your cart is empty</h2>
                <Link href="/products" className="mt-4 text-blue-600 hover:underline">
                    Go shopping →
                </Link>
            </div>
        );
    }

    return (
        <main className="max-w-4xl mx-auto p-10">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

            <div className="space-y-6">
                {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b pb-6">
                        <div className="flex items-center gap-4">
                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                            <div>
                                <h3 className="font-semibold text-lg">{item.name}</h3>
                                <p className="text-gray-500">${item.price} x {item.quantity}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-700 text-sm"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 p-6 bg-gray-50 rounded-xl">
                <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total Amount:</span>
                    <span>${totalPrice.toLocaleString()}</span>
                </div>

                <button
                    className="w-full mt-6 bg-black text-white py-4 rounded-full font-bold hover:bg-gray-800 transition"
                    onClick={() => alert("Proceeding to Checkout...")}
                >
                    Checkout
                </button>

                <button
                    onClick={clearCart}
                    className="w-full mt-4 text-gray-500 text-sm hover:underline"
                >
                    Clear Cart
                </button>
            </div>
        </main>
    );
}