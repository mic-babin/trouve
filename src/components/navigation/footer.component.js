import React from "react";
import styled from "styled-components";
import { Logo } from "../styled-components/logo.style";
import LogoSrc from "../../assets/img/trouve_blanc.svg";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import NavLinks from "./nav-links.component";
import Languages from "./languages.component";

const Footer = ({ menu, setShowContact, setShowMenu }) => {
  const { navLinks, langs, copyrights } = menu;

  return (
    <>
      <FooterWrapper>
        <div className="d-flex align-items-start">
          <LogoFooter src={LogoSrc} alt="Logo" />
          <div className="flex-grow-1">
            <div className="d-flex flex-column justify-content-end">
              <NavLinks
                navLinks={navLinks}
                setShowContact={setShowContact}
                setShowMenu={setShowMenu}
              />
            </div>
            <div className="d-flex justify-content-between">
              <Languages langs={langs} />
              <Copyright>{renderRichText(copyrights)}</Copyright>
            </div>
          </div>
        </div>
      </FooterWrapper>
    </>
  );
};

const FooterWrapper = styled.footer`
  background-color: black;
  color: white;
  padding: 100px 0;
`;

const Copyright = styled.div`
  font-size: 10px;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`;

const LogoFooter = styled(Logo)`
  margin: 0 100px;
`;

export default Footer;
