import "./Shop.scss";
import { useContext } from "react";

import ProductCard from "../../components/product-card/Product-card";

import { ProductsContext } from "../../Context/products.context";

const Shop = () => {
  const  { products }  = useContext(ProductsContext);
  return (
    <div className="shop-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
