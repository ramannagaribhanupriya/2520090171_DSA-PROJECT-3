import React, { useState } from "react";
import JobDetails from "./JobDetails";

function JobRecommendations({ onBack }) {
  const [showJobDetails, setShowJobDetails] = useState(false);

  if (showJobDetails) {
    return (
      <JobDetails
        onBack={() => setShowJobDetails(false)}
      />
    );
  }

  return (
    <div className="simple-page">
      <div className="simple-page-container">

        <button className="back-dashboard-button" onClick={onBack}>
          🏠 Back to Dashboard
        </button>

        <div className="simple-page-icon">💼</div>

        <h1>Job Recommendations</h1>

        <p>
          Jobs that match your resume and skills.
        </p>

        {/* Java Developer */}
        <div className="job-card">
          <h2>Java Developer</h2>

          <p>
            <strong>Skills:</strong> Java, SQL, Data Structures
          </p>

          <p>
            <strong>Location:</strong> Hyderabad
          </p>

          <button
            className="page-action-button"
            onClick={() => setShowJobDetails(true)}
          >
            View Job
          </button>
        </div>

        {/* Python Developer */}
        <div className="job-card">
          <h2>Python Developer</h2>

          <p>
            <strong>Skills:</strong> Python, SQL, Machine Learning
          </p>

          <p>
            <strong>Location:</strong> Hyderabad
          </p>

          <button
            className="page-action-button"
            onClick={() => setShowJobDetails(true)}
          >
            View Job
          </button>
        </div>

      </div>
    </div>
  );
}

export default JobRecommendations;