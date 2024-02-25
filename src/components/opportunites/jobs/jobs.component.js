import React from "react";
import JobCard from "../job-card/job-card.compenent";
import { GridWrapper, NoJobs } from "./jobs.styles";
import { fieldToJobPropertyMap } from "../../../utils/jobs.utils";
import { useJobModal } from "../../../context/job-modal.context";
import { useJob } from "../../../context/job.context";
import JobModal from "../job-modal/job-modal.component";
import { Trans } from "gatsby-plugin-react-i18next";
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
        {jobs.length == 0 && (
          <NoJobs>
            <Trans>nojobs</Trans>
          </NoJobs>
        )}

        {jobs.length > 0 && (
          <div className="row">
            {jobs.map((job, index) => (
              <div className="col-lg-6 col-xl-4 mb-3" key={index}>
                <JobCard job={job} />
              </div>
            ))}
          </div>
        )}
      </GridWrapper>
      <JobModal isOpen={jobModal} />
    </>
  );
};

export default Jobs;
