import React from "react";
import Card from "../common/card.component";

const Talent = ({ data }) => {
  return (
    <>
      {/* <div className="scroll-to" id="talent"></div> */}
      <Card data={data} titleHeight="10px" />;
    </>
  );
};

export default Talent;
