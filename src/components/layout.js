import React from "react";
import Footer from "./footer";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/normalize.css";
import "../assets/styles/main.css";

const Layout = ({ menu, children, contact }) => {
  return (
    <>
      <Header menu={menu} contact={contact} />
      {children}
      <Footer menu={menu} contact={contact} />
    </>
  );
};

export default Layout;
