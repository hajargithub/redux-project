import React from "react";

const ProductCard = ({ data: product }) => {
  return (
    <>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{product.title}</h4>
          <p class="card-text">{product.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
