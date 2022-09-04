import React from "react";
import { Heighlights, SingleGameCard } from "../../Components/Heighlights";
import banner from "../../Assets/Banner.png";
import QuickLinks from "../../Components/QuickLinks";
import HomeMiddle from "../Home/HomeMiddle";
import SingleMiddle from "./SingleMiddle";

function SingleGame() {
  return (
    <div style={{ backgroundColor: "#C7C7C7" }}>
      <div className="home-body">
        {/* <div> */}
        <QuickLinks heading="Quick Links" item={[1, 2, 3]} />
        {/* <QuickLinks heading="Quick Links" item={[1, 2, 3]} /> */}
        <SingleMiddle />

        <QuickLinks heading="Quick Links" item={[1, 2, 3]} />
        {/* </div> */}
        {/* <div>LEft</div>
        <div>LEft</div> */}
      </div>
    </div>
  );
}

export default SingleGame;
