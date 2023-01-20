import React from "react";
import Card from "../common/card.component";
import { useIsSmall } from "../../utils/media-query.hook";
import { useIsXSmall } from "../../utils/media-query.hook";
import { useIsMedium } from "../../utils/media-query.hook";

const Recruiters = ({ data }) => {
  const isXSmall = useIsXSmall();
  const isSmall = useIsSmall();
  const isMedium = useIsMedium();

  const titleHeight = isXSmall
    ? "17px"
    : isSmall
    ? "-10px"
    : isMedium
    ? "15px"
    : "10px";

  const titleMargin = isXSmall ? "30px" : 0;

  const getImgPosition = () => {
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
