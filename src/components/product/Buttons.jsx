import React from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addItemToCart } from "../../store/features/panier/panierSlice";
import { deleteProductById } from "../../store/features/product/productActions";
import {
  deleteProduct,
  showProductToEdit,
} from "../../store/features/product/productSlice";

const Buttons = ({ data: product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <NavLink to="/panier">
        <button
          className="me-2 btn btn-sm btn-primary"
          onClick={() => {
            dispatch(addItemToCart(product));
          }}
        >
          <FaPlus />
        </button>
      </NavLink>
      <button
        className=" me-2 btn btn-sm btn-warning"
        onClick={() => {
          dispatch(showProductToEdit(product));
        }}
      >
        Edit
      </button>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          dispatch(deleteProduct(product.id));
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Buttons;
