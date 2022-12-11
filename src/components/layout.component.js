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
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      setShowModal(showMenu || showContact);
    } else {
      setShowModal(showMenu || showContact);
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
        headerColor={headerColor}
      />

      <div
        style={
          {
            // height: showMenu ? "calc(100vh)" : "auto",
            // overflow: showMenu ? "hidden" : "auto",
          }
        }
      >
        {children}
        <Footer
          menu={menu}
          setShowContact={setShowContact}
          setShowMenu={setShowMenu}
        />
      </div>
      <ContactWrapper>
        <Contact
          showContact={showContact}
          setShowContact={setShowContact}
          contact={contact}
        />
      </ContactWrapper>
    </>
  );
};

const ContactWrapper = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
`;
export default Layout;
