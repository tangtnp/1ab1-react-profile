import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-10 text-center">
        <p className="text-xl font-semibold">Product not found!</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Go to Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-10 border mt-10 rounded-2xl shadow-sm dark:border-gray-700">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-gray-500 hover:text-black dark:hover:text-white transition"
      >
        ← Back to Catalog
      </button>

      <h1 className="text-4xl font-bold mb-2">{product.name}</h1>

      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900 dark:text-blue-200">
        {product.category}
      </span>

      <p className="text-2xl text-green-600 my-4">{product.price} THB</p>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {product.desc}
      </p>
    </div>
  );
};

export default ProductDetail;
