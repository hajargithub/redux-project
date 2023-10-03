import React from "react";
import Buttons from "./Buttons";

const ProductCard = ({ data: product }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.price}</p>
          <Buttons data={product} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
