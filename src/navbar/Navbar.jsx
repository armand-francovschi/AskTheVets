import React, { useEffect, useState } from "react";
import { Menu, Search } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Maximum pixels the title can move to the left
  const maxTranslation = 44; // Adjust this value as needed

  return (
    <nav className="navbar">
      <h1
        className="navbar-title"
        style={{
          transform: `translateX(${Math.max(scrollPosition * -2, -maxTranslation)}vw)`, // Limit translation to maxTranslation to prevent off-screen
          transition: "transform 0.2s ease-out", // Smooth transition for the movement
        }}
      >
        ASK THE VETS
      </h1>
      <div className="navbar-icons">
        <Search className="icon" color="white" size={24} />
        <Menu className="icon" color="white" size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
