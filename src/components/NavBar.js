import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);
  const clickHandler = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Booking <FontAwesomeIcon icon={faHotel} />
          </Link>
          <div className="menu-icon" onClick={clickHandler}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
