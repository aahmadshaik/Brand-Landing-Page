import React from "react";
import "./Header.css";

// import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <div>
      <nav>
        <img
          src="https://themesdesign.in/xolcy/layout/images/logo-dark.png"
          alt="logo"
        ></img>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#features">Features</a>
          <a href="#client">Client</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Pricing</a>
        </div>

        <button>Builds Your's >> </button>
      </nav>
    </div>
  );
}

export default Header;
