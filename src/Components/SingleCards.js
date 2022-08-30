import React, { useState } from "react";
import Football from "../Assets/Card/Football icon.png";
import Cricket from "../Assets/Card/Cricket ball icon.png";
import moveLect from "../Assets/Card/Path -1.png";
import moveRight from "../Assets/Card/Path 3.png";
import movedown from "../Assets/Card/Path2.png";
import inPlay from "../Assets/Card/In Play.png";
import BetMark from "../Assets/Card/Bet Mark.png";
import rightArrow from "../Assets/Card/arrow-right.png";
import { SingleHeighlighCardHead } from "../Parts/CardPart";
function SingleCards() {
  return <div></div>;
}

export const SingleHeightHead = ({
  navigation = true,
  heading = "HEIGHLIGHTS",
}) => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="radiusBot " style={{ border: "1px solid gray 10px" }}>
      <div className="single-category radiusTop">
        {["Popular", "Live Now", "All Cricket"].map((item, key) => {
          return (
            <div
              className={` ${
                selectedItem == key && "bottom-orange"
              } single-item`}
              onClick={() => setSelectedItem(key)}
            >
              <div className={`${key == 1 && "item-left-right-bord"} w100`}>
                {item}{" "}
              </div>
            </div>
          );
        })}
      </div>
      <SingleHeighlighCardHead heading={heading} navigation={navigation} />
      <div className="heighlight-wrap ">
        {/* ------single--- */}
        <div className="w100 flex-col align-ctr single-highlight">
          <div className="  textcenter heighlight-head">
            {" "}
            <div>
              <img src={Cricket} />
            </div>
            <div>Test Match</div>
          </div>
          <div className="flex-row just-bet w100 heighlight-row">
            <div className="heighlight-row-left"> Team 1</div>{" "}
            <div className="heighlight-row-right">1.83 </div>{" "}
          </div>
          <div className="flex-row just-bet w100 heighlight-row">
            <div className="heighlight-row-left"> Team 1</div>{" "}
            <div className="heighlight-row-right">1.83 </div>{" "}
          </div>
          <div className="flex-row just-bet w100 heighlight-row">
            <div className="heighlight-row-left"> Team 1</div>{" "}
            <div className="heighlight-row-right">1.83 </div>{" "}
          </div>
          <div className="flex-row just-bet w100 heighlight-row-end text6E">
            <div className="heighlight-row-left"> 15: Fri 30 Aug</div>
            <div className="flex-row just-center align-ctr ">
              <img src={inPlay} width="30px" />
              <img src={BetMark} width="30px" />
            </div>
          </div>
        </div>

        {/* --------single */}
        <div className="w100 flex-col align-ctr single-highlight">
          <div className="  textcenter heighlight-head">
            {" "}
            <div>
              <img src={Cricket} />
            </div>
            <div>Test Match</div>
          </div>
          <div
            className="flex-row just-bet w100 heighlight-row"
            style={{ height: "44px" }}
          >
            <div className="heighlight-row-left"> Team 1</div>{" "}
            <div className="heighlight-row-right">1.834 </div>{" "}
          </div>

          <div
            className="flex-row just-bet w100 heighlight-row"
            style={{ height: "44px" }}
          >
            <div className="heighlight-row-left"> Team 1</div>{" "}
            <div className="heighlight-row-right">1.83 </div>{" "}
          </div>
          <div className="flex-row just-bet w100 heighlight-row-end text6E">
            <div className="heighlight-row-left"> 15: Fri 30 Aug</div>
            <div className="flex-row just-center align-ctr ">
              <img src={inPlay} width="30px" />
              <img src={BetMark} width="30px" />
            </div>
          </div>
        </div>
        <div className="w100 flex-col align-ctr single-highlight ">
          <div className="  textcenter heighlight-head">
            {" "}
            <div>
              <img src={Cricket} />
            </div>
            <div>Test Match</div>
          </div>
          <div
            className="flex-row just-bet w100 heighlight-row"
            style={{ height: "44px" }}
          >
            <div className="heighlight-row-left"> Team 1</div>{" "}
            <div className="heighlight-row-right">1.834 </div>{" "}
          </div>

          <div
            className="flex-row just-bet w100 heighlight-row"
            style={{ height: "44px" }}
          >
            <div className="heighlight-row-left"> Team 1</div>{" "}
            <div className="heighlight-row-right">1.83 </div>{" "}
          </div>
          <div className="flex-row just-bet w100 heighlight-row-end text6E">
            <div className="heighlight-row-left"> 15: Fri 30 Aug</div>
            <div className="flex-row just-center align-ctr ">
              <img src={inPlay} width="30px" />
              <img src={BetMark} width="30px" />
            </div>
          </div>
        </div>
        {/* ---------single--- */}
      </div>
    </div>
  );
};

export const CurrTournament = ({}) => {
  return (
    <div>
      <div
        className="card-today radiusTop"
        style={{ backgroundColor: " #E1E1E1" }}
      >
        <div className="flex-row align-ctr">
          <h2>T 20 Asia Cup</h2>{" "}
          <span className="cardTeam" style={{ color: "#7B7878" }}>
            {" "}
            englend
          </span>
        </div>
      </div>
      {["Today", "Tomorrow", "Sunday"].map((item) => {
        return (
          <>
            <div className="card-today" style={{ backgroundColor: "#EAEAEA" }}>
              <div>
                <img src={movedown} width="15px" />
                <span style={{ marginLeft: "15px" }}>{item}</span>{" "}
                {/* <span className="cardTeam"> englend</span> */}
              </div>
              <div className="card-today-right">
                <div className="singleRight">Home</div>
                <div className="singleRight">Away</div>
              </div>
            </div>
            <div className="card-today-row  align-ctr">
              <div className="w100 flex-row align-ctr text6E">
                {" "}
                <span>15:330</span>
                <div
                  style={{ marginLeft: "25px" }}
                  className="row-left flex-row just-bet w100 align-ctr"
                >
                  <div>Today</div>
                  <div className="flex-row just-center align-ctr">
                    <img src={inPlay} width="30px" />
                    <img src={BetMark} width="30px" />
                  </div>
                </div>
              </div>
              <div className="card-today-wrap-right">
                <div className="card-today-right">
                  <div className="singleRightrow">1.98</div>
                </div>

                <div className="card-today-right">
                  <div className="singleRightrow">1.65</div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export const TopLeague = () => {
  return (
    <div>
      <div
        className="card-today  radiusTop"
        style={{ backgroundColor: "#E1E1E1" }}
      >
        <div className="flex-row align-ctr">
          <h2>T 20 Asia Cup</h2>{" "}
        </div>
      </div>
      <div className="flex-row just-bet league-card-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
          return (
            <div className="w100 flex-row just-bet align-ctr leagueSingleBox bgwhite">
              <div style={{ color: "#000000" }}>
                {" "}
                The Hundred man
                <br />
                <span style={{ color: "#6A6A6A" }}>englend</span>
              </div>
              <div style={{ width: "10%" }}>
                <img src={rightArrow} width="10px" height="15px" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleCards;
