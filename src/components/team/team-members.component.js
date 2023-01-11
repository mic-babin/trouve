import React from "react";
import { useIsMedium } from "../../utils/media-query.hook";
import { useIsXSmall } from "../../utils/media-query.hook";
import Card from "../common/card.component";

const TeamMembers = ({ teamMembers }) => {
  const isMedium = useIsMedium();
  const isXSmall = useIsXSmall();
  return (
    <>
      {teamMembers &&
        teamMembers.map((employee) => {
          const getTitleHeight = () => {
            if (
              isXSmall &&
              employee.name.toUpperCase() === "DAVID-MARC BOUCHARD"
            )
              return "-12px";
            if (employee.name.toUpperCase() === "DAVID-MARC BOUCHARD")
              return "-8px";
            if (isXSmall && employee.name.toUpperCase() === "DAPHNÉ SYLVAIN")
              return "7px";
            return isXSmall ? "15px" : isMedium ? "-8px" : "10px";
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
