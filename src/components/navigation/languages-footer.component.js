import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import { NavLink } from "../styled-components/nav-link.style";

const LanguagesFooter = ({ langs }) => {
  const { languages, originalPath, t, i18n } = useI18next();

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
            className="d-flex flex-column d-xl-inline-block pb-2 "
            style={{
              fontFamily:
                i18n.resolvedLanguage === lng
                  ? "Neue-LightItalic"
                  : "Neue-Light",
            }}
          >
            <span className="mask">
              <div className="link-container">
                <span className="link-title1 title">{getLang(lng)}</span>
                <span className="link-title2 title">{getLang(lng)}</span>
              </div>
            </span>
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

  @media (max-width: 1199px) {
    margin-right: 0;
    .title {
      text-align: end;
    }
  }
`;

export default LanguagesFooter;
