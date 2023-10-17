import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <>
      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-3 my-2 ">
            <ProductCard data={product} key={index} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
