// src/components/navbar/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { user, logout } = useAuth();
  
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Maximum pixels the title can move to the left
  const maxTranslation = 44; // Adjust this value as needed

  return (
    <nav className="navbar">
      <Link to="/"
        className="navbar-title"
        style={{
          transform: `translateX(${Math.max(scrollPosition * -2, -maxTranslation)}vw)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        ASK THE VETS
      </Link>
      <div className="navbar-icons">
        <div className="user-role-section">
          {user.role === "guest" ? (
            <div>
              <span className="account-name">Welcome,<br/></span>
              <Link to="/login" className="navbar-link">Login   |</Link>
              <Link to="/register" className="navbar-link">|   Register</Link>
            </div>
          ) : (
            <div>
              <span className="account-name">
                Welcome, {user.name} {user.role === "admin" && "(Admin)"}
              </span>
              <button className="logout-btn" onClick={logout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
