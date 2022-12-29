import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import { NavLink } from "../styled-components/nav-link.style";
import { useIsXSmall } from "../../utils/media-query.hook";

const LanguagesFooter = ({ langs }) => {
  const { languages, originalPath, t, i18n } = useI18next();
  const isXSmall = useIsXSmall();

  const getLang = (lng) => {
    if (isXSmall) return lng.toUpperCase();
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
            className="d-inline-block d-sm-flex flex-column d-lg-inline-block align-items-end"
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
  margin-left: 3rem;
  margin-right: 12px;
  margin-top: -6px;
  letter-spacing: 1px;
  max-height: 30px;

  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 991px) {
    margin-left: 2rem;
    margin-top: 0px;
  }
  @media (max-width: 767px) {
    margin-left: 1rem;
    /* margin-left: 1rem; */
  }
  @media (max-width: 574px) {
    margin: 0 1rem;
  }
`;

export default LanguagesFooter;
