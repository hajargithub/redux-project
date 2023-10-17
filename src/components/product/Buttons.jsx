import React from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/features/panier/panierSlice";
import {
  deleteProduct,
  showProductToEdit,
} from "../../store/features/product/productSlice";

const Buttons = ({ data: product }) => {
  const { infoUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <button
        className="me-2 btn btn-sm btn-primary"
        onClick={() => (infoUser ? dispatch(addItemToCart(product)) : "")}
      >
        <FaPlus />
      </button>
      <button
        className=" me-2 btn btn-sm btn-warning"
        onClick={() => (infoUser ? dispatch(showProductToEdit(product)) : "")}
      >
        Edit
      </button>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => (infoUser ? dispatch(deleteProduct(product.id)) : "")}
      >
        Delete
      </button>
    </>
  );
};

export default Buttons;
