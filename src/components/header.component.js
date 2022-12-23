import React from "react";
import Menu from "./navigation/menu.component";
import { MenuButton } from "./styled-components/menu-button.style";
import LogoSrc from "../assets/img/trouve_blanc.svg";
import styled from "styled-components";
import { Link } from "gatsby-plugin-react-i18next";
import { motion } from "framer-motion";

const Header = ({
  menu,
  contact,
  setShowContact,
  showMenu,
  setShowMenu,
  headerColor,
  path,
}) => {
  const handleShowMenu = ({ headerColor }) => setShowMenu(true);
  return (
    <HeaderWrapper
      initial={{
        transform:
          headerColor === "transparent" || "#000000"
            ? "translateY(-200px)"
            : "translateY(0px)",
      }}
      animate={{ transform: "translateY(0px)" }}
      transition={{
        duration: 1.5,
        delay:
          headerColor === "transparent" || headerColor === "#000000" ? 2 : 0,
        type: "tween",
        easeInOut: 0.3,
      }}
      style={{ backgroundColor: headerColor }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/">
          <Logo src={LogoSrc} alt="Logo" />
        </Link>
        <MenuButton className="pe-2" onClick={handleShowMenu}>
          MENU
        </MenuButton>
        <Menu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          menu={menu}
          contact={contact}
          setShowContact={setShowContact}
          path={path}
        />
      </div>
      <HorizontalLine
        initial={{ width: "0vw" }}
        animate={{ width: "100vw" }}
        transition={{ duration: 2, delay: 4, type: "tween", easeInOut: 0.3 }}
      />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(motion.header)`
  position: fixed !important;
  top: 0;
  width: 100vw;
  color: white;
  z-index: 10;
  transition: background-color 0.3s ease-in;
`;

const Logo = styled.img`
  height: 90px;
`;

const HorizontalLine = styled(motion.div)`
  height: 1.5px;
  background-color: #ffffff;
`;

export default Header;
