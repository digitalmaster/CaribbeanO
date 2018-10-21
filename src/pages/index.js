import React from "react";

import Main from "../layouts/main";

import VoicelineBox from "../images/products/innomedia.jpg";

const Home = props => {
  return (
    <Main title="Home" subTitle="Welcome to Caribbeano.com" layoutType="home" {...props}>
      <h2 className="smallmargin">Welcome to CaribbeanO.com!</h2>
      <h3 className="customcolor">
        Are you tired of paying too much for phone calls? Poor service from providers? Not being
        able to make overseas/long distance calls when you are on the road? New Apple or Android App
        (VOICELINE) Download, contact us for an account and start calling at the best ever rates and
        plans. US/CA Toll Free Numbers Available Lowest Rates Ever !!
      </h3>
      <p>
        <img
          className="alignright imgborder"
          src={VoicelineBox}
          alt="Voiceline Box"
          width="150"
          height="172"
        />
        Well CaribbeanO has the solution for you! We deliver low cost calling services for home use
        and businesses worldwide, no matter the size. With our wide variety of products, we can
        adapt to your needs and provide a system that is both easy to use and much more economical
        than traditional calling options. <br />
        <br />
        Stay accessible with a virtual telephone number from a growing list of countries such as
        USA, Canada, U.K. France and Spain no matter your location on the planet. Have a Miami
        office number while your're on a beach anywhere in the world. <br />
        <br />
        Use our service to send low cost faxes anywhere in the world. CaribbeanO devices and
        services can be installed on phone systems either in your home or office. We also allow free
        extension only calling between remote locations anywhere in the world. Your London office is
        just a 3 digit "internal extension" call away.
      </p>
    </Main>
  );
};

export default Home;
