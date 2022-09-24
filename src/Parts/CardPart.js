import React, { useRef, useState } from "react";
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

export const getScreenWidth = window.screen.width;

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

export const GameSlider = ({ selectedGame, changeGame, matchCount }) => {
  const slideLeft = useRef(null);
  const [moveSlider, setMoveSlider] = useState(0);

  const onSlideLeft = () => {
    if (window.screen.width < 500) {
      if (moveSlider == 0) return null;
      setMoveSlider(moveSlider - 3);
    } else {
      if (moveSlider == 0) return null;
      setMoveSlider(moveSlider - 3);
    }
  };
  const onSlideRight = () => {
    // alert(window.screen.width);
    if (window.screen.width < 500) {
      if (moveSlider == 15) return null;
      setMoveSlider(moveSlider + 3);
    } else {
      if (moveSlider == 15) return null;
      setMoveSlider(moveSlider + 3);
    }
  };

  return (
    <div className="flex-row just-between game-slide w100">
      <div className="navigator left-nav pointer" onClick={onSlideLeft}>
        <img src={moveLect} ref={slideLeft} />
      </div>
      <div className="middle-games">
        {allSports
          .slice(0, 18)
          .slice(moveSlider, moveSlider + 9)
          .map((item, key) => {
            return (
              <div
                style={{
                  borderBottom:
                    selectedGame == item.sport ? "5px solid orange" : "",
                  height: "100%",
                }}
              >
                <div
                  className={`${"singleGame"}`}
                  onClick={() => changeGame(item.sport)}
                >
                  <div>
                    <img
                      src={fetchImage(item.sport)}
                      width="25px"
                      style={{ marginLeft: "1px solid black" }}
                    />
                  </div>
                  <div className="textcenter" style={{ fontSize: "9.3px" }}>
                    {item.name}{" "}
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      {selectedGame == item.sport ? "(" + matchCount + ")" : ""}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="navigator right-nav pointer" onClick={onSlideRight}>
        <img src={moveRight} />
      </div>
    </div>
  );
};
export const GameSliderMob = ({ selectedGame, changeGame, matchCount }) => {
  const slideLeft = useRef(null);
  const [moveSlider, setMoveSlider] = useState(0);

  const onSlideLeft = () => {
    if (window.screen.width < 500) {
      if (moveSlider == 0) return null;
      setMoveSlider(moveSlider - 3);
    } else {
      if (moveSlider == 0) return null;
      setMoveSlider(moveSlider - 7);
    }
  };
  const onSlideRight = () => {
    alert(window.screen.width);
    if (window.screen.width < 500) {
      if (moveSlider == 14) return null;
      setMoveSlider(moveSlider + 3);
    } else {
      if (moveSlider == 14) return null;
      setMoveSlider(moveSlider + 7);
    }
  };

  return (
    <div className="flex-row just-between game-slide-mob w100">
      {/* <div className="navigator left-nav pointer" onClick={onSlideLeft}>
        <img src={moveLect} ref={slideLeft} />
      </div> */}
      <div className="middle-games">
        {window.screen.width > 768 &&
          allSports
            .slice(0, 18)
            .slice(moveSlider, moveSlider + 7)
            .map((item, key) => {
              return (
                <div
                  style={{
                    borderBottom:
                      selectedGame == item.sport ? "5px solid orange" : "",
                    height: "100%",
                  }}
                >
                  <div
                    className={`${"singleGame"}`}
                    onClick={() => changeGame(item.sport)}
                  >
                    {/* <div> */}
                    <img
                      src={fetchImage(item.sport)}
                      width={window.screen.width < 768 ? "35px" : "25px"}
                    />
                    {/* </div> */}
                    <div className="textcenter" style={{ fontSize: "9.3px" }}>
                      {item.name}{" "}
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        {selectedGame == item.sport
                          ? "(" + matchCount + ")"
                          : ""}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>

      {/*  for mobile screen */}
      <div className="middle-games">
        {window.screen.width <= 768 &&
          allSports
            .slice(0, 18)
            .slice(moveSlider, moveSlider + 7)
            .map((item, key) => {
              return (
                <div
                  style={{
                    borderBottom:
                      selectedGame == item.sport ? "5px solid orange" : "",
                    height: "100%",
                  }}
                >
                  <div
                    className={`${"singleGame"}`}
                    onClick={() => changeGame(item.sport)}
                  >
                    {/* <div> */}
                    <img
                      src={fetchImage(item.sport)}
                      width={window.screen.width < 768 ? "45px" : "25px"}
                    />
                    {/* </div> */}
                    <div className="textcenter" style={{ fontSize: "9.3px" }}>
                      {item.name}{" "}
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        {selectedGame == item.sport
                          ? "(" + matchCount + ")"
                          : ""}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      {/* <div className="navigator right-nav pointer" onClick={onSlideRight}>
        <img src={moveRight} />
      </div> */}
    </div>
  );
};
