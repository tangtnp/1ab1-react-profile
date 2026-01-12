import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const Catalog = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>

      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-3 border rounded-lg mb-8 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-900 dark:border-gray-700"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-xl hover:shadow-lg transition dark:border-gray-700"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500 dark:text-gray-300">
              {product.price} THB
            </p>

            <Link
              to={`/product/${product.id}`}
              className="mt-3 inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <div className="text-gray-500 dark:text-gray-300">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
