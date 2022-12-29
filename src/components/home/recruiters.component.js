import React from "react";
import Card from "../common/card.component";

const Recruiters = ({ data }) => {
  return (
    <>
      {/* <div className="scroll-to" id="recruiters"></div> */}
      <Card data={data} titleHeight="10px" />
    </>
  );
};

export default Recruiters;
