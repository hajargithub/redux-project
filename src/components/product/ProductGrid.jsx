import React from "react";
import { useSelector } from "react-redux";
import Buttons from "./Buttons";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <>
      <div className="row my-4">
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
