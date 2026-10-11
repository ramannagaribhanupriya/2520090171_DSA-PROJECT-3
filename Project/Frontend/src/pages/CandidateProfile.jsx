import React, { useState } from "react";

function CandidateProfile({ onBack }) {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Bhanu Priya",
    email: "bhanu@gmail.com",
    role: "Job Seeker",
    education: "Bachelor of Technology",
    skills: "Java, Python, C, HTML, CSS",
  });

  const [editData, setEditData] = useState(profile);

  const handleEdit = () => {
    setEditData(profile);
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    setProfile(editData);
    setIsEditing(false);

    alert("Profile updated successfully!");
  };

  const handleCancel = () => {
    setEditData(profile);
    setIsEditing(false);
  };

  // EDIT PROFILE PAGE
  if (isEditing) {
    return (
      <div className="simple-page">
        <div className="simple-page-container">

          <button
            className="back-dashboard-button"
            onClick={handleCancel}
          >
            ← Back to Profile
          </button>

          <div className="simple-page-icon">✏️</div>

          <h1>Edit Profile</h1>

          <p>
            Update your personal and professional information.
          </p>

          <form
            className="application-form"
            onSubmit={handleSave}
          >

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              value={editData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              value={editData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

            <label>Role</label>

            <input
              type="text"
              name="role"
              value={editData.role}
              onChange={handleChange}
              placeholder="Enter your role"
              required
            />

            <label>Education</label>

            <input
              type="text"
              name="education"
              value={editData.education}
              onChange={handleChange}
              placeholder="Enter your education"
              required
            />

            <label>Skills</label>

            <input
              type="text"
              name="skills"
              value={editData.skills}
              onChange={handleChange}
              placeholder="Example: Java, Python, SQL"
              required
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                marginTop: "25px",
              }}
            >

              <button
                type="submit"
                className="page-action-button"
              >
                💾 Save Changes
              </button>

              <button
                type="button"
                className="remove-resume-button"
                onClick={handleCancel}
              >
                ❌ Cancel
              </button>

            </div>

          </form>

        </div>
      </div>
    );
  }

  // PROFILE PAGE
  return (
    <div className="simple-page">
      <div className="simple-page-container">

        <button
          className="back-dashboard-button"
          onClick={onBack}
        >
          🏠 Back to Dashboard
        </button>

        <div className="simple-page-icon">👤</div>

        <h1>Candidate Profile</h1>

        <p>
          View your personal and professional information.
        </p>

        <div className="profile-box">

          <div className="profile-row">
            <strong>Name</strong>
            <span>{profile.name}</span>
          </div>

          <div className="profile-row">
            <strong>Email</strong>
            <span>{profile.email}</span>
          </div>

          <div className="profile-row">
            <strong>Role</strong>
            <span>{profile.role}</span>
          </div>

          <div className="profile-row">
            <strong>Education</strong>
            <span>{profile.education}</span>
          </div>

          <div className="profile-row">
            <strong>Skills</strong>
            <span>{profile.skills}</span>
          </div>

        </div>

        <button
          className="page-action-button"
          onClick={handleEdit}
        >
          ✏️ Edit Profile
        </button>

      </div>
    </div>
  );
}

export default CandidateProfile;