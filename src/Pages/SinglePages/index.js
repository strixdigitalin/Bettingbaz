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
          {/* My Bets */}
        </Link>

        <Link to="/my-account" className="text-icon-cover">
          <img
            src={walletblack}
            width="50px"
            style={{ width: "50px", margin: "auto", textAlign: "center" }}
          />
          {/* <div style={{ textDecoration: "none", color: "black" }}>Wallet</div> */}
        </Link>
        <div className="text-icon-cover" onClick={moreClick}>
          <img
            className="moreclick"
            src={accountblack}
            width="50px"
            style={{ width: "50px", margin: "auto", textAlign: "center" }}
          />
          {/* <div
            style={{ textDecoration: "none", color: "black" }}
            className="moreclick"
          >
            Account
          </div> */}
        </div>
        <div className="text-icon-cover" onClick={moreClick}>
          <img
            className="moreclick"
            src={moreblack}
            width="50px"
            style={{ width: "50px", margin: "auto", textAlign: "center" }}
          />
          {/* <div
            style={{ textDecoration: "none", color: "black" }}
            className="moreclick"
          >
            More
          </div> */}
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

export default SinglePages;
