import React, { useState } from "react";

function CandidateSearch({ onBack, onViewCandidate }) {

  const [search, setSearch] = useState("");

  const candidates = [
    {
      name: "Bhanu Priya",
      skills: "Java, Python, SQL",
      education: "B.Tech Computer Science",
      experience: "Fresher",
    },
    {
      name: "Anjali Sharma",
      skills: "Python, Machine Learning, SQL",
      education: "B.Tech IT",
      experience: "1 Year",
    },
    {
      name: "Rahul Kumar",
      skills: "Java, React, HTML, CSS",
      education: "B.Tech Computer Science",
      experience: "2 Years",
    },
  ];

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(search.toLowerCase()) ||
    candidate.skills.toLowerCase().includes(search.toLowerCase())
  );

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
          🔎
        </div>

        <h1>
          Candidate Search
        </h1>

        <p>
          Search candidates based on their skills and qualifications.
        </p>

        <input
          type="text"
          placeholder="Search by name or skill..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            maxWidth: "700px",
            height: "46px",
            margin: "25px auto",
            padding: "0 14px",
            border: "1px solid #d4dbe7",
            borderRadius: "8px",
            fontSize: "15px",
          }}
        />

        {filteredCandidates.length === 0 && (
          <p>
            No candidates found.
          </p>
        )}

        {filteredCandidates.map((candidate, index) => (

          <div
            className="job-card"
            key={index}
          >

            <h2>
              👤 {candidate.name}
            </h2>

            <p>
              <strong>Skills:</strong>{" "}
              {candidate.skills}
            </p>

            <p>
              <strong>Education:</strong>{" "}
              {candidate.education}
            </p>

            <p>
              <strong>Experience:</strong>{" "}
              {candidate.experience}
            </p>

            <button
              className="page-action-button"
              onClick={onViewCandidate}
            >
              View Candidate
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CandidateSearch;