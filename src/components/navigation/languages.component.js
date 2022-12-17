import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import { NavLink } from "../styled-components/nav-link.style";
import { useIsMedium } from "../../utils/media-query.hook";

const Languages = ({ langs }) => {
  const { languages, originalPath, t, i18n } = useI18next();
  const isMedium = useIsMedium();
  const getLang = (lng) => {
    if (isMedium) {
      return lng.toUpperCase();
    }
    return langs.value
      .filter((lang) => lang.toLowerCase().includes(lng))[0]
      .toUpperCase();
  };
  return (
    <LanguagesWrapper className="d-flex justify-content-end justify-content-md-center">
      {languages &&
        languages.map((lng) => (
          <Lang
            key={lng}
            to={originalPath}
            language={lng}
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
    </LanguagesWrapper>
  );
};

const LanguagesWrapper = styled.div`
  width: calc(50% - 145px);
`;

const Lang = styled(NavLink)`
  margin-right: 4rem;
  border-bottom: none;
  min-width: 25px;
  letter-spacing: 2px;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 991px) {
    margin-right: 2rem;
  }
  @media (max-width: 767px) {
    margin-right: 0;
    margin-left: 1rem;
  }
`;

export default Languages;
