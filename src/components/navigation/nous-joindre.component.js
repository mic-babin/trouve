import React from "react";
import ContactInfo from "../contact/contact-info.component";
import ContactForm from "../contact/contact-form.component";
import LogoSrc from "../../assets/img/trouve.svg";
import styled from "styled-components";
import { MenuButton } from "../styled-components/menu-button.style";
import { Logo } from "../styled-components/logo.style";
import { motion, AnimatePresence } from "framer-motion";
import { ModalAnimation } from "../animation/modal.animation";

const Contact = ({ contact, showContact, setShowContact }) => {
  const sections = contact;
  // TODO change title for id
  console.log(contact);
  const contactInfo = sections[0];
  const contactForm = sections[1];
  const close = contactInfo.link.text;
  const handleCloseContact = () => setShowContact(false);
  return (
    <AnimatePresence initial={false} custom={ModalAnimation}>
      {showContact && (
        <Container
          variants={ModalAnimation}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
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
  right: 0;
  width: 100vw;
  background-color: white;
  z-index: 10;
  overflow: hidden;
  border-radius: 50%;
`;

const FullHeight = styled.div`
  min-height: calc(100vh - 90px);
`;

const CloseButton = styled(MenuButton)`
  color: black;
`;
export default Contact;