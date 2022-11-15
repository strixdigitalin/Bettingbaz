import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import homeorange from "../Assets/mobile-icons/homeorange.png";
import homeblack from "../Assets/mobile-icons/homeblack.png";
import accountblack from "../Assets/mobile-icons/accountblack.png";
import accountorange from "../Assets/mobile-icons/accountorange.png";
import moreblack from "../Assets/mobile-icons/moreblack.png";
import walletblack from "../Assets/mobile-icons/walletblack.png";
import walletorange from "../Assets/mobile-icons/walletorange.png";
import mybetblack from "../Assets/mobile-icons/mybetblack.png";
import QuickLinks from "../Components/QuickLinks";
import { showSigninModal } from "../Redux/Reducers/SigninModal";
import homeicon from "../Assets/Card/home.png";
import footballicon from "../Assets/Card/footballicon.png";
import videogame from "../Assets/Card/videogame.png";
import casino from "../Assets/Card/casino.jpg";
import {
  allSports,
  fetchImage,
  leftLinkData,
  rightLinkData,
} from "./Controler/ImageBySport";
import MobileFooter from "./MobileFooter";

function PageCover({ component, gamename }) {
  const popupRef = useRef();
  const [userLoggedIn, setUserLoggedIn] = useState({});
  const dispatch = useDispatch();

  const showHome = () => {
    const path = window.location.pathname;
    if (path == "/") return true;
    else return false;
  };

  const openSigninModal = () => {
    const user = localStorage.getItem("betting_user");
    // if (user != null || user != "") {
    dispatch(showSigninModal(true));
    // } else {
    // alert("Log in to place bid");
    // }
  };

  window.onclick = (e) => {
    console.log(e.target, "<<<className");
    if (e.target.className != "moreclick") {
      popupRef.current.style.display = "none";
    }
  };
  const moreClick = () => {
    popupRef.current.style.display = "block";
  };

  return (
    <div style={{ backgroundColor: "#C7C7C7" }}>
      <div className="home-body">
        <QuickLinks
          heading="Quick Links"
          left={true}
          item={[1, 2, 3]}
          data={leftLinkData}
        />
        {component}

        <QuickLinks
          heading="All Games"
          item={[1, 2, 3]}
          data={allSports.slice(0, 18)}
        />
      </div>
      <MobileFooter />
    </div>
  );
}

export default PageCover;
