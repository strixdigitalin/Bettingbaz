import React, { useState } from "react";
import moveLect from "../../Assets/Card/Path -1.png";
import moveRight from "../../Assets/Card/Path 3.png";
import movedown from "../../Assets/Card/Path2.png";
import inPlay from "../../Assets/Card/In Play.png";
import BetMark from "../../Assets/Card/Bet Mark.png";
import { useDispatch, useSelector } from "react-redux";
import { placeBid, showModal } from "../../Redux/Reducers/PlaceBid";
import { showOdds } from "../ShowLiveMatchCard";

const InPlaySingleGame = ({ item }) => {
  const PlaceBid = useSelector((state) => state);
  const dispatch = useDispatch();

  // --------------
  const openBidModal = (modalData) => {
    // alert("clicked");
    const user = localStorage.getItem("betting_user");
    if (user != null && user != "null" && user != "") {
      // dispatch(showSigninModal(true));
      dispatch(showModal({ ...modalData, show: true, matchId: item.id }));
    } else {
      alert("Log in to place bid");
    }
  };

  console.log(PlaceBid);
  const [handleContent, setHandleContent] = useState(true);
  const firstOdd = item?.odds["1"];
  console.log(item.odds, "<<<<inplaygameodd");
  const second = item?.odds["2"];

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
          <div className="singleRight">1</div>
          <div className="singleRight">X</div>
          <div className="singleRight">2</div>
        </div>
      </div>

      {/* ----- single row */}

      {handleContent && (
        <div className="card-today-row  align-ctr">
          <div className=" flex-row align-ctr in-play-row-left">
            {" "}
            <span>15:330</span>
            <div
              style={{ color: "black", marginLeft: "25px" }}
              className="row-left flex-row just-bet  align-ctr w100"
            >
              <div>Todady</div>
              <div className="flex-row just-center align-ctr">
                <img src={inPlay} width="30px" />
                <img src={BetMark} width="30px" />
              </div>
            </div>
          </div>
          <div className="card-today-wrap-right">
            <div
              className="card-today-right"
              style={{ background: "#064778", color: "white" }}
            >
              <div
                className="singleRightrow"
                onClick={() =>
                  openBidModal({
                    odds: firstOdd,
                    team: item.team1.name,
                    team_id: 1,
                  })
                }
              >
                {showOdds(firstOdd)}
              </div>
            </div>

            <div
              className="card-today-right"
              style={{
                background: "#F98417",
                color: "white ",
              }}
            >
              <div
                className="singleRightrow"
                onClick={() =>
                  openBidModal({
                    odds: parseFloat(firstOdd) + 1.0,
                    team: item.team2.name,
                    team_id: 1,
                  })
                }
              >
                {parseFloat(parseFloat(showOdds(firstOdd)) + +0.1).toFixed(1)}
              </div>
            </div>
            <div
              className="card-today-right"
              style={{ background: "#064778", opacity: "0.5" }}
            >
              <div
                className="singleRightrow"
                onClick={() =>
                  openBidModal({
                    odds: firstOdd,
                    team: item.team1.name,
                    team_id: 1,
                  })
                }
              >
                {showOdds(firstOdd)}
              </div>
            </div>
            <div
              className="card-today-right"
              style={{ background: "#F98417", opacity: "0.5" }}
            >
              <div
                className="singleRightrow"
                onClick={() =>
                  openBidModal({
                    odds: second,
                    team: item.team2.name,
                    team_id: 2,
                  })
                }
              >
                {showOdds(second)}
              </div>
            </div>
            <div className="card-today-right" style={{ background: "#064778" }}>
              <div
                className="singleRightrow"
                onClick={() =>
                  openBidModal({
                    odds: second,
                    team: item.team2.name,
                    team_id: 2,
                  })
                }
              >
                {showOdds(second)}
              </div>
            </div>
            <div className="card-today-right" style={{ background: "#F98417" }}>
              <div
                className="singleRightrow"
                onClick={() =>
                  openBidModal({
                    odds: parseFloat(second) + 1.0,
                    team: item.team2.name,
                    team_id: 2,
                  })
                }
              >
                {parseFloat(parseFloat(showOdds(second)) + +0.1).toFixed(1)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InPlaySingleGame;
