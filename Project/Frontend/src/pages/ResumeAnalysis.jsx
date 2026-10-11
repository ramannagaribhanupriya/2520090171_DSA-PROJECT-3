import React, { useState } from "react";

function ResumeAnalysis({ onBack }) {

  const [selectedSection, setSelectedSection] = useState("");

  const handleSectionClick = (section) => {

    if (selectedSection === section) {
      setSelectedSection("");
    } else {
      setSelectedSection(section);
    }
  };

  return (
    <div className="resume-analysis-page">

      <div className="resume-analysis-container">

        <button
          className="back-dashboard-button"
          onClick={onBack}
        >
          🏠 Back to Dashboard
        </button>

        <div className="analysis-page-icon">
          📊
        </div>

        <h1>
          Resume Analysis
        </h1>

        <p>
          Your resume has been analyzed. Click an option to view the details.
        </p>


        {/* SKILLS */}

        <button
          className="analysis-button"
          onClick={() => handleSectionClick("Skills")}
        >
          <span>🛠️</span>
          <strong>Skills</strong>
          <span className="analysis-arrow">
            {selectedSection === "Skills" ? "▲" : "▼"}
          </span>
        </button>

        {selectedSection === "Skills" && (
          <div className="analysis-details">

            <h3>
              Skills Found in Resume
            </h3>

            <div className="skill-list">

              <span>Java</span>
              <span>Python</span>
              <span>C</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Data Structures</span>

            </div>

          </div>
        )}


        {/* EDUCATION */}

        <button
          className="analysis-button"
          onClick={() => handleSectionClick("Education")}
        >
          <span>🎓</span>
          <strong>Education</strong>
          <span className="analysis-arrow">
            {selectedSection === "Education" ? "▲" : "▼"}
          </span>
        </button>

        {selectedSection === "Education" && (
          <div className="analysis-details">

            <h3>
              Education Details
            </h3>

            <div className="education-info">

              <h4>
                Bachelor of Technology
              </h4>

              <p>
                <strong>Branch:</strong> Computer Science
              </p>

              <p>
                <strong>College:</strong> KL University
              </p>

            </div>

          </div>
        )}


        {/* EXPERIENCE */}

        <button
          className="analysis-button"
          onClick={() => handleSectionClick("Experience")}
        >
          <span>💼</span>
          <strong>Experience</strong>
          <span className="analysis-arrow">
            {selectedSection === "Experience" ? "▲" : "▼"}
          </span>
        </button>

        {selectedSection === "Experience" && (
          <div className="analysis-details">

            <h3>
              Experience Details
            </h3>

            <div className="experience-info">

              <h4>
                Fresher
              </h4>

              <p>
                Academic and college project experience.
              </p>

              <p>
                Experience with programming and web development projects.
              </p>

            </div>

          </div>
        )}


        {/* CERTIFICATIONS */}

        <button
          className="analysis-button"
          onClick={() => handleSectionClick("Certifications")}
        >
          <span>📜</span>
          <strong>Certifications</strong>
          <span className="analysis-arrow">
            {selectedSection === "Certifications" ? "▲" : "▼"}
          </span>
        </button>

        {selectedSection === "Certifications" && (
          <div className="analysis-details">

            <h3>
              Certifications
            </h3>

            <div className="certification-list">

              <p>
                📜 Java Programming
              </p>

              <p>
                📜 Python Programming
              </p>

              <p>
                📜 Data Structures
              </p>

            </div>

          </div>
        )}


        {/* PROJECTS */}

        <button
          className="analysis-button"
          onClick={() => handleSectionClick("Projects")}
        >
          <span>🚀</span>
          <strong>Projects</strong>
          <span className="analysis-arrow">
            {selectedSection === "Projects" ? "▲" : "▼"}
          </span>
        </button>

        {selectedSection === "Projects" && (
          <div className="analysis-details">

            <h3>
              Projects
            </h3>

            <div className="project-list">

              <div className="project-item">

                <h4>
                  🚀 Resume-Job Matching System
                </h4>

                <p>
                  A system for matching resumes with suitable jobs.
                </p>

              </div>

              <div className="project-item">

                <h4>
                  🚀 Women Safety Application
                </h4>

                <p>
                  A safety application with emergency support features.
                </p>

              </div>

              <div className="project-item">

                <h4>
                  🚀 Smart IoT Street Light
                </h4>

                <p>
                  An IoT-based smart street light project.
                </p>

              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default ResumeAnalysis;