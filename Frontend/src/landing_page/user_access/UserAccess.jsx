import React from "react";
import "./UserAccess.css";

const UserAccess = () => {
  const handleRegisterClick = () => {
    // Handle Register logic (e.g., navigate to Register page)
    alert("Redirecting to Register page...");
  };

  const handleLoginClick = () => {
    // Handle Login logic (e.g., navigate to Login page)
    alert("Redirecting to Login page...");
  };

  return (
    <div className="user-bg">
      <div className="user-access-container">
        <h2>Join us today:</h2>
        <button className="service-button" onClick={handleRegisterClick}>
          Create a new account
        </button>
      </div>
    </div>
  );
};

export default UserAccess;
