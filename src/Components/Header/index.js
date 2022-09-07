import React, { useState } from "react";
import logo from "../../Assets/Header/logo.png";
import cricket from "../../Assets/gameicon/Cricket.png";
import football from "../../Assets/gameicon/football.png";
import inPlay from "../../Assets/Header/In Play.png";
import tenisBall from "../../Assets/gameicon/tennis.png";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { login } from "../../ClientApi/Auth";

import menu from "../../Assets/menu.png";
function Header() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
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

  const handleSubmit = () => {
    console.log(loginData);
    login(loginData, (res) => {
      console.log(res);
      if (res.user) {
        alert("success");
        localStorage.setItem(
          "betting_user",
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
    { name: "In Play", icon: inPlay, width: "25px", height: "25px" },
    { name: "Football", icon: football, width: "25px", height: "25px" },
    { name: "Cricket", icon: cricket, width: "30px", height: "30px" },
    { name: "Tenis", icon: tenisBall, width: "30px", height: "30px" },
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

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
          <div className="breadcrum">
            <img src={menu} height="40px" width="40px" />
          </div>
        </div>

        {/* ------------------bottom */}
        <div className="bottom-header bg2c ">
          {bottomItems.map((item, key) => (
            <div className="bottom-single">
              <img src={item.icon} width={item.width} height={item.height} />{" "}
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
