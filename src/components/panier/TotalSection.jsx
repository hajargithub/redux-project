import React from "react";
import { useSelector } from "react-redux";

const TotalSection = () => {
  const { totalpanier } = useSelector((state) => state.panier);
  return (
    <>
      <div className="col-lg-4 bg-grey">
        <div className="p-5">
          <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
          <hr className="my-4" />
          <div className="d-flex justify-content-between mb-5">
            <h5 className="text-uppercase">Total Price</h5>
            <h5>{totalpanier} DH</h5>
          </div>
          <button className="btn btn-dark btn-block btn-lg">Register</button>
        </div>
      </div>
    </>
  );
};

export default TotalSection;
