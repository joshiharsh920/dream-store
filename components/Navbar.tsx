"use client";

import Link from "next/link";
import { useCart } from "@/store/useCart";

export default function Navbar() {
    const items = useCart((state) => state.items);
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    return (
        <nav className="flex justify-between items-center px-10 py-1 bg-green-200 shadow-sm sticky top-0 z-50">
            <div className="font-bold text-xl ">
                <Link href="/">DREAM STORE</Link>
            </div>
            <div className="flex gap-8 font-medium">
                <Link href="/" className="hover:opacity-70 transition">Home</Link>
                <Link href="/products" className="hover:opacity-70 transition">Shop</Link>
                <Link href="/cart" className="hover:opacity-70 transition">🛒 Cart
                    {totalItems > 0 && (
                        <span className="-top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {totalItems}
                        </span>
                    )}</Link>

                <Link href="/login" className="hover:opacity-70 transition">Login</Link>
            </div>
        </nav>
    );
}