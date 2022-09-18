import React, { useState } from "react";
import moveLect from "../../Assets/Card/Path -1.png";
import moveRight from "../../Assets/Card/Path 3.png";
import movedown from "../../Assets/Card/Path2.png";
import inPlay from "../../Assets/Card/In Play.png";
import BetMark from "../../Assets/Card/Bet Mark.png";
import { useDispatch, useSelector } from "react-redux";
import { placeBid, showModal } from "../../Redux/Reducers/PlaceBid";
import { showOdds } from "../ShowLiveMatchCard";
import { Link } from "react-router-dom";
import { PlaceBetApi } from "../../ClientApi/BetApi";

const InPlaySingleGame = (props) => {
  console.log(props, "<<<props");
  const { item, index, allMatch } = props;
  const PlaceBid = useSelector((state) => state);
  const dispatch = useDispatch();
  const [bidAmount, setBidAmount] = useState(0);
  const [clickedRow, setClickedRow] = useState(null);
  const [bidContent, setBidContent] = useState({ odds: 0 });
  const [bidStatus, setbidStatus] = useState({
    status: null,
    msg: "",
  });
  // --------------
  const openBidModal = (modalData) => {
    // alert("clicked");
    const user = localStorage.getItem("betting_user");
    if (user != null && user != "null" && user != "") {
      // dispatch(showSigninModal(true));
      console.log(modalData, "<<<this is modal data");
      dispatch(
        showModal({
          ...modalData,
          show: true,
          matchId: item.id,
          team_id: modalData.team_id,
        })
      );
    } else {
      alert("Log in to place bid");
    }
  };

  console.log(PlaceBid);
  const [handleContent, setHandleContent] = useState(true);

  const submitBid = () => {
    setbidStatus({ status: null, msg: "" });

    PlaceBetApi({ ...bidContent, amount: bidAmount }, (res) => {
      console.log(res);
      if (res.status) {
        setbidStatus({ status: true, msg: res.message });
      } else {
        setbidStatus({ status: false, msg: res.message });
      }
    });
  };

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
          <span className="cardTeam"> Teams</span>
        </div>
        <div className="card-today-right-in-play">
          <div className="singleRight">1</div>
          <div className="singleRight">X</div>
          <div className="singleRight">2</div>
        </div>
      </div>

      {/* ----- single row */}
      {allMatch.map((item, index) => {
        const firstOdd = item?.odds["1"];
        console.log(item.odds, "<<<<inplaygameodd");
        const second = item?.odds["2"];
        return (
          <>
            <div className="card-today-row  align-ctr">
              <div className=" flex-row align-ctr in-play-row-left ">
                <div
                  style={{ color: "black" }}
                  className="row-left flex-row just-bet  align-ctr w100"
                >
                  <Link
                    to={`/match-single${item.id}`}
                    style={{ color: "black" }}
                  >
                    <div>{item?.name.replace("@", "vs")}</div>
                  </Link>
                  <div className="flex-row just-center align-ctr">
                    <img src={inPlay} width="30px" />
                  </div>
                </div>
              </div>
              <div className="card-today-wrap-right">
                <div
                  className="card-today-right"
                  style={{ background: "#064778", color: "white" }}
                  onClick={() => {
                    setBidContent({
                      odds: firstOdd,
                      team: item.team1.name,
                      team_id: 1,
                    });
                    setClickedRow(index);
                  }}
                >
                  {showOdds(firstOdd)}
                </div>

                <div
                  className="card-today-right"
                  style={{
                    background: "#F98417",
                    color: "white ",
                  }}
                  onClick={() => {
                    setBidContent({
                      odds: parseFloat(
                        parseFloat(showOdds(firstOdd)) + +0.1
                      ).toFixed(1),
                      team: item.team2.name,
                      team_id: 1,
                    });
                    setClickedRow(index);
                  }}
                >
                  {parseFloat(parseFloat(showOdds(firstOdd)) + +0.1).toFixed(1)}
                </div>
                <div
                  className="card-today-right"
                  style={{ background: "#064778", opacity: "0.5" }}
                  onClick={() => {
                    setBidContent({
                      odds: firstOdd,
                      team: item.team1.name,
                      team_id: 1,
                    });
                    setClickedRow(index);
                  }}
                >
                  {showOdds(firstOdd)}
                </div>
                <div
                  className="card-today-right"
                  style={{ background: "#F98417", opacity: "0.5" }}
                  onClick={() => {
                    setBidContent({
                      odds: second,
                      team: item.team2.name,
                      team_id: 2,
                    });
                    setClickedRow(index);
                  }}
                >
                  {showOdds(second)}
                </div>
                <div
                  className="card-today-right"
                  style={{ background: "#064778" }}
                  onClick={() => {
                    setBidContent({
                      odds: second,
                      team: item.team2.name,
                      team_id: 2,
                    });
                    setClickedRow(index);
                  }}
                >
                  {showOdds(second)}
                </div>
                <div
                  className="card-today-right"
                  style={{ background: "#F98417" }}
                  onClick={() => {
                    setBidContent({
                      odds: parseFloat(
                        parseFloat(showOdds(second)) + +0.1
                      ).toFixed(1),
                      team: item.team2.name,
                      team_id: 2,
                    });
                    setClickedRow(index);
                  }}
                >
                  {parseFloat(parseFloat(showOdds(second)) + +0.1).toFixed(1)}
                </div>
              </div>
            </div>
            {index == clickedRow && (
              <div className="placebid-cover ">
                <div className="button-cover">
                  {[100, 500, 1000, 2000].map((item) => {
                    return (
                      <button onClick={() => setBidAmount(item)}>{item}</button>
                    );
                  })}
                </div>
                <div className="input-est-cover">
                  <input
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                  />
                  <div className="button-est">
                    {[
                      { label: "Place Bid", onClick: submitBid },
                      {
                        label: "Hide",
                        onClick: () => {
                          setClickedRow(null);
                          setbidStatus({ status: null, message: "" });
                          setBidAmount(0);
                          setBidContent({ odds: 0 });
                        },
                      },
                    ].map((item, key) => {
                      return (
                        <button
                          onClick={item.onClick}
                          style={{
                            background: `${key == 0 ? "green" : "red"}`,
                          }}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                    <button>
                      Est:{parseFloat(bidContent.odds * bidAmount).toFixed(1)}
                    </button>
                  </div>
                </div>
                {bidStatus.status != null && (
                  <div
                    className="bid-placed"
                    style={{
                      display: `${bidStatus.status == null && "none"}`,
                      color: `${bidStatus.status == true ? "green" : "red"}`,
                    }}
                  >
                    {" "}
                    {bidStatus.msg}
                  </div>
                )}
              </div>
            )}
          </>
        );
      })}
      {/* {handleContent && (
        <div className="card-today-row  align-ctr">
          <div className=" flex-row align-ctr in-play-row-left ">
            <div
              style={{ color: "black" }}
              className="row-left flex-row just-bet  align-ctr w100"
            >
              <Link to={`/match-single${item.id}`} style={{ color: "black" }}>
                <div>{item?.name.replace("@", "vs")}</div>
              </Link>
              <div className="flex-row just-center align-ctr">
                <img src={inPlay} width="30px" />
              </div>
            </div>
          </div>
          <div className="card-today-wrap-right">
            <div
              className="card-today-right"
              style={{ background: "#064778", color: "white" }}
              onClick={() => {
               
                setBidContent({
                  odds: firstOdd,
                  team: item.team1.name,
                  team_id: 1,
                });
                setClickedRow(index);
              }}
            >
              {showOdds(firstOdd)}
            </div>

            <div
              className="card-today-right"
              style={{
                background: "#F98417",
                color: "white ",
              }}
              onClick={() => {
                setBidContent({
                  odds: parseFloat(
                    parseFloat(showOdds(firstOdd)) + +0.1
                  ).toFixed(1),
                  team: item.team2.name,
                  team_id: 1,
                });
                setClickedRow(index);
              }}
            >
              {parseFloat(parseFloat(showOdds(firstOdd)) + +0.1).toFixed(1)}
            </div>
            <div
              className="card-today-right"
              style={{ background: "#064778", opacity: "0.5" }}
              onClick={() => {
                setBidContent({
                  odds: firstOdd,
                  team: item.team1.name,
                  team_id: 1,
                });
                setClickedRow(index);
              }}
            >
              {showOdds(firstOdd)}
            </div>
            <div
              className="card-today-right"
              style={{ background: "#F98417", opacity: "0.5" }}
              onClick={() => {
                setBidContent({
                  odds: second,
                  team: item.team2.name,
                  team_id: 2,
                });
                setClickedRow(index);
              }}
            >
              {showOdds(second)}
            </div>
            <div
              className="card-today-right"
              style={{ background: "#064778" }}
              onClick={() => {
                setBidContent({
                  odds: second,
                  team: item.team2.name,
                  team_id: 2,
                });
                setClickedRow(index);
              }}
            >
              {showOdds(second)}
            </div>
            <div
              className="card-today-right"
              style={{ background: "#F98417" }}
              onClick={() => {
                setBidContent({
                  odds: parseFloat(parseFloat(showOdds(second)) + +0.1).toFixed(
                    1
                  ),
                  team: item.team2.name,
                  team_id: 2,
                });
                setClickedRow(index);
              }}
            >
              {parseFloat(parseFloat(showOdds(second)) + +0.1).toFixed(1)}
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default InPlaySingleGame;
