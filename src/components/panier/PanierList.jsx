import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Cart from "./Cart";
import TotalSection from "./TotalSection";

function PanierList() {
  const { panier } = useSelector((state) => state.panier);

  return (
    <>
      <section
        className="h-100 h-custom my-4"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                        </div>
                        <hr className="my-4" />
                        {panier.map((panier, index) => (
                          <Cart data={panier} key={index} />
                        ))}
                        <div className="pt-5">
                          <h6 className="mb-0">
                            <NavLink to="/">
                              <FaArrowCircleLeft />
                              Back to shop
                            </NavLink>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <TotalSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PanierList;
