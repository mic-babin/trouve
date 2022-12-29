import React from "react";
import Footer from "./navigation/footer.component";
import Header from "./header.component";
import Contact from "./navigation/nous-joindre.component";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/normalize.css";
import "../assets/styles/main.css";
import "../assets/styles/accordion.css";
import { useEffect } from "react";
import styled from "styled-components";

const Layout = ({
  menu,
  children,
  contact,
  showContact,
  setShowContact,
  headerColor,
  path,
  showPage,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      setShowModal(showMenu || showContact);
    } else {
      setShowModal(showMenu || showContact);
    }
  }, [showMenu, showContact, showModal]);

  return (
    <div>
      {showPage && (
        <Header
          menu={menu}
          contact={contact}
          setShowContact={setShowContact}
          showContact={showContact}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          headerColor={headerColor}
          path={path}
        />
      )}
      {children}
      {showPage && (
        <Footer
          menu={menu}
          setShowContact={setShowContact}
          setShowMenu={setShowMenu}
          path={path}
        />
      )}
    </div>
  );
};

const ContactWrapper = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
`;
export default Layout;
