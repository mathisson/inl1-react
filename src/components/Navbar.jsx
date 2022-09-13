import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        className="Navbar"
        style={{
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">root</Link> | 
        <Link to="/home">Home</Link> |{" "}
        <Link to="/form">Form</Link>
      </nav>
    </div>
  );
};

export default Navbar;
