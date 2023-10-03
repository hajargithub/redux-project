import React from "react";
import ProductForm from "../components/product/ProductForm";
import ProductGrid from "../components/product/ProductGrid";
import ProductList from "../components/product/ProductList";

const Shop = () => {
  return (
    <>
      <ProductForm />

      <div className="row my-4">
        <div className="col-12">
          <ProductList />
        </div>
      </div>
      <div className="row my-4">
        <div className="col-12">
          <ProductGrid />
        </div>
      </div>
    </>
  );
};

export default Shop;
