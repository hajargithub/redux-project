import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PanierList from "../components/panier/PanierList";
import { getAllItems } from "../store/features/panier/panierSlice";

const Panier = () => {
  return (
    <>
      <PanierList />
    </>
  );
};

export default Panier;
