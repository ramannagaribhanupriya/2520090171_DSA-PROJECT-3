import React, { useState } from "react";

function PostJob({ onBack }) {

  const [jobPosted, setJobPosted] = useState(false);

  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    skills: "",
    experience: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setJobPosted(true);
  };

  if (jobPosted) {
    return (
      <div className="simple-page">

        <div className="simple-page-container">

          <div className="simple-page-icon">
            ✅
          </div>

          <h1>
            Job Posted Successfully!
          </h1>

          <p>
            Your job has been posted successfully.
          </p>

          <div className="job-detail-box">

            <h2>
              {jobData.title}
            </h2>

            <p>
              <strong>Company:</strong> {jobData.company}
            </p>

            <p>
              <strong>Location:</strong> {jobData.location}
            </p>

            <p>
              <strong>Skills:</strong> {jobData.skills}
            </p>

            <p>
              <strong>Experience:</strong> {jobData.experience}
            </p>

            <p>
              <strong>Salary:</strong> {jobData.salary}
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
          📢
        </div>

        <h1>
          Post a Job
        </h1>

        <p>
          Create a new job opportunity for candidates.
        </p>

        <form
          className="application-form"
          onSubmit={handleSubmit}
        >

          <label>
            Job Title
          </label>

          <input
            type="text"
            name="title"
            placeholder="Example: Java Developer"
            value={jobData.title}
            onChange={handleChange}
            required
          />

          <label>
            Company Name
          </label>

          <input
            type="text"
            name="company"
            placeholder="Enter company name"
            value={jobData.company}
            onChange={handleChange}
            required
          />

          <label>
            Location
          </label>

          <input
            type="text"
            name="location"
            placeholder="Example: Hyderabad"
            value={jobData.location}
            onChange={handleChange}
            required
          />

          <label>
            Required Skills
          </label>

          <input
            type="text"
            name="skills"
            placeholder="Example: Java, SQL, React"
            value={jobData.skills}
            onChange={handleChange}
            required
          />

          <label>
            Experience
          </label>

          <select
            name="experience"
            value={jobData.experience}
            onChange={handleChange}
            required
          >
            <option value="">
              Select Experience
            </option>

            <option value="Fresher">
              Fresher
            </option>

            <option value="0-1 Years">
              0-1 Years
            </option>

            <option value="1-2 Years">
              1-2 Years
            </option>

            <option value="2+ Years">
              2+ Years
            </option>

          </select>

          <label>
            Salary
          </label>

          <input
            type="text"
            name="salary"
            placeholder="Example: ₹5-8 LPA"
            value={jobData.salary}
            onChange={handleChange}
            required
          />

          <label>
            Job Description
          </label>

          <textarea
            name="description"
            placeholder="Enter job description"
            value={jobData.description}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              minHeight: "120px",
              padding: "14px",
              border: "1px solid #d4dbe7",
              borderRadius: "8px",
              fontSize: "15px",
              resize: "vertical",
            }}
          />

          <button
            type="submit"
            className="page-action-button"
          >
            📢 Post Job
          </button>

        </form>

      </div>

    </div>
  );
}

export default PostJob;