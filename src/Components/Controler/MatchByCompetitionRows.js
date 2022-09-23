import React, { useState } from "react";
import moveLect from "../../Assets/Card/Path -1.png";
import moveRight from "../../Assets/Card/Path 3.png";
import movedown from "../../Assets/Card/Path2.png";
import inPlay from "../../Assets/Card/In Play.png";
import BetMark from "../../Assets/Card/Bet Mark.png";
import { Link } from "react-router-dom";

function MatchByCompetitionRows({
  item = {
    name: "name",
    competition_name: "compe",
    odds: { 1: 5, 2: "6" },
  },
}) {
  console.log(item.odds.X, "<<itemodds");
  const [handleContent, setHandleContent] = useState(true);
  const firstOdd = item?.odds["1"];
  const second = item?.odds["2"];
  const draw = item?.odds.X;
  const dateTime = new Date(Date.parse(item.start_datetime));
  return (
    <>
      <div className="card-today">
        <div className="inplay-head-left">
          <img
            src={movedown}
            style={{ cursor: "pointer" }}
            width="15px"
            onClick={() => setHandleContent(!handleContent)}
          />
          <span style={{ marginLeft: "15px" }}>{item?.name}</span>{" "}
          <span className="cardTeam"> {item?.competition_name}</span>
        </div>
        <div className="card-today-right-in-play">
          <div className="singleRight">Home</div>
          <div className="singleRight">Draw</div>
          <div className="singleRight">Away</div>
        </div>
      </div>

      {/* ----- single row */}

      {handleContent && (
        <Link
          to={`/match-single${item.id}`}
          className=""
          style={{ textDecoration: "none" }}
        >
          <div className="card-today-row  align-ctr">
            <div
              className=" flex-row align-ctr in-play-row-left"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <span style={{ textDecoration: "none" }}>Date</span>
              <div
                style={{ color: "black", marginLeft: "25px" }}
                className="row-left flex-row just-bet  align-ctr w100"
              >
                <div>{dateTime.toLocaleString()}</div>
                {/* <div className="flex-row just-center align-ctr">
                <img src={inPlay} width="30px" />
                <img src={BetMark} width="30px" />
              </div> */}
              </div>
            </div>

            <div className="card-today-wrap-right">
              <div className="card-today-right">
                {parseFloat(firstOdd).toFixed(1)}
              </div>

              <div className="card-today-right">
                {parseFloat(item.odds.X).toFixed(1)}
              </div>
              <div className="card-today-right">
                {parseFloat(second).toFixed(1)}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default MatchByCompetitionRows;
