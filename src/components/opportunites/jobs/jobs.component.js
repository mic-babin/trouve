import React from "react";
import JobCard from "../job-card/job-card.compenent";
import { GridWrapper } from "./jobs.styles";
import { fieldToJobPropertyMap } from "../../../utils/jobs.utils";
import { useJobModal } from "../../../context/job-modal.context";
import { useJob } from "../../../context/job.context";
import JobModal from "../job-modal/job-modal.component";
const Jobs = ({ jobs }) => {
  const { job } = useJob();
  const { jobModal } = useJobModal();
  jobs.forEach((job) => {
    job.fieldsValues.forEach((field) => {
      const jobProperty = fieldToJobPropertyMap[field.field.id];
      if (jobProperty) {
        job[jobProperty] = field.value;
      }
    });
  });

  return (
    <>
      <GridWrapper>
        <div className="row">
          {jobs.map((job, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <JobCard job={job} />
            </div>
          ))}
        </div>
      </GridWrapper>
      <JobModal isOpen={jobModal} />
    </>
  );
};

export default Jobs;
