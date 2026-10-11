import React, { useState } from "react";

function CandidateDetails({ onBack }) {

  const [shortlisted, setShortlisted] = useState(false);

  const handleShortlist = () => {
    setShortlisted(true);

    alert("Candidate shortlisted successfully!");
  };

  return (
    <div className="simple-page">

      <div className="simple-page-container">

        <button
          className="back-dashboard-button"
          onClick={onBack}
        >
          ← Back to Candidate Search
        </button>

        <div className="simple-page-icon">
          👤
        </div>

        <h1>
          Candidate Details
        </h1>

        <p>
          View detailed candidate information.
        </p>

        <div className="job-detail-box">

          <h2>
            Bhanu Priya
          </h2>

          <p>
            <strong>Email:</strong>{" "}
            bhanu@gmail.com
          </p>

          <p>
            <strong>Education:</strong>{" "}
            B.Tech Computer Science
          </p>

          <p>
            <strong>Skills:</strong>{" "}
            Java, Python, C, HTML, CSS, SQL
          </p>

          <p>
            <strong>Experience:</strong>{" "}
            Fresher
          </p>

          <p>
            <strong>Projects:</strong>{" "}
            Resume-Job Matching System,
            Women Safety Application,
            Smart IoT Street Light
          </p>

          <p>
            <strong>Match Score:</strong>{" "}
            85%
          </p>

          {!shortlisted ? (

            <button
              className="page-action-button"
              onClick={handleShortlist}
            >
              ⭐ Shortlist Candidate
            </button>

          ) : (

            <div className="resume-success-message">
              ✅ Candidate Shortlisted
            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default CandidateDetails;