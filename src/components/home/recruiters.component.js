import React from "react";
import Card from "../common/card.component";
import { useIsSmall } from "../../utils/media-query.hook";
import { useIsXSmall } from "../../utils/media-query.hook";
import { useIsMedium } from "../../utils/media-query.hook";
import { useI18next } from "gatsby-plugin-react-i18next";

const Recruiters = ({ data }) => {
  const {
    i18n: { language },
  } = useI18next();

  const isXSmall = useIsXSmall();
  const isSmall = useIsSmall();
  const isMedium = useIsMedium();

  const titleHeight = isXSmall
    ? "17px"
    : isSmall
    ? "-10px"
    : isMedium
    ? "18px"
    : "10px";

  const titleMargin = isXSmall ? "30px" : 0;

  const getImgPosition = () => {
    if (language == "en") return "0% 25%";
    return "0% 20%";
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

export default Recruiters;
