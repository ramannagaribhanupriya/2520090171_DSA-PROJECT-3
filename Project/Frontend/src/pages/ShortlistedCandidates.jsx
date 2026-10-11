import React from "react";

function ShortlistedCandidates({ onBack }) {

  return (
    <div className="simple-page">

      <div className="simple-page-container">

        <button
          className="back-dashboard-button"
          onClick={onBack}
        >
          🏠 Back to Dashboard
        </button>

        <div className="simple-page-icon">
          ⭐
        </div>

        <h1>
          Shortlisted Candidates
        </h1>

        <p>
          Candidates selected for further recruitment.
        </p>

        <div className="job-card">

          <h2>
            ⭐ Bhanu Priya
          </h2>

          <p>
            <strong>Skills:</strong>{" "}
            Java, Python, SQL
          </p>

          <p>
            <strong>Education:</strong>{" "}
            B.Tech Computer Science
          </p>

          <p>
            <strong>Experience:</strong>{" "}
            Fresher
          </p>

          <p>
            <strong>Match Score:</strong>{" "}
            85%
          </p>

          <div className="resume-success-message">
            Candidate is shortlisted.
          </div>

        </div>

      </div>

    </div>
  );
}

export default ShortlistedCandidates;