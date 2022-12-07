import React from "react";
import ContactInfo from "./contact/contact-info";
import ContactForm from "./contact/contact-form";
import LogoSrc from "../assets/img/trouve.svg";
import styled from "styled-components";
import { MenuButton } from "./styled-components/menu-button";
import { Logo } from "./styled-components/logo";
import { motion, AnimatePresence } from "framer-motion";

const Contact = ({ contact, showContact, setShowContact }) => {
  const sections = contact;
  // TODO change title for id
  const contactInfo = sections[0];
  const contactForm = sections[1];
  const close = contactInfo.link.text;

  const handleCloseContact = () => setShowContact(false);
  return (
    <AnimatePresence exitBeforeEnter>
      {showContact && (
        <Container variants={backdrop} animate="visible" initial="hidden">
          <div className="d-flex justify-content-between align-items-center">
            <Logo src={LogoSrc} alt="Logo" />
            {close && (
              <CloseButton onClick={handleCloseContact}>{close}</CloseButton>
            )}
          </div>
          <div className="container">
            <FullHeight className="row">
              <div className="col-lg-6">
                <ContactInfo data={contactInfo} />
              </div>
              <div className="col-lg-6">
                <ContactForm data={contactForm} />
              </div>
            </FullHeight>
          </div>
        </Container>
      )}
    </AnimatePresence>
  );
};

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: white;
  z-index: 10;
`;

const FullHeight = styled.div`
  min-height: calc(100vh - 90px);
`;

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const CloseButton = styled(MenuButton)`
  color: black;
`;
export default Contact;
