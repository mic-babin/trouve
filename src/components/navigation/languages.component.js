import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import { NavLink } from "../styled-components/nav-link.style";

const Languages = ({ langs }) => {
  const { languages, originalPath, t, i18n } = useI18next();
  const getLang = (lng) => {
    return langs.value
      .filter((lang) => lang.toLowerCase().includes(lng))[0]
      .toUpperCase();
  };
  return (
    <LanguagesWrapper className="d-flex">
      {languages &&
        languages.map((lng) => (
          <Lang
            key={lng}
            to={originalPath}
            language={lng}
            style={{
              fontFamily:
                i18n.resolvedLanguage === lng ? "Neue-Italic" : "Neue",
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
  &:hover {
    text-decoration: underline;
  }
`;

export default Languages;
