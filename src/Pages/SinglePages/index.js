import React from "react";
import commingsoon from "../../Assets/singlepages/Commingsoon.png";
import commingsoonText from "../../Assets/singlepages/commingsoon.svg";
import sportpage from "../../Assets/singlepages/sportspage.svg";

function SinglePages() {
  return (
    <div>
      <div
        className="static-page-cover"
        style={
          {
            // backgroundImage: reqire("../../Assets/singlepages/Commingsoon.png"),
          }
        }
      >
        <img src={commingsoon} width="100%" />
        <div className="middle-content">
          <img src={commingsoonText} width="100%" />
          <div>
            <img src={sportpage} width="150px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePages;
