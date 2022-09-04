import React, { useEffect } from "react";
import API from "../../Api";
import banner from "../../Assets/Banner.png";
import logo from "../../Assets/Header/logo.png";
import { Heighlights, SingleGameCard } from "../../Components/Heighlights";
import { InPlayCard } from "../../Components/InplayCard";
import SingleGameListCover from "./SingleGameListCover";

function HomeMiddle() {
  // useEffect(() => {
  //   API.get("cricket", (res) => console.log(res));
  // }, []);

  return (
    <div className="home-middle">
      <div>
        <img src={banner} width="100%" />
      </div>
      <div className="home-display-card" style={{ marginTop: "20px" }}>
        <Heighlights />
        <InPlayCard show="3"  />
        <SingleGameListCover show={3} />
        {/* <SingleGameCard heading={"Football"} subTitle={"title"} team={"team"} /> */}
      </div>
    </div>
  );
}

export default HomeMiddle;
