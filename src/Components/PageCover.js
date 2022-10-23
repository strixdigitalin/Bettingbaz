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

function PageCover({ component, gamename }) {
  const popupRef = useRef();
  const [userLoggedIn, setUserLoggedIn] = useState({});
  const dispatch = useDispatch();
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
          heading="Quick Links"
          item={[1, 2, 3]}
          data={allSports.slice(0, 18)}
        />
      </div>
      <div className="mobile-bottom">
        <Link to="/home" className="text-icon-cover">
          <img
            src={homeblack}
            width="50px"
            style={{ width: "50px", margin: "auto", textAlign: "center" }}
          />
          {/* <div style={{ textDecoration: "none", color: "black" }}>Home</div> */}
        </Link>

        <Link
          to="/my-account"
          // onClick={openSigninModal}
          className="text-icon-cover"
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          <img
            src={mybetblack}
            width="50px"
            style={{ width: "50px", margin: "auto", textAlign: "center" }}
          />
          {/* Sports */}
        </Link>

        <Link to="/my-account" className="text-icon-cover">
          <img
            src={walletblack}
            width="50px"
            style={{ width: "50px", margin: "auto", textAlign: "center" }}
          />
          {/* <div style={{ textDecoration: "none", color: "black" }}>E sports</div> */}
        </Link>
        <Link to="/my-account" className="text-icon-cover">
          <img
            src={accountblack}
            width="50px"
            style={{ width: "50px", margin: "auto", textAlign: "center" }}
          />
          {/* <div style={{ textDecoration: "none", color: "black" }}>Casino</div> */}
        </Link>
        <div className="text-icon-cover">
          <img
            onClick={moreClick}
            className="moreclick"
            src={moreblack}
            width="50px"
            style={{ width: "50px", margin: "auto", textAlign: "center" }}
          />
          {/* <div style={{ textDecoration: "none", color: "black" }}>Casino</div> */}
        </div>
      </div>
      <div className="bottom-popup" ref={popupRef}>
        <div className="">
          <img
            src={homeicon}
            width="20px"
            style={{ width: "30px", margin: "auto", textAlign: "center" }}
          />{" "}
          <span style={{ marginLeft: "10px" }}>Casino</span>
        </div>
        <div className="">
          <img
            src={homeicon}
            width="20px"
            style={{ width: "30px", margin: "auto", textAlign: "center" }}
          />{" "}
          <span style={{ marginLeft: "10px" }}>E Sport</span>
        </div>
        <div className="">
          <img
            src={homeicon}
            width="20px"
            style={{ width: "30px", margin: "auto", textAlign: "center" }}
          />{" "}
          <span style={{ marginLeft: "10px" }}>Support</span>
        </div>
        <div className="">
          <img
            src={homeicon}
            width="20px"
            style={{ width: "30px", margin: "auto", textAlign: "center" }}
          />{" "}
          <span style={{ marginLeft: "10px" }}>Blog</span>
        </div>
      </div>
    </div>
  );
}

export default PageCover;
