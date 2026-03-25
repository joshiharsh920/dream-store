"use client";

import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm sticky top-0 z-50">
            <div className="font-brand font-bold text-xl">
                <Link href="/">DREAM STORE</Link>
            </div>

            <div className="flex gap-8 font-medium">
                <Link href="/" className="hover:opacity-70 transition">Home</Link>
                <Link href="/products" className="hover:opacity-70 transition">Shop</Link>
                <Link href="/cart" className="hover:opacity-70 transition">Cart</Link>
            </div>
        </nav>
    );
}