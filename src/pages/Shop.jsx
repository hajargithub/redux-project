import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTh, FaThList } from "react-icons/fa";
import ProductForm from "../components/product/ProductForm";
import ProductGrid from "../components/product/ProductGrid";
import ProductList from "../components/product/ProductList";
import { ChangeButton } from "../store/features/global/globalSlice";
import { getAllProducts } from "../store/features/product/productActions";
import Navbar from "../components/shared/NavBar";

const Shop = () => {
  const { buttonClicked } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <>
      <Navbar />
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
