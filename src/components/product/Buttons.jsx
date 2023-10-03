import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  showProductToEdit,
} from "../../store/features/product/productSlice";

const Buttons = ({ data: product }) => {
  const dispatch = useDispatch();

  return (
    <>
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
