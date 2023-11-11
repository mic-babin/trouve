import React from "react";
import styled from "styled-components";
import { Logo } from "../styled-components/logo.style";
import LogoSrc from "../../assets/img/trouve_blanc.svg";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import NavLinks from "./nav-links.component";
import LanguagesFooter from "./languages-footer.component";
import { Link } from "gatsby";
import { useIsLarge } from "../../utils/media-query.hook";

const Footer = ({ menu, setShowContact, setShowMenu, path }) => {
  const { navLinks, langs, copyrights } = menu;
  const isLarge = useIsLarge();

  return (
    <>
      <FooterWrapper>
        <div className="d-flex flex-column flex-xl-row align-items-start px-3 px-xl-0 ">
          <div className="d-flex justify-content-between w-100">
            <Link to="/">
              <LogoFooter
                src={LogoSrc}
                alt="Logo"
                className="align-self-center"
              />
            </Link>
            {isLarge && (
              <div className="pe-2">
                <LanguagesFooter langs={langs} />
              </div>
            )}
          </div>

          <div className="flex-grow-1 w-100">
            <div className="d-flex flex-column justify-content-end pe-xl-3">
              <NavLinks
                navLinks={navLinks}
                setShowContact={setShowContact}
                setShowMenu={setShowMenu}
                path={path}
                isFooter={true}
              />
            </div>
            <div className="d-flex align-items-center justify-content-end justify-content-xl-between pt-5 pe-xl-3">
              {!isLarge && (
                <div className="ps-2 ms-1">
                  <LanguagesFooter langs={langs} />
                </div>
              )}
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

  @media (min-width: 1199px) {
    .w-100 {
      width: auto !important;
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 0;
    padding-top: 75px;
  }
`;

const Copyright = styled.div`
  font-size: 10px;
  padding: 1rem;
  font-family: "Neue-Light";
  margin-top: 7px;
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
  /* width: 257px */
  height: 90px;
  margin: -10px 100px;
  @media (max-width: 1199px) {
    margin: 0;
    margin-bottom: 100px;
  }
  @media (max-width: 767px) {
    margin-left: -10px;
    margin-bottom: 50px;
  }
`;

export default Footer;
