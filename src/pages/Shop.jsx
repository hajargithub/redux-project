import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaTh, FaThList } from "react-icons/fa";
import ProductForm from "../components/product/ProductForm";
import ProductGrid from "../components/product/ProductGrid";
import ProductList from "../components/product/ProductList";
import {
  ChangeButton,
  DisplayForm,
} from "../store/features/global/globalSlice";
import { getAllProducts } from "../store/features/product/productActions";

const Shop = () => {
  const { buttonClicked, showForm } = useSelector((state) => state.global);
  const { errorMessage } = useSelector((state) => state.product);
  const { infoUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <>
      {errorMessage && (
        <div class="alert alert-danger my-3" role="alert">
          <strong>Error auth</strong> {errorMessage}
        </div>
      )}
      <div className="col-md-12 text-end mx-auto">
        <button
          // disabled={infoUser ? true : false}
          className=" btn btn-primary my-2"
          onClick={() => (infoUser ? dispatch(DisplayForm(showForm)) : "")}
        >
          <FaPlus />
          Add product
        </button>
      </div>
      {showForm && <ProductForm />}

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
