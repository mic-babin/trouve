import React from "react";
import { Card, Icon, IconSm, IconXS } from "./job-modal-job-offer.styles";

import { useState } from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import PrintSrc from "../../../assets/img/print.svg";
import ShareSrc from "../../../assets/img/share.svg";
import FbSrc from "../../../assets/img/facebook.svg";
import FbWhiteSrc from "../../../assets/img/facebook-white.svg";
import InSrc from "../../../assets/img/linkedin.svg";
import InWhiteSrc from "../../../assets/img/linkedin-white.svg";
import EmailSrc from "../../../assets/img/email.svg";
import EmailWhiteSrc from "../../../assets/img/email-white.svg";
import TwitterSrc from "../../../assets/img/twitter.svg";
import TwitterWhiteSrc from "../../../assets/img/twitter-white.svg";

const JobModalJobOffer = ({ job }) => {
  const [open, setOpen] = useState(false);

  // Handler to toggle the share options
  const toggleShareOptions = () => setOpen(!open);

  const socialIcons = {
    facebook: {
      src: FbSrc,
      whiteSrc: FbWhiteSrc,
    },
    linkedIn: {
      src: InSrc,
      whiteSrc: InWhiteSrc,
    },
    twitter: {
      src: TwitterSrc,
      whiteSrc: TwitterWhiteSrc,
    },
    email: {
      src: EmailSrc,
      whiteSrc: EmailWhiteSrc,
    },
  };

  job.skills = job.skills.replace(/<\/?p[^>]*>/g, "");
  job.responsibilities = job.responsibilities.replace(/<\/?p[^>]*>/g, "");
  job.title = job.title.replace(/<\/?p[^>]*>/g, "");

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
                    href={`mailto:?subject=${job.title}&body=Check out this ${job.title} job: ${window.location.href}`}
                    target="_blank"
                  >
                    <IconSm
                      className="me-3"
                      src={EmailSrc || socialIcons["email"].src}
                      onMouseOver={(e) => {
                        e.currentTarget.src = socialIcons["email"].whiteSrc;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.src = socialIcons["email"].src;
                      }}
                      alt={"email"}
                    />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20${job.title}%20job!&url=${window.location.href}`}
                    target="_blank"
                  >
                    <IconSm
                      className="me-3"
                      src={TwitterSrc || socialIcons["twitter"].src}
                      onMouseOver={(e) => {
                        e.currentTarget.src = socialIcons["twitter"].whiteSrc;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.src = socialIcons["twitter"].src;
                      }}
                      alt={"twitter"}
                    />
                  </a>
                  <a
                    href={`https://www.facebook.com/dialog/share?display=popup&app_id=1439597326343190&href=${window.location.href}&redirect_uri=https%3A%2F%2Fwww.facebook.com%2F`}
                    target="_blank"
                  >
                    <IconXS
                      className="me-3"
                      src={FbSrc || socialIcons["facebook"].src}
                      onMouseOver={(e) => {
                        e.currentTarget.src = socialIcons["facebook"].whiteSrc;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.src = socialIcons["facebook"].src;
                      }}
                      alt={"facebook"}
                    />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                    target="_blank"
                  >
                    <IconXS
                      className="me-3"
                      src={InSrc || socialIcons["linkedIn"].src}
                      onMouseOver={(e) => {
                        e.currentTarget.src = socialIcons["linkedIn"].whiteSrc;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.src = socialIcons["linkedIn"].src;
                      }}
                      alt={"linkedIn"}
                    />
                  </a>
                </>
              )}
            </div>
            <button onClick={toggleShareOptions}>
              <Icon src={ShareSrc} alt="Share" /> Share
            </button>
            <button
              onClick={() => window.print()}
              className="d-none d-md-block"
            >
              <Icon src={PrintSrc} alt="Print" /> Print
            </button>
          </div>
          <h2 className="d-none d-sm-block">
            <Trans>jobOffer</Trans>
          </h2>
        </div>

        <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
        <br />
        {job.summary && (
          <>
            <strong>
              <u>
                <Trans>jobSummary</Trans>
              </u>
            </strong>
            <br />
            <span dangerouslySetInnerHTML={{ __html: job.summary }}></span>
            <br />
          </>
        )}

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
