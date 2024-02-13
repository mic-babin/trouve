import React from "react";
import { Card } from "./job-card.styles";
import { Link } from "gatsby-plugin-react-i18next";
const JobCard = ({ job }) => {
  return (
    <Card className="card-wrapper">
      <Link className="card slide-up-item" to={`${job.referenceId}`}>
        <div className="card-content">
          <span className="card-title-category">
            <span className="card-title">
              {job.title.replace(/<[^>]*>/g, "")}
            </span>
            <span className="card-category">
              {job.category.replace(/<[^>]*>/g, "")}
            </span>
          </span>
          <span className="card-location">
            {" "}
            {job.location.replace(/<[^>]*>/g, "")}
          </span>
          <span className="card-separator"> | </span>
          <span className="card-type">
            {job.schedule.replace(/<[^>]*>/g, "")}
          </span>
          <div className="card-description">
            <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
            <strong>
              <u>SOMMAIRE DU POSTE:</u>
            </strong>
            <br />
            <br />
            <span dangerouslySetInnerHTML={{ __html: job.summary }}></span>
            <br />
            <br />
            <strong>
              <u>COMPÉTENCES RECHERCHÉES:</u>
            </strong>
            <br />
            <br />
            <span
              dangerouslySetInnerHTML={{
                __html: job.skills,
              }}
            ></span>
            <br />
            <br />
            <hr />
            <span dangerouslySetInnerHTML={{ __html: job.contact }}></span>
          </div>
          <i className="bhi-arrow-right"></i>
        </div>
      </Link>
    </Card>
  );
};

export default JobCard;
