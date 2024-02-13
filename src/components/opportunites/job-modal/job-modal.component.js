import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ApplyWrapper, Grid, JobWrapper, Back } from "./job-modal.styles";
import JobModalJobOffer from "../job-modal-job-offer/job-modal-job-offer.component";
import JobModalApply from "../job-modal-apply/job-modal-apply.component";
import BackSrc from "../../../assets/img/back.svg";
import BackWhiteSrc from "../../../assets/img/back-white.svg";
import { Link } from "gatsby-plugin-react-i18next";

const JobModal = ({ job }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the animation variants
  const backdropVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { x: "100vw", opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {job && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          style={{
            marginTop: 90,
            left: 0,
            width: "100vw",
            backgroundColor: "rgba(255,255,255,0)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Grid>
            <Link to="../">
              <button
                className="back"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Back src={isHovered ? BackWhiteSrc : BackSrc} alt="Back" />
              </button>
            </Link>
            <JobWrapper>
              <JobModalJobOffer job={job} />
            </JobWrapper>
            <ApplyWrapper>
              <JobModalApply job={job} />
            </ApplyWrapper>
          </Grid>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JobModal;
