import React, { useEffect, useState } from "react";
import API from "../../Api";
import banner from "../../Assets/Banner.png";
import logo from "../../Assets/Header/logo.png";
import { Heighlights, SingleGameCard } from "../../Components/Heighlights";
import { InPlayCard } from "../../Components/InplayCard";
import SingleGameListCover from "./SingleGameListCover";
import banner1 from "../../Assets/banners/bannercard1.jpg";
import banner2 from "../../Assets/banners/bannercard2.jpg";
import banner3 from "../../Assets/banners/bannercard3.jpg";
import banner4 from "../../Assets/banners/bannercard4.jpg";
const bannerArray = [banner1, banner2, banner3, banner4];

function HomeMiddle() {
  const [countBanner, setCountBanner] = useState(0);
  // useEffect(() => {
  //   API.get("cricket", (res) => console.log(res));
  // }, []);
  useEffect(() => {}, []);
  setTimeout(() => {
    // console.log(countBanner, "<<countbanner");
    // alert("here");
    if (countBanner == 3) setCountBanner(0);
    else setCountBanner(countBanner + 1);
  }, 3000);

  return (
    <div className="home-middle">
      <div className="banner-cover">
        <img src={bannerArray[countBanner]} width="100%" />
        <button className="join-now">Join Now</button>
      </div>
      <div className="home-display-card">
        {/* <Heighlights /> */}
        <InPlayCard show="3" />
        <SingleGameListCover show={3} />
      </div>
    </div>
  );
}
{
  /* <SingleGameCard heading={"Football"} subTitle={"title"} team={"team"} /> */
}
export default HomeMiddle;
