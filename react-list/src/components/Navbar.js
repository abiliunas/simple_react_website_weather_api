import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <div>HOME</div>
            <i className="fa-solid fa-list-ul" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/exception"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Exception
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/information"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Weather
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Website List</Button>}{" "}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
