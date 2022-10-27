import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import homeorange from "../Assets/mobile-icons/homeorange.png";
import homeblack from "../Assets/mobile-icons/homeblack.png";
import accountblack from "../Assets/mobile-icons/accountblack.png";
import accountorange from "../Assets/mobile-icons/accountorange.png";
import moreblack from "../Assets/mobile-icons/moreblack.png";
import moreorange from "../Assets/mobile-icons/moreorange.png";
import walletblack from "../Assets/mobile-icons/walletblack.png";
import walletorange from "../Assets/mobile-icons/walletorange.png";
import mybetblack from "../Assets/mobile-icons/mybetblack.png";
import mybetorange1 from "../Assets/mobile-icons/mybetorange1.jpg";
import QuickLinks from "../Components/QuickLinks";
import casinomobile from "../Assets/mobile-icons/casinoblack.jpg";
import inplay from "../Assets/mobile-icons/inplay.jpg";
import supportmobile from "../Assets/mobile-icons/supportmobie.jpg";
import rule from "../Assets/Header/Svgs/rule.svg";
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

function MobileFooter({ showOrange = "home" }) {
  const popupRef = useRef();
  const [switchAccountTabs, setSwitchAccountTabs] = useState(showOrange);
  const [userLoggedIn, setUserLoggedIn] = useState({});
  const dispatch = useDispatch();

  const showHome = () => {
    const path = window.location.pathname;
    if (path == "/" || path == "/home" || showOrange == "home") return true;
    else return false;
  };
  const showMyBet = () => {
    const path = window.location.pathname;
    if (switchAccountTabs == "my-bet") return true;
    else return false;
  };
  const showAccount = () => {
    const path = window.location.pathname;
    if (switchAccountTabs == "Account") return true;
    else return false;
  };

  const showWallet = () => {
    const path = window.location.pathname;

    if (switchAccountTabs == "Wallet") return true;
    else return false;
  };

  const showMore = () => {
    const path = window.location.pathname;
    if (switchAccountTabs == "More") return true;
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
    setSwitchAccountTabs("More");
    popupRef.current.style.display = "block";
  };

  return (
    <div style={{ backgroundColor: "#C7C7C7" }} className="showmobile-footer">
      <div className="mobile-bottom">
        <Link to="/home" className="text-icon-cover">
          <img
            src={showHome() ? homeorange : homeblack}
            width="50px"
            style={{ width: "50px", margin: "auto", textAlign: "center" }}
          />
          {/* <div style={{ textDecoration: "none", color: "black" }}>Home</div> */}
        </Link>

        <Link
          to="/my-bet"
          // onClick={openSigninModal}
          className="text-icon-cover"
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          <img
            onClick={() => {
              setSwitchAccountTabs("my-bet");
            }}
            src={showMyBet() ? mybetorange1 : mybetblack}
            width={showMyBet() ? "50px" : "60px"}
            style={{
              width: showMyBet() ? "30px" : "60px",
              margin: "auto",
              textAlign: "center",
            }}
          />
          {showMyBet() && <span style={{ color: "orange" }}>My Bet</span>}
        </Link>

        <Link to="/my-wallet" className="text-icon-cover">
          <img
            src={showWallet() ? walletorange : walletblack}
            onClick={() => {
              setSwitchAccountTabs("Wallet");
            }}
            width="50px"
            style={{ width: "50px", margin: "auto", textAlign: "center" }}
          />
          {/* <div style={{ textDecoration: "none", color: "black" }}>E sports</div> */}
        </Link>
        <Link to="/my-account" className="text-icon-cover">
          <img
            onClick={() => {
              setSwitchAccountTabs("Account");
            }}
            src={showAccount() ? accountorange : accountblack}
            width="50px"
            style={{ width: "50px", margin: "auto", textAlign: "center" }}
          />
          {/* <div style={{ textDecoration: "none", color: "black" }}>Casino</div> */}
        </Link>
        <div className="text-icon-cover">
          <img
            onClick={moreClick}
            className="moreclick"
            src={showMore() ? moreorange : moreblack}
            width="40px"
            style={{ width: "40px", margin: "auto", textAlign: "center" }}
          />
          {/* <div style={{ textDecoration: "none", color: "black" }}>Casino</div> */}
        </div>
      </div>
      <div className="bottom-popup" ref={popupRef}>
        <Link to="/casino" style={{ color: "black" }}>
          <div className="">
            <img
              src={casinomobile}
              width="20px"
              style={{ width: "30px", margin: "auto", textAlign: "center" }}
            />{" "}
            <span style={{ marginLeft: "10px" }}>Casino</span>
          </div>
        </Link>
        <Link to="/e-sport" style={{ color: "black" }}>
          <div className="">
            <img
              src={inplay}
              width="20px"
              style={{ width: "30px", margin: "auto", textAlign: "center" }}
            />{" "}
            <span style={{ marginLeft: "10px" }}>E Sport</span>
          </div>
        </Link>
        <div className="">
          <img
            src={supportmobile}
            width="20px"
            style={{ width: "30px", margin: "auto", textAlign: "center" }}
          />{" "}
          <span style={{ marginLeft: "10px" }}>Support</span>
        </div>
        <div className="">
          <img
            src={rule}
            width="20px"
            style={{
              width: "20px",
              margin: "auto",
              marginTop: "5px",
              textAlign: "center",
            }}
          />{" "}
          <span style={{ marginLeft: "20px" }}>Blog</span>
        </div>
      </div>
    </div>
  );
}

export default MobileFooter;
