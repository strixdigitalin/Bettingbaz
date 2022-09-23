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

export function SingleGameCard({
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
  useEffect(() => {
    setShowLoader(true);
    API.competitionBySports(sport, (res) => {
      console.log(sport, "-->>>", res);
      setSingleGame(res);
      setShowLoader(false);
    });
  }, [sport]);

  return (
    <div>
      <CardHead heading={heading} rightText="" navigation={false} icon={icon} />

      {/* --------------------------------------------------------- sub heading card */}
      {/* 
      <div className="card-subhead">
        <div>{subTitle}</div>{" "}
        <div className="cardTeam"> {singleGame?.name}s</div>
      </div> */}

      {/* ------------------------------------------------------- today section */}
      <div className="card-today-comp">
        <div className="card-today-left-comp">
          <img src={movedown} width="15px" onClick={() => setShowIt(!showIt)} />
          <span style={{ color: "black", marginLeft: "10px" }}>Groups</span>
        </div>
        <div className="card-today-right-comp ">
          <div className="singleRight">Name</div>
          {/* <div className="singleRight">Home</div> */}
        </div>
      </div>

      {/* ----- single row */}

      {showLoader && <CustomLoader />}
      {!showLoader && !singleGame?.length && (
        <NoDataFound selectedGame={heading} />
      )}

      {showIt &&
        !showLoader &&
        show == "all" &&
        singleGame?.map((item, key) => {
          console.log(item, "<<<item in single game card");
          return (
            <Link to={`/match-by-competition${item?.id}`} className="hoverRow">
              <div
                className="card-today-row-comp  align-ctr"
                style={{ cursor: "pointer" }}
              >
                <div className=" flex-row align-ctr card-today-left-row-comp">
                  {" "}
                  <span>{key + 1}</span>
                  <div
                    style={{ color: "black" }}
                    className="row-left flex-row just-bet w100 align-ctr"
                  >
                    <div className="col-70">{item?.group}</div>
                    {/* <div className="flex-row just-center align-ctr">
                  <img src={inPlay} width="30px" />
                  <img src={BetMark} width="30px" />
                </div> */}
                  </div>
                </div>
                <div className="card-today-wrap-right-comp">
                  <div
                    className="card-today-right-comp"
                    style={{ width: "100%" }}
                  >
                    <div
                      className="singleRightrow col-70"
                      style={{ border: "none" }}
                    >
                      {item?.name}
                    </div>
                  </div>

                  {/* <div className="card-today-right">
                <div className="singleRightrow">Home</div>
              </div> */}
                </div>
              </div>
            </Link>
          );
        })}
      {showIt &&
        !showLoader &&
        show != "all" &&
        singleGame?.slice(0, 3).map((item, key) => {
          console.log(item, "item in single game card");
          return (
            <div
              className="card-today-row  align-ctr"
              style={{ cursor: "pointer" }}
            >
              <div className=" flex-row align-ctr card-today-left-row">
                {" "}
                <span>{key + 1}</span>
                <Link to={`/match-by-competition${item?.id}`}>
                  <div
                    style={{ color: "black" }}
                    className="row-left flex-row just-bet w100 align-ctr"
                  >
                    <div className="col-70">{item?.group}</div>
                    {/* <div className="flex-row just-center align-ctr">
                  <img src={inPlay} width="30px" />
                  <img src={BetMark} width="30px" />
                </div> */}
                  </div>
                </Link>
              </div>
              <div className="card-today-wrap-right">
                <div className="card-today-right" style={{ width: "100%" }}>
                  <div className="singleRightrow col-70">
                    {item?.name}
                    {/* {`${item}`} */}
                  </div>
                </div>

                {/* <div className="card-today-right">
                <div className="singleRightrow">Home</div>
              </div> */}
              </div>
            </div>
          );
        })}

      {show != "all" && (
        <div className="seemore linktag">
          <Link
            to={`/all-competition-by-sports/${sport}`}
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
