import React from "react";
import { Card } from "./job-modal-job-offer.styles";
import { useJob } from "../../../context/job.context";
import { useState } from "react";
import { Trans } from "gatsby-plugin-react-i18next";

const JobModalJobOffer = () => {
  const { job } = useJob();
  const [open, setOpen] = useState(false);

  // Handler to toggle the share options
  const toggleShareOptions = () => setOpen(!open);

  // Placeholder functions for share actions
  const shareTwitter = () => console.log("Sharing to Twitter...");
  const shareFacebook = () => console.log("Sharing to Facebook...");
  const shareLinkedin = () => console.log("Sharing to LinkedIn...");

  job.skills = job.skills.replace(/<\/?p[^>]*>/g, "");
  job.responsibilities = job.responsibilities.replace(/<\/?p[^>]*>/g, "");

  return (
    <Card>
      <div className="card description">
        <div className="job-heading">
          <span className="fill"></span>
          <div className={`job-actions ${open ? "share-open" : ""}`}>
            <div className="share-outlets">
              {open && (
                <>
                  <a
                    href={`mailto:?subject=Gérant(e) de Magasin&body=Check out this Gérant(e) de Magasin job: ${window.location.href}`}
                  >
                    <i className="bhi-email"></i>1
                  </a>
                  <a onClick={shareTwitter}>
                    <i className="bhi-twitter"></i>2
                  </a>
                  <a onClick={shareFacebook}>
                    <i className="bhi-facebook"></i>3
                  </a>
                  <a onClick={shareLinkedin}>
                    <i className="bhi-linkedin"></i>4
                  </a>
                </>
              )}
            </div>
            <button onClick={toggleShareOptions}>
              <i className="bhi-share"></i> Share
            </button>
            <button onClick={() => window.print()}>
              <i className="bhi-print"></i> Print
            </button>
          </div>
          <h2>
            <Trans>jobOffer</Trans>
          </h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: job.description }}></div>

        <strong>
          <u>
            <Trans>jobSummary</Trans>
          </u>
        </strong>
        <span dangerouslySetInnerHTML={{ __html: job.summary }}></span>
        <strong>
          <u>
            <Trans>responsibilities</Trans>
          </u>
        </strong>
        <br />
        <span dangerouslySetInnerHTML={{ __html: job.responsibilities }}></span>
        <strong>
          <u>
            <Trans>skills</Trans>
          </u>
        </strong>
        <br />
        <span dangerouslySetInnerHTML={{ __html: job.skills }}></span>
        <hr />
        <span dangerouslySetInnerHTML={{ __html: job.contact }}></span>
      </div>
    </Card>
  );
};

export default JobModalJobOffer;
