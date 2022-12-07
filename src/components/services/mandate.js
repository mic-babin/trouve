import React from "react";
import styled from "styled-components";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Link } from "gatsby-plugin-react-i18next";

const Mandate = ({ mandate, setShowContact }) => {
  const { title, textFields, link } = mandate;

  const handleShowContact = () => {
    setShowContact(true);
  };
  return (
    <>
      <Section>
        <div className="container d-flex justify-content-end">
          <div className="w-80">
            {title && <H2>{title}</H2>}
            {textFields &&
              textFields.map((textField) => (
                <Kicker className="py-4" key={textField.id}>
                  {renderRichText(textField.text)}
                </Kicker>
              ))}
            {link && (
              <NavLink as="div" onClick={handleShowContact}>
                – {link.text}
              </NavLink>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Mandate;

const Section = styled.section`
  padding-top: 300px;
  padding-bottom: 150px;
  color: black;

  .w-80 {
    width: 60%;
  }
`;

const H2 = styled.h2`
  font-size: 65px;
`;

const Kicker = styled.div`
  font-size: 20px;
  line-height: 35px;
  letter-spacing: 2px;
  text-align: justify;
`;

const NavLink = styled(Link)`
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  color: black;
  padding: 1rem 0;
  &:hover {
    color: black;
  }
`;
