import React, { useRef } from "react";
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
import homeorange from "../../Assets/mobile-icons/homeorange.png";
import homeblack from "../../Assets/mobile-icons/homeblack.png";
import accountblack from "../../Assets/mobile-icons/accountblack.png";
import accountorange from "../../Assets/mobile-icons/accountorange.png";
import moreblack from "../../Assets/mobile-icons/moreblack.png";
import walletblack from "../../Assets/mobile-icons/walletblack.png";
import walletorange from "../../Assets/mobile-icons/walletorange.png";
import mybetblack from "../../Assets/mobile-icons/mybetblack.png";
import MobileFooter from "../../Components/MobileFooter";

function SinglePages() {
  const popupRef = useRef();
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
    <div className="upper-body">
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
      <MobileFooter />
    </div>
  );
}

export default SinglePages;
