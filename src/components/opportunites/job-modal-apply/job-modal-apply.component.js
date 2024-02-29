import React, { useState } from "react";
import { Card } from "./job-modal-apply.styles";
import JobModalForm from "../job-modal-form/job-modal-form.component";
import { Trans } from "gatsby-plugin-react-i18next";

const JobModalApply = ({ job }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [hasApplied, setHasApplied] = useState(false);
  const [showForm, setShowForm] = useState(false); // Assuming you have logic to show/hide the form

  // Placeholder function to simulate applying to a job
  const applyToJob = () => {
    setShowModal(true);
    // setHasApplied(true);
  };

  return (
    <Card className="card apply w-100">
      <span className="card-title-category">
        <span className="card-title">{job.title.replace(/<[^>]*>/g, "")}</span>
      </span>
      <span className="card-location">
        {job.location.replace(/<[^>]*>/g, "")} |{" "}
        {job.schedule.replace(/<[^>]*>/g, "")}
      </span>

      {showForm && (
        <section>
          {!hasApplied && (
            <div>
              <input
                className="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@domain.com"
              />
            </div>
          )}
        </section>
      )}
      <button
        className={`apply ${hasApplied ? "disabled" : ""}`}
        onClick={applyToJob}
        disabled={hasApplied}
      >
        {hasApplied ? "Applied" : <Trans>apply</Trans>}
      </button>
      <hr />
      {/* <a href="#" onClick={() => console.log("View all jobs in this category")}>
        View all jobs in this category<i className="bhi-arrow-right"></i>
      </a> */}
      <JobModalForm
        showModal={showModal}
        setShowModal={setShowModal}
        job={job}
      />
    </Card>
  );
};

export default JobModalApply;
