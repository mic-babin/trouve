import React from "react";
import Card from "../home/card.component";

const TeamMembers = ({ teamMembers }) => {
  return (
    <>
      {teamMembers &&
        teamMembers.map((employee) => {
          const getTitleHeight = () => {
            if (
              employee.name.toUpperCase() === "ANNIE-CLAUDE ROY" ||
              employee.name.toUpperCase() === "DAVID-MARC BOUCHARD"
            ) {
              return "10px";
            }
            return "10px";
          };

          return (
            <Card
              data={employee}
              key={employee.id}
              cardHeight="563px"
              titleHeight={getTitleHeight()}
            />
          );
        })}
    </>
  );
};

export default TeamMembers;
