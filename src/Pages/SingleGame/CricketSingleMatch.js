import React, { useEffect, useState } from "react";
import PageCover from "../../Components/PageCover";
import india from "../../Assets/Card/india.png";
import pakistan from "../../Assets/Card/pakistan.png";
import bat from "../../Assets/Card/bat.png";
import ball from "../../Assets/Card/Cricket ball icon.png";
import movedown from "../../Assets/Card/Path2.png";
import inPlay from "../../Assets/Header/In Play.png";
import { useParams } from "react-router-dom";
import { betbySingleMatc } from "../../Api";
import { useDispatch } from "react-redux";
import { showModal } from "../../Redux/Reducers/PlaceBid";
import { PlaceBetApi } from "../../ClientApi/BetApi";
import { showOdds } from "../../Components/ShowLiveMatchCard";

const TOTAL_RUNS = "Runs";
const WICKETS = "Wicket";
const initialBlock = { row: null, box: null };

export default function CricketSingleMatch() {
  return <PageCover component={<CricketSingle />} />;
}

const CricketSingle = ({ name = "India - Pakistan" }) => {
  const dispatch = useDispatch();

  const params = useParams();
  const [premiumToggle, setPremiumToggle] = useState(
    params.game == "cricket" ? false : true
  );
  const [matchData, setMatchData] = useState([]);
  const [equalValue, setEqualValue] = useState(0);
  const [bidAmount, setBidAmount] = useState(0);
  const [clickedRow, setClickedRow] = useState(null);
  const [bidContent, setBidContent] = useState({ odds: 0 });
  const [clickedBlock, setClickedBlock] = useState(initialBlock);
  const [bidStatus, setbidStatus] = useState({
    status: null,
    msg: "",
  });

  console.log(params, "<<<<params");
  useEffect(() => {
    betbySingleMatc(params, (res) => {
      console.log(res);
      setMatchData(res);
    });
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
          team: name,
          odds: item.odds,
        })
      );
    }
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
    return (temp * 100).toFixed(2);
  };
  const replaceString = (name, values) => {
    if (params.game != "cricket") return name;
    let a = name.replace(
      "Team A",
      ` ${teams?.split("v")[0].toLocaleUpperCase()} `
    );
    let b = a.replace(
      "Team B",
      ` ${teams?.split("v")[1].toLocaleUpperCase()} `
    );
    let c = b.replace("Batsman ", values[0].val1);
    let d = c.replace("Under", " ");
    let e = d.replace("-", " ");
    let f = e.replace("Alternate", " ");
    // let b = a.replace("Team B", ` ${teams?.split("-")[1]} `);
    return f;
  };

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
      if (item < num < item + 10) sendThis = item + 10;
    });
    return sendThis;
  };
  const decreaseDataBlue = (num) => {
    let sendThis = num;
    const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    values.map((item) => {
      if (item < num > item + 10) sendThis = item;
    });
    return sendThis;
  };

  return (
    <div style={{ width: "60%" }}>
      <div className="single-top-head">{name}</div>
      {/* ------------------------------------ */}
      <div className="flex-row just-bet one-eaning bgwhite">
        <div className="eaning-left">
          <img src={bat} width="60px" height="60px" />
          <img src={india} />
          {matchData[0]?.values[0]?.val1}
          <span>15-2</span>
        </div>
        <div className="eaning-mid">1 st Ennings</div>
        <div className="eaning-right">
          <img src={pakistan} />
          {matchData[0]?.values[1]?.val1}
          <img src={ball} width="60px" height="60px" />
        </div>
      </div>
      {/* ----------------------------- */}
      <div
        className="flex-row just-bet scoreData "
        // style={{ background: "white" }}
      >
        <div
          className="flex-col align-ctr just-bet playerScore scoredata-team"
          style={{ background: "white" }}
        >
          <div
            className="flex-row w100  score-data-single-team"
            style={{ padding: "5px 10px" }}
            // style={{ paddingLeft: "15px" }}
          >
            {/* Asia Cup{" "} */}
            {showLeague(params.legue)}
            <span style={{ color: "#6E6E6E", marginLeft: "2px" }}>
              {" "}
              {/* International */}
              {/* {params.legue} */}
            </span>
            {/* <div>(54)</div> */}
          </div>
          <div
            className="flex-row  w100 score-data-single-team"
            style={{
              borderTop: "1px solid #707070",
              padding: "5px 10px",
              color: "#6E6E6E",
            }}
          >
            {matchData[0]?.values[0]?.val1}
          </div>
          <div
            className="flex-row  w100 score-data-single-team"
            style={{
              borderTop: "1px solid #707070",
              padding: "5px 10px",
              color: "#6E6E6E",
            }}
          >
            {matchData[0]?.values[1]?.val1}
          </div>
          <br />
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
            style={{ padding: "5px 0px", color: "wheat" }}
          >
            Back
            {/* <div>(54)</div> */}
          </div>
          <div
            className="flex-row w100 just-ctr"
            style={{
              border: "1px solid #707070",
              padding: "5px 0px",
              color: "wheat",
            }}
          >
            {parseFloat(matchData[0]?.values[0]?.odds).toFixed(1)}
            {/* <div>(54)</div> */}
          </div>

          <div
            className="flex-row w100 just-ctr"
            style={{
              border: "1px solid #707070",
              padding: "5px 0px",
              color: "wheat",
            }}
          >
            {parseFloat(matchData[0]?.values[1]?.odds).toFixed(1)}
          </div>
          <br />
        </div>
        <div
          className="flex-col align-ctr just-bet playerScore"
          style={{
            background: "#F97D09",
            height: "100%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
        >
          <div
            className="flex-row w100 text-center just-ctr"
            style={{ padding: "5px 0px", color: "wheat" }}
          >
            Lay
            {/* <div>(54)</div> */}
          </div>
          <div
            className="flex-row w100 text-center just-ctr"
            style={{
              border: "1px solid #707070",
              padding: "5px 0px",
              color: "wheat",
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
            }}
          >
            {parseFloat(
              parseFloat(matchData[0]?.values[1]?.odds) + 0.1
            ).toFixed(1)}
            {/* <div>(54)</div> */}
          </div>
          <br />
        </div>
        {/* <div className="flex-row just-bet"></div> */}
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
      <div className="prem-fancy-cover">
        {params.game == "cricket" && (
          <div
            onClick={() => setPremiumToggle(false)}
            className="prem-fancy pointer"
            style={{
              backgroundColor: !premiumToggle ? "#F97D09" : "white",
              // color: "white",
              color: !premiumToggle ? "white" : "black",
            }}
          >
            <img src={inPlay} />
            Fancy
          </div>
        )}
        <div
          className="prem-fancy pointer"
          onClick={() => setPremiumToggle(true)}
          style={{
            backgroundColor: premiumToggle ? "#F97D09" : "white",
            color: premiumToggle ? "white" : "black",
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
      {matchData.map((item, index) => {
        const checkIsNull = item.values.filter(
          (item) => item.val2 != null && item.val2 != "null"
        );

        // if (index > 0) {
        if (index > 0 && checkIsNull.length > 0) {
          return (
            <>
              <div style={{ marginTop: "1px" }}>
                {/* <div
                className="card-today"
                style={{ backgroundColor: "#EAEAEA" }}
              >
                <div>
                  <img src={movedown} width="15px" />
                  <span style={{ marginLeft: "15px" }}>{item?.name}</span>{" "}
                </div>
              </div> */}
                {(() => {
                  if (premiumToggle == false) {
                    // if (inItem.val2 == null || inItem.val2 == "null") return null;

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
                            {params.game != "cricket" && item.values[0].val2}
                            {params.game == "cricket" &&
                              NumberCalculation(
                                item.name,
                                item.values[0]?.val2?.substring(1),
                                "-"
                              )}

                            <br />
                            {/* {calCulatePercentage(item.values[0].val2)} */}
                            {IncreaseOrangeData(
                              calCulatePercentage(item.values[0].odds)
                            )}
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
                            {decreaseDataBlue(
                              calCulatePercentage(item.values[1].odds)
                            )}
                          </div>{" "}
                        </div>
                        {/* {true && ( */}
                        {index == clickedRow && (
                          <div className="placebid-cover ">
                            <div className="button-cover">
                              {[100, 500, 1000, 2000].map((item) => {
                                return (
                                  <button onClick={() => setBidAmount(item)}>
                                    {item}
                                  </button>
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
                                    bidStatus.status == true ? "green" : "red"
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
                              odds: parseFloat(showOdds(inItem.odds)).toFixed(
                                1
                              ),
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
  );
};
