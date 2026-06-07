import { getAllProducts } from "@/lib/services/product";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <main className="max-w-7xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Our Collection</h1>


      {/* 2. Check if products exist */}
      {products.length === 0 ? (
        <p className="text-gray-500 text-center py-20">No products found in the database.</p>
      ) : (
        /* 3. Grid Layout for the cards */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
