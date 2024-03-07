import React from "react";
import JobCard from "../job-card/job-card.compenent";
import { GridWrapper, NoJobs } from "./jobs.styles";
import { fieldToJobPropertyMap } from "../../../utils/jobs.utils";
import { useJobModal } from "../../../context/job-modal.context";
import { useJob } from "../../../context/job.context";
import JobModal from "../job-modal/job-modal.component";
import { Trans } from "gatsby-plugin-react-i18next";
import { motion, AnimatePresence } from "framer-motion";

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
            <AnimatePresence>
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id} // Assuming each job has a unique id for a better key than index
                  className="col-lg-6 col-xl-4 mb-3"
                  initial={{ opacity: 0, y: 50 }} // Initial state of the card
                  animate={{ opacity: 1, y: 0 }} // Animate to visible and in position
                  exit={{ opacity: 0, y: -50 }} // Exit state (optional, if you want to animate out)
                  transition={{
                    delay: index * 0.1 + 1.5, // Each card's animation delay based on its index
                    duration: 0.5, // Duration of the animation
                  }}
                >
                  <JobCard job={job} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </GridWrapper>
      <JobModal isOpen={jobModal} />
    </>
  );
};

export default Jobs;
