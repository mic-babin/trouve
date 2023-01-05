import styled from "styled-components";

export const AnimatedLink = styled.div`
  /* Hide extra text */
  .mask {
    position: relative;
    display: inline-block;
    padding: 0;
    height: 15px;
    overflow: hidden;
  }

  .link-container {
    transition: transform 0.3s ease;
  }

  .title {
    display: block;
    font-size: 16px;
    line-height: 16px;
    transition: transform 0.3s ease;
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
  &:hover .link-container {
    transform: translateY(-16px);
  }

  &:hover .link-title1 {
    transform: rotate(10deg);
  }

  &:hover .link-title2 {
    transform: rotate(0);
  }
`;
