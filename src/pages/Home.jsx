import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex">
          <div className="col-12 col-md-6 p-6 text-center text-md-left d-flex align-items-center">
            <section>
              <span className="text-primary display-3 font-weight-bold mb-3">
                Welcome to Hajar's training
              </span>

              <NavLink to="/Shop" className="btn btn-primary mr-3">
                Explore
              </NavLink>
            </section>
          </div>
          <div className="col-12 col-md-6 overflow-hidden">
            <img
              className="ml-auto d-block w-100"
              src="/React Cover.jpg"
              alt="hero-1"
              style={{
                clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)",
                maxWidth: "800px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
