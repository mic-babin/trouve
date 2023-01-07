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

  return (
    <>
      {/* <div className="scroll-to" id="recruiters"></div> */}
      <Card data={data} titleHeight={titleHeight} titleMargin={titleMargin} />
    </>
  );
};

export default Recruiters;
