import React from "react";
import Card from "./card.component";

const Talent = ({ data }) => {
  return (
    <>
      <div className="scroll-to" id="talent"></div>
      <Card data={data} />;
    </>
  );
};

export default Talent;
