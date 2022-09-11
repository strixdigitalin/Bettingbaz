import React, { useEffect, useState } from "react";
import logo from "../../Assets/Header/logo.png";
import wallet from "../../Assets/Header/wallet.png";
import avatar from "../../Assets/Header/avatar.png";
import cricket from "../../Assets/gameicon/Cricket.png";
import football from "../../Assets/gameicon/football.png";
import inPlay from "../../Assets/Header/In Play.png";
import tenisBall from "../../Assets/gameicon/tennis.png";
import Lock from "../../Assets/Header/Svgs/lock.svg";
import logout from "../../Assets/Header/Svgs/logout.svg";
import page from "../../Assets/Header/Svgs/page.svg";
import rule from "../../Assets/Header/Svgs/rule.svg";
import { Link, BrowserRouter as Router } from "react-router-dom";

import { login } from "../../ClientApi/Auth";

import menu from "../../Assets/menu.png";
import { getUserDetail } from "../../ClientApi/BetApi";
import { useSelector, useDispatch } from "react-redux";
import { openWallet } from "../../Redux/Reducers/WalletDropDown";
import { showResetPasswordModal } from "../../Redux/Reducers/ResetPassword.js";
import { allSports } from "../Controler/ImageBySport";

export const betting_user = "betting_user";

function Header() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { WalletDropDown } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(WalletDropDown, "<<<wallet");

  const headerItems = [
    {
      name: "Sports",
      index: 1,
    },
    {
      name: "E Sports",
      index: 2,
    },
    {
      name: "Casino",
      index: 3,
    },
  ];

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
  console.log(isLoggedIn, "<<<is logged in");
  const handleSubmit = () => {
    console.log(loginData);
    login(loginData, (res) => {
      console.log(res);
      if (res.user) {
        alert("success");
        setIsLoggedIn(true);
        setLoggedInUser(res.user);
        localStorage.setItem(
          betting_user,
          JSON.stringify({ ...res.user, bearer: res["bearer-token"] })
        );
      } else {
        alert("fail");
      }
    });
  };
  const buttons = [
    { name: "Log In", onClick: handleSubmit },
    { name: "Sign Up" },
  ];
  const bottomItems = [
    {
      name: "In Play",
      icon: inPlay,
      width: "25px",
      height: "25px",
      link: "in-play",
    },
    {
      name: "Football",
      icon: football,
      width: "25px",
      height: "25px",
      link: "/all-competition-by-sports/football",
    },
    {
      name: "Cricket",
      icon: cricket,
      width: "30px",
      height: "30px",
      link: "/all-competition-by-sports/cricket",
    },
    {
      name: "Tenis",
      icon: tenisBall,
      width: "30px",
      height: "30px",
      link: "/all-competition-by-sports/football",
    },
    // { name: "Table Tennis", icon: tableTennis, width: "40px", height: "40px" },
  ];
  const Inputs = [
    {
      label: "Email",
      name: "email",
    },
    {
      label: "Password",
      name: "password",
    },
  ];
  const loggedInButtons = [
    {
      name: loggedInUser?.user_coin + " coins",
      src: wallet,
      onClick: () => {},
    },
    {
      name: loggedInUser?.name,
      src: avatar,
      onClick: () => dispatch(openWallet(!WalletDropDown.show)),
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const Logout = async () => {
    localStorage.setItem(betting_user, null);
    window.location.reload(true);
  };

  const resetPass = () => dispatch(showResetPasswordModal(true));
  return (
    <div>
      <div className="">
        {/* ---------------top */}
        <div className={`bg2c header-upper flex-row just-ctr col-white `}>
          {headerItems.map((item, key) => {
            return (
              <div
                className={`pointer onetab  ${
                  selectedTab != item.index ? "not-selected" : "selected-tab"
                }`}
                onClick={() => setSelectedTab(item.index)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        {/* ---------middle */}
        <div className="mid-header">
          {/* <Router> */}
          <Link to="/home">
            <div>
              <img src={logo} />
            </div>
          </Link>
          {/* </Router> */}
          {!isLoggedIn && (
            <div className="header-buttons">
              {Inputs.map((item) => {
                return (
                  <div>
                    {/* {item.name} */}
                    <input
                      className="input-header"
                      name={item.name}
                      placeholder={item.label}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                );
              })}
              {buttons.map((item, key) => (
                <button className="singlebutton" onClick={item.onClick}>
                  {item.name}
                </button>
              ))}{" "}
              <div></div>
            </div>
          )}
          {isLoggedIn && (
            <div className="logged-in-buttons">
              {/* {loggedInButtons.map((item, key) => ( */}
              <Link to="/my-bet">
                <button className="loggedInButton pointer">
                  <div>
                    <img src={wallet} />
                  </div>
                  <div>{loggedInUser?.user_coin + " coins"}</div>
                </button>
              </Link>
              <button
                className="loggedInButton pointer"
                onClick={() => dispatch(openWallet(!WalletDropDown.show))}
              >
                <div>
                  <img src={avatar} />
                </div>
                <div>{loggedInUser?.name}</div>
              </button>
              {/* ))} */}
              {WalletDropDown.show && (
                <div className="walletDropDown">
                  <div className="flex-row  wallet-single">
                    {" "}
                    <div>
                      <img src={Lock} />
                    </div>
                    <div onClick={resetPass}>Reset Password</div>
                  </div>
                  <div className="flex-row  wallet-single">
                    {" "}
                    <div>
                      <img src={page} />
                    </div>
                    <Link to="/my-bet">
                      <div style={{ textDecoration: "none", color: "black" }}>
                        My Bets
                      </div>
                    </Link>
                  </div>
                  <div className="flex-row  wallet-single">
                    {" "}
                    <div>
                      <img src={rule} />
                    </div>
                    <div>Rule</div>
                  </div>
                  <div className="flex-row  wallet-single">
                    {" "}
                    <div>
                      <img src={logout} />
                    </div>
                    <div onClick={Logout}>Logout</div>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="breadcrum">
            <img src={menu} height="40px" width="40px" />
          </div>
        </div>

        {/* ------------------bottom */}
        <div className="bottom-header bg2c ">
          {allSports.slice(0, 4).map((item, key) => (
            <Link to={`/all-competition-by-sports/${item.sport}`}>
              <div
                className="bottom-single"
                style={{ borderLeft: "1px solid gray", paddingLeft: "10px" }}
              >
                <img src={item.icon} width="25px" height="25px" /> {item.sport}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;