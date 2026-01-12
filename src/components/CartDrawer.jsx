import { useCartStore } from "../store/useCartStore";
import { Link } from "react-router-dom";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  // Derived State (ตามชีท)
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.07;
  const shipping = subtotal > 0 ? 100 : 0;
  const total = subtotal + tax + shipping;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-lg transform transition-transform
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b dark:border-gray-700">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="p-4 space-y-3">
          {cart.length === 0 && (
            <p className="text-gray-500">Cart is empty</p>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.quantity} × {item.price}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="p-4 border-t dark:border-gray-700 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>VAT (7%)</span>
            <span>{tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>{total.toFixed(2)}</span>
          </div>

          <button
            onClick={clearCart}
            className="w-full mt-3 bg-red-500 text-white py-2 rounded"
          >
            Clear Cart
          </button>
          <Link
                to="/cart"
                onClick={onClose}
                className="block w-full text-center mt-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
            Go to Cart Page
        </Link>

        </div>
      </div>
    </>
  );
};

export default CartDrawer;
