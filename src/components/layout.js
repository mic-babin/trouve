import React from "react";
import Footer from "./footer";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/normalize.css";
import "../assets/styles/main.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
