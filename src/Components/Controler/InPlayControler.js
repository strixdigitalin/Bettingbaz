import React, { useState } from "react";
import moveLect from "../../Assets/Card/Path -1.png";
import moveRight from "../../Assets/Card/Path 3.png";
import movedown from "../../Assets/Card/Path2.png";
import inPlay from "../../Assets/Card/In Play.png";
import BetMark from "../../Assets/Card/Bet Mark.png";
import { useDispatch, useSelector } from "react-redux";
import { placeBid, showModal } from "../../Redux/Reducers/PlaceBid";

const InPlaySingleGame = ({ item }) => {
  const PlaceBid = useSelector((state) => state);
  const dispatch = useDispatch();

  // --------------
  const openBidModal = (modalData) => {
    // alert("clicked");
    const user = localStorage.getItem("betting_user");
    if (user != null || user != "") {
      // dispatch(showSigninModal(true));
      dispatch(showModal({ ...modalData, show: true, matchId: item.id }));
    } else {
      alert("Log in to place bid");
    }
  };

  console.log(PlaceBid);
  const [handleContent, setHandleContent] = useState(true);
  const firstOdd = item?.odds["1"];
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
          <div className="singleRight">Home</div>
          <div className="singleRight">Away</div>
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
              <div>Today</div>
              <div className="flex-row just-center align-ctr">
                <img src={inPlay} width="30px" />
                <img src={BetMark} width="30px" />
              </div>
            </div>
          </div>
          <div className="card-today-wrap-right">
            <div className="card-today-right">
              <div
                className="singleRightrow"
                onClick={() =>
                  openBidModal({
                    odds: firstOdd,
                    team: item.team1.name,
                  })
                }
              >
                {firstOdd}
              </div>
            </div>

            <div className="card-today-right">
              <div
                className="singleRightrow"
                onClick={() =>
                  openBidModal({
                    odds: second,
                    team: item.team2.name,
                  })
                }
              >
                {second}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InPlaySingleGame;