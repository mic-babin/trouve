import React from "react";
import ContactInfo from "../contact/contact-info.component";
import ContactForm from "../contact/contact-form.component";
import LogoSrc from "../../assets/img/trouve.svg";
import styled from "styled-components";
import { MenuButton } from "../styled-components/menu-button.style";
import { Logo } from "../styled-components/logo.style";
import { motion, AnimatePresence } from "framer-motion";
import { ModalAnimation } from "../animation/modal.animation";
import { ModalWrapperAnimation } from "../animation/modal-wrapper.animation";
import { ModalMediumAnimation } from "../animation/modal-medium.animation";
import { useIsMedium } from "../../utils/media-query.hook";
import { useIsSmall } from "../../utils/media-query.hook";
import { ModalContactWrapperMediumAnimation } from "../animation/modal-wrapper-contact-medium.animation";

const Contact = ({ contact, showContact, setShowContact }) => {
  const sections = contact;
  // TODO change title for id
  const contactInfo = sections[0];
  const contactForm = sections[1];
  const close = contactInfo.link.text;
  const handleCloseContact = () => setShowContact(false);

  const isMedium = useIsMedium();
  const isSmall = useIsSmall();
  const ModalVariant = isMedium ? ModalMediumAnimation : ModalAnimation;
  const ModalWrapperVariant = isMedium
    ? ModalContactWrapperMediumAnimation
    : ModalWrapperAnimation;
  return (
    <AnimatePresence initial={false} custom={ModalAnimation}>
      {showContact && (
        <Container
          variants={ModalVariant}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          <ModalWrapper
            className="d-flex flex-column justify-content-between"
            variants={ModalWrapperVariant}
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

            {!isMedium && (
              <Round>
                <FormWrapper>
                  <ContactForm data={contactForm} />
                </FormWrapper>
              </Round>
            )}

            <FullHeight className="row mx-0">
              <div className="col-lg-6">
                <ContactInfo data={contactInfo} />
              </div>
              <div className="col-lg-6">
                {isMedium && <ContactForm data={contactForm} />}
              </div>
            </FullHeight>
          </ModalWrapper>
        </Container>
      )}
    </AnimatePresence>
  );
};

const Container = styled(motion.div)`
  background-color: white;
  color: black;
  position: fixed;
  top: -50vw;
  right: -51vw;
  min-height: 100%;
  overflow-x: hidden;
  border-radius: 50%;
  z-index: 10;

  @media (max-width: 991px) {
    top: -100vw;
    right: 0vw;
  }
`;

const FullHeight = styled.div`
  min-height: calc(100vh - 90px);
  padding-left: 100px;
`;

const CloseButton = styled(MenuButton)`
  color: black;
`;
const ModalWrapper = styled(motion.div)`
  position: absolute;
  top: 50vw;
  left: 50vw;
  width: calc(100vw - 17px);
  height: 100vh;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
    opacity: 0;
  }

  @media (max-width: 991px) {
    left: 100vw;
    width: calc(100vw - 10px) !important;
  }
`;

const FormWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  width: 100%;
  padding: 0 125px;
  transform: translateY(-50%);
`;

const Round = styled.div`
  position: absolute;
  right: 0;
  width: 100vh;
  max-width: 60vw;
  margin-top: max(0, calc(20vw));
  padding-top: min(100vh, 60vw);
  border-radius: 50%;
  border: 1.5px solid black;
`;

export default Contact;
