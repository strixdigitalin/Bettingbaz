import React from "react";
import banner from "../../Assets/Banner.png";
import logo from "../../Assets/Header/logo.png";
import {
  Heighlights,
  InPlayCard,
  SingleGameCard,
} from "../../Components/Heighlights";

function HomeMiddle() {
  return (
    <div className="home-middle">
      <div>
        <img src={banner} width="100%" />
      </div>
      <div className="home-display-card" style={{marginTop:"20px"}}>
        <Heighlights />
        <InPlayCard />
        <SingleGameCard />
      </div>
    </div>
  );
}

export default HomeMiddle;
