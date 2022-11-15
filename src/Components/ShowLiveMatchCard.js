import React, { useEffect, useState } from "react";
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
import API from "../Api";
import { Link } from "react-router-dom";
import CustomLoader from "./CustomLoader";
import NoDataFound from "./NoDataFound";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../Redux/Reducers/PlaceBid";
import { PlaceBetApi } from "../ClientApi/BetApi";

const initialBlock = { row: null, box: null };

export function ShowLiveMatchCard({
  heading = "heading",
  navigation = false,
  rightText = "d",
  subTitle = "subtitle",
  team = "team",
  sport,
  show = "all",
  icon,
  matchId,
  data,
  game,
}) {
  console.log(data, "<<<<livematchalldata");
  const dispatch = useDispatch();
  const { LiveMatch } = useSelector((state) => state);

  const [singleGame, setSingleGame] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [bidAmount, setBidAmount] = useState(0);
  const [clickedRow, setClickedRow] = useState(null);
  const [bidContent, setBidContent] = useState({ odds: 0 });
  const [clickedBlock, setClickedBlock] = useState(initialBlock);
  const [bidStatus, setbidStatus] = useState({
    status: null,
    msg: "",
  });
  const [showIt, setShowIt] = useState(true);

  console.log("sport>>>>", sport);

  const openBidModal = (modalData) => {
    console.log(modalData, `<<<<${matchId} this is modal data -----${matchId}`);
    const user = localStorage.getItem("betting_user");
    console.log(user, "<<<this is betway user");
    if (user != null && user != "null" && user != "") {
      // dispatch(showSigninModal(true));
      dispatch(showModal({ ...modalData, show: true, matchId }));
    } else {
      alert("Log in to place bid");
    }
  };

  const submitBid = () => {
    setbidStatus({ status: null, msg: "" });
    console.log(bidContent, "<<<bid content");
    // return null;

    PlaceBetApi(
      { ...bidContent, amount: bidAmount, matchId: bidContent.game_id },
      (res) => {
        console.log(res);
        if (res.status) {
          setbidStatus({ status: true, msg: res.message });
        } else {
          setbidStatus({ status: false, msg: res.message });
        }
      }
    );
  };

  return (
    <div>
      <CardHead heading={game} rightText="" navigation={false} icon={icon} />

      <div className="card-today">
        <div className="inplay-head-left">
          {/* <img
            src={movedown}
            style={{ cursor: "pointer" }}
            width="15px"
            // onClick={() => setHandleContent(!handleContent)}
          /> */}
          <span style={{ marginLeft: "15px" }}>Team</span>{" "}
          {/* <span className="cardTeam"> {item?.competition_name}</span> */}
        </div>
        {/* <div className="card-today-right-in-play">
          <div className="singleRight">1</div>
          <div className="singleRight">X</div>
          <div className="singleRight">2</div>
        </div> */}
      </div>

      {data.map((item, index) => {
        console.log(item, "<<<thisisitem");
        return (
          <>
            <div className="card-today-row  align-ctr">
              <div className=" flex-row align-ctr in-play-row-left">
                {" "}
                <Link
                  to={`/match-single${item.id}`}
                  style={{ color: "black", marginLeft: "10px" }}
                  className="row-left flex-row just-bet  align-ctr w100"
                >
                  <div>
                    {item?.team1?.name} vs {item?.team2?.name}{" "}
                    <span style={{ color: "grey" }}>
                      {item?.competition_name}
                    </span>
                  </div>
                  <div className="flex-row just-center align-ctr">
                    <img src={inPlay} width="30px" />
                    {/* <img src={BetMark} width="30px" /> */}
                  </div>
                </Link>
              </div>
              {/* <div className="card-today-right-in-play-mob">
                <div className="singleRight-mob">1</div>
                <div className="singleRight-mob">X</div>
                <div className="singleRight-mob">2</div>
              </div> */}
              <div className="card-today-wrap-right">
                {/* <div
                  className="card-today-right"
                  style={{
                    background:
                      clickedBlock.row == index && clickedBlock.box == 1
                        ? "black"
                        : "#064778",
                    color: "white",
                  }}
                  onClick={() => {
                   
                    setClickedBlock({
                      row: index,
                      box: 1,
                    });
                    setBidContent({
                      odds: parseFloat(showOdds(item.odds[1])).toFixed(1),
                      team: item.team1.name,
                      team_id: 1,
                      game_id: item.id,
                    });
                    setClickedRow(index);
                  }}
                >
                  {parseFloat(showOdds(item.odds[1])).toFixed(1) == "NaN"
                    ? "--"
                    : parseFloat(showOdds(item.odds[1])).toFixed(1)}
                </div> */}

                {/* <div
                  className="card-today-right"
                  style={{
                    background:
                      clickedBlock.row == index && clickedBlock.box == 2
                        ? "black"
                        : "#F98417",

                    color: "white ",
                  }}
                  onClick={() => {
                    setClickedBlock({
                      row: index,
                      box: 2,
                    });
                    setBidContent({
                      odds: parseFloat(
                        parseFloat(showOdds(item?.odds[1])) + +0.1
                      ).toFixed(1),
                      team: item.team1.name,
                      team_id: 1,
                      game_id: item.id,
                    });
                    setClickedRow(index);
                  }}
                >
                  {parseFloat(
                    parseFloat(showOdds(item?.odds[1])) + +0.1
                  ).toFixed(1) == "NaN"
                    ? "--"
                    : parseFloat(
                        parseFloat(showOdds(item?.odds[1])) + +0.1
                      ).toFixed(1)}
                </div> */}
                {/* <div
                  className="card-today-right"
                  style={{
                    background: "#064778",
                    opacity: "0.8",

                    background:
                      clickedBlock.row == index && clickedBlock.box == 3
                        ? "black"
                        : "#064778",
                  }}
                  onClick={() => {
                    setClickedBlock({
                      row: index,
                      box: 3,
                    });
                    setBidContent({
                      odds: showOdds(item?.odds.X),
                      team: "X",
                      team_id: "X",
                      game_id: item.id,
                    });
                    setClickedRow(index);
                  }}
                >
                  {showOdds(item?.odds.X) != "NaN"
                    ? showOdds(item?.odds.X)
                    : "--"}
                </div> */}
                {/* <div
                  className="card-today-right"
                  style={{
                    background: "#F98417",
                    opacity: "0.5",
                    background:
                      clickedBlock.row == index && clickedBlock.box == 4
                        ? "black"
                        : "#F98417",
                  }}
                  onClick={() => {
                    setClickedBlock({
                      row: index,
                      box: 4,
                    });
                    setBidContent({
                      odds: parseFloat(
                        parseFloat(showOdds(item.odds.X)) + 0.1
                      ).toFixed(1),
                      team: "X",
                      team_id: "X",
                      game_id: item.id,
                    });
                    setClickedRow(index);
                  }}
                >
                  {parseFloat(parseFloat(showOdds(item.odds.X)) + 0.1).toFixed(
                    1
                  ) != "NaN"
                    ? parseFloat(
                        parseFloat(showOdds(item.odds.X)) + 0.1
                      ).toFixed(1)
                    : "--"}
                </div> */}
                {/* <div
                  className="card-today-right"
                  style={{
                    background: "#064778",
                    background:
                      clickedBlock.row == index && clickedBlock.box == 5
                        ? "black"
                        : "#064778",
                  }}
                  onClick={() => {
                    setClickedBlock({
                      row: index,
                      box: 5,
                    });
                    setBidContent({
                      odds: showOdds(item.odds[2]),
                      team: item.team2.name,
                      team_id: 2,
                      // team_id: 1,
                      game_id: item.id,
                    });
                    setClickedRow(index);
                  }}
                >
                  {showOdds(item.odds[2])}
                </div> */}
                {/* <div
                  className="card-today-right"
                  style={{
                    background: "#F98417",
                    background:
                      clickedBlock.row == index && clickedBlock.box == 6
                        ? "black"
                        : "#F98417",
                  }}
                  onClick={() => {
                    setClickedBlock({
                      row: index,
                      box: 6,
                    });
                    setBidContent({
                      odds: parseFloat(
                        parseFloat(showOdds(item?.odds[2])) + 0.1
                      ).toFixed(1),
                      team: item.team2.name,
                      team_id: 2,
                      game_id: item.id,
                    });

                    setClickedRow(index);
                  }}
                >
                  {parseFloat(
                    parseFloat(showOdds(item?.odds[2])) + 0.1
                  ).toFixed(1) == "NaN"
                    ? "--"
                    : parseFloat(
                        parseFloat(showOdds(item?.odds[2])) + 0.1
                      ).toFixed(1)}
                </div> */}
              </div>
            </div>

            {index == clickedRow && (
              <div className="placebid-cover ">
                <div className="button-cover">
                  {[100, 500, 1000, 2000, 5000].map((item) => {
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
                          setClickedBlock(initialBlock);
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

      {show != "all" && (
        <div className="seemore linktag">
          <Link
            to={`/in-play`}
            style={{ color: "black", textDecoration: "underLine" }}
          >
            See more in play
          </Link>
        </div>
      )}
    </div>
  );
}
// export function InPlayCard({
//   heading = "heading",
//   navigation = false,
//   rightText = "d",
//   subTitle = "subtitle",
//   team = "team",
// }) {
//   return (
//     <div>
//       <CardHead
//         heading="In Play"
//         rightText="right text"
//         navigation={false}
//         icon={Football}
//       />
//       <GameSlider />

//       {/* --------------------------------------------------------- sub heading card */}

//       <div className="card-subhead-inplay">
//         <button className="live-but">Live</button>
//         <button className="upcoming-but">Upcoming</button>
//       </div>

//       {/* ------------------------------------------------------- today section */}
//       <div className="card-today">
//         <div>
//           <img src={movedown} width="15px" />
//           <span style={{ marginLeft: "15px" }}>
//             The Hundred man englend
//           </span>{" "}
//           <span className="cardTeam"> englend</span>
//         </div>
//         <div className="card-today-right">
//           <div className="singleRight">Home</div>
//           <div className="singleRight">Home</div>
//         </div>
//       </div>

//       {/* ----- single row */}
//       {[1].map((item, key) => {
//         return (
//           <div className="card-today-row  align-ctr">
//             <div className="w100 flex-row align-ctr">
//               {" "}
//               <span>15:330</span>
//               <div
//                 style={{ color: "black", marginLeft: "25px" }}
//                 className="row-left flex-row just-bet w100 align-ctr"
//               >
//                 <div>Today</div>
//                 <div className="flex-row just-center align-ctr">
//                   <img src={inPlay} width="30px" />
//                   <img src={BetMark} width="30px" />
//                 </div>
//               </div>
//             </div>
//             <div className="card-today-wrap-right">
//               <div className="card-today-right">
//                 <div className="singleRightrow">Home</div>
//               </div>

//               <div className="card-today-right">
//                 <div className="singleRightrow">Home</div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       <div className="seemore">See more inplay</div>
//     </div>
//   );
// }

// export const Heighlights = ({ navigation = true, heading = "Highlight" }) => {
//   return (
//     <div className="radiusTop">
//       <CardHead heading={heading} navigation={navigation} />
//       <div className="heighlight-wrap">
//         {/* ------single--- */}
//         <div className="w100 flex-col align-ctr single-highlight">
//           <div className="  textcenter heighlight-head">
//             {" "}
//             <div>
//               <img src={Football} />
//             </div>
//             <div>Test Match</div>
//           </div>
//           <div className="flex-row just-bet w100 heighlight-row">
//             <div className="heighlight-row-left"> Team 1</div>{" "}
//             <div className="heighlight-row-right">1.83 </div>{" "}
//           </div>
//           <div className="flex-row just-bet w100 heighlight-row">
//             <div className="heighlight-row-left"> Team 1</div>{" "}
//             <div className="heighlight-row-right">1.83 </div>{" "}
//           </div>
//           <div className="flex-row just-bet w100 heighlight-row">
//             <div className="heighlight-row-left"> Team 1</div>{" "}
//             <div className="heighlight-row-right">1.83 </div>{" "}
//           </div>
//           <div className="flex-row just-bet w100 heighlight-row-end">
//             <div className="heighlight-row-left"> 15: Fri 30 Aug</div>
//             <div className="flex-row just-center align-ctr ">
//               <img src={inPlay} width="30px" />
//               <img src={BetMark} width="30px" />
//             </div>
//           </div>
//         </div>

//         {/* --------single */}
//         <div className="w100 flex-col align-ctr single-highlight">
//           <div className="  textcenter heighlight-head">
//             {" "}
//             <div>
//               <img src={Football} />
//             </div>
//             <div>Test Match</div>
//           </div>
//           <div
//             className="flex-row just-bet w100 heighlight-row"
//             style={{ height: "44px" }}
//           >
//             <div className="heighlight-row-left"> Team 1</div>{" "}
//             <div className="heighlight-row-right">1.834 </div>{" "}
//           </div>

//           <div
//             className="flex-row just-bet w100 heighlight-row"
//             style={{ height: "44px" }}
//           >
//             <div className="heighlight-row-left"> Team 1</div>{" "}
//             <div className="heighlight-row-right">1.83 </div>{" "}
//           </div>
//           <div className="flex-row just-bet w100 heighlight-row-end">
//             <div className="heighlight-row-left"> 15: Fri 30 Aug</div>
//             <div className="flex-row just-center align-ctr ">
//               <img src={inPlay} width="30px" />
//               <img src={BetMark} width="30px" />
//             </div>
//           </div>
//         </div>
//         <div className="w100 flex-col align-ctr single-highlight">
//           <div className="  textcenter heighlight-head">
//             {" "}
//             <div>
//               <img src={Football} />
//             </div>
//             <div>Test Match</div>
//           </div>
//           <div
//             className="flex-row just-bet w100 heighlight-row"
//             style={{ height: "44px" }}
//           >
//             <div className="heighlight-row-left"> Team 1</div>{" "}
//             <div className="heighlight-row-right">1.834 </div>{" "}
//           </div>

//           <div
//             className="flex-row just-bet w100 heighlight-row"
//             style={{ height: "44px" }}
//           >
//             <div className="heighlight-row-left"> Team 1</div>{" "}
//             <div className="heighlight-row-right">1.83 </div>{" "}
//           </div>
//           <div className="flex-row just-bet w100 heighlight-row-end">
//             <div className="heighlight-row-left"> 15: Fri 30 Aug</div>
//             <div className="flex-row just-center align-ctr ">
//               <img src={inPlay} width="30px" />
//               <img src={BetMark} width="30px" />
//             </div>
//           </div>
//         </div>
//         {/* ---------single--- */}
//       </div>
//     </div>
//   );
// };

export const showOdds = (item) => parseFloat(item).toFixed(1);
