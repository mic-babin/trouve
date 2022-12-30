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
    ? "20px"
    : isSmall
    ? "15px"
    : isMedium
    ? "15px"
    : "10px";
  return (
    <>
      {/* <div className="scroll-to" id="talent"></div> */}
      <Card data={data} titleHeight={titleHeight} />;
    </>
  );
};

export default Talent;
