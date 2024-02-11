import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import "./Navbar.css";
import Logo from "../../assets/landing/logo-removebg.png";

const Navbar = () => {
  return (
    <nav className="header navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container">
        <Link className="navbar-brand" to="/">
         <img className="logo" src={Logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link fnt-description" smooth to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fnt-description" smooth to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fnt-description" smooth to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fnt-description" smooth to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fnt-description" smooth to="#faq">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
