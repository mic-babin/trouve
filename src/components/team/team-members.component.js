import React from "react";
import { useIsMedium } from "../../utils/media-query.hook";
import Card from "../common/card.component";

const TeamMembers = ({ teamMembers }) => {
  const isMedium = useIsMedium();
  return (
    <>
      {teamMembers &&
        teamMembers.map((employee) => {
          const getTitleHeight = () => {
            if (employee.name.toUpperCase() === "DAVID-MARC BOUCHARD") {
              return "-8px";
            }
            return isMedium ? "-8px" : "10px";
          };

          return (
            <Card
              data={employee}
              key={employee.id}
              titleHeight={getTitleHeight()}
            />
          );
        })}
    </>
  );
};

export default TeamMembers;
