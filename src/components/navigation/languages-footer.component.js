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
    <div className="d-block mt-1 mt-xl-0 pt-4 pt-xl-0">
      {languages &&
        languages.map((lng) => (
          <Lang
            key={lng}
            to={originalPath}
            language={lng}
            className="d-flex flex-column d-xl-inline-block"
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
  padding: 0;
  max-height: 30px;
  margin-right: 3rem;
  letter-spacing: 1px;

  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 1199px) {
    margin-right: 0;
  }
`;

export default LanguagesFooter;
