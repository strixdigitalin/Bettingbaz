import React, { useEffect, useState } from "react";
import PageCover from "../../Components/PageCover";
import india from "../../Assets/Card/india.png";
import pakistan from "../../Assets/Card/pakistan.png";
import bat from "../../Assets/Card/bat.png";
import ball from "../../Assets/Card/Cricket ball icon.png";
import movedown from "../../Assets/Card/Path2.png";
import RightArrow from "../../Assets/Card/rightbg.png";
import inPlay from "../../Assets/Header/In Play.png";
import { useParams } from "react-router-dom";
import { betbySingleMatc, getCricBuzMatch } from "../../Api";
import { useDispatch } from "react-redux";
import { showModal } from "../../Redux/Reducers/PlaceBid";
import { PlaceBetApi } from "../../ClientApi/BetApi";
import { showOdds } from "../../Components/ShowLiveMatchCard";
import { compose } from "@reduxjs/toolkit";
import indiasvg from "../../Assets/Country/india.svg";
import batsvg from "../../Assets/Country/bat.svg";
import ballsvg from "../../Assets/Country/ball.svg";

import pakistansvg from "../../Assets/Country/pakistan.svg";
const typePrem = "PREMIUM";
const typeFancy = "FANCY";
const TOTAL_RUNS = "Runs";
const WICKETS = "Wicket";
const initialBlock = { row: null, box: null };

export default function CricketSingleMatch() {
  return <PageCover component={<CricketSingle />} />;
}

