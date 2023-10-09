import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PanierList from "../components/panier/PanierList";
import { getAllItems } from "../store/features/panier/panierSlice";

const Panier = () => {
  const { panier } = useSelector((state) => state.panier);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllItems());
  // }, []);
  return (
    <>
      <PanierList />
    </>
  );
};

export default Panier;
