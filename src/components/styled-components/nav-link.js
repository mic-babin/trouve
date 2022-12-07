import styled from "styled-components";
import { Link } from "gatsby-plugin-react-i18next";
import { motion } from "framer-motion";

export const NavLink = styled(motion(Link))`
  font-size: 16px;
  text-decoration: none;
  color: white;
  padding: 1rem 0;
  overflow: hidden;
  height: 57px;
  &:hover {
    color: white;
  }
`;
