import { useCartStore } from "../store/useCartStore";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="p-4 border rounded-xl dark:border-gray-700">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500 dark:text-gray-300">
        {product.price} THB
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
