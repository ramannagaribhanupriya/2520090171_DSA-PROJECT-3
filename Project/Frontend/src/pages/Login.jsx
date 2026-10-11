import React, { useState } from "react";
import logo from "../assets/logo.png";
import CandidateDashboard from "./CandidateDashboard";
import RecruiterDashboard from "./RecruiterDashboard";

function Login() {
  const [loginAs, setLoginAs] = useState("Job Seeker");
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    if (loginAs === "Job Seeker") {
      return (
        <CandidateDashboard
          onLogout={() => setShowDashboard(false)}
        />
      );
    }

    if (loginAs === "Recruiter") {
      return (
        <RecruiterDashboard
          onLogout={() => setShowDashboard(false)}
        />
      );
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();

    setShowDashboard(true);
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <img
          src={logo}
          alt="Resume Job Matching"
          className="login-logo"
        />

        <h1>Welcome Back!</h1>

        <form onSubmit={handleLogin}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <label>Login As</label>

          <div className="login-options">

            <label>
              <input
                type="radio"
                name="loginAs"
                value="Job Seeker"
                checked={loginAs === "Job Seeker"}
                onChange={(e) => setLoginAs(e.target.value)}
              />

              👤 Job Seeker
            </label>

            <label>
              <input
                type="radio"
                name="loginAs"
                value="Recruiter"
                checked={loginAs === "Recruiter"}
                onChange={(e) => setLoginAs(e.target.value)}
              />

              🏢 Recruiter
            </label>

          </div>

          <div className="login-extra">

            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <button
              type="button"
              className="forgot-button"
              onClick={() => alert("Forgot Password")}
            >
              Forgot Password?
            </button>

          </div>

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>

        </form>

        <p className="register-text">

          Don't have an account?

          <button
            type="button"
            className="register-button"
            onClick={() => alert("Register Page")}
          >
            Create Account / Register
          </button>

        </p>

      </div>
    </div>
  );
}

export default Login;