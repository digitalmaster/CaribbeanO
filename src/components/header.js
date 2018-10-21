import React from "react";

import Logo from "../images/logo.png";

const Header = () => (
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
              <li>
                <a href="#" title="[[+wf.title]]">
                  Home
                </a>
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

export default Header;
