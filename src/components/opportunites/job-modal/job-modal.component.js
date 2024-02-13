import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ApplyWrapper, Grid, JobWrapper } from "./job-modal.styles";
import { useJobModal } from "../../../context/job-modal.context";
import { useJob } from "../../../context/job.context";
import JobModalJobOffer from "../job-modal-job-offer/job-modal-job-offer.component";
import JobModalApply from "../job-modal-apply/job-modal-apply.component";

const JobModal = () => {
  const { jobModal, setJobModal } = useJobModal();
  const { job } = useJob();
  // Define the animation variants
  const backdropVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { x: "100vw", opacity: 0, transition: { duration: 0.5 } },
  };

  const closeModal = () => setJobModal(false);

  return (
    <AnimatePresence>
      {jobModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          style={{
            position: "fixed",
            top: 90,
            left: 0,
            width: "100vw",
            height: "100vh - 90px",
            backgroundColor: "rgba(255,255,255,0)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <Grid>
            <button
              type="button"
              className="back"
              onClick={closeModal}
            ></button>
            <JobWrapper>
              <JobModalJobOffer />
            </JobWrapper>
            <ApplyWrapper>
              <JobModalApply />
            </ApplyWrapper>
          </Grid>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JobModal;
