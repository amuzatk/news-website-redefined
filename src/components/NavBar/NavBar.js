import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./NavBar.css";
// import Pix from '../../assets/images/img8.jpg'

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="logo">
        <h1>Kmath</h1>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            News
          </Link>{" "}
        </li>
        <li className="nav-item">
          <Link
            to="/politics"
            style={{ textDecoration: "none", color: "white" }}
          >
            Politics
          </Link>{" "}
        </li>

        <li className="nav-item">
          <Link
            to="/science"
            style={{ textDecoration: "none", color: "white" }}
          >
            Science
          </Link>{" "}
        </li>

        <li className="nav-item">
          <Link to="/sport" style={{ textDecoration: "none", color: "white" }}>
            Sport
          </Link>{" "}
        </li>

        <li className="nav-item">
          <Link
            to="/entertainment"
            style={{ textDecoration: "none", color: "white" }}
          >
            Entertainment
          </Link>{" "}
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={30} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};
export default NavBar;
