import React from "react";

const ContentHeader = ({ title, subTitle }) => {
  return (
    <div id="outerafterheader">
      <div className="container">
        <div id="afterheader" className="twelve columns">
          <section id="aftertheheader">
            <hgroup>
              <h1 className="pagetitle">{title}</h1>
              <h3 className="pagedesc">{subTitle}</h3>
            </hgroup>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