const CricketSingle = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const [premiumToggle, setPremiumToggle] = useState(
    params.game == "cricket" ? false : true
  );
  const [matchData, setMatchData] = useState([]);
  const [clickRowFancy, setClickRowFancy] = useState({
    index: null,
    row: null,
  });
  const [equalValue, setEqualValue] = useState(0);
  const [bidAmount, setBidAmount] = useState(0);
  const [clickedRow, setClickedRow] = useState(null);
  const [bidType, setBidType] = useState(typePrem);
  const [bidContent, setBidContent] = useState({ odds: 0 });
  const [clickedBlock, setClickedBlock] = useState(initialBlock);
  const [cricBuzData, setcricBuzData] = useState({});
  const [premiumSelected, setPremiumSelected] = useState({
    one: null,
    two: null,
  });
  const [hideThis, setHideThis] = useState([]);
  const [bidStatus, setbidStatus] = useState({
    status: null,
    msg: "",
  });

  console.log(params, "<<<<params");
  const matchId = `/sport/${params.game}/${params.legue}/${params.teams}/${params.id}`;
  useEffect(() => {
    // setInterval(function () {
    // method to be executed;
    console.log("fetch by single game called");
    betbySingleMatc(params, (res) => {
      console.log(res);
      setMatchData(res);
      matchTeamNameCricBuz();
    });
    // }, 5000);
  }, []);
  const { teams } = params;
  const placeBid = (item) => {
    console.log(">>>", item);
    const user = localStorage.getItem("betting_user");
    if (user == null || user == "null") {
      alert("Log in to place bid");
    } else {
      console.log(user, "<<<user");
      dispatch(
        showModal({
          show: true,
          matchId: `/sport/${params.game}/${params.legue}/${params.teams}/${params.id}`,
          team: params.teams,
          odds: item.odds,
        })
      );
    }
  };

  const matchTeamNameCricBuz = () => {
    // matchData[0]?.values[0]?.val1
    getCricBuzMatch((data) => {
      // console.log(res, "<<<<<");
      data.typeMatches[0].seriesMatches.map((series) => {
        console.log(series.seriesAdWrapper, "<<<s");
        series.seriesAdWrapper?.matches.map((match) => {
          console.log(
            series.seriesAdWrapper.match.matchInfo.team1.teamName,
            matchData[0]?.values[0]?.val1
          );
          console.log(match, "<<<< match");
          setcricBuzData(match);
          console.log(
            match.matchInfo.team1.teamName,
            matchData[0]?.values[0]?.val1
          );
        });

        // match.map()
        // console.log(
        //   series.seriesAdWrapper.match.matchInfo.team1.teamName,
        //   matchData[0]?.values[0]?.val1
        // );
        // console.log(
        //   series.seriesAdWrapper.match.matchInfo.team2.teamName,
        //   matchData[0]?.values[2]?.val1
        // );
      });
      // });
    });
    const data = {};
    // data.typeMatches[0].seriesMatches.map((series) => {
    //   series.matches.map((match) => {
    //     // match.map()
    //     console.log(match.team1.teamName, matchData[0]?.values[0]?.val1);
    //     console.log(match.team2.teamName, matchData[0]?.values[2]?.val1);
    //   });
    // });
  };

  useEffect(() => {
    if (params.game != "cricket") {
    }
    let equalPart = matchData.filter(
      (item) =>
        item.values[0]?.odds != null &&
        item.values[1]?.odds != null &&
        item.values[0]?.odds == item.values[1]?.odds
    );
    setEqualValue(equalPart[0]?.values[0].odds);
    console.log(equalPart[0]?.values[0].odds, "<<<<this is equal part");
  }, [matchData]);

  const calCulatePercentage = (value) => {
    // const temp = value / equalValue;
    if (value == null) return 0;
    const temp = value?.split(".")[1] / equalValue?.split(".")[1];
    // console.log(temp, value?.split(".")[1], base, "<<<temp");
    return parseInt(temp * 100);
  };
  const replaceString = (name, values) => {
    if (params.game != "cricket") return name;
    let a = name?.replace(
      "Team A",
      ` ${teams?.split("v")[0].toLocaleUpperCase()} `
    );
    let b = a?.replace(
      "Team B",
      ` ${teams?.split("v")[1].toLocaleUpperCase()} `
    );
    let c = b?.replace("Batsman ", values[0]?.val1);
    let d = c?.replace("Under", " ");
    let e = d?.replace("-", " ");
    let f = e?.replace("Alternate", " ");
    // let b = a.replace("Team B", ` ${teams?.split("-")[1]} `);
    return f;
  };

  const submitBid = () => {
    setbidStatus({ status: null, msg: "" });

    // alert("here");
    console.log(bidContent, bidType, bidAmount, matchId, "<<<<bid content");
    // return null;
    PlaceBetApi(
      { ...bidContent, amount: bidAmount, matchId, odd_type: bidType },
      (res) => {
        console.log(res);
        if (res.status) {
          setbidStatus({
            status: true,
            msg: res.message,
          });
        } else {
          setbidStatus({ status: false, msg: res.message });
        }
      }
    );
  };

  const NumberCalculation = (name, value, operation) => {
    if (params.game != "cricket") return value;
    const floatPart = value?.split(".")[1];
    const intPart = value?.split(".")[0];
    const matchTotalRuns = name.match(TOTAL_RUNS);
    const matchWickets = name.match(WICKETS);

    if (floatPart != null || floatPart != undefined) {
      if (matchTotalRuns != null) {
        //  operation - then ---> if has point value then increase 1
        //  operation + then ---> if has point value then remove point

        if (operation == "-") return intPart;
        else return +intPart + 1;
      } else if (matchWickets != null) {
        return +intPart + 1;
      }
    }
  };

  const showLeague = (league) => {
    return league.replace("-", " ").toLocaleUpperCase();
  };

  const IncreaseOrangeData = (num) => {
    let sendThis = num;
    const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    values.map((item) => {
      if (item < num < item + 10) {
        console.log(item, "<<<<<", num, "<<<<i", item + 10);
        sendThis = item + 10;
      }
    });
    console.log(num, "<<<<< increase to ", sendThis);
    return sendThis;
  };
  const decreaseDataBlue = (num) => {
    let sendThis = num;
    const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    values.map((item) => {
      if (num < item) {
        sendThis = item - 10;
        console.log(+num, "<<<decrease num", sendThis, item);
        // console.log(sendThis, "<<<send this");
      } else {
        // console.log("decrease num not--->", item, num);
      }
      // if (+item < parseInt(num) < +item + 10) {
      //   sendThis = item;
      // }
    });
    return sendThis;
  };
  const filterNull = (arr) => {
    if (premiumToggle == true) return arr;
    console.log(arr);
    const sendThis = arr?.filter(
      (item) => item.val2 != null && item.val2 != "null"
    );
    console.log(arr, sendThis, "<<<<sendThis");
    return sendThis;
  };

  const toggleHide = (item) => {
    const itemInhide = hideThis.includes(item);
    if (itemInhide) {
      setHideThis(hideThis.filter((initem) => initem != item));
    } else {
      setHideThis([...hideThis, item]);
    }
    // setHideThis([...hideThis,item])
  };
  // const openThis=(item)

  return (
    <div className="single-middle">
      <div className="single-top-head">{params.teams}</div>
      {/*desktop ------------------------------------ */}
      <div className="flex-row just-bet one-eaning bgwhite">
        <div className="eaning-left">
          <div className="flex-row align-ctr">
            <img src={bat} width="60px" height="60px" />
            <img src={india} width="30px" height="30px" />
          </div>
          <div>{matchData[0]?.values[0]?.val1}</div>
          <span>15-2</span>
        </div>
        <div className="eaning-mid">1 st Ennings</div>
        <div className="eaning-left">
          <div className="flex-row align-ctr">
            <img src={pakistan} />

            <img src={ball} width="40px" height="40px" />
          </div>
          <div> {matchData[0]?.values[1]?.val1}</div>
          <span>15-2</span>
        </div>
      </div>

      {/* ----------------------------- */}
      <div className="flex-row just-bet scoreData ">
        <div
          className="flex-col align-ctr just-bet playerScore scoredata-team"
          style={{
            background: "white",
            borderTopLeftRadius: "25px",
            borderTopRightRadius: "25px",
          }}
        >
          <div
            className="flex-row w100  score-data-single-team"
            style={{ padding: "5px 10px", fontSize: "12px", color: "#6E6E6E" }}
          >
            {showLeague(params.legue)}
            <span
              style={{ color: "black", marginLeft: "2px", fontSize: "12px" }}
            ></span>
          </div>
          <div
            className="flex-row  w100 score-data-single-team"
            style={{
              borderTop: "1px solid #707070",
              padding: "5px 10px",
              color: "black",
            }}
          >
            {matchData[0]?.values[0]?.val1}
            {/* {cricBuzData.matchScore?.team1Score?.inngs1.runs}sss */}
          </div>
          <div
            className="flex-row  w100 score-data-single-team"
            style={{
              borderTop: "1px solid #707070",
              padding: "5px 10px",
              color: "black",
            }}
          >
            {matchData[0]?.values[1]?.val1}
          </div>
          {params.game == "football" && (
            <div
              className="flex-row  w100 score-data-single-team"
              style={{
                borderTop: "1px solid #707070",
                padding: "5px 10px",
                color: "black",
              }}
            >
              {matchData[0]?.values[2]?.val1}
            </div>
          )}
        </div>
        <div
          className="flex-col align-ctr just-bet playerScore-odd"
          style={{
            background: "#064778",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
        >
          <div
            className="flex-row w100 just-ctr"
            style={{ padding: "5px 0px", color: "wheat", height: "40px" }}
          >
            Back
          </div>
          <div
            className="flex-row w100 just-ctr"
            style={{
              border: "1px solid #707070",
              height: "40px",
              padding: "5px 0px",
              color: "wheat",
            }}
          >
            {parseFloat(matchData[0]?.values[0]?.odds).toFixed(2)}
          </div>

          <div
            className="flex-row w100 just-ctr"
            style={{
              border: "1px solid #707070",
              padding: "5px 0px",
              color: "wheat",
              height: "40px",
            }}
          >
            {parseFloat(matchData[0]?.values[1]?.odds).toFixed(2)}
          </div>
          {params.game == "football" && (
            <div
              className="flex-row w100 just-ctr"
              style={{
                border: "1px solid #707070",
                padding: "5px 0px",
                color: "wheat",
                height: "40px",
              }}
            >
              {parseFloat(matchData[0]?.values[2]?.odds).toFixed(2)}
            </div>
          )}
        </div>
        <div
          className="flex-col align-ctr just-bet playerScore most-right-score"
          style={{
            background: "#F97D09",
            height: "100%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
        >
          <div
            className="flex-row w100 text-center just-ctr"
            style={{ padding: "5px 0px", color: "wheat", height: "40px" }}
          >
            Lay
          </div>
          <div
            className="flex-row w100 text-center just-ctr"
            style={{
              border: "1px solid #707070",
              padding: "5px 0px",
              color: "wheat",
              height: "40px",
            }}
          >
            {parseFloat(
              parseFloat(matchData[0]?.values[0]?.odds) + 0.1
            ).toFixed(1)}
          </div>
          <div
            className="flex-row w100 just-ctr"
            style={{
              border: "1px solid #707070",
              padding: "5px 0px",
              color: "wheat",
              height: "40px",
            }}
          >
            {parseFloat(
              parseFloat(matchData[0]?.values[1]?.odds) + 0.1
            ).toFixed(1)}
          </div>
          {params.game == "football" && (
            <div
              className="flex-row w100 just-ctr"
              style={{
                border: "1px solid #707070",
                padding: "5px 0px",
                color: "wheat",
                height: "40px",
              }}
            >
              {parseFloat(
                parseFloat(matchData[0]?.values[2]?.odds) + 0.1
              ).toFixed(1)}
            </div>
          )}
        </div>
      </div>
      {/*  <768 px */}
      {/* <768 px mob */}
      <div>
        <div className="mob-one-eaning">
          <div className="mob-one-eaning-single">
            <img src={indiasvg} />
            <div>India</div>
            <div style={{ color: "#F98417" }}>
              {cricBuzData?.matchScore?.team1Score?.inngs1?.runs}/
              {cricBuzData?.matchScore?.team1Score?.inngs1?.wickets}ddd
            </div>
            <div className="flex-row align-ctr just-ctr" style={{ height: "" }}>
              <div>
                <img src={batsvg} width="40px" />
              </div>
              <div
                style={{
                  height: "40%",
                  borderLeft: "1px solid #F98417",
                  borderRight: "1px solid #F98417",
                  padding: "0px 5px",
                }}
              >
                V. Kohli
              </div>
              <div style={{ color: "#F98417", padding: "10px" }}>51 *</div>
            </div>
          </div>
          <div style={{ border: "1px solid #F97D09", height: "40px" }}></div>
          <div className="mob-one-eaning-single">
            <img src={pakistansvg} />
            <div>Pakistan</div>
            <div style={{ color: "#F98417" }}>
              {/* 24/7 */}
              {cricBuzData?.matchScore?.team2Score?.inngs1?.runs}/
              {cricBuzData?.matchScore?.team2Score?.inngs1?.wickets}ddd
            </div>
            <div
              className="flex-row align-ctr just-ctr"
              style={{ height: "", gap: "5%" }}
            >
              <div>
                <img src={ballsvg} width="20px" />
              </div>
              <div
                style={{
                  height: "40%",
                  borderLeft: "1px solid #F98417",
                  borderRight: "1px solid #F98417",
                  padding: "0px 5px",
                }}
              >
                Irfan
              </div>
              <div style={{ color: "#F98417", padding: "10px" }}>6.5/1 </div>
            </div>
          </div>
        </div>
        <div className="flex-row just-bet scoreData-mobile ">
          <div
            className="flex-col align-ctr just-bet playerScore scoredata-team"
            style={{
              background: "white",
              borderTopLeftRadius: "25px",
              borderTopRightRadius: "25px",
              borderBottomLeftRadius: "25px",
            }}
          >
            <div
              className="flex-row w100  score-data-single-team"
              style={{
                padding: "5px 10px",
                fontSize: "12px",
                color: "white",
                background: "#6E6E6E",
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
              }}
            >
              {showLeague(params.legue)}
              <span
                style={{ color: "black", marginLeft: "2px", fontSize: "12px" }}
              ></span>
            </div>
            <div
              className="flex-row  w100 score-data-single-team"
              style={{
                borderTop: "1px solid #707070",
                padding: "5px 10px",
                color: "black",
              }}
            >
              {matchData[0]?.values[0]?.val1}
            </div>
            <div
              className="flex-row  w100 score-data-single-team"
              style={{
                borderTop: "1px solid #707070",
                padding: "5px 10px",
                color: "black",
              }}
            >
              {matchData[0]?.values[1]?.val1}
            </div>
            {params.game == "football" && (
              <div
                className="flex-row  w100 score-data-single-team"
                style={{
                  borderTop: "1px solid #707070",
                  padding: "5px 10px",
                  color: "black",
                }}
              >
                {matchData[0]?.values[2]?.val1}
              </div>
            )}
          </div>
          <div
            className="flex-col align-ctr just-bet playerScore-odd"
            style={{
              background: "#064778",
              borderTopRightRadius: "0px",
              borderTopLeftRadius: "25px",
            }}
          >
            <div
              className="flex-row w100 just-ctr"
              style={{ padding: "5px 0px", color: "wheat", height: "40px" }}
            >
              Back
            </div>
            <div
              className="flex-row w100 just-ctr"
              style={{
                border: "1px solid #707070",
                height: "40px",
                padding: "5px 0px",
                color: "wheat",
              }}
            >
              {parseFloat(matchData[0]?.values[0]?.odds).toFixed(2)}
            </div>

            <div
              className="flex-row w100 just-ctr"
              style={{
                border: "1px solid #707070",
                padding: "5px 0px",
                color: "wheat",
                height: "40px",
              }}
            >
              {parseFloat(matchData[0]?.values[1]?.odds).toFixed(2)}
            </div>
            {params.game == "football" && (
              <div
                className="flex-row w100 just-ctr"
                style={{
                  border: "1px solid #707070",
                  padding: "5px 0px",
                  color: "wheat",
                  height: "40px",
                }}
              >
                {parseFloat(matchData[0]?.values[2]?.odds).toFixed(2)}
              </div>
            )}
          </div>
          <div
            className="flex-col align-ctr just-bet playerScore most-right-score"
            style={{
              background: "#F97D09",
              height: "100%",
              borderTopRightRadius: "25px",
              borderTopLeftRadius: "0px",
              borderBottomRightRadius: "25px",
            }}
          >
            <div
              className="flex-row w100 text-center just-ctr"
              style={{ padding: "5px 0px", color: "wheat", height: "40px" }}
            >
              Lay
            </div>
            <div
              className="flex-row w100 text-center just-ctr"
              style={{
                border: "1px solid #707070",
                padding: "5px 0px",
                color: "wheat",
                height: "40px",
              }}
            >
              {parseFloat(
                parseFloat(matchData[0]?.values[0]?.odds) + 0.1
              ).toFixed(1)}
            </div>
            <div
              className="flex-row w100 just-ctr"
              style={{
                border: "1px solid #707070",
                padding: "5px 0px",
                color: "wheat",
                height: "40px",
                // borderTopLeftRadius: "25px",
                borderBottomRightRadius: "25px",
              }}
            >
              {parseFloat(
                parseFloat(matchData[0]?.values[1]?.odds) + 0.1
              ).toFixed(1)}
            </div>
            {params.game == "football" && (
              <div
                className="flex-row w100 just-ctr"
                style={{
                  border: "1px solid #707070",
                  padding: "5px 0px",
                  color: "wheat",
                  height: "40px",
                  borderBottomRightRadius: "25px",
                }}
              >
                {parseFloat(
                  parseFloat(matchData[0]?.values[2]?.odds) + 0.1
                ).toFixed(1)}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className="flex-row just-bet scoreData scoredata-team">
        <div className="flex-col align-ctr just-bet playerScore">
          <div className="flex-row just-bet w100">
            <div>V Kohli</div>
            <div>(54)</div>
          </div>
          <div className="flex-row just-bet w100">
            <div>V Kohli</div>
            <div>(54)</div>
          </div>
          <br />
        </div>
        <div className="flex-col align-ctr just-bet playerScore">
          <div className="flex-row just-bet w100">
            <div>V Kohli</div>
            <div>(54)</div>
          </div>
          <div className="flex-row just-bet w100">
            <div>V Kohli</div>
            <div>(54)</div>
          </div>
          <br />
        </div>
        <div className="flex-col align-ctr just-bet playerScore">
          <div className="flex-row just-bet w100">
            <div>V Kohli</div>
            <div>(54)</div>
          </div>
          <div className="flex-row just-bet w100">
            <div>V Kohli</div>
            <div>(54)</div>
          </div>
          <br />
        </div>
        <div className="flex-row just-bet"></div>
      </div> */}
      {/* ----------------- */}
      <div className="mob-single-table">
        <div className="prem-fancy-cover">
          {params.game == "cricket" && (
            <div
              onClick={() => setPremiumToggle(false)}
              className="prem-fancy pointer"
              style={{
                backgroundColor: !premiumToggle ? "#F97D09" : "white",
                // color: "white",
                color: !premiumToggle ? "white" : "black",
                zIndex: !premiumToggle ? 2 : 1,
              }}
            >
              {/* <img src={inPlay} /> */}
              Fancy
            </div>
          )}
          <div
            className="prem-fancy pointer"
            onClick={() => setPremiumToggle(true)}
            style={{
              backgroundColor: premiumToggle ? "#F97D09" : "white",
              color: premiumToggle ? "white" : "black",
              marginLeft: "-10px",
              zIndex: premiumToggle ? 2 : 1,
            }}
          >
            Premium
          </div>
        </div>
        {premiumToggle == false && (
          <div className="flex-row just-bet w100 cricket-data-table">
            <div className="cricket-heighlight-row-left">Fancy Bet</div>{" "}
            <div
              style={{ color: "black" }}
              className="heighlight-row-right pointer"
              // onClick={() => placeBid({ ...item, odds: inItem.odds })}
            >
              No
            </div>{" "}
            <div
              className="heighlight-row-right pointer"
              style={{ color: "black" }}
              // onClick={() => placeBid({ ...item, odds: inItem.odds })}
            >
              Yes{" "}
            </div>{" "}
          </div>
        )}
        {/* {[{}, {}].map((item, index) => { */}
        {/* {filterNull(item.values).map((item, index) => { */}
        {matchData.map((item, index) => {
          if (index > 0) {
            return (
              <>
                <div style={{ marginTop: "1px" }}>
                  {(() => {
                    if (premiumToggle == false) {
                      // if (inItem.val2 == null || inItem.val2 == "null") return null;

                      console.log(item, "<<<initem");
                      return filterNull(item?.values).map((initem, row) => {
                        // return item.values.map((initem, row) => {
                        return (
                          <>
                            <div className="flex-row just-bet w100 cricket-data-table">
                              <div className="cricket-heighlight-row-left">
                                {/* {item.name.replace(" A ", ` ${teams?.split("-")[0]} `)} */}
                                {replaceString(item.name, item.values)}
                                {/* <br /> */}
                                {/* {item.values[0].val1} */}
                              </div>{" "}
                              <div
                                style={{
                                  backgroundColor: "#F97D09",
                                  color: "white",
                                }}
                                className="heighlight-row-right pointer"
                                onClick={() => {
                                  // setClickedBlock({
                                  //   row: index,
                                  //   box: 1,
                                  // });
                                  setClickRowFancy({
                                    index: index,
                                    row: row,
                                  });
                                  setBidContent({
                                    odds: showOdds(initem?.val2),
                                    // odds: showOdds(item?.values[0]?.val2),
                                    decision: "NO",

                                    team: "",
                                    team_id: 2,
                                  });
                                  setClickedRow(index);
                                  setBidType(typeFancy);
                                }}
                              >
                                {/* {params.game != "cricket" && initem?.val2} */}
                                {/* {params.game == "cricket" &&
                                NumberCalculation(
                                  item?.name,
                                  initem.val2?.substring(1),
                                  "-"
                                )} */}
                                <br />
                                {/* {calCulatePercentage(item.values[0].val2)} */}
                                {/* calCulatePercentage(item.values[0].odds) */}
                                {/* {IncreaseOrangeData(initem.val2?.substring(1))} */}
                                {/* {initem.val2?.substring(1)} */}

                                {+200 - calCulatePercentage(initem.odds)}
                              </div>{" "}
                              <div
                                className="heighlight-row-right pointer"
                                style={{
                                  backgroundColor: "#064778",
                                  color: "white",
                                }}
                                onClick={() => {
                                  // setClickedBlock({
                                  //   row: index,
                                  //   box: 2,
                                  // });
                                  setClickRowFancy({
                                    index: index,
                                    row: row,
                                  });
                                  setBidContent({
                                    odds: NumberCalculation(
                                      item?.name,
                                      initem.val2?.substring(1),
                                      "+"
                                    ),
                                    team: "",
                                    decision: "YES",

                                    team_id: 2,
                                  });
                                  // setClickedRow(index);
                                  setBidType(typeFancy);
                                }}
                              >
                                {/* {NumberCalculation(
            item?.name,
            item?.values[1].val2?.substring(1),
            "+"
          )} */}
                                {/* {item.values[1].val2?.substring(1)} */}
                                <br />
                                {/* {item.values[1].odds}{" "} */}
                                {/* {calCulatePercentage(item.values[1].val2)} */}
                                {calCulatePercentage(initem.odds)}
                              </div>{" "}
                            </div>
                            {/* {true && ( */}
                            {/* {index == clickedRow && ( */}
                            {index == clickRowFancy.index &&
                              row == clickRowFancy.row && (
                                <div className="placebid-cover ">
                                  <div className="button-cover">
                                    {[100, 500, 1000, 2000, 5000].map(
                                      (item) => {
                                        return (
                                          <button
                                            onClick={() => setBidAmount(item)}
                                          >
                                            {item}
                                          </button>
                                        );
                                      }
                                    )}
                                  </div>
                                  <div className="input-est-cover">
                                    <input
                                      value={bidAmount}
                                      onChange={(e) =>
                                        setBidAmount(e?.target?.value)
                                      }
                                    />
                                    <div className="button-est">
                                      {[
                                        {
                                          label: "Place Bid",
                                          onClick: submitBid,
                                        },
                                        {
                                          label: "Hide",
                                          onClick: () => {
                                            // setClickedRow(null);
                                            setClickRowFancy({
                                              index: null,
                                              row: null,
                                            });
                                            setClickedBlock(initialBlock);
                                            setbidStatus({
                                              status: null,
                                              message: "",
                                            });
                                            setBidAmount(0);
                                            setBidContent({ odds: 0 });
                                          },
                                        },
                                      ].map((item, key) => {
                                        return (
                                          <button
                                            onClick={item?.onClick}
                                            style={{
                                              background: `${
                                                key == 0 ? "green" : "red"
                                              }`,
                                            }}
                                          >
                                            {item?.label}
                                          </button>
                                        );
                                      })}
                                      <button>
                                        Est:
                                        {parseFloat(
                                          bidContent.odds * bidAmount
                                        ).toFixed(1)}
                                      </button>
                                    </div>
                                  </div>
                                  {bidStatus?.status != null && (
                                    <div
                                      className="bid-placed"
                                      style={{
                                        display: `${
                                          bidStatus?.status == null && "none"
                                        }`,
                                        color: `${
                                          bidStatus?.status == true
                                            ? "green"
                                            : "red"
                                        }`,
                                      }}
                                    >
                                      {" "}
                                      {bidStatus?.msg}
                                    </div>
                                  )}
                                </div>
                              )}
                          </>
                        );
                      });
                    }
                  })()}
                  {/* {premiumToggle == false &&
                item?.values.map((inItem) => {
                  if (inItem.val2 == null || inItem.val2 == "null") return null;
                })} */}

                  {premiumToggle == true && (
                    <>
                      <div
                        className="card-today"
                        style={{ backgroundColor: "#EAEAEA", display: "flex" }}
                      >
                        <div>
                          <img
                            src={
                              !hideThis.includes(index) ? movedown : RightArrow
                            }
                            width="15px"
                            onClick={() => toggleHide(index)}
                          />
                          <span style={{ marginLeft: "15px" }}>
                            {item?.name}
                          </span>{" "}
                        </div>
                      </div>
                      {!hideThis.includes(index) &&
                        item?.values.map((inItem, key) => {
                          // console.log(inItem,"<<<initemvalue")
                          if (inItem.odds == null || inItem.odds == "null")
                            return null;
                          return (
                            <>
                              <div className="flex-row just-bet w100 cricket-data-table">
                                <div className="cricket-heighlight-row-left">
                                  {inItem.val1}
                                </div>{" "}
                                <div
                                  className="heighlight-row-right pointer"
                                  onClick={() => {
                                    // placeBid({ ...item, odds: inItem.odds })
                                    setBidType(typePrem);
                                    setClickedBlock({
                                      index: index,
                                      key: key,
                                    });
                                    setBidContent({
                                      odds: parseFloat(inItem.odds).toFixed(2),
                                      team: "",
                                      team_id: 1,
                                      // matchId:
                                    });
                                    setPremiumSelected({
                                      one: index,
                                      two: key,
                                    });
                                  }}
                                >
                                  {parseFloat(inItem.odds).toFixed(2) == "NaN"
                                    ? "--"
                                    : parseFloat(inItem.odds).toFixed(2)}
                                </div>{" "}
                              </div>
                              {index == clickedBlock.index &&
                                key == clickedBlock.key && (
                                  <div className="placebid-cover ">
                                    <div className="button-cover">
                                      {[100, 500, 1000, 2000, 5000].map(
                                        (item) => {
                                          return (
                                            <button
                                              onClick={() => setBidAmount(item)}
                                            >
                                              {item}
                                            </button>
                                          );
                                        }
                                      )}
                                    </div>
                                    <div className="input-est-cover">
                                      <input
                                        value={bidAmount}
                                        onChange={(e) =>
                                          setBidAmount(e.target.value)
                                        }
                                      />
                                      <div className="button-est">
                                        {[
                                          {
                                            label: "Place Bid",
                                            onClick: submitBid,
                                          },
                                          {
                                            label: "Hide",
                                            onClick: () => {
                                              setClickedRow(null);
                                              setClickedBlock(initialBlock);
                                              setbidStatus({
                                                status: null,
                                                message: "",
                                              });
                                              setBidAmount(0);
                                              premiumSelected({
                                                one: null,
                                                two: null,
                                              });
                                              setBidContent({ odds: 0 });
                                            },
                                          },
                                        ].map((item, key) => {
                                          return (
                                            <button
                                              onClick={item.onClick}
                                              style={{
                                                background: `${
                                                  key == 0 ? "green" : "red"
                                                }`,
                                              }}
                                            >
                                              {item.label}
                                            </button>
                                          );
                                        })}
                                        <button>
                                          Est:
                                          {parseFloat(
                                            bidContent.odds * bidAmount
                                          ).toFixed(1)}
                                        </button>
                                      </div>
                                    </div>
                                    {bidStatus.status != null && (
                                      <div
                                        className="bid-placed"
                                        style={{
                                          display: `${
                                            bidStatus.status == null && "none"
                                          }`,
                                          color: `${
                                            bidStatus.status == true
                                              ? "green"
                                              : "red"
                                          }`,
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

                      {hideThis.includes(index) && <div>No Data</div>}
                    </>
                  )}
                </div>
                {/* {index == clickedRow && ( */}
              </>
            );

            {
              return item.values.map((initem, index) => {
                if (initem.val2 == null || initem.val2 == "null") return null;

                return (
                  <>
                    <div style={{ marginTop: "1px" }}>
                      {(() => {
                        if (premiumToggle == false) {
                          // if (inItem?.val2 == null || inItem?.val2 == "null")
                          //   return null;

                          return (
                            <>
                              <div className="flex-row just-bet w100 cricket-data-table">
                                <div className="cricket-heighlight-row-left">
                                  {/* {item.name.replace(" A ", ` ${teams?.split("-")[0]} `)} */}
                                  {replaceString(item.name, item.values)}
                                  <br />
                                  {/* {item.values[0].val1} */}
                                </div>{" "}
                                <div
                                  style={{
                                    backgroundColor: "#F97D09",
                                    color: "white",
                                  }}
                                  className="heighlight-row-right pointer"
                                  onClick={() => {
                                    setClickedBlock({
                                      row: index,
                                      box: 1,
                                    });
                                    setBidContent({
                                      odds: showOdds(item.values[0].val2),
                                      team: "",
                                      team_id: 2,
                                    });
                                    setClickedRow(index);
                                  }}
                                >
                                  {params.game != "cricket" &&
                                    item.values[0].val2}

                                  {params.game == "cricket" &&
                                    IncreaseOrangeData(
                                      NumberCalculation(
                                        item.name,
                                        item.values[0]?.val2?.substring(1),
                                        "-"
                                      )
                                    )}
                                  {}

                                  <br />
                                  {/* {calCulatePercentage(item.values[0].val2)} */}
                                  {calCulatePercentage(item.values[0].odds)}
                                </div>{" "}
                                <div
                                  className="heighlight-row-right pointer"
                                  style={{
                                    backgroundColor: "#064778",
                                    color: "white",
                                  }}
                                  onClick={() => {
                                    setClickedBlock({
                                      row: index,
                                      box: 2,
                                    });
                                    setBidContent({
                                      odds: NumberCalculation(
                                        item.name,
                                        item.values[1].val2?.substring(1),
                                        "+"
                                      ),
                                      team: "",
                                      team_id: 2,
                                    });
                                    setClickedRow(index);
                                  }}
                                >
                                  {NumberCalculation(
                                    item.name,
                                    item.values[1].val2?.substring(1),
                                    "+"
                                  )}
                                  {/* {item.values[1].val2?.substring(1)} */}
                                  <br />
                                  {/* {item.values[1].odds}{" "} */}
                                  {/* {calCulatePercentage(item.values[1].val2)} */}
                                  {calCulatePercentage(item.values[1].odds)}
                                </div>{" "}
                              </div>
                              {/* {true && ( */}
                              {index == clickedRow && (
                                <div className="placebid-cover ">
                                  <div className="button-cover">
                                    {[100, 500, 1000, 2000].map((item) => {
                                      return (
                                        <button
                                          onClick={() => setBidAmount(item)}
                                        >
                                          {item}
                                        </button>
                                      );
                                    })}
                                  </div>
                                  <div className="input-est-cover">
                                    <input
                                      value={bidAmount}
                                      onChange={(e) =>
                                        setBidAmount(e.target.value)
                                      }
                                    />
                                    <div className="button-est">
                                      {[
                                        {
                                          label: "Place Bid",
                                          onClick: submitBid,
                                        },
                                        {
                                          label: "Hide",
                                          onClick: () => {
                                            setClickedRow(null);
                                            setClickedBlock(initialBlock);
                                            setbidStatus({
                                              status: null,
                                              message: "",
                                            });
                                            setBidAmount(0);
                                            setBidContent({ odds: 0 });
                                          },
                                        },
                                      ].map((item, key) => {
                                        return (
                                          <button
                                            onClick={item.onClick}
                                            style={{
                                              background: `${
                                                key == 0 ? "green" : "red"
                                              }`,
                                            }}
                                          >
                                            {item.label}
                                          </button>
                                        );
                                      })}
                                      <button>
                                        Est:
                                        {parseFloat(
                                          bidContent.odds * bidAmount
                                        ).toFixed(1)}
                                      </button>
                                    </div>
                                  </div>
                                  {bidStatus.status != null && (
                                    <div
                                      className="bid-placed"
                                      style={{
                                        display: `${
                                          bidStatus.status == null && "none"
                                        }`,
                                        color: `${
                                          bidStatus.status == true
                                            ? "green"
                                            : "red"
                                        }`,
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
                        }
                      })()}
                      {/* {premiumToggle == false &&
        item?.values.map((inItem) => {
          if (inItem.val2 == null || inItem.val2 == "null") return null;

     
        })} */}
                      {premiumToggle == true &&
                        item?.values.map((inItem) => {
                          return (
                            <div className="flex-row just-bet w100 cricket-data-table">
                              <div className="cricket-heighlight-row-left">
                                {inItem.val1}
                              </div>{" "}
                              <div
                                className="heighlight-row-right pointer"
                                onClick={() => {
                                  // placeBid({ ...item, odds: inItem.odds })
                                  setClickedBlock({
                                    row: index,
                                    box: 1,
                                  });
                                  setBidContent({
                                    odds: parseFloat(
                                      showOdds(inItem.odds)
                                    ).toFixed(1),
                                    team: "",
                                    team_id: 1,
                                  });
                                  setClickedRow(index);
                                }}
                              >
                                {inItem.odds}{" "}
                              </div>{" "}
                            </div>
                          );
                        })}
                    </div>
                    {/* {index == clickedRow && ( */}
                  </>
                );
              });
            }

            // return (
            //   <>
            //     <div style={{ marginTop: "1px" }}>
            //       {/* <div
            //       className="card-today"
            //       style={{ backgroundColor: "#EAEAEA" }}
            //     >
            //       <div>
            //         <img src={movedown} width="15px" />
            //         <span style={{ marginLeft: "15px" }}>{item?.name}</span>{" "}
            //       </div>
            //     </div> */}
            //       {(() => {
            //         if (premiumToggle == false) {
            //           // if (inItem.val2 == null || inItem.val2 == "null") return null;

            //           return (
            //             <>
            //               <div className="flex-row just-bet w100 cricket-data-table">
            //                 <div className="cricket-heighlight-row-left">
            //                   {/* {item.name.replace(" A ", ` ${teams?.split("-")[0]} `)} */}
            //                   {replaceString(item.name, item.values)}
            //                   <br />
            //                   {/* {item.values[0].val1} */}
            //                 </div>{" "}
            //                 <div
            //                   style={{
            //                     backgroundColor: "#F97D09",
            //                     color: "white",
            //                   }}
            //                   className="heighlight-row-right pointer"
            //                   onClick={() => {
            //                     setClickedBlock({
            //                       row: index,
            //                       box: 1,
            //                     });
            //                     setBidContent({
            //                       odds: showOdds(item.values[0].val2),
            //                       team: "",
            //                       team_id: 2,
            //                     });
            //                     setClickedRow(index);
            //                   }}
            //                 >
            //                   {params.game != "cricket" && item.values[0].val2}
            //                   {params.game == "cricket" &&
            //                     NumberCalculation(
            //                       item.name,
            //                       item.values[0]?.val2?.substring(1),
            //                       "-"
            //                     )}

            //                   <br />
            //                   {/* {calCulatePercentage(item.values[0].val2)} */}
            //                   {calCulatePercentage(item.values[0].odds)}
            //                 </div>{" "}
            //                 <div
            //                   className="heighlight-row-right pointer"
            //                   style={{
            //                     backgroundColor: "#064778",
            //                     color: "white",
            //                   }}
            //                   onClick={() => {
            //                     setClickedBlock({
            //                       row: index,
            //                       box: 2,
            //                     });
            //                     setBidContent({
            //                       odds: NumberCalculation(
            //                         item.name,
            //                         item.values[1].val2?.substring(1),
            //                         "+"
            //                       ),
            //                       team: "",
            //                       team_id: 2,
            //                     });
            //                     setClickedRow(index);
            //                   }}
            //                 >
            //                   {NumberCalculation(
            //                     item.name,
            //                     item.values[1].val2?.substring(1),
            //                     "+"
            //                   )}
            //                   {/* {item.values[1].val2?.substring(1)} */}
            //                   <br />
            //                   {/* {item.values[1].odds}{" "} */}
            //                   {/* {calCulatePercentage(item.values[1].val2)} */}
            //                   {calCulatePercentage(item.values[1].odds)}
            //                 </div>{" "}
            //               </div>
            //               {/* {true && ( */}
            //               {index == clickedRow && (
            //                 <div className="placebid-cover ">
            //                   <div className="button-cover">
            //                     {[100, 500, 1000, 2000].map((item) => {
            //                       return (
            //                         <button onClick={() => setBidAmount(item)}>
            //                           {item}
            //                         </button>
            //                       );
            //                     })}
            //                   </div>
            //                   <div className="input-est-cover">
            //                     <input
            //                       value={bidAmount}
            //                       onChange={(e) => setBidAmount(e.target.value)}
            //                     />
            //                     <div className="button-est">
            //                       {[
            //                         { label: "Place Bid", onClick: submitBid },
            //                         {
            //                           label: "Hide",
            //                           onClick: () => {
            //                             setClickedRow(null);
            //                             setClickedBlock(initialBlock);
            //                             setbidStatus({
            //                               status: null,
            //                               message: "",
            //                             });
            //                             setBidAmount(0);
            //                             setBidContent({ odds: 0 });
            //                           },
            //                         },
            //                       ].map((item, key) => {
            //                         return (
            //                           <button
            //                             onClick={item.onClick}
            //                             style={{
            //                               background: `${
            //                                 key == 0 ? "green" : "red"
            //                               }`,
            //                             }}
            //                           >
            //                             {item.label}
            //                           </button>
            //                         );
            //                       })}
            //                       <button>
            //                         Est:
            //                         {parseFloat(
            //                           bidContent.odds * bidAmount
            //                         ).toFixed(1)}
            //                       </button>
            //                     </div>
            //                   </div>
            //                   {bidStatus.status != null && (
            //                     <div
            //                       className="bid-placed"
            //                       style={{
            //                         display: `${
            //                           bidStatus.status == null && "none"
            //                         }`,
            //                         color: `${
            //                           bidStatus.status == true ? "green" : "red"
            //                         }`,
            //                       }}
            //                     >
            //                       {" "}
            //                       {bidStatus.msg}
            //                     </div>
            //                   )}
            //                 </div>
            //               )}
            //             </>
            //           );
            //         }
            //       })()}
            //       {/* {premiumToggle == false &&
            //       item?.values.map((inItem) => {
            //         if (inItem.val2 == null || inItem.val2 == "null") return null;

            //       })} */}
            //       {premiumToggle == true &&
            //         item?.values.map((inItem) => {
            //           return (
            //             <div className="flex-row just-bet w100 cricket-data-table">
            //               <div className="cricket-heighlight-row-left">
            //                 {inItem.val1}
            //               </div>{" "}
            //               <div
            //                 className="heighlight-row-right pointer"
            //                 onClick={() => {
            //                   // placeBid({ ...item, odds: inItem.odds })
            //                   setClickedBlock({
            //                     row: index,
            //                     box: 1,
            //                   });
            //                   setBidContent({
            //                     odds: parseFloat(showOdds(inItem.odds)).toFixed(
            //                       1
            //                     ),
            //                     team: "",
            //                     team_id: 1,
            //                   });
            //                   setClickedRow(index);
            //                 }}
            //               >
            //                 {inItem.odds}{" "}
            //               </div>{" "}
            //             </div>
            //           );
            //         })}
            //     </div>
            //     {/* {index == clickedRow && ( */}
            //   </>
            // );
          }
        })}
      </div>

      {filterNull(matchData).length == 0 && (
        <div
          style={{
            marginTop: "5px",
            width: "100%",
            textAlign: "center",
            background: "white",
            opacity: "0.5",
          }}
        >
          <div className="flex-row just-bet w100 cricket-data-table">
            <div className="cricket-heighlight-row-left">No Data</div>
            <div
              style={{
                color: "white",
              }}
              className="heighlight-row-right pointer"
            >
              <br />
            </div>
            <div
              className="heighlight-row-right pointer"
              style={{
                color: "white",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};
