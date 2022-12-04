import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { MenuButton } from "../components/styled-components/menu-button";
import { Logo } from "../components/styled-components/logo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Menu = ({ showMenu, setShowMenu, menu }) => {
  const { languages, originalPath, t, i18n } = useI18next();

  const { closeTitle, navLinks, langs, featured, logo } = menu;
  console.log(navLinks);
  const handleCloseMenu = () => setShowMenu(false);

  const getLang = (lng) => {
    return langs.value
      .filter((lang) => lang.toLowerCase().includes(lng))[0]
      .toUpperCase();
  };

  const isRealLink = (link, index) => {
    console.log(
      index,
      link.url !== "http://jobs.trouvemtl.com/" && link.url !== undefined
    );
    return link.url !== "http://jobs.trouvemtl.com/" && link.url !== undefined;
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {showMenu && (
        <NavBg
          className="main-header"
          variants={backdrop}
          animate="visible"
          initial="hidden"
        >
          <div className="d-flex justify-content-between align-items-center">
            {logo && <Logo src={logo.url} alt="Logo" />}
            <Languages className="d-flex justify-content-end">
              {languages &&
                languages.map((lng) => (
                  <Lang
                    key={lng}
                    to={originalPath}
                    language={lng}
                    style={{
                      fontFamily:
                        i18n.resolvedLanguage === lng
                          ? "Neue-Italic"
                          : "Neue-Medium",
                    }}
                  >
                    {getLang(lng)}
                  </Lang>
                ))}
            </Languages>
            {closeTitle && (
              <MenuButton onClick={handleCloseMenu}>{closeTitle}</MenuButton>
            )}
          </div>
          <FullHeight className="d-flex flex-column justify-content-end">
            <NavLinks className="row mx-0">
              {navLinks &&
                navLinks.links.map((link, index) => (
                  <LinkWrapper key={link.id} className="col-lg-6">
                    {isRealLink(link, index) && (
                      <NavLink
                        to={link.url}
                        className="d-flex border-bottom-white"
                      >
                        <div className="me-4">0{index + 1}</div>
                        <div>{link.text}</div>
                      </NavLink>
                    )}
                    {link.url === "http://jobs.trouvemtl.com/" && (
                      <NavLink
                        as="a"
                        href={link.url}
                        target="_blank"
                        className="d-flex border-bottom-white"
                      >
                        <div className="me-4">0{index + 1}</div>
                        <div>{link.text}</div>
                      </NavLink>
                    )}
                    {link.text === "SOCIALS" && (
                      <NavLink as="div" className="d-flex border-bottom-white">
                        <div className="me-4">0{index + 1}</div>
                        <div>{link.text}</div>
                      </NavLink>
                    )}
                    {link.text === "CONTACT" && (
                      <NavLink as="div" className="d-flex border-bottom-white">
                        <div className="me-4">0{index + 1}</div>
                        <div>{link.text}</div>
                      </NavLink>
                    )}
                  </LinkWrapper>
                ))}
            </NavLinks>
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

const Languages = styled.div`
  width: calc(50% - 145px);
`;

const NavLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: white;
  padding: 1rem 0;
  &:hover {
    color: white;
  }
`;

const LinkWrapper = styled.div`
  &:nth-of-type(5),
  &:nth-of-type(6) {
    .border-bottom-white {
      border-bottom: none;
    }
  }
`;

const Lang = styled(NavLink)`
  margin: 0 2rem;
  border-bottom: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled(GatsbyImage)`
  height: 40vh;
  margin: 20px;
`;

const NavLinks = styled.nav``;

const FullHeight = styled.div`
  min-height: calc(100vh - 90px);
`;

export default Menu;
