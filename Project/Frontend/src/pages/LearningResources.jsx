import React, { useState } from "react";

function LearningResources({ onBack }) {
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleStartLearning = (course) => {
    setSelectedCourse(course);
  };

  // Open Java course
  const handleJavaCourse = () => {
    window.open(
      "https://www.youtube.com/watch?v=A74TOX803D0",
      "_blank"
    );
  };

  // Java Learning Page
  if (selectedCourse === "Java Programming") {
    return (
      <div className="simple-page">
        <div className="simple-page-container">

          <button
            className="back-dashboard-button"
            onClick={() => setSelectedCourse("")}
          >
            ← Back to Learning Resources
          </button>

          <div className="simple-page-icon">📚</div>

          <h1>Java Programming</h1>

          <p>
            Learn Java programming and improve your skills.
          </p>

          <div className="learning-detail-box">

            <h2>☕ Java Programming</h2>

            <h3>Topics to Learn</h3>

            <ul>
              <li>Java Basics</li>
              <li>Variables and Data Types</li>
              <li>Conditional Statements</li>
              <li>Loops</li>
              <li>Arrays</li>
              <li>Object-Oriented Programming</li>
              <li>Classes and Objects</li>
              <li>Inheritance</li>
              <li>Polymorphism</li>
              <li>Exception Handling</li>
            </ul>

            <button
              className="page-action-button"
              onClick={handleJavaCourse}
            >
              ▶ Start Course
            </button>

          </div>

        </div>
      </div>
    );
  }

  // SQL Learning Page
  if (selectedCourse === "SQL") {
    return (
      <div className="simple-page">
        <div className="simple-page-container">

          <button
            className="back-dashboard-button"
            onClick={() => setSelectedCourse("")}
          >
            ← Back to Learning Resources
          </button>

          <div className="simple-page-icon">🗄️</div>

          <h1>SQL</h1>

          <p>
            Learn SQL and improve your database skills.
          </p>

          <div className="learning-detail-box">

            <h2>🗄️ SQL</h2>

            <h3>Topics to Learn</h3>

            <ul>
              <li>Database Basics</li>
              <li>SQL Commands</li>
              <li>SELECT Queries</li>
              <li>WHERE Conditions</li>
              <li>INSERT, UPDATE and DELETE</li>
              <li>Joins</li>
              <li>Aggregate Functions</li>
              <li>GROUP BY</li>
              <li>ORDER BY</li>
              <li>Subqueries</li>
            </ul>

            <button className="page-action-button">
              ▶ Start Course
            </button>

          </div>

        </div>
      </div>
    );
  }

  // React Learning Page
  if (selectedCourse === "React") {
    return (
      <div className="simple-page">
        <div className="simple-page-container">

          <button
            className="back-dashboard-button"
            onClick={() => setSelectedCourse("")}
          >
            ← Back to Learning Resources
          </button>

          <div className="simple-page-icon">⚛️</div>

          <h1>React</h1>

          <p>
            Learn React and improve your frontend development skills.
          </p>

          <div className="learning-detail-box">

            <h2>⚛️ React</h2>

            <h3>Topics to Learn</h3>

            <ul>
              <li>React Basics</li>
              <li>Components</li>
              <li>JSX</li>
              <li>Props</li>
              <li>State</li>
              <li>Event Handling</li>
              <li>Conditional Rendering</li>
              <li>Forms</li>
              <li>useState Hook</li>
              <li>Building React Projects</li>
            </ul>

            <button className="page-action-button">
              ▶ Start Course
            </button>

          </div>

        </div>
      </div>
    );
  }

  // Main Learning Resources Page
  return (
    <div className="simple-page">
      <div className="simple-page-container">

        <button
          className="back-dashboard-button"
          onClick={onBack}
        >
          🏠 Back to Dashboard
        </button>

        <div className="simple-page-icon">📚</div>

        <h1>Learning Resources</h1>

        <p>
          Resources to improve your missing skills.
        </p>

        {/* Java */}
        <div className="learning-card">

          <h2>Java Programming</h2>

          <p>
            Learn Java basics, OOP concepts and advanced Java.
          </p>

          <button
            className="page-action-button"
            onClick={() =>
              handleStartLearning("Java Programming")
            }
          >
            📖 Start Learning
          </button>

        </div>

        {/* SQL */}
        <div className="learning-card">

          <h2>SQL</h2>

          <p>
            Learn databases, queries and SQL fundamentals.
          </p>

          <button
            className="page-action-button"
            onClick={() =>
              handleStartLearning("SQL")
            }
          >
            📖 Start Learning
          </button>

        </div>

        {/* React */}
        <div className="learning-card">

          <h2>React</h2>

          <p>
            Learn React components, state and frontend development.
          </p>

          <button
            className="page-action-button"
            onClick={() =>
              handleStartLearning("React")
            }
          >
            📖 Start Learning
          </button>

        </div>

      </div>
    </div>
  );
}

export default LearningResources;