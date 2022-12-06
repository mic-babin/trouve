import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { MenuButton } from "../styled-components/menu-button";
import { Logo } from "../styled-components/logo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useState } from "react";
import Contact from "../nous-joindre";
import Languages from "./languages";
import NavLinks from "./nav-links";

const Menu = ({ showMenu, setShowMenu, menu, contact }) => {
  const { closeTitle, navLinks, langs, featured, logo } = menu;

  const handleCloseMenu = () => setShowMenu(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {showMenu && (
          <NavBg variants={backdrop} animate="visible" initial="hidden">
            <div className="d-flex justify-content-between align-items-center">
              {logo && <Logo src={logo.url} alt="Logo" />}
              <Languages langs={langs} />
              {closeTitle && (
                <MenuButton onClick={handleCloseMenu}>{closeTitle}</MenuButton>
              )}
            </div>
            <FullHeight className="d-flex flex-column justify-content-end">
              <NavLinks navLinks={navLinks} setShowContact={setShowContact} />
              {featured && (
                <Image
                  alt="featured"
                  image={getImage(featured.gatsbyImageData)}
                />
              )}
            </FullHeight>
          </NavBg>
        )}
      </AnimatePresence>
      <Contact
        showContact={showContact}
        setShowContact={setShowContact}
        contact={contact}
      />
    </>
  );
};

const NavBg = styled(motion.div)`
  background-color: black;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100vw;
`;

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Image = styled(GatsbyImage)`
  height: 40vh;
  margin: 20px;
`;

const FullHeight = styled.div`
  min-height: calc(100vh - 90px);
`;

export default Menu;
