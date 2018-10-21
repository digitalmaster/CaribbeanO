/* global jQuery */
import React from "react";
import { Link } from "gatsby";

import Logo from "../images/logo.png";

const isActive = (path, currentPath) => (currentPath === path ? "current" : "");

class Header extends React.Component {
  componentDidMount = () => {
    // Prevent running on build
    if (typeof window !== "undefined") {
      jQuery("a[rel^='prettyPhoto']").prettyPhoto();
    }
  };

  render = () => {
    const {
      location: { pathname: currentPage }
    } = this.props;
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
                  <li>
                    <a
                      href="https://www.myaccountcenter.net/account/reseller/english/login.asp?iframe=true&width=100%&height=100%"
                      rel="prettyPhoto[iframes]"
                    >
                      Account Login
                    </a>
                  </li>
                  <li className={isActive("/about", currentPage)}>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className={isActive("/rates", currentPage)}>
                    <Link to="/rates">Rates</Link>
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
}

export default Header;
