import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { MenuButton } from "../styled-components/menu-button.style";
import { Logo } from "../styled-components/logo.style";
import ContactInfo from "../contact/contact-info.component";
import ContactForm from "../contact/contact-form.component";
import Circle from "../animation/bg-circle.components";
import { ModalAnimation } from "../animation/modal.animation";
import { ModalWrapperAnimation } from "../animation/modal-wrapper.animation";
import { ModalMediumAnimation } from "../animation/modal-medium.animation";
import { useIsMedium } from "../../utils/media-query.hook";
import { useIsSmall } from "../../utils/media-query.hook";
import { useIsLarge } from "../../utils/media-query.hook";
import { useIsXLarge } from "../../utils/media-query.hook";
import LogoSrc from "../../assets/img/trouve.svg";
import { useEffect, useState, useRef } from "react";
import CloseSrc from "../../assets/img/close.svg";

const Menu = ({ setShowContact, showContact, contact }) => {
  const sections = contact;
  // TODO change title for id
  const contactInfo = sections[0];
  const contactForm = sections[1];
  const close = contactInfo ? contactInfo.link.text : "";
  const handleCloseContact = () => setShowContact(false);

  const isMedium = useIsMedium();
  const isLarge = useIsLarge();
  const isXLarge = useIsXLarge();
  const isSmall = useIsSmall();
  const ModalVariant = isMedium ? ModalMediumAnimation : ModalAnimation;

  const round = useRef();
  const [roundSize, setRoundSize] = useState(0);
  const handleResize = () => {
    setRoundSize(round?.current?.offsetWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      return () => window.removeEventListener("resize", handleResize);
    };
  }, [contact, showContact]);

  return (
    <>
      <AnimatePresence initial={false} custom={ModalAnimation}>
        {showContact && (
          <NavBg
            variants={ModalVariant}
            animate="visible"
            initial="hidden"
            exit="hidden"
          >
            <ModalWrapper
              className="d-flex flex-column justify-content-between"
              variants={ModalWrapperAnimation}
              animate="visible"
              initial="hidden"
              exit="hidden"
            >
              <div className="d-flex justify-content-between align-items-center">
                <Logo src={LogoSrc} alt="Logo" />
                {close && (
                  <CloseButton onClick={handleCloseContact}>
                    {isSmall ? <Close src={CloseSrc} alt="Close" /> : close}
                  </CloseButton>
                )}
              </div>
              {!isLarge && (
                <>
                  {!isXLarge && (
                    <CircleWrapper>
                      <Circle
                        roundSize={roundSize}
                        color={"black"}
                        isInView={showContact}
                      />
                    </CircleWrapper>
                  )}

                  <FormWrapper ref={round}>
                    <ContactForm data={contactForm} />
                  </FormWrapper>
                </>
              )}

              <FullHeight className="row mx-0">
                <div className="col-xl-6">
                  <ContactInfo data={contactInfo} />
                </div>
                <div className="col-xl-6 py-5 py-xl-0">
                  {isLarge && <ContactForm data={contactForm} />}
                </div>
              </FullHeight>
            </ModalWrapper>
          </NavBg>
        )}
      </AnimatePresence>
    </>
  );
};

const NavBg = styled(motion.div)`
  background-color: white;
  color: black;
  position: absolute;
  top: -50vw;
  right: -50vw;
  min-height: 100%;
  overflow: hidden;
  border-radius: 50%;
  @media (max-width: 991px) {
    right: 0vw;
  }
`;

const ModalWrapper = styled(motion.div)`
  position: absolute;
  top: 50vw;
  left: 50vw;
  height: 100vh;
  width: 100vw;
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

const CloseButton = styled(MenuButton)`
  color: black;
  z-index: 2;
`;

const Close = styled.img`
  height: 30px;
  margin-top: -6px;
`;

const FullHeight = styled.div`
  min-height: calc(100vh - 90px);
  padding: 120px;
  @media (max-width: 767px) {
    padding: 100px 5vw;
  }
`;

const FormWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  padding: 0 125px;
  transform: translateY(-50%);
  width: 100vh;
  max-width: 60vw;
  z-index: 1;
`;

const CircleWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
  @media (max-width: 1560px) {
    margin-top: calc((100vh - 60vw) / 2);
  }
`;
export default Menu;
