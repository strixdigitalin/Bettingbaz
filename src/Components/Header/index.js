import React, { useState } from "react";
import logo from "../../Assets/Header/logo.png";
import cricket from "../../Assets/Header/Cricket ball icon.png";
import football from "../../Assets/Header/Football icon.png";
import inPlay from "../../Assets/Header/In Play.png";
import tableTennis from "../../Assets/Header/table tenis icon.png";
import tenisBall from "../../Assets/Header/tenis ball icon.png";
import { Link, BrowserRouter as Router } from "react-router-dom";
function Header() {
  const [selectedTab, setSelectedTab] = useState(1);

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
  const buttons = [{ name: "Log In" }, { name: "Sign Up" }];
  const bottomItems = [
    { name: "In Play", icon: inPlay, width: "25px", height: "25px" },
    { name: "Football", icon: football, width: "25px", height: "25px" },
    { name: "Cricket", icon: cricket, width: "30px", height: "30px" },
    { name: "Tenis", icon: tenisBall, width: "30px", height: "30px" },
    { name: "Table Tennis", icon: tableTennis, width: "40px", height: "40px" },
  ];
  const Inputs = [
    {
      name: "Email",
    },
    {
      name: "Password",
    },
  ];

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
                  {item.name}
                  <input className="input-header" />
                </div>
              );
            })}
            {buttons.map((item, key) => (
              <button className="singlebutton">{item.name}</button>
            ))}{" "}
            <div></div>
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
