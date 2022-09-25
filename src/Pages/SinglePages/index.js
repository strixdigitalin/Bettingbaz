import React from "react";
import commingsoon from "../../Assets/singlepages/Commingsoon.png";
import commingsoonText from "../../Assets/singlepages/commingsoon.svg";
import sportpage from "../../Assets/singlepages/sportspage.svg";
import { showSigninModal } from "../../Redux/Reducers/SigninModal";
import homeicon from "../../Assets/Card/home.png";
import footballicon from "../../Assets/Card/footballicon.png";
import videogame from "../../Assets/Card/videogame.png";
import casino from "../../Assets/Card/casino.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function SinglePages() {
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
    <div>
      <div
        className="static-page-cover"
        style={
          {
            // backgroundImage: reqire("../../Assets/singlepages/Commingsoon.png"),
          }
        }
      >
        <img
          src={commingsoon}
          width="100%"
          // height="80vh"
          style={{ objectFit: "cover" }}
        />
        <div className="middle-content">
          <img src={commingsoonText} width="100%" />
          <div>
            <img src={sportpage} width="150px" />
          </div>
        </div>
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

export default SinglePages;
