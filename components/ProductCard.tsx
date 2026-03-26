import Link from "next/link";

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">
            <div className="relative h-64 w-full bg-gray-100">
                {/* Using a standard img for now, or Next.js Image if you have remote patterns configured */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-4">
                <h2 className="font-semibold text-lg line-clamp-1">{product.name}</h2>
                <p className="text-blue-600 font-bold mt-1">${product.price.toFixed(2)}</p>

                <Link href={`/products/${product.id}`}>
                    <button className="w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
}