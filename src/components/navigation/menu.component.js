import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { MenuButton } from "../styled-components/menu-button.style";
import { Logo } from "../styled-components/logo.style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Languages from "./languages.component";
import NavLinks from "./nav-links.component";
import { ModalAnimation } from "../animation/modal.animation";
import { ModalWrapperAnimation } from "../animation/modal-wrapper.animation";
import { ModalMediumAnimation } from "../animation/modal-medium.animation";
import { useIsMedium } from "../../utils/media-query.hook";
import { useIsSmall } from "../../utils/media-query.hook";
import { Link } from "gatsby-plugin-react-i18next";

const Menu = ({ showMenu, setShowMenu, menu, setShowContact }) => {
  const { closeTitle, navLinks, langs, featured, logo } = menu;

  const handleCloseMenu = () => setShowMenu(false);
  const isMedium = useIsMedium();
  const isSmall = useIsSmall();
  const ModalVariant = isMedium ? ModalMediumAnimation : ModalAnimation;

  return (
    <>
      <AnimatePresence initial={false} custom={ModalAnimation}>
        {showMenu && (
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
              <div className="d-flex justify-content-between align-items-center ">
                {logo && (
                  <>
                    <LogoLink to="/">
                      <Logo src={logo.url} alt="Logo" />
                    </LogoLink>
                  </>
                )}
                <div className="d-flex justify-content-end flex-grow-1">
                  {isSmall && <Languages classname="" langs={langs} />}
                </div>

                {closeTitle && (
                  <MenuButton onClick={handleCloseMenu}>
                    {closeTitle}
                  </MenuButton>
                )}
              </div>
              {!isSmall && (
                <SmallLanguagesWrapper className="d-flex justify-content-end">
                  <Languages langs={langs} />
                </SmallLanguagesWrapper>
              )}
              <motion.div className="d-flex flex-column justify-content-end">
                <NavLinks
                  navLinks={navLinks}
                  setShowContact={setShowContact}
                  setShowMenu={setShowMenu}
                />
                {featured && (
                  <ImageWrapper>
                    <Image
                      alt="TODO"
                      image={getImage(featured.gatsbyImageData)}
                    />
                  </ImageWrapper>
                )}
              </motion.div>
            </ModalWrapper>
          </NavBg>
        )}
      </AnimatePresence>
    </>
  );
};

const NavBg = styled(motion.div)`
  background-color: black;
  color: white;
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
  width: calc(100vw - 17px);
  overflow: hidden;
  @media (max-width: 991px) {
    left: 100vw;
    width: calc(100vw - 10px) !important;
  }
`;

const ImageWrapper = styled.div`
  width: calc(100vw - 17px);
  padding: 12px;
  overflow: hidden;
  @media (max-width: 991px) {
    width: calc(100vw -10px) !important;
  }
`;

const Image = styled(GatsbyImage)`
  height: 40vh;
  max-width: calc(100vw - 14px);
  @media (max-width: 991px) {
    width: calc(100vw) !important;
  }
`;

const SmallLanguagesWrapper = styled.div`
  transform: translateY(-40px);
`;

const LogoLink = styled(Link)`
  height: 90x;
  min-width: 373px;
`;
export default Menu;
