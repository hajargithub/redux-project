import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/NavBar";
import Footer from "../shared/Footer";

const SiteLayout = () => {
  return (
    <>
      <Navbar />
      <div className="div col-md-8 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default SiteLayout;
