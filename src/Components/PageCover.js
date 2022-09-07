import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import QuickLinks from "../Components/QuickLinks";
import { showSigninModal } from "../Redux/Reducers/SigninModal";

function PageCover({ component }) {
  const dispatch = useDispatch();
  const openSigninModal = () => {
    dispatch(showSigninModal(true));
  };
  return (
    <div style={{ backgroundColor: "#C7C7C7" }}>
      <div className="home-body">
        <QuickLinks heading="Quick Links" item={[1, 2, 3]} />
        {component}

        <QuickLinks heading="Quick Links" item={[1, 2, 3]} />
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
