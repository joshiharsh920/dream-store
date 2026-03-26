"use client";

import { useCart } from "@/store/useCart";

export default function AddToCartButton({ product }: { product: any }) {
    const addItem = useCart((state) => state.addItem);

    return (
        <button
            onClick={() => {
                addItem(product);
            }}
            className="mt-10 px-12 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition"
        >
            Add to Cart
        </button>
    );
}