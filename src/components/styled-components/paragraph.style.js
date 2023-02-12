import styled from "styled-components";
import { Kicker } from "./kicker.style";

export const Paragraph = styled(Kicker)`
  max-width: 684px;
  padding-bottom: 50px;

  @media (max-width: 1199px) {
    max-width: 55vw;
  }
  @media (max-width: 991px) {
    max-width: 80vw;
  }
  @media (max-width: 767px) {
    font-size: 22px;
    line-height: 26px;
    padding-bottom: 30px;
  }

  @media (max-width: 576px) {
    &.about-paragraph:nth-of-type(2) {
      padding-bottom: 0px;
    }
    &.experience-paragraph {
      padding-bottom: 0px;
    }
  }
`;
