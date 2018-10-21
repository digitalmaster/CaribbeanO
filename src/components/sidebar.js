import React from "react";
import { Link } from "gatsby";

const Sidebar = () => (
  <aside id="sidebar" className="positionright four columns omega">
    <ul>
      <li className="widget-container">
        <h2 className="widget-title">Usefull Documents</h2>
        <ul>
          <li>
            <a href="/vlservicecodes.pdf">Dial Codes</a>
          </li>
          <li>
            <a href="/voicelinelocalaccessnumbers.pdf">Calling Card Features</a>
          </li>
        </ul>
      </li>
    </ul>

    <ul>
      <li className="widget-container">
        <h2 className="widget-title">Usefull Links</h2>
        <ul>
          <li>
            <Link to="support">Technical Support</Link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
