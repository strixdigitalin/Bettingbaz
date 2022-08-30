import React, { useState } from "react";
import moveLect from "../Assets/Card/Path -1.png";
import moveRight from "../Assets/Card/Path 3.png";
import movedown from "../Assets/Card/Path2.png";
import inPlay from "../Assets/Card/In Play.png";
import BetMark from "../Assets/Card/Bet Mark.png";
import {
  CardHead,
  GameSlider,
  SingleHeighlighCardHead,
} from "../Parts/CardPart";
import Football from "../Assets/Card/Football icon.png";
import Cricket from "../Assets/Card/Cricket ball icon.png";
export function SingleGameCard({
  heading = "heading",
  navigation = false,
  rightText = "d",
  subTitle = "subtitle",
  team = "team",
}) {
  return (
    <div>
      <CardHead
        heading="Heading"
        rightText="right text"
        navigation={false}
        icon={Football}
      />

      {/* --------------------------------------------------------- sub heading card */}

      <div className="card-subhead">
        <div>{subTitle}</div> <div className="cardTeam"> {team}</div>
      </div>

      {/* ------------------------------------------------------- today section */}
      <div className="card-today">
        <div>
          <img src={movedown} width="15px" />
          <span style={{ color: "black", marginLeft: "30px" }}>Today</span>
        </div>
        <div className="card-today-right">
          <div className="singleRight">Home</div>
          <div className="singleRight">Home</div>
        </div>
      </div>

      {/* ----- single row */}
      {[1, 2, 3, 4].map((item, key) => {
        return (
          <div className="card-today-row  align-ctr">
            <div className="w100 flex-row align-ctr">
              {" "}
              <span>15:330</span>
              <div
                style={{ color: "black", marginLeft: "25px" }}
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
                <div className="singleRightrow">Home</div>
              </div>

              <div className="card-today-right">
                <div className="singleRightrow">Home</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export function InPlayCard({
  heading = "heading",
  navigation = false,
  rightText = "d",
  subTitle = "subtitle",
  team = "team",
}) {
  return (
    <div>
      <CardHead
        heading="In Play"
        rightText="right text"
        navigation={false}
        icon={Football}
      />
      <GameSlider />

      {/* --------------------------------------------------------- sub heading card */}

      <div className="card-subhead-inplay">
        <button className="live-but">Live</button>
        <button className="upcoming-but">Upcoming</button>
      </div>

      {/* ------------------------------------------------------- today section */}
      <div className="card-today">
        <div>
          <img src={movedown} width="15px" />
          <span style={{ marginLeft: "15px" }}>
            The Hundred man englend
          </span>{" "}
          <span className="cardTeam"> englend</span>
        </div>
        <div className="card-today-right">
          <div className="singleRight">Home</div>
          <div className="singleRight">Home</div>
        </div>
      </div>

      {/* ----- single row */}
      {[1].map((item, key) => {
        return (
          <div className="card-today-row  align-ctr">
            <div className="w100 flex-row align-ctr">
              {" "}
              <span>15:330</span>
              <div
                style={{ color: "black", marginLeft: "25px" }}
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
                <div className="singleRightrow">Home</div>
              </div>

              <div className="card-today-right">
                <div className="singleRightrow">Home</div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="seemore">See more inplay</div>
    </div>
  );
}

export const Heighlights = ({ navigation = true, heading = "Highlight" }) => {
  return (
    <div className="radiusTop">
      <CardHead heading={heading} navigation={navigation} />
      <div className="heighlight-wrap">
        {/* ------single--- */}
        <div className="w100 flex-col align-ctr single-highlight">
          <div className="  textcenter heighlight-head">
            {" "}
            <div>
              <img src={Football} />
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
          <div className="flex-row just-bet w100 heighlight-row-end">
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
              <img src={Football} />
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
          <div className="flex-row just-bet w100 heighlight-row-end">
            <div className="heighlight-row-left"> 15: Fri 30 Aug</div>
            <div className="flex-row just-center align-ctr ">
              <img src={inPlay} width="30px" />
              <img src={BetMark} width="30px" />
            </div>
          </div>
        </div>
        <div className="w100 flex-col align-ctr single-highlight">
          <div className="  textcenter heighlight-head">
            {" "}
            <div>
              <img src={Football} />
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
          <div className="flex-row just-bet w100 heighlight-row-end">
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
