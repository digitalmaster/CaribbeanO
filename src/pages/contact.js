import React from "react";

import Main from "../layouts/main";

export default function(props) {
  return (
    <Main title="Contact Us" subTitle="We're here to help!" {...props}>
      <h3>Information</h3>
      <p>To contact us please use one of the following methods:</p>
      <h3>Email Us:</h3>
      <p>
        Drop us a note at <a href="mailto:info@caribbeano.com">info@caribbeano.com</a> we typically
        respond to all messages within 48hrs.
      </p>

      <h3>Call Us:</h3>

      <p>Tel 1.305.704.2109</p>
      <h3>You may also write to:</h3>
      <p>
        CaribbeanO Duty Free
        <br /> POB 632, Philipsburg,
        <br /> St.Maarten N.A. 0239AE
      </p>
    </Main>
  );
}
