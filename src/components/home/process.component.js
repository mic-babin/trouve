import React from "react";
import { useIsSmall } from "../../utils/media-query.hook";
import { useIsXSmall } from "../../utils/media-query.hook";
import { useIsMedium } from "../../utils/media-query.hook";
import Card from "../common/card.component";
import { useI18next } from "gatsby-plugin-react-i18next";

const Process = ({ data }) => {
  const {
    i18n: { language },
  } = useI18next();
  const isXSmall = useIsXSmall();
  const isSmall = useIsSmall();
  const isMedium = useIsMedium();

  const titleHeight =
    isXSmall && language == "en"
      ? "17px"
      : isSmall && language == "en"
      ? "-10px"
      : isXSmall
      ? "-0px"
      : isSmall
      ? "-33px"
      : isMedium
      ? "-10px"
      : "-25px";

  const titleMargin = isXSmall ? "70px" : isMedium ? "50px" : "0px";
  const getImgPosition = () => {
    return "0% 50%";
  };

  return (
    <Card
      data={data}
      titleHeight={titleHeight}
      titleMargin={titleMargin}
      imgPosition={getImgPosition()}
    />
  );
};

export default Process;
