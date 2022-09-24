import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserDetail } from "../../ClientApi/BetApi";
import { allSports, fetchImage } from "../../Components/Controler/ImageBySport";
import { showSigninModal } from "../../Redux/Reducers/SigninModal";

function MobDashboard() {
  const dispatch = useDispatch();
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const buttons = [
    {
      label: "Signin",
      onclick: () => {
        dispatch(showSigninModal(true));
      },
    },
    { label: "Sign up", onclick: () => (window.location.href = "/signup") },
  ];
  const allSportsButton = [
    { label: "All Sports", onclick: () => {} },
    { label: "All Sports", onclick: () => {} },
  ];
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const stringUser = localStorage.getItem("betting_user");
    console.log(stringUser, "<<<is");
    if (stringUser == null || stringUser == "" || stringUser == "null") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
      getUserDetail((res) => {
        setLoggedInUser(res.user);
      });
    }
    // const parseIt = JSON.parse(stringUser);
  }, []);

  return (
    <div className="mob-dashboard">
      {!IsLoggedIn && (
        <div
          className="flex-row align-ctr w100 just-bet"
          style={{ height: "100px", padding: "0px 20%" }}
        >
          {buttons.map((item) => {
            return (
              <div className="w100">
                <button onClick={item.onclick} className="dash-butt">
                  {item.label}
                </button>
              </div>
            );
          })}
        </div>
      )}
      <div
        className="flex-row just-ctr"
        style={{
          background: "#ACB4BB",
          padding: "5px",
        }}
      >
        {" "}
        <div className="">
          <button
            style={{ background: "#707070", color: "white" }}
            className="dash-allsport"
          >
            All Sports
          </button>
        </div>
        <div className="">
          <button
            style={{ background: "white", color: "black" }}
            className="dash-allsport"
          >
            All Sports
          </button>
        </div>
      </div>
      <div
        style={{
          background: "#C9D0D6",
          color: "black",
          padding: "7px",
          fontWeight: "300",
        }}
      >
        Favourites
      </div>
      <div className="flex-row dash-game">
        {allSports.slice(0, 4).map((item, index) => {
          return (
            <div className="dash-single-game">
              <Link to={`/all-competition-by-sports${item.link}`}>
                {" "}
                <div>
                  <img
                    src={fetchImage(item.sport)}
                    width="50px
              "
                  />
                </div>
                <div style={{ fontWeight: "200" }}>{item.name} </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div
        style={{
          background: "#C9D0D6",
          color: "black",
          padding: "7px",
          fontWeight: "300",
        }}
      >
        All Sports
      </div>
      <div className="flex-col">
        {allSports.slice(0, 18).map((item) => {
          return (
            <div className="single-game-list ">
              <img
                src={fetchImage(item.sport)}
                width="25px
          "
                style={{ marginRight: "10px", marginLeft: "" }}
              />{" "}
              {item.name}
            </div>
          );
        })}
        <div
          style={{
            background: "gray",
            fontWeight: "bold",
            fontSize: "14px",
            height: "60px",
          }}
          className="single-game-list "
          onClick={() => {
            // localStorage.setItem("betting_user", null);
            window.location.href = "/my-bet";
          }}
        >
          My Bid
        </div>
        <div
          style={{
            background: "gray",
            fontWeight: "bold",
            fontSize: "14px",
            height: "60px",
          }}
          className="single-game-list "
          onClick={() => {
            localStorage.setItem("betting_user", null);
            window.location.href = "/";
          }}
        >
          Logout
        </div>
      </div>
    </div>
  );
}

export default MobDashboard;
