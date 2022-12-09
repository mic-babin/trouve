import React from "react";
import styled from "styled-components";
import { NavLink } from "../styled-components/nav-link.style";
import { motion } from "framer-motion";

const NavLinks = ({ navLinks, setShowContact, setShowMenu }) => {
  const handleShowContact = () => {
    setShowMenu(false);
    setShowContact(true);
  };

  const isRealLink = (link) => {
    return link.url !== "http://jobs.trouvemtl.com/" && link.url !== undefined;
  };

  return (
    <LinksWrapper className="row mx-0">
      {navLinks &&
        navLinks.links.map((link, index) => (
          <LinkWrapper key={link.id} className="col-lg-6">
            {isRealLink(link, index) && (
              <NavLink
                to={link.url !== "/" ? "/" + link.url : link.url}
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
            {(link.title === "SOCIAL MEDIA" ||
              link.title === "RÉSEAUX SOCIAUX ") && (
              <Socials as="div" className="d-flex border-bottom-white pointer">
                <div className="me-3">0{index + 1}</div>
                <div className="me-4">{link.title}</div>
                <div>
                  {link.socialLinks &&
                    link.socialLinks.map((socialLink) => (
                      <NavLink
                        key={socialLink.id}
                        as="a"
                        href={socialLink.url}
                        target="_blank"
                        className="me-4 social"
                      >
                        {socialLink.text}
                      </NavLink>
                    ))}
                </div>
              </Socials>
            )}
            {(link.text === "CONTACT US" || link.text === "NOUS CONTACTER") && (
              <NavLink
                as="div"
                onClick={handleShowContact}
                className="d-flex border-bottom-white pointer"
              >
                <div className="me-4">0{index + 1}</div>
                <div>{link.text}</div>
              </NavLink>
            )}
          </LinkWrapper>
        ))}
    </LinksWrapper>
  );
};

export default NavLinks;

const LinkWrapper = styled.div`
  &:nth-of-type(5),
  &:nth-of-type(6) {
    .border-bottom-white {
      border-bottom: none;
    }
  }
  @media (max-width: 991px) {
    &:nth-of-type(5) {
      .border-bottom-white {
        border-bottom: 1px solid white;
      }
    }
  }
`;

const Socials = styled(NavLink)`
  .social {
    display: none;
    opacity: 0;
  }

  &:hover {
    .social {
      display: inline;
      opacity: 1;
      color: white;
      font-family: "Neue-Italic";

      &:hover {
        font-family: "Neue";
      }
    }
  }
`;

const LinksWrapper = styled(motion.div)`
  overflow: hidden;
`;
