import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { MenuButton } from "../styled-components/menu-button.style";
import { Logo } from "../styled-components/logo.style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Languages from "./languages.component";
import NavLinks from "./nav-links.component";
import { ModalAnimation } from "../animation/modal.animation";

const Menu = ({ showMenu, setShowMenu, menu, setShowContact }) => {
  const { closeTitle, navLinks, langs, featured, logo } = menu;

  const handleCloseMenu = () => setShowMenu(false);

  return (
    <>
      <AnimatePresence initial={false} custom={ModalAnimation}>
        {showMenu && (
          <NavBg
            variants={ModalAnimation}
            animate="visible"
            initial="hidden"
            exit="hidden"
          >
            <div className="d-flex justify-content-between align-items-center">
              {logo && <Logo src={logo.url} alt="Logo" />}
              <Languages langs={langs} />
              {closeTitle && (
                <MenuButton onClick={handleCloseMenu}>{closeTitle}</MenuButton>
              )}
            </div>
            <motion.div
              className="d-flex flex-column justify-content-end"
              variants={HeightAnimation}
              animate="visible"
              initial="hidden"
              exit="hidden"
            >
              <NavLinks
                navLinks={navLinks}
                setShowContact={setShowContact}
                setShowMenu={setShowMenu}
              />
              {featured && (
                <Image
                  alt="featured"
                  image={getImage(featured.gatsbyImageData)}
                />
              )}
            </motion.div>
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
  top: 0;
  right: 0;
  min-height: 100%;
  overflow: hidden;
  border-radius: 50%;
`;

const Image = styled(GatsbyImage)`
  height: 40vh;
  margin: 20px;
`;

const HeightAnimation = {
  visible: {
    height: "calc(100vh - 90px)",
    transition: { duration: 1.5, type: "linear" },
  },
  hidden: {
    height: "0vh",
    transition: { duration: 1.5, type: "linear" },
  },
};

export default Menu;
