import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import styled from "styled-components";

import { Logo } from "../components/styled-components/logo";
import LogoSrc from "../assets/img/trouve_blanc.svg";
import { useState } from "react";
import Contact from "./nous-joindre";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Footer = ({ menu, contact }) => {
  const { languages, originalPath, t, i18n } = useI18next();
  const { navLinks, langs, copyrights } = menu;
  const [showContact, setShowContact] = useState(false);
  const handleShowContact = () => {
    setShowContact(true);
  };

  const getLang = (lng) => {
    return langs.value
      .filter((lang) => lang.toLowerCase().includes(lng))[0]
      .toUpperCase();
  };

  const isRealLink = (link) => {
    return link.url !== "http://jobs.trouvemtl.com/" && link.url !== undefined;
  };
  return (
    <>
      <FooterWrapper>
        <div className="d-flex align-items-start">
          <LogoFooter src={LogoSrc} alt="Logo" />
          <div className="flex-grow-1">
            <div className="d-flex flex-column justify-content-end">
              <div className="row mx-0">
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
                        <NavLink
                          as="div"
                          className="d-flex border-bottom-white pointer"
                        >
                          <div className="me-4">0{index + 1}</div>
                          <div>{link.text}</div>
                        </NavLink>
                      )}
                      {link.text === "CONTACT" && (
                        <NavLink
                          onClick={handleShowContact}
                          as="div"
                          className="d-flex border-bottom-white pointer"
                        >
                          <div className="me-4">0{index + 1}</div>
                          <div>{link.text}</div>
                        </NavLink>
                      )}
                    </LinkWrapper>
                  ))}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <Languages className="d-flex start">
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
                            : "Neue",
                      }}
                    >
                      {getLang(lng)}
                    </Lang>
                  ))}
              </Languages>
              <Copyright>{renderRichText(copyrights)}</Copyright>
            </div>
          </div>
        </div>
      </FooterWrapper>

      <Contact
        showContact={showContact}
        setShowContact={setShowContact}
        contact={contact}
      />
    </>
  );
};

const FooterWrapper = styled.footer`
  background-color: black;
  color: white;
  padding: 100px 0;
`;

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
  margin-right: 4rem;
  border-bottom: none;
  &:hover {
    text-decoration: underline;
  }
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
