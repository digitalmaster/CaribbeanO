import React from "react";
import { Link } from "gatsby";

import Main from "../layouts/main";

export default function(props) {
  return (
    <Main title="Technical Suport" subTitle="We're here to help" {...props}>
      <p>
        <span>
          The quality and or operation of your Voice Over Internet Protocol (VoIP) service can be
          affected by several factors.
        </span>
        <br />
        <span>
          The number one reason for poor quality or loss of service is problems with your internet
          connection either at your location, from the ISP or both.
        </span>
      </p>
      <h2>Some local internet connection problems are:</h2>
      <ul>
        <li>
          High non-voice bandwidth usage such as performing large downloads or streaming music or
          video while on a call
        </li>
        <li>Loose or malfunctioning ethernet cable</li>
        <li>Improper connections </li>
        <li>Malfunctioning ADSL modem or router</li>
        <li>ADSL modem or router blocking the ports used by SIP to communicate with our servers</li>
      </ul>
      <h2>
        <span>Some Internet Service Provider internet connection problems are:</span>
      </h2>
      <ul>
        <li>Low bandwidth delivery</li>
        <li>High Packet Loss on network</li>
        <li>High Latency on network</li>
        <li>Poor Routing through the internet</li>
        <li>Malfunctioning network router</li>
        <li>Blocking the ports used by SIP to communicate with our servers</li>
      </ul>
      <h2>Your connection speed test:</h2>
      <iframe title="Speed Test" src="https://fast.com" height="400" width="85%" />
      <h2>Find your IP Address</h2>
      <p>
        Find your true internet address from your Internet Service Provider by clicking on the "Your
        IP Address" link below. This will open a new page that displays the IP address of your
        current provider. Your internal computer network is shielded from the internet by your ADSL
        modem or router. Running this test will enable technical support to troubleshoot your device
        settings remotely.{" "}
        <a href="http://www.your-ip-address.com/" target="_blank" rel="noopener noreferrer">
          Your IP address!
        </a>
      </p>
      <h2>Contact Us</h2>
      <p>
        For more support please feel free to contact us <Link to="contact">here</Link>
      </p>
    </Main>
  );
}
