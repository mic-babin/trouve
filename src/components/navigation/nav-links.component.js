import React from "react";
import styled from "styled-components";
import { WidthAnimation } from "../animation/width.animation";
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
    <LinksWrapper
      className="row mx-0"
      variants={NavHeightAnimation}
      animate="visible"
      initial="hidden"
      exit="hidden"
    >
      {navLinks &&
        navLinks.links.map((link, index) => (
          <LinkWrapper key={link.id} className="col-lg-6">
            {isRealLink(link, index) && (
              <NavLink
                to={link.url !== "/" ? "/" + link.url : link.url}
                className="d-flex border-bottom-white"
                variants={WidthAnimation}
                animate="visible"
                initial="hidden"
                exit="hidden"
              >
                <div className="me-4">0{index + 1}</div>
                <div>{link.text}</div>
              </NavLink>
            )}
            {link.url === "http://jobs.trouvemtl.com/" && (
              <NavLink
                as={motion.a}
                href={link.url}
                target="_blank"
                className="d-flex border-bottom-white"
                variants={WidthAnimation}
                animate="visible"
                initial="hidden"
                exit="hidden"
              >
                <div className="me-4">0{index + 1}</div>
                <div>{link.text}</div>
              </NavLink>
            )}
            {link.title === "SOCIALS" && (
              <Socials
                as={motion.div}
                className="d-flex border-bottom-white pointer"
                variants={WidthAnimation}
                animate="visible"
                initial="hidden"
                exit="hidden"
              >
                <div className="me-4">0{index + 1}</div>
                <div className="me-5">{link.title}</div>
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
            {link.text === "CONTACT" && (
              <NavLink
                as={motion.div}
                onClick={handleShowContact}
                className="d-flex border-bottom-white pointer"
                variants={WidthAnimation}
                animate="visible"
                initial="hidden"
                exit="hidden"
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

const NavHeightAnimation = {
  visible: {
    height: "170px",
    transition: { duration: 0, delay: 1, type: "linear" },
  },
  hidden: {
    height: "0px",
    transition: { duration: 0, delay: 0, type: "linear" },
  },
};
