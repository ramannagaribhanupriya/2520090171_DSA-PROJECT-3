import React from "react";

function SkillGap({ onBack }) {

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
          🧩
        </div>

        <h1>
          Skill Gap
        </h1>

        <p>
          Skills that you can improve for your target jobs.
        </p>


        <div className="skill-gap-list">

          <div className="skill-gap-item">
            <strong>React</strong>
            <span>Needs Improvement</span>
          </div>

          <div className="skill-gap-item">
            <strong>SQL</strong>
            <span>Needs Improvement</span>
          </div>

          <div className="skill-gap-item">
            <strong>Machine Learning</strong>
            <span>Needs Improvement</span>
          </div>

          <div className="skill-gap-item">
            <strong>Communication</strong>
            <span>Needs Improvement</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default SkillGap;