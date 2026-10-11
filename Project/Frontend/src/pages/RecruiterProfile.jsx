import React, { useState } from "react";

function RecruiterProfile({ onBack }) {

  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "ABC Technologies",
    email: "recruiter@abc.com",
    recruiter: "HR Manager",
    location: "Hyderabad",
    industry: "Information Technology",
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

    alert("Recruiter profile updated successfully!");
  };

  const handleCancel = () => {
    setEditData(profile);
    setIsEditing(false);
  };

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

          <div className="simple-page-icon">
            ✏️
          </div>

          <h1>
            Edit Recruiter Profile
          </h1>

          <p>
            Update your company and recruiter information.
          </p>

          <form
            className="application-form"
            onSubmit={handleSave}
          >

            <label>
              Company Name
            </label>

            <input
              type="text"
              name="name"
              value={editData.name}
              onChange={handleChange}
              required
            />

            <label>
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={editData.email}
              onChange={handleChange}
              required
            />

            <label>
              Recruiter Role
            </label>

            <input
              type="text"
              name="recruiter"
              value={editData.recruiter}
              onChange={handleChange}
              required
            />

            <label>
              Location
            </label>

            <input
              type="text"
              name="location"
              value={editData.location}
              onChange={handleChange}
              required
            />

            <label>
              Industry
            </label>

            <input
              type="text"
              name="industry"
              value={editData.industry}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="page-action-button"
            >
              💾 Save Changes
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

        <div className="simple-page-icon">
          🏢
        </div>

        <h1>
          Recruiter Profile
        </h1>

        <p>
          View your company and recruiter information.
        </p>

        <div className="profile-box">

          <div className="profile-row">
            <strong>Company</strong>
            <span>{profile.name}</span>
          </div>

          <div className="profile-row">
            <strong>Email</strong>
            <span>{profile.email}</span>
          </div>

          <div className="profile-row">
            <strong>Recruiter</strong>
            <span>{profile.recruiter}</span>
          </div>

          <div className="profile-row">
            <strong>Location</strong>
            <span>{profile.location}</span>
          </div>

          <div className="profile-row">
            <strong>Industry</strong>
            <span>{profile.industry}</span>
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

export default RecruiterProfile;