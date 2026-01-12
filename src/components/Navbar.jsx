import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

const Navbar = () => {
  const cartCount = useCartStore((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav className="px-6 py-4 flex justify-between items-center border-b dark:border-gray-700">
      {/* Logo / Brand */}
      <Link to="/" className="text-2xl font-bold">
        Shop
      </Link>

      {/* Menu */}
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          Products
        </Link>

        <Link
          to="/cart"
          className="relative hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
