// app/products/[id]/page.tsx
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

export default async function ProductDetailPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    // 1. In Next.js 15, we MUST await params
    const { id } = await params;

    // 2. Fetch the specific product from the database
    const product = await prisma.product.findUnique({
        where: { id: id },
    });

    // 3. If product doesn't exist, show the 404 page
    if (!product) {
        notFound();
    }


    return (
        <main className="max-w-6xl mx-auto p-10">
            <Link href="/" className="text-sm text-gray-500 hover:underline">
                ← Back to All Products
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                {/* Product Image */}
                <div className="relative h-[500px] w-full bg-gray-100 rounded-xl overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-center">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                        {product.category}
                    </span>
                    <h1 className="text-4xl font-bold mt-2">{product.name}</h1>
                    <p className="text-2xl font-semibold text-gray-900 mt-4">
                        ${product.price.toLocaleString()}
                    </p>

                    <div className="mt-8 border-t pt-8">
                        <h3 className="text-lg font-medium">Description</h3>
                        <p className="text-gray-600 mt-2 leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    <AddToCartButton product={product} />
                </div>
            </div>
        </main>

    );
}