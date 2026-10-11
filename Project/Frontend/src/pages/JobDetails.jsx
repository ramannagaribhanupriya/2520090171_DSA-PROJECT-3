import React, { useState } from "react";

function JobDetails({ onBack }) {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applied, setApplied] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    skills: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleApplyClick = () => {
    setShowApplicationForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setApplied(true);
    setShowApplicationForm(false);
  };

  if (applied) {
    return (
      <div className="simple-page">
        <div className="simple-page-container">

          <div className="simple-page-icon">✅</div>

          <h1>Application Submitted Successfully!</h1>

          <p>
            Your application for the Java Developer position has been
            submitted successfully.
          </p>

          <div className="job-detail-box">
            <h2>Application Details</h2>

            <p>
              <strong>Name:</strong> {formData.name}
            </p>

            <p>
              <strong>Email:</strong> {formData.email}
            </p>

            <p>
              <strong>Phone:</strong> {formData.phone}
            </p>

            <p>
              <strong>Education:</strong> {formData.education}
            </p>

            <p>
              <strong>Skills:</strong> {formData.skills}
            </p>

            <p>
              <strong>Experience:</strong> {formData.experience}
            </p>
          </div>

          <button
            className="back-dashboard-button"
            onClick={onBack}
          >
            🏠 Back to Dashboard
          </button>

        </div>
      </div>
    );
  }

  if (showApplicationForm) {
    return (
      <div className="simple-page">
        <div className="simple-page-container">

          <button
            className="back-dashboard-button"
            onClick={() => setShowApplicationForm(false)}
          >
            ← Back to Job Details
          </button>

          <div className="simple-page-icon">📝</div>

          <h1>Job Application</h1>

          <p>
            Please fill in your details to apply for this job.
          </p>

          <form className="application-form" onSubmit={handleSubmit}>

            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Education</label>
            <input
              type="text"
              name="education"
              placeholder="Example: B.Tech Computer Science"
              value={formData.education}
              onChange={handleChange}
              required
            />

            <label>Skills</label>
            <input
              type="text"
              name="skills"
              placeholder="Example: Java, SQL, Python"
              value={formData.skills}
              onChange={handleChange}
              required
            />

            <label>Experience</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            >
              <option value="">Select Experience</option>
              <option value="Fresher">Fresher</option>
              <option value="0-1 Years">0-1 Years</option>
              <option value="1-2 Years">1-2 Years</option>
              <option value="2+ Years">2+ Years</option>
            </select>

            <button
              type="submit"
              className="page-action-button"
            >
              📩 Apply Now
            </button>

          </form>

        </div>
      </div>
    );
  }

  return (
    <div className="simple-page">
      <div className="simple-page-container">

        <button
          className="back-dashboard-button"
          onClick={onBack}
        >
          🏠 Back to Dashboard
        </button>

        <div className="simple-page-icon">🔍</div>

        <h1>Job Details</h1>

        <p>
          View detailed information about available jobs.
        </p>

        <div className="job-detail-box">

          <h2>Java Developer</h2>

          <p>
            <strong>Company:</strong> ABC Technologies
          </p>

          <p>
            <strong>Location:</strong> Hyderabad
          </p>

          <p>
            <strong>Experience:</strong> Fresher
          </p>

          <p>
            <strong>Skills:</strong> Java, SQL, Data Structures
          </p>

          <p>
            <strong>Job Type:</strong> Full Time
          </p>

          <button
            className="page-action-button"
            onClick={handleApplyClick}
          >
            📩 Apply Now
          </button>

        </div>

      </div>
    </div>
  );
}

export default JobDetails;