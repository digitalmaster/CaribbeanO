import React from "react";
import { Link } from "gatsby";

import Logo from "../images/logo.png";

const isActive = (path, currentPath) => (currentPath === path ? "current" : "");

const Header = ({ location: { pathname: currentPage } }) => {
  return (
    <div id="outerheader">
      <div className="container">
        <header id="top" className="twelve columns">
          <div id="logo" className="three columns alpha">
            <a href="home.html">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <section id="navigation" className="nine columns omega">
            <nav>
              <ul id="topnav" className="sf-menu">
                <li className={isActive("/", currentPage)}>
                  <Link to="/">Home</Link>
                </li>
                <li className={isActive("/about", currentPage)}>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
            <div className="clear" />
          </section>
          <div className="clear" />
        </header>
      </div>
    </div>
  );
};

export default Header;
