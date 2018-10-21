/* global jQuery */
import React from "react";
import Helmet from "react-helmet";

import Header from "../components/header";
import Footer from "../components/footer";
import Slider from "../components/slider";
import Sidebar from "../components/sidebar";

import "../styles/skeleton.css";
import "../styles/style.css";
import "../styles/prettyPhoto.css";
import "../styles/flexslider.css";
import "../styles/color.css";
import "../styles/layout.css";

import AppleTouchIconS from "../images/apple-touch-icon.png";
import AppleTouchIconM from "../images/apple-touch-icon-72x72.png";
import AppleTouchIconL from "../images/apple-touch-icon-114x114.png";

import "../js/jquery-1.6.4.min.js";
import "../js/hoverIntent.js";
import "../js/superfish.js";
import "../js/supersubs.js";
import "../js/jquery.flexslider-min.js";
import "../js/jquery.prettyPhoto.js";
import "../js/fade.js";
import "../js/tinynav.min.js";
import "../js/custom.js";

// Prevent running on build
if (typeof window !== "undefined") {
  jQuery(window).load(function() {
    jQuery(".flexslider").flexslider({
      animation: "slide",
      slideDirection: "vertical",
      directionNav: false,
      controlNav: true
    });
  });
}

// const jsScrtips = [
//   "/js/jquery-1.6.4.min.js",
//   "/js/hoverIntent.js",
//   "/js/superfish.js",
//   "/js/supersubs.js",
//   "/js/jquery.flexslider-min.js",
//   "/js/jquery.prettyPhoto.js",
//   "/js/fade.js",
//   "/js/tinynav.min.js",
//   "/js/custom.js"
// ];

const Template = ({ children: content }) => {
  return (
    <>
      <div id="bodychild">
        <Helmet>
          <meta name="description" content="The SMART way to make phone calls!" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <link rel="shortcut icon" href="images/favicon.ico" />
          <link rel="apple-touch-icon" href={AppleTouchIconS} />
          <link rel="apple-touch-icon" sizes="72x72" href={AppleTouchIconM} />
          <link rel="apple-touch-icon" sizes="114x114" href={AppleTouchIconL} />
        </Helmet>
        <div id="outercontainer">
          <Header />
          <Slider />

          {/* Main Content */}
          <div id="outermain">
            <div className="container">
              <section id="maincontent" className="twelve columns">
                <section id="content" className="positionleft eight columns alpha">
                  {content}
                  <div className="separator line">
                    <div />
                  </div>
                </section>
                <Sidebar />
                <div className="clear" />
              </section>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Template;
