import React from "react";
import { FaTimes, FaPlus, FaArrowCircleLeft, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  deleteItemById,
  incrementQt,
  decrementQt,
} from "../../store/features/panier/panierSlice";
import TotalSection from "./TotalSection";

const Cart = ({ data: panier }) => {
  const { qt } = useSelector((state) => state.panier);
  const dispatch = useDispatch();
  return (
    <>
      <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img
            src={panier.thumbnail}
            className="img-fluid rounded-3"
            alt="Cotton T-shirt"
          />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-muted">{panier.title}</h6>
          <h6 className="text-black mb-0">Cotton T-shirt</h6>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 d-flex align-items-center">
          <button
            className="btn btn-link px-2"
            onClick={() => dispatch(decrementQt(panier))}
          >
            <FaMinus />
          </button>
          <input
            type="number"
            min="0"
            value={panier.qt}
            className="form-control form-control-sm"
          />
          <button
            className="btn btn-link px-2"
            onClick={() => dispatch(incrementQt(panier))}
          >
            <FaPlus />
          </button>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 text-end">
          <h6 className="mb-0">{panier.totalprice} Dh</h6>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          <button
            className="btn btn-link px-2"
            onClick={() => dispatch(deleteItemById(panier.id))}
          >
            <FaTimes />
          </button>
        </div>
      </div>
      <hr className="my-4" />
    </>
  );
};

export default Cart;
