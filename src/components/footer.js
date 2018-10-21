import React from "react";

import icn_fb from "../images/social/facebook.png";
import icn_tw from "../images/social/twitter.png";
import icn_st from "../images/social/stumbleupon.png";
import icn_yt from "../images/social/youtube.png";

const Footer = () => (
  <>
    <div id="outeraftercontent">
      <div className="container">
        <div id="aftercontent" className="twelve columns">
          <section id="afterthecontent">
            <ul className="sn">
              <li>
                <a title="Facebook" href="http://facebook.com">
                  <span style={{ background: `url(${icn_fb})` }} className="icon-img" />
                </a>
              </li>
              <li>
                <a title="Twitter" href="http://twitter.com">
                  <span style={{ background: `url(${icn_tw})` }} className="icon-img" />
                </a>
              </li>
              <li>
                <a title="StumbleUpon" href="http://stumbleupon.com">
                  <span style={{ background: `url(${icn_st})` }} className="icon-img" />
                </a>
              </li>
              <li>
                <a title="Youtube" href="http://youtube.com">
                  <span style={{ background: `url(${icn_yt})` }} className="icon-img" />
                </a>
              </li>
            </ul>
            <address className="addr">
              The Smartest Way to make Phone Calls!
              <br />
              <a href="/contact">Contact us!</a>
            </address>
          </section>
        </div>
      </div>
    </div>

    <div id="outerfooter">
      <div className="container">
        <div id="footercontainer" className="twelve columns">
          <footer id="footer">
            Copyright &copy;{" "}
            {`2004-${new Date().getFullYear()} CaribbeanO. All Rights Reserved.${" "}`}
            <a href="http://www.josebrowne.com" target="_blank" rel="noopener noreferrer">
              Web-Developer
            </a>
          </footer>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
