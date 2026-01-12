import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import ProductCard from "./components/ProductCard";
import CartDrawer from "./components/CartDrawer";
import Cart from "./pages/Cart";
import { products } from "./data/products";
import { useCartStore } from "./store/useCartStore";

const Shop = ({ onOpenDrawer }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

function App() {
  const [open, setOpen] = useState(false);

  const cartCount = useCartStore((state) =>
    state.cart.reduce((sum, i) => sum + i.quantity, 0)
  );

  return (
    <BrowserRouter>
      <div className="min-h-screen dark:bg-gray-900 dark:text-white">
        {/* Navbar เดิม + เพิ่มลิงก์ไปหน้า cart */}
        <nav className="p-6 flex justify-between items-center border-b dark:border-gray-700">
          <Link to="/" className="text-2xl font-bold">Shop</Link>

          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Cart Page
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="relative px-4 py-2 bg-blue-600 text-white rounded"
            >
              Drawer Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-2">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Shop onOpenDrawer={() => setOpen(true)} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        {/* Drawer ยังอยู่เหมือนเดิม */}
        <CartDrawer isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </BrowserRouter>
  );
}

export default App;
