import React from "react";
import "./topSectionUi.css";
import PhotoAnimationUi from "./PhotoAnimationUi.js";

const TopSectionUi = () => {
  return (
    <div className="bgUi">
      <div className="topSectionContainer">
        <div className="topBox1">
          <h2>
            Sanwariya Education Consultants are a top global student recruiter
          </h2>
          {/* <h3>for BPP University,University of Roehampton,and Ravensbourne London.</h3> */}
          <h3>
            Sanwariya is the Exclusive Representative for BPP University,
            University of Roehampton, HSU University, and OIEG pathway programs
            in Andhra Pradesh and Telangana.
          </h3>
        </div>
        <div className="topBox2">
          <PhotoAnimationUi />
        </div>
      </div>
    </div>
  );
};

export default TopSectionUi;
