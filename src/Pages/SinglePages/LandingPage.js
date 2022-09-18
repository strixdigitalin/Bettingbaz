import React from "react";
import landingpage from "../../Assets/singlepages/LandingPage/coverimage.svg";
import contentLanding from "../../Assets/singlepages/LandingPage/content.svg";
import betnow from "../../Assets/singlepages/LandingPage/Betnow.svg";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-cover">
      <img src={landingpage} width="100%" />
      <div className="landing-content">
        <div>
          <img src={contentLanding} />
        </div>
        <div>
          <Link to="/home">
            <img src={betnow} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
