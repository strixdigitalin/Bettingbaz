import React, { useRef } from "react";
import moveLect from "../Assets/Card/Path -1.png";
import moveRight from "../Assets/Card/Path 3.png";
import Football from "../Assets/gameicon/football.png";
import australianRule from "../Assets/gameicon/australian-rules.png";
import americalFootball from "../Assets/gameicon/american-football.png";
import Baseball from "../Assets/gameicon/Baseball.png";
import basketball from "../Assets/gameicon/basketball.png";
import boxing from "../Assets/gameicon/boxing.png";
import Cricket from "../Assets/gameicon/Cricket.png";
// import tableTenis from "../Assets/Header/table tenis icon.png";
import tenis from "../Assets/gameicon/tennis.png";
import { allSports, fetchImage } from "../Components/Controler/ImageBySport";

const gameList = [
  { name: "cricket", icon: Cricket },
  { name: "football", icon: Football },
  { name: "tenis", icon: tenis },
  { name: "australian-rules", icon: australianRule },
  { name: "american-football", icon: americalFootball },
  { name: "Baseball", icon: Baseball },
  { name: "Basketball", icon: basketball },
  { name: "Boxing", icon: boxing },
];

export function CardHead({
  icon,
  text,
  heading,
  link,
  navigation = false,
  rightText = "",
}) {
  return (
    <div className="card-head radiusTop">
      <div className="flex-row">
        <img src={icon} width="30px" height="30px" />
        <span style={{ marginLeft: "10px", fontSize: "20px" }}> {heading}</span>
      </div>

      {navigation && (
        <div className="change-but">
          <div className="singleBut">
            <img src={moveLect} />
          </div>
          <div className="singleBut">
            <img src={moveRight} />
          </div>
        </div>
      )}
      {rightText != "" && (
        <div className="card-left-text">
          {rightText} {`>`}
        </div>
      )}
    </div>
  );
}
export function SingleHeighlighCardHead({
  icon,
  text,
  heading,
  link,
  navigation = false,
  rightText = "",
}) {
  return (
    <div
      className="card-head bordnoradius"
      style={{ backgroundColor: "#E1E1E1", color: "black", fontWeight: "bold" }}
    >
      <div className="flex-row">
        <img src={icon} />
        <h2 style={{ marginLeft: "10px" }}> {heading}</h2>
      </div>

      {navigation && (
        <div className="change-but">
          <div className="singleBut">
            <img src={moveLect} />
          </div>
          <div className="singleBut">
            <img src={moveRight} />
          </div>
        </div>
      )}
      {rightText != "" && (
        <div className="card-left-text">
          {rightText} {`>`}
        </div>
      )}
    </div>
  );
}

export const GameSlider = ({ selectedGame, changeGame }) => {
  const slideLeft = useRef(null);

  const onSlideLeft = () => {
    // slideLeft.current.border = "5px solid red";
    // document.getElementsByClassName("middle-games").style.border =
    //   "5px solid red";
  };

  return (
    <div className="flex-row just-between game-slide w100">
      <div className="navigator left-nav">
        <img src={moveLect} onClick={onSlideLeft} ref={slideLeft} />
      </div>
      <div className="middle-games">
        {allSports.map((item, key) => {
          return (
            <div
              className={`${
                selectedGame == item.sport ? "singleClick" : "singleGame"
              }`}
              onClick={() => changeGame(item.sport)}
            >
              <div>
                <img src={fetchImage(item.sport)} width="25px" />
              </div>
              <div className="textcenter" style={{ fontSize: "7px" }}>
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
      <div className="navigator right-nav">
        <img src={moveRight} />
      </div>
    </div>
  );
};
