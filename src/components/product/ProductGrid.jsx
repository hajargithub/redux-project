import React from "react";
import { useSelector } from "react-redux";
import Buttons from "./Buttons";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <>
      <div className="row my-3">
        {products.map((product, index) => (
          <div className="col-md-4 border" key={index}>
            <ProductCard data={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
