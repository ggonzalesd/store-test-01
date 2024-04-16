import { useSelector } from "react-redux";
import { Product } from "./Product";

export const ProductList = () => {
  const { products } = useSelector((state) => state.app);

  return (
    <div className="flex flex-wrap justify-between p-2">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
