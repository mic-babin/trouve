import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import { NavLink } from "../styled-components/nav-link.style";
import { useIsXLarge } from "../../utils/media-query.hook";

const LanguagesFooter = ({ langs }) => {
  const { languages, originalPath, t, i18n } = useI18next();
  const isXLarge = useIsXLarge();

  const getLang = (lng) => {
    return langs.value
      .filter((lang) => lang.toLowerCase().includes(lng))[0]
      .toUpperCase();
  };
  return (
    <div className="d-block">
      {languages &&
        languages.map((lng) => (
          <Lang
            key={lng}
            to={originalPath}
            language={lng}
            className="d-inline-block"
            style={{
              fontFamily:
                i18n.resolvedLanguage === lng
                  ? "Neue-LightItalic"
                  : "Neue-Light",
            }}
          >
            {getLang(lng)}
          </Lang>
        ))}
    </div>
  );
};

const Lang = styled(NavLink)`
  margin-right: 3rem;
  letter-spacing: 1px;

  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 991px) {
    margin-right: 2rem;
  }
  @media (max-width: 767px) {
    margin-right: 1rem;
    /* margin-left: 1rem; */
  }
  @media (max-width: 574px) {
    margin: 0 1rem;
  }
`;

export default LanguagesFooter;
