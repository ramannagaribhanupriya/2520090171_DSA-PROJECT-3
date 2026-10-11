import React, { useState } from "react";

import ResumeUpload from "./ResumeUpload";
import ResumeAnalysis from "./ResumeAnalysis";
import JobRecommendations from "./JobRecommendations";
import JobDetails from "./JobDetails";
import SkillGap from "./SkillGap";
import LearningResources from "./LearningResources";
import CandidateProfile from "./CandidateProfile";

function CandidateDashboard({ onLogout }) {

  const [currentPage, setCurrentPage] = useState("dashboard");

  // Resume Upload
  if (currentPage === "resume-upload") {
    return (
      <ResumeUpload
        onBack={() => setCurrentPage("dashboard")}
        onAnalyze={() => setCurrentPage("resume-analysis")}
      />
    );
  }

  // Resume Analysis
  if (currentPage === "resume-analysis") {
    return (
      <ResumeAnalysis
        onBack={() => setCurrentPage("dashboard")}
      />
    );
  }

  // Job Recommendations
  if (currentPage === "job-recommendations") {
    return (
      <JobRecommendations
        onBack={() => setCurrentPage("dashboard")}
      />
    );
  }

  // Job Details
  if (currentPage === "job-details") {
    return (
      <JobDetails
        onBack={() => setCurrentPage("dashboard")}
      />
    );
  }

  // Skill Gap
  if (currentPage === "skill-gap") {
    return (
      <SkillGap
        onBack={() => setCurrentPage("dashboard")}
      />
    );
  }

  // Learning Resources
  if (currentPage === "learning-resources") {
    return (
      <LearningResources
        onBack={() => setCurrentPage("dashboard")}
      />
    );
  }

  // Candidate Profile
  if (currentPage === "candidate-profile") {
    return (
      <CandidateProfile
        onBack={() => setCurrentPage("dashboard")}
      />
    );
  }

  return (
    <div className="candidate-dashboard">

      {/* SIDEBAR */}

      <aside className="candidate-sidebar">

        <div className="sidebar-title">
          👤 Job Seeker
        </div>

        <div className="sidebar-menu">

          {/* Dashboard */}
          <button
            className="active-menu"
            onClick={() => setCurrentPage("dashboard")}
          >
            🏠 Dashboard
          </button>

          {/* Resume Upload */}
          <button
            onClick={() => setCurrentPage("resume-upload")}
          >
            📄 Resume Upload
          </button>

          {/* Resume Analysis */}
          <button
            onClick={() => setCurrentPage("resume-analysis")}
          >
            📊 Resume Analysis
          </button>

          {/* Job Recommendations */}
          <button
            onClick={() => setCurrentPage("job-recommendations")}
          >
            💼 Job Recommendations
          </button>

          {/* Job Details */}
          <button
            onClick={() => setCurrentPage("job-details")}
          >
            🔍 Job Details
          </button>

          {/* Skill Gap */}
          <button
            onClick={() => setCurrentPage("skill-gap")}
          >
            🧩 Skill Gap
          </button>

          {/* Learning Resources */}
          <button
            onClick={() => setCurrentPage("learning-resources")}
          >
            📚 Learning Resources
          </button>

          {/* Candidate Profile */}
          <button
            onClick={() => setCurrentPage("candidate-profile")}
          >
            👤 Candidate Profile
          </button>

        </div>

        {/* LOGOUT BUTTON */}

        <button
          className="logout-button"
          onClick={onLogout}
        >
          🚪 Logout
        </button>

      </aside>


      {/* MAIN DASHBOARD */}

      <main className="candidate-main">

        <div className="dashboard-header">

          <h1>
            Candidate Dashboard
          </h1>

          <p>
            Welcome back! Find the right job based on your skills and resume.
          </p>

        </div>


        {/* DASHBOARD CARDS */}

        <div className="dashboard-cards">

          {/* Resume Upload */}

          <div className="dashboard-card">

            <div className="card-icon">
              📄
            </div>

            <h2>
              Resume Upload
            </h2>

            <p>
              Upload your resume to start the job matching process.
            </p>

            <button
              onClick={() => setCurrentPage("resume-upload")}
            >
              Upload Resume
            </button>

          </div>


          {/* Resume Analysis */}

          <div className="dashboard-card">

            <div className="card-icon">
              📊
            </div>

            <h2>
              Resume Analysis
            </h2>

            <p>
              View the skills, education and experience extracted from your resume.
            </p>

            <button
              onClick={() => setCurrentPage("resume-analysis")}
            >
              View Analysis
            </button>

          </div>


          {/* Job Recommendations */}

          <div className="dashboard-card">

            <div className="card-icon">
              💼
            </div>

            <h2>
              Job Recommendations
            </h2>

            <p>
              View jobs that match your resume and skills.
            </p>

            <button
              onClick={() => setCurrentPage("job-recommendations")}
            >
              View Jobs
            </button>

          </div>


          {/* Job Details */}

          <div className="dashboard-card">

            <div className="card-icon">
              🔍
            </div>

            <h2>
              Job Details
            </h2>

            <p>
              View detailed information about available jobs.
            </p>

            <button
              onClick={() => setCurrentPage("job-details")}
            >
              View Details
            </button>

          </div>


          {/* Skill Gap */}

          <div className="dashboard-card">

            <div className="card-icon">
              🧩
            </div>

            <h2>
              Skill Gap
            </h2>

            <p>
              Identify the skills you need to improve for your target jobs.
            </p>

            <button
              onClick={() => setCurrentPage("skill-gap")}
            >
              View Skill Gap
            </button>

          </div>


          {/* Learning Resources */}

          <div className="dashboard-card">

            <div className="card-icon">
              📚
            </div>

            <h2>
              Learning Resources
            </h2>

            <p>
              Find learning resources to improve your missing skills.
            </p>

            <button
              onClick={() => setCurrentPage("learning-resources")}
            >
              Learn More
            </button>

          </div>


          {/* Candidate Profile */}

          <div className="dashboard-card">

            <div className="card-icon">
              👤
            </div>

            <h2>
              Candidate Profile
            </h2>

            <p>
              View and update your personal and professional information.
            </p>

            <button
              onClick={() => setCurrentPage("candidate-profile")}
            >
              View Profile
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default CandidateDashboard;