import React from "react";

import slide1 from "../images/main_1.jpg";
import slide2 from "../images/main_2.jpg";

const Slider = () => (
  <div id="outerslider">
    <div className="container">
      <div id="slidercontainer" className="twelve columns">
        <section id="slider">
          <div id="slideritems" className="flexslider">
            <ul className="slides">
              <li>
                <img src={slide1} alt="" />
                <div className="flex-caption">
                  <h1>Best Calling Plans!</h1>
                  <p>
                    We have plans for just about everyone, regardless to where you love to call.
                  </p>
                  <a href="plans.html" className="button">
                    Our Plans
                  </a>
                </div>
              </li>
              <li>
                <img src={slide2} alt="" />
                <div className="flex-caption">
                  <h1>
                    Voiceline&#8480; <br />
                    The Smart Way to make phone calls!
                  </h1>
                  <p>Let us show you why this is the smartest way to make phone calls.</p>
                  <a href="about.html" className="button">
                    Learn more
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default Slider;