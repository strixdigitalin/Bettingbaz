import React from "react";
import { Link } from "react-router-dom";
import { allSports, fetchImage } from "../../Components/Controler/ImageBySport";

function MobDashboard() {
  const buttons = [
    { label: "Signin", onclick: () => {} },
    { label: "Sign up", onclick: () => {} },
  ];
  const allSportsButton = [
    { label: "All Sports", onclick: () => {} },
    { label: "All Sports", onclick: () => {} },
  ];

  return (
    <div className="mob-dashboard">
      <div
        className="flex-row align-ctr w100 just-bet"
        style={{ height: "100px", padding: "0px 20%" }}
      >
        {buttons.map((item) => {
          return (
            <div className="w100">
              <button className="dash-butt">{item.label}</button>
            </div>
          );
        })}
      </div>
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
      </div>
    </div>
  );
}

export default MobDashboard;
