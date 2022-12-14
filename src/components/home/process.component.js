import React from "react";
import Card from "./card.component";

const Process = ({ data }) => {
  return (
    <>
      <div className="scroll-to" id="process"></div>
      <Card data={data} />
    </>
  );
};

export default Process;
