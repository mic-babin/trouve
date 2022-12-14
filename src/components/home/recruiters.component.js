import React from "react";
import Card from "./card.component";

const Recruiters = ({ data }) => {
  return (
    <>
      <div className="scroll-to" id="recruiters"></div>
      <Card data={data} />
    </>
  );
};

export default Recruiters;
