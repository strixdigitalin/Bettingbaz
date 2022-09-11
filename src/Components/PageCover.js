import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import QuickLinks from "../Components/QuickLinks";
import { showSigninModal } from "../Redux/Reducers/SigninModal";
import { leftLinkData, rightLinkData } from "./Controler/ImageBySport";

function PageCover({ component }) {
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
          item={[1, 2, 3]}
          data={leftLinkData}
        />
        {component}

        <QuickLinks
          heading="Quick Links"
          item={[1, 2, 3]}
          data={rightLinkData}
        />
      </div>
      <div className="mobile-bottom">
        <Link to="/in-play">
          <div style={{ textDecoration: "none", color: "white" }}>In Play</div>
        </Link>

        <div
          onClick={openSigninModal}
          style={{ textDecoration: "none", color: "white" }}
        >
          Sign in
        </div>

        <Link to="/">
          <div style={{ textDecoration: "none", color: "white" }}>Blog</div>
        </Link>
      </div>
    </div>
  );
}

export default PageCover;
