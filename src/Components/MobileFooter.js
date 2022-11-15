import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import homeorange from "../Assets/mobile-icons/orangehome.svg";
// import homeblack from "../Assets/mobile-icons/homeblack.png";
import homeblack from "../Assets/mobile-icons/blackhome.svg";
import accountblack from "../Assets/mobile-icons/blackaccount.svg";
import accountorange from "../Assets/mobile-icons/orangeaccoung.svg";

import sportsblack from "../Assets/mobile-icons/sportsblack.svg";
import sportsorange from "../Assets/mobile-icons/esportsorange.svg";

import esportsorange from "../Assets/mobile-icons/orangegame.svg";
import esportsblack from "../Assets/mobile-icons/blackgame.svg";
import moreblack from "../Assets/mobile-icons/moreblack.png";
import moreorange from "../Assets/mobile-icons/moreorange.png";
import walletblack from "../Assets/mobile-icons/blackwallet.svg";
import walletorange from "../Assets/mobile-icons/orangewallet.svg";
import mybetblack from "../Assets/mobile-icons/blackbet.svg";
import mybetorange1 from "../Assets/mobile-icons/oragebet.svg";
import orangebet from "../Assets/mobile-icons/oragebet.svg";
import casinoblack from "../Assets/mobile-icons/blackcasino.svg";
import orangecasino from "../Assets/mobile-icons/orangecasino.svg";
import QuickLinks from "../Components/QuickLinks";
import casinomobile from "../Assets/mobile-icons/casinoblack.jpg";
import inplay from "../Assets/mobile-icons/inplay.jpg";
import supportmobile from "../Assets/mobile-icons/blacksupport.svg";
import rule from "../Assets/Header/Svgs/rule.svg";
import { showSigninModal } from "../Redux/Reducers/SigninModal";
import homeicon from "../Assets/Card/home.png";
import footballicon from "../Assets/Card/footballicon.png";
import videogame from "../Assets/Card/videogame.png";
import casino from "../Assets/Card/casino.jpg";
// import blackhome from "../Assets/mobile-icons/blackhome.png";

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
  const showEsports = () => {
    const path = window.location.pathname;
    if (switchAccountTabs == "e-sport") return true;
    else return false;
  };
  console.log(switchAccountTabs, "<<<<<switchaccounttab");
  const showSports = () => {
    const path = window.location.pathname;

    if (switchAccountTabs == "sports") return true;
    else return false;
  };
  const showCasino = () => {
    const path = window.location.pathname;
    if (switchAccountTabs == "casino") return true;
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
  useEffect(() => {
    const stringUser = localStorage.getItem("betting_user");
    if (stringUser == null || stringUser == "null") {
      setUserLoggedIn(false);
    } else {
      setUserLoggedIn(true);
    }
    console.log(stringUser, "<<<isloggedinuser");
  }, []);

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
    if (e.target.className != "moreclick" && popupRef.current.style) {
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
        {userLoggedIn && (
          <>
            {" "}
            <a href="/home" className="text-icon-cover">
              <img
                src={showHome() ? homeorange : homeblack}
                width="30px"
                style={{ margin: "auto", textAlign: "center" }}
              />

              <span
                style={{
                  color: showHome() ? "orange" : "black",
                  fontSize: "12px",
                }}
              >
                Home
              </span>

              {/* <div style={{ textDecoration: "none", color: "black" }}>Home</div> */}
            </a>
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
                width="30px"
                src={showMyBet() ? orangebet : mybetblack}
                // width={showMyBet() ? "50px" : "60px"}
                style={{
                  margin: "auto",
                  textAlign: "center",
                }}
              />
              <span
                style={{
                  color: showMyBet() ? "orange" : "black",
                  fontSize: "12px",
                }}
              >
                My Bet
              </span>
            </Link>
            <Link to="/my-wallet" className="text-icon-cover">
              <img
                src={showWallet() ? walletorange : walletblack}
                onClick={() => {
                  setSwitchAccountTabs("Wallet");
                }}
                width="30px"
                style={{ margin: "auto", textAlign: "center" }}
              />
              <span
                style={{
                  color: showWallet() ? "orange" : "black",
                  fontSize: "12px",
                }}
              >
                Wallet
              </span>
            </Link>
            <Link to="/my-account" className="text-icon-cover">
              <img
                onClick={() => {
                  setSwitchAccountTabs("Account");
                }}
                width="30px"
                src={showAccount() ? accountorange : accountblack}
                style={{ margin: "auto", textAlign: "center" }}
              />
              <span
                style={{
                  color: showAccount() ? "orange" : "black",
                  fontSize: "12px",
                }}
              >
                Account
              </span>
            </Link>
            <div className="text-icon-cover">
              <img
                onClick={moreClick}
                className="moreclick"
                src={showMore() ? moreorange : moreblack}
                width="30px"
                style={{ margin: "auto", textAlign: "center" }}
              />
              {/* <div style={{ textDecoration: "none", color: "black" }}>Casino</div> */}
            </div>
          </>
        )}
        {!userLoggedIn && (
          <>
            <a href="/home" className="text-icon-cover">
              <img
                src={showHome() ? homeorange : homeblack}
                width="30px"
                style={{ margin: "auto", textAlign: "center" }}
              />
              <span
                style={{
                  color: showHome() ? "orange" : "black",
                  fontSize: "12px",
                }}
              >
                Home
              </span>
            </a>
            <a href="/sports" className="text-icon-cover">
              <img
                src={showSports() ? sportsorange : sportsblack}
                width="30px"
                style={{ margin: "auto", textAlign: "center" }}
              />
              <span
                style={{
                  color: showSports() ? "orange" : "black",
                  fontSize: "12px",
                }}
              >
                Sport
              </span>
            </a>
            <a href="/e-sport" className="text-icon-cover">
              <img
                src={showEsports() ? esportsorange : esportsblack}
                width="30px"
                style={{ margin: "auto", textAlign: "center" }}
              />
              <span
                style={{
                  color: showEsports() ? "orange" : "black",
                  fontSize: "12px",
                }}
              >
                e-sport
              </span>
            </a>

            <a href="/casino" className="text-icon-cover">
              <img
                src={showCasino() ? orangecasino : casinoblack}
                width="30px"
                style={{ margin: "auto", textAlign: "center" }}
              />
              <span
                style={{
                  color: showCasino() ? "orange" : "black",
                  fontSize: "12px",
                }}
              >
                e-sport
              </span>
            </a>
          </>
        )}
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
