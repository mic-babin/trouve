import React from "react";
import Footer from "./navigation/footer.component";
import Header from "./header.component";
import Contact from "./navigation/nous-joindre.component";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/normalize.css";
import "../assets/styles/main.css";
import { useEffect } from "react";

const Layout = ({ menu, children, contact, showContact, setShowContact }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      setShowModal(showMenu || showContact);
    } else {
      setTimeout(() => {
        setShowModal(showMenu || showContact);
      }, 1500);
    }
  }, [showMenu, showContact]);

  return (
    <>
      <Header
        menu={menu}
        contact={contact}
        setShowContact={setShowContact}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      {!showModal && <div>{children}</div>}
      <Footer
        menu={menu}
        setShowContact={setShowContact}
        setShowMenu={setShowMenu}
      />
      <Contact
        showContact={showContact}
        setShowContact={setShowContact}
        contact={contact}
      />
    </>
  );
};

export default Layout;
