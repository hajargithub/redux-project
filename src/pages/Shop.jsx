import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTh, FaThList } from "react-icons/fa";
import ProductForm from "../components/product/ProductForm";
import ProductGrid from "../components/product/ProductGrid";
import ProductList from "../components/product/ProductList";
import { ChangeButton } from "../store/features/global/globalSlice";

const Shop = () => {
  const { buttonClicked } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  return (
    <>
      <ProductForm />
      <div className="col-md-12">
        <button
          className="btn btn-dark mx-3 active"
          onClick={() => dispatch(ChangeButton(buttonClicked))}
        >
          {buttonClicked && <FaThList />}
          {!buttonClicked && <FaTh />}
        </button>
      </div>

      <div className="row my-4">
        <div className="col-12">{buttonClicked && <ProductList />}</div>
      </div>
      <div className="row my-4">
        <div className="col-12">{!buttonClicked && <ProductGrid />}</div>
      </div>
    </>
  );
};

export default Shop;
