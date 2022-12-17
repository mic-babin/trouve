import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import { NavLink } from "../styled-components/nav-link.style";
import { useIsXLarge } from "../../utils/media-query.hook";

const LanguagesFooter = ({ langs }) => {
  const { languages, originalPath, t, i18n } = useI18next();
  const isXLarge = useIsXLarge();

  const getLang = (lng) => {
    if (isXLarge) {
      return lng.toUpperCase();
    }
    return langs.value
      .filter((lang) => lang.toLowerCase().includes(lng))[0]
      .toUpperCase();
  };
  return (
    <LanguagesWrapper className="d-flex justify-content-start ps-sm-3">
      {languages &&
        languages.map((lng) => (
          <Lang
            key={lng}
            to={originalPath}
            language={lng}
            className="flex-grow-1"
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
  @media (max-width: 574px) {
    width: 100%;
  }
`;

const Lang = styled(NavLink)`
  margin-right: 4rem;
  border-bottom: none;
  min-width: 25px;
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
