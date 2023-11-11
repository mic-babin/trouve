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
              return "-20px";
            if (employee.name.toUpperCase() === "DAVID-MARC BOUCHARD")
              return isMedium ? "-8px" : "-25px";

            return isXSmall ? "-20px" : isMedium ? "-8px" : "-25px";
          };

          const getImgPosition = () => {
            if (employee.name.toUpperCase() === "ANNIE-CLAUDE ROY")
              return "center 60%";
            if (employee.name.toUpperCase() === "RACHEL MARTIN")
              return "center 60%";
            if (employee.name.toUpperCase() === "DAPHNÉ SYLVAIN")
              return "center 40%";
            if (employee.name.toUpperCase() === "MELISSA CARBONNE")
              return "center 40%";
            if (employee.name.toUpperCase() === "DAVID-MARC BOUCHARD")
              return "center 60%";
            return "center 40%";
          };

          return (
            <Card
              data={employee}
              key={employee.id}
              titleHeight={getTitleHeight()}
              imgPosition={getImgPosition()}
            />
          );
        })}
    </>
  );
};

export default TeamMembers;
