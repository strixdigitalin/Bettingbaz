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

export function ShowLiveMatchCard({
  heading = "heading",
  navigation = false,
  rightText = "d",
  subTitle = "subtitle",
  team = "team",
  sport,
  show = "all",
  icon,
}) {
  const [singleGame, setSingleGame] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [showIt, setShowIt] = useState(true);
  //   useEffect(() => {
  //     setShowLoader(true);
  //     API.competitionBySports(sport, (res) => {
  //       console.log(sport, "-->>>", res);
  //       setSingleGame(res);
  //       setShowLoader(false);
  //     });
  //   }, [sport]);
  console.log("sport", sport);

  return (
    <div>
      <CardHead
        heading={"Live Match"}
        rightText=""
        navigation={false}
        icon={icon}
      />
      {/* --------------------------------------------------------- sub heading card */}
      {/* 
      <div className="card-subhead">
        <div>{subTitle}</div>{" "}
        <div className="cardTeam"> {singleGame?.name}s</div>
      </div> */}
      {/* ------------------------------------------------------- today section */}

      {/* ----- single row */}
      {/* {showLoader && <CustomLoader />}
      {!showLoader && !singleGame.length && (
        <NoDataFound selectedGame={heading} />
      )} */}
      {/* {showIt &&
        !showLoader &&
        show == "all" &&
        singleGame.map((item, key) => {
          return (
            <Link to={`/match-by-competition${item.id}`} className="hoverRow">
              <div
                className="card-today-row  align-ctr"
                style={{ cursor: "pointer" }}
              >
                <div className=" flex-row align-ctr card-today-left-row">
                  {" "}
                  <span>{key + 1}</span>
                  <div
                    style={{ color: "black", marginLeft: "25px" }}
                    className="row-left flex-row just-bet w100 align-ctr"
                  >
                    <div className="col-70">{item?.group}</div>
                    <div className="flex-row just-center align-ctr">
                      <img src={inPlay} width="30px" />
                      <img src={BetMark} width="30px" />
                    </div>
                  </div>
                </div>
                <div className="card-today-wrap-right">
                  <div className="card-today-right" style={{ width: "100%" }}>
                    <div className="singleRightrow col-70">{item?.name}</div>
                  </div>

                  <div className="card-today-right">
                    <div className="singleRightrow">Home</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })} */}
      <div className="card-today">
        <div className="inplay-head-left">
          <img
            src={movedown}
            style={{ cursor: "pointer" }}
            width="15px"
            // onClick={() => setHandleContent(!handleContent)}
          />
          <span style={{ marginLeft: "15px" }}>Team</span>{" "}
          {/* <span className="cardTeam"> {item?.competition_name}</span> */}
        </div>
        <div className="card-today-right-in-play">
          <div className="singleRight">1</div>
          <div className="singleRight">X</div>
          <div className="singleRight">2</div>
        </div>
      </div>
      {
        showIt && !showLoader && show != "all" && (
          // sport.map((item, key) => {
          //   console.log(item, "<<<item at live");
          //   return (
          <>
            {true && (
              <div className="card-today-row  align-ctr">
                <div className=" flex-row align-ctr in-play-row-left">
                  {" "}
                  <span>15:330</span>
                  <div
                    style={{ color: "black", marginLeft: "25px" }}
                    className="row-left flex-row just-bet  align-ctr w100"
                  >
                    <div>
                      {sport[0].val1} vs {sport[2].val1}
                    </div>
                    <div className="flex-row just-center align-ctr">
                      <img src={inPlay} width="30px" />
                      {/* <img src={BetMark} width="30px" /> */}
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
                      // onClick={() =>
                      //   openBidModal({
                      //     odds: firstOdd,
                      //     team: item.team1.name,
                      //   })
                      // }
                    >
                      {showOdds(sport[0].odds)}
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
                      // onClick={() =>
                      //   openBidModal({
                      //     odds: +firstOdd + 1,
                      //     team: item.team2.name,
                      //   })
                      // }
                    >
                      {showOdds(sport[0].odds) + 0.1}
                      {/* {+firstOdd + 1} */}
                    </div>
                  </div>
                  <div
                    className="card-today-right"
                    style={{ background: "#064778", opacity: "0.5" }}
                  >
                    <div
                      className="singleRightrow"
                      // onClick={() =>
                      //   openBidModal({
                      //     odds: firstOdd,
                      //     team: item.team2.name,
                      //   })
                      // }
                    >
                      {showOdds(sport[1].odds)}
                    </div>
                  </div>
                  <div
                    className="card-today-right"
                    style={{ background: "#F98417", opacity: "0.5" }}
                  >
                    <div
                      className="singleRightrow"
                      // onClick={() =>
                      //   openBidModal({
                      //     odds: second,
                      //     team: item.team2.name,
                      //   })
                      // }
                    >
                      {showOdds(sport[1].odds) + 0.1}

                      {/* {second} */}
                    </div>
                  </div>
                  <div
                    className="card-today-right"
                    style={{ background: "#064778" }}
                  >
                    <div
                      className="singleRightrow"
                      // onClick={() =>
                      //   openBidModal({
                      //     odds: second,
                      //     team: item.team2.name,
                      //   })
                      // }
                    >
                      {showOdds(sport[2].odds)}

                      {/* {second} */}
                    </div>
                  </div>
                  <div
                    className="card-today-right"
                    style={{ background: "#F98417" }}
                  >
                    <div
                      className="singleRightrow"
                      // onClick={() =>
                      //   openBidModal({
                      //     odds: +second + 2,
                      //     team: item.team2.name,
                      //   })
                      // }
                    >
                      {/* /                      {+second + 1} */}
                      {showOdds(sport[2].odds) + 0.1}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )
        // );
        // return (
        //   <div
        //     className="card-today-row  align-ctr"
        //     style={{ cursor: "pointer" }}
        //   >
        //     <div className=" flex-row align-ctr card-today-left-row">
        //       {" "}
        //       <span>{key + 1}</span>
        //       <Link to={`/match-by-competition${item.id}`}>
        //         <div
        //           style={{ color: "black", marginLeft: "25px" }}
        //           className="row-left flex-row just-bet w100 align-ctr"
        //         >
        //           <div className="col-70">{item?.val1}</div>
        //           {/* <div className="flex-row just-center align-ctr">
        //         <img src={inPlay} width="30px" />
        //         <img src={BetMark} width="30px" />
        //       </div> */}
        //         </div>
        //       </Link>
        //     </div>
        //     <div className="card-today-wrap-right">
        //       <div className="card-today-right" style={{ width: "100%" }}>
        //         <div className="singleRightrow col-70">{item?.odds}</div>
        //       </div>

        //       {/* <div className="card-today-right">
        //       <div className="singleRightrow">Home</div>
        //     </div> */}
        //     </div>
        //   </div>
        // );
      }

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

export const showOdds = (item) =>
  parseFloat(parseFloat(item).toFixed(2)).toFixed(1);
