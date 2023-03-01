import React from "react";
import Card from "../common/card.component";
import { useIsSmall } from "../../utils/media-query.hook";
import { useIsXSmall } from "../../utils/media-query.hook";
import { useIsMedium } from "../../utils/media-query.hook";

const Talent = ({ data }) => {
  const isXSmall = useIsXSmall();
  const isSmall = useIsSmall();
  const isMedium = useIsMedium();

  const titleHeight = isXSmall
    ? "32px"
    : isSmall
    ? "15px"
    : isMedium
    ? "15px"
    : "10px";
  const getImgPosition = () => {
    return "0% 50%";
  };

  return (
    <Card
      data={data}
      titleHeight={titleHeight}
      imgPosition={getImgPosition()}
    />
  );
};

export default Talent;
