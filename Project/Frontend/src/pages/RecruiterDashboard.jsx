import React, { useState } from "react";

import PostJob from "./PostJob";
import CandidateSearch from "./CandidateSearch";
import CandidateDetails from "./CandidateDetails";
import ShortlistedCandidates from "./ShortlistedCandidates";
import RecruiterProfile from "./RecruiterProfile";

function RecruiterDashboard({ onLogout }) {

  const [currentPage, setCurrentPage] = useState("dashboard");

  // Post Job
  if (currentPage === "post-job") {
    return (
      <PostJob
        onBack={() => setCurrentPage("dashboard")}
      />
    );
  }

  // Candidate Search
  if (currentPage === "candidate-search") {
    return (
      <CandidateSearch
        onBack={() => setCurrentPage("dashboard")}
        onViewCandidate={() => setCurrentPage("candidate-details")}
      />
    );
  }

  // Candidate Details
  if (currentPage === "candidate-details") {
    return (
      <CandidateDetails
        onBack={() => setCurrentPage("candidate-search")}
      />
    );
  }

  // Shortlisted Candidates
  if (currentPage === "shortlisted-candidates") {
    return (
      <ShortlistedCandidates
        onBack={() => setCurrentPage("dashboard")}
      />
    );
  }

  // Recruiter Profile
  if (currentPage === "recruiter-profile") {
    return (
      <RecruiterProfile
        onBack={() => setCurrentPage("dashboard")}
      />
    );
  }

  return (
    <div className="candidate-dashboard">

      {/* SIDEBAR */}

      <aside className="candidate-sidebar">

        <div className="sidebar-title">
          🏢 Recruiter
        </div>

        <div className="sidebar-menu">

          <button
            className="active-menu"
            onClick={() => setCurrentPage("dashboard")}
          >
            🏠 Dashboard
          </button>

          <button
            onClick={() => setCurrentPage("post-job")}
          >
            📢 Post Job
          </button>

          <button
            onClick={() => setCurrentPage("candidate-search")}
          >
            🔎 Candidate Search
          </button>

          <button
            onClick={() => setCurrentPage("candidate-details")}
          >
            👤 Candidate Details
          </button>

          <button
            onClick={() =>
              setCurrentPage("shortlisted-candidates")
            }
          >
            ⭐ Shortlisted Candidates
          </button>

          <button
            onClick={() => setCurrentPage("recruiter-profile")}
          >
            👤 Recruiter Profile
          </button>

        </div>

        {/* LOGOUT */}

        <button
          className="logout-button"
          onClick={onLogout}
        >
          🚪 Logout
        </button>

      </aside>


      {/* MAIN CONTENT */}

      <main className="candidate-main">

        <div className="dashboard-header">

          <h1>
            Recruiter Dashboard
          </h1>

          <p>
            Welcome back! Manage jobs and find suitable candidates.
          </p>

        </div>


        {/* DASHBOARD CARDS */}

        <div className="dashboard-cards">

          {/* Post Job */}

          <div className="dashboard-card">

            <div className="card-icon">
              📢
            </div>

            <h2>
              Post Job
            </h2>

            <p>
              Create and post new job opportunities for candidates.
            </p>

            <button
              onClick={() => setCurrentPage("post-job")}
            >
              Post a Job
            </button>

          </div>


          {/* Candidate Search */}

          <div className="dashboard-card">

            <div className="card-icon">
              🔎
            </div>

            <h2>
              Candidate Search
            </h2>

            <p>
              Search for candidates based on skills and qualifications.
            </p>

            <button
              onClick={() => setCurrentPage("candidate-search")}
            >
              Search Candidates
            </button>

          </div>


          {/* Candidate Details */}

          <div className="dashboard-card">

            <div className="card-icon">
              👤
            </div>

            <h2>
              Candidate Details
            </h2>

            <p>
              View candidate profile, skills, education and experience.
            </p>

            <button
              onClick={() => setCurrentPage("candidate-details")}
            >
              View Candidates
            </button>

          </div>


          {/* Shortlisted Candidates */}

          <div className="dashboard-card">

            <div className="card-icon">
              ⭐
            </div>

            <h2>
              Shortlisted Candidates
            </h2>

            <p>
              View candidates selected for further recruitment.
            </p>

            <button
              onClick={() =>
                setCurrentPage("shortlisted-candidates")
              }
            >
              View Shortlisted
            </button>

          </div>


          {/* Recruiter Profile */}

          <div className="dashboard-card">

            <div className="card-icon">
              🏢
            </div>

            <h2>
              Recruiter Profile
            </h2>

            <p>
              View and update your company and recruiter information.
            </p>

            <button
              onClick={() => setCurrentPage("recruiter-profile")}
            >
              View Profile
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default RecruiterDashboard;