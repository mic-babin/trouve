import { NavLink } from "./nav-link.style";
import styled from "styled-components";

export const AnimatedHeroLink = styled(NavLink)`
  color: ${(props) => props.color};
  font-weight: 600;
  /* padding-left: 50px; */
  position: relative;
  overflow: visible;
  transition: all 0.2s all;
  font-family: "Neue-Light";
  letter-spacing: 2px;
  height: 30px;
  align-items: center;
  text-decoration: none;
  display: flex;

  &:before {
    content: "";
    display: inline-block;
    width: 25px;
    height: 2px;
    background: ${(props) => props.color} !important;
    opacity: 1;
    z-index: 1;
    margin-right: 10px;
    transition: all 0.2s ease-in;
    margin-bottom: 0px;
  }

  &:hover {
    color: ${(props) => props.color};
    &:before {
      width: 50px;
    }
  }

  /* Hide extra text */
  .mask {
    position: relative;
    padding: 0;
    height: 16px;

    /*  Remove overflow to see how it works　:) */
    overflow: hidden;
  }

  .link-container {
    transition: transform 0.3s ease;
    transition-delay: 250ms;
  }

  .title {
    display: block;

    /*  Set same font-size and line height  */
    font-size: 16px;
    line-height: 16px;
    transition: transform 0.3s ease;
    transition-delay: 250ms;
  }

  .link-title1 {
    transform-origin: right center;
  }

  .link-title2 {
    font-weight: 600;
    transform-origin: left center;
    transform: rotate(10deg);
  }

  /* Hover Action*/

  /* Move up two texts (20px = font-size) */
  &:hover .link-container {
    transform: translateY(-16px);
  }

  /* Rotate texts a little bit */
  &:hover .link-title1 {
    transform: rotate(10deg);
  }

  &:hover .link-title2 {
    transform: rotate(0);
  }
`;
