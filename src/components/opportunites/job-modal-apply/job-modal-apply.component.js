import React, { useState } from "react";
import { Card } from "./job-modal-apply.styles";
import { useJob } from "../../../context/job.context";

const JobModalApply = () => {
  const { job } = useJob();
  const [email, setEmail] = useState("");
  const [hasApplied, setHasApplied] = useState(false);
  const [showForm, setShowForm] = useState(false); // Assuming you have logic to show/hide the form

  // Placeholder function to simulate applying to a job
  const applyToJob = () => {
    // Implement your apply logic here
    console.log(`Applying to job with email: ${email}`);
    setHasApplied(true);
  };

  return (
    <Card className="card apply">
      <span className="card-title-category">
        <span className="card-title">
          {job.title.replace(/<\/?p[^>]*>/g, "")}
        </span>
      </span>
      <span className="card-location">
        {job.location.replace(/<\/?p[^>]*>/g, "")} |{" "}
        {job.schedule.replace(/<\/?p[^>]*>/g, "")}
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
        {hasApplied ? "Applied" : "Apply"}
      </button>
      <hr />
      <a href="#" onClick={() => console.log("View all jobs in this category")}>
        View all jobs in this category<i className="bhi-arrow-right"></i>
      </a>
    </Card>
  );
};

export default JobModalApply;
