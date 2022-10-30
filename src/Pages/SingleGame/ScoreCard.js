import React, { useState } from "react";
import { cricData } from "./cricdata";
// import cricData from "./cricdata";
// const parsedData = JSON.parse(cricData);

function ScoreCard() {
  const cricBuzData = cricData;
  const [betTeam, setbetTeam] = useState({});
  const [batsManDetail, setBatsManDetail] = useState({});
  const [batTeamDetail, setBatTeamDetail] = useState({});
  const scoreData = cricBuzData?.scoreCard[0];
  console.log(cricBuzData, "<<<cricbuzdatain scorecard");
  // if (cricBuzData?.scoreCard?.length) {
  // setBatTeamDetail(cricBuzData.scoreCard[0].batTeamDetails);
  // setBatsManDetail(cricBuzData?.scoreCard[0]?.batTeamDetails);
  // }
  const batsmanData = cricData.scoreCard[0].batTeamDetails.batsmenData;
  const bowlerData = cricData.scoreCard[0].bowlTeamDetails.bowlersData;
  const { wicketsData, extrasData, scoreDetails } = cricData.scoreCard[0];

  // // console.log(cricData, "<<<cric");
  // setbetTeam({
  //   name: cricData.scoreCard[0].batTeamDetails,
  // });
  return (
    <div className="score-card-cover">
      Score Card
      <div>{cricBuzData.status}</div>
      <div className="score-card-outer">
        <div className="score-card-left">
          <div
            className="left-row"
            style={{ height: "23px", fontSize: "15px" }}
          >
            <div className="left-1">
              <div>Batsman</div>
            </div>
            <div className="left-2">R</div>
            <div className="left-2">B</div>
            <div className="left-2">4s</div>
            <div className="left-2">6s</div>
            <div className="left-2">S/R</div>
          </div>

          {[
            "bat_1",
            "bat_2",
            "bat_3",
            "bat_4",
            "bat_5",
            "bat_6",
            "bat_7",
            "bat_8",
            "bat_9",
            "bat_10",
            "bat_11",
            "bat_12",
          ].map((item) => {
            const data = batsmanData[item];
            console.log(data);

            return (
              <div className="left-row">
                <div className="left-1">
                  {data.batName}
                  <div style={{ fontSize: "10px" }}>
                    {data.outDesc.length > 25
                      ? data.outDesc.substring(0, 23) + "..."
                      : data.outDesc}
                  </div>
                </div>
                <div className="left-2">{data.runs}</div>
                <div className="left-2">{data.balls}</div>
                <div className="left-2">{data.fours}</div>
                <div className="left-2">{data.sixes}</div>
                <div className="left-2">{data.strikeRate}</div>
              </div>
            );
          })}
        </div>
        <div className="mid-bord"></div>
        <div className="score-card-right">
          <div
            className="right-row"
            style={{ height: "23px", fontSize: "15px" }}
          >
            <div className="left-1">Bowler</div>
            <div className="left-2">O</div>
            <div className="left-2">M</div>
            <div className="left-2">R</div>
            <div className="left-2">W</div>
            <div className="left-2">ECON</div>
          </div>
          {["bowl_1", "bowl_2", "bowl_3", "bowl_4", "bowl_5", "bowl_6"].map(
            (item) => {
              const data = bowlerData[item];
              return (
                <div className="right-row">
                  <div className="left-1">{data.bowlName}</div>
                  <div className="left-2">{data.overs}</div>
                  <div className="left-2">{data.maidens}</div>
                  <div className="left-2">{data.runs}</div>
                  <div className="left-2">{data.wickets}</div>
                  <div className="left-2">{data.economy}</div>
                </div>
              );
            }
          )}
          <div className="down-right-data" style={{ fontWeight: "300" }}>
            <div>Falls Of Wicket</div>
            <div style={{ marginTop: "10px" }}>
              {Object.keys(wicketsData).map((item) => {
                const data = wicketsData[item];
                console.log(data, "<<<wicketdata");
                return (
                  <span style={{ marginRight: "10px" }}>
                    {data.batName} {data.wktRuns}/{data.wktNbr} ({data.wktOver}
                    ),
                  </span>
                );
              })}
            </div>
            <div style={{ marginTop: "15px" }}>
              Extra Runs
              <span style={{ marginLeft: "20px" }}>{extrasData.total}</span>
            </div>
            <div style={{ marginTop: "10px" }} className="extra-data-cover">
              {/* <div> */}
              <div> NB: {extrasData.noBalls}</div>
              <div> B: {extrasData.byes}</div>
              <div> W: {extrasData.wides}</div>
              <div> LB: {extrasData.legByes}</div>
              {/* <div> Penalty: {extrasData.penalty}</div> */}
              {/* </div> */}
            </div>
            <div style={{ marginTop: "15px" }}>
              Total{" "}
              <span style={{ marginLeft: "20px" }}>{scoreDetails.runs}</span>
            </div>
            <div style={{ marginTop: "10px" }} className="extra-data-cover">
              {/* <div> */}
              {/* <div> R: {}</div> */}
              <div> O: {scoreDetails.overs}</div>
              <div> W: {scoreDetails.wickets}</div>
              <div> RR: {scoreDetails.runRate}</div>
              {/* <div> Penalty: {extrasData.penalty}</div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreCard;
