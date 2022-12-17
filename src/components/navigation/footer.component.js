import React from "react";
import styled from "styled-components";
import { Logo } from "../styled-components/logo.style";
import LogoSrc from "../../assets/img/trouve_blanc.svg";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import NavLinks from "./nav-links.component";
import LanguagesFooter from "./languages-footer.component";

const Footer = ({ menu, setShowContact, setShowMenu }) => {
  const { navLinks, langs, copyrights } = menu;

  return (
    <>
      <FooterWrapper>
        <div className="d-flex flex-column flex-lg-row align-items-start px-3 px-lg-0">
          <LogoFooter src={LogoSrc} alt="Logo" className="align-self-center" />
          <div className="flex-grow-1">
            <div className="d-flex flex-column justify-content-end ">
              <NavLinks
                navLinks={navLinks}
                setShowContact={setShowContact}
                setShowMenu={setShowMenu}
              />
            </div>
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-sm-between">
              <LanguagesFooter langs={langs} />
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
  overflow: hidden;
`;

const Copyright = styled.div`
  font-size: 10px;
  padding: 1rem;
  font-family: "Neue-Light";
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
  @media (max-width: 991px) {
    margin: 0;
  }
`;

export default Footer;
