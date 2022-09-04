import React from "react";
import moveLect from "../Assets/Card/Path -1.png";
import moveRight from "../Assets/Card/Path 3.png";
import Football from "../Assets/Header/Football icon.png";
import Cricket from "../Assets/Header/Cricket ball icon.png";
import tableTenis from "../Assets/Header/table tenis icon.png";
import tenis from "../Assets/Card/tenis ball icon.png";

const gameList = [
  { name: "cricket", icon: Cricket },
  { name: "football", icon: Football },
  { name: "Table tenis", icon: tableTenis },
  { name: "Tenis", icon: tenis },
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
        <img src={icon} />
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
  return (
    <div className="flex-row just-between game-slide w100">
      <div className="navigator">
        <img src={moveLect} />
      </div>
      <div className="middle-games">
        {[...gameList].map((item, key) => {
          return (
            <div
              className={`${
                selectedGame == item.name ? "singleClick" : "singleGame"
              }`}
              onClick={() => changeGame(item.name)}
            >
              <div>
                <img src={item.icon} width="22px" height="22px" />
              </div>
              <div className="textcenter">{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className="navigator">
        <img src={moveRight} />
      </div>
    </div>
  );
};
