import React from "react";
import Helmet from "react-helmet";

import Header from "../components/header";
import Footer from "../components/footer";
import Slider from "../components/slider";
import Sidebar from "../components/sidebar";
import ContentHeader from "../components/contentHeader";

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

const Layout = ({ children: content, layoutType, title, subTitle, location }) => {
  return (
    <>
      <div id="bodychild">
        <Helmet>
          <title>{`${title} | CaribbeanO.com`}</title>
          <meta name="description" content={subTitle} />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <link rel="shortcut icon" href="images/favicon.ico" />
          <link rel="apple-touch-icon" href={AppleTouchIconS} />
          <link rel="apple-touch-icon" sizes="72x72" href={AppleTouchIconM} />
          <link rel="apple-touch-icon" sizes="114x114" href={AppleTouchIconL} />
        </Helmet>
        <div id="outercontainer">
          <Header location={location} />

          {layoutType === "home" ? (
            <Slider location={location} />
          ) : (
            <ContentHeader title={title} subTitle={subTitle} />
          )}

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

export default Layout;
