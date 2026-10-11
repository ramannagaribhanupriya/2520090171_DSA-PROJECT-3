import React, { useState } from "react";
import logo from "../assets/logo.png";
import Login from "./Login";

function Welcome() {
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return <Login />;
  }

  return (
    <div className="welcome-page">

      <div className="welcome-box">

        <img
          src={logo}
          alt="Resume Job Matching"
          className="welcome-logo"
        />

        <h1>
          Welcome to Resume-Job Matching
        </h1>

        <p>
          Find the right job and the right talent with smart matching.
        </p>

        <button
          className="get-started-button"
          onClick={() => setShowLogin(true)}
        >
          Get Started
        </button>

      </div>

    </div>
  );
}

export default Welcome;