import React from "react";
import { useIsSmall } from "../../utils/media-query.hook";
import { useIsXSmall } from "../../utils/media-query.hook";
import { useIsMedium } from "../../utils/media-query.hook";
import Card from "../common/card.component";

const Process = ({ data }) => {
  const isXSmall = useIsXSmall();
  const isSmall = useIsSmall();
  const isMedium = useIsMedium();

  const titleHeight = isXSmall
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
