import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ApplyWrapper,
  Grid,
  JobWrapper,
  Back,
  Wrapper,
  BackLink,
} from "./job-modal.styles";
import JobModalJobOffer from "../job-modal-job-offer/job-modal-job-offer.component";
import JobModalApply from "../job-modal-apply/job-modal-apply.component";
import BackSrc from "../../../assets/img/back.svg";
import BackWhiteSrc from "../../../assets/img/back-white.svg";
import { Link, Trans } from "gatsby-plugin-react-i18next";

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
        <Wrapper
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Grid>
            <Link to="/opportunites" className="d-none d-lg-block">
              <button
                className="back"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Back src={isHovered ? BackWhiteSrc : BackSrc} alt="Back" />
              </button>
            </Link>
            <div className="row me-1 me-sm-3 w-100">
              <BackLink
                to="/opportunites"
                className="d-block d-lg-none col-12 p-3 ms-3 pb-1 order-first"
              >
                <Back src={BackSrc} alt="Back" className="me-3" />
                <Trans>backToJobs</Trans>
              </BackLink>
              <JobWrapper className="col-xl-9 col-md-8 pe-0">
                <JobModalJobOffer job={job} />
              </JobWrapper>
              <ApplyWrapper className="col-xl-3 col-md-4 order-first order-md-last mb-0 px-md-0">
                <JobModalApply job={job} />
              </ApplyWrapper>
            </div>
          </Grid>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

export default JobModal;
