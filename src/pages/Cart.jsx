import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.07;
  const shipping = subtotal > 0 ? 100 : 0;
  const total = subtotal + tax + shipping;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Cart</h1>
        <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Shop
        </Link>
      </div>

      {cart.length === 0 ? (
        <div className="p-6 border rounded-xl dark:border-gray-700 text-gray-500 dark:text-gray-300">
          Your cart is empty.
        </div>
      ) : (
        <>
          <div className="space-y-3 mb-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="p-4 border rounded-xl dark:border-gray-700 flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {item.quantity} × {item.price} THB
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="p-4 border rounded-xl dark:border-gray-700 space-y-2 text-sm">
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
            <div className="flex justify-between font-bold text-base">
              <span>Total</span>
              <span>{total.toFixed(2)}</span>
            </div>

            <button
              onClick={clearCart}
              className="w-full mt-3 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
