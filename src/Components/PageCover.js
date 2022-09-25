import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
            src={homeicon}
            width="30px"
            style={{ width: "30px", margin: "auto", textAlign: "center" }}
          />
          <div style={{ textDecoration: "none", color: "black" }}>Home</div>
        </Link>

        <Link
          to="/home"
          // onClick={openSigninModal}
          className="text-icon-cover"
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          <img
            src={footballicon}
            width="30px"
            style={{ width: "30px", margin: "auto", textAlign: "center" }}
          />
          Sports
        </Link>

        <Link to="/e-sport" className="text-icon-cover">
          <img
            src={videogame}
            width="30px"
            style={{ width: "30px", margin: "auto", textAlign: "center" }}
          />
          <div style={{ textDecoration: "none", color: "black" }}>E sports</div>
        </Link>
        <Link to="/casino" className="text-icon-cover">
          <img
            src={casino}
            width="30px"
            style={{ width: "30px", margin: "auto", textAlign: "center" }}
          />
          <div style={{ textDecoration: "none", color: "black" }}>Casino</div>
        </Link>
      </div>
    </div>
  );
}

export default PageCover;
