import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Shop = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default Shop;
