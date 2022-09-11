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

export default function CricketSingleMatch() {
  return <PageCover component={<CricketSingle />} />;
}

const CricketSingle = ({ name = "India - Pakistan" }) => {
  const dispatch = useDispatch();

  const [premiumToggle, setPremiumToggle] = useState(false);
  const params = useParams();
  const [matchData, setMatchData] = useState([]);
  console.log(params, "<<<<params");
  useEffect(() => {
    betbySingleMatc(params, (res) => {
      console.log(res);
      setMatchData(res);
    });
  }, []);

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
  const calCulatePercentage = (base, value) => {
    const temp = value / base;
    console.log(temp, value, base, "<<<temp");
    return (temp * 100).toFixed(2);
  };

  return (
    <div style={{ width: "60%" }}>
      <div className="single-top-head">{name}</div>
      {/* ------------------------------------ */}
      <div className="flex-row just-bet one-eaning bgwhite">
        <div className="eaning-left">
          <img src={bat} width="60px" height="60px" />
          <img src={india} />
          India
          <span>15-2</span>
        </div>
        <div className="eaning-mid">1 st Ennings</div>
        <div className="eaning-right">
          <img src={pakistan} />
          Pakistan
          <img src={ball} width="60px" height="60px" />
        </div>
      </div>
      {/* -----------------------------
      <div className="flex-row just-bet scoreData">
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

        if (index > 0 && checkIsNull.length > 0) {
          return (
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
                    <div className="flex-row just-bet w100 cricket-data-table">
                      <div className="cricket-heighlight-row-left">
                        {item.name}
                        <br />
                        {item.values[0].val1}
                      </div>{" "}
                      <div
                        style={{ backgroundColor: "#F97D09", color: "white" }}
                        className="heighlight-row-right pointer"
                        // onClick={() => placeBid({ ...item, odds: inItem.odds })}
                      >
                        {item.values[0].val2.substring(1)} <br />
                        {/* {item.values[0].odds}{" "} */}
                        {calCulatePercentage(
                          matchData[0].values[0].odds,
                          item.values[0].val2
                        )}
                      </div>{" "}
                      <div
                        className="heighlight-row-right pointer"
                        style={{ backgroundColor: "#064778", color: "white" }}
                        // onClick={() => placeBid({ ...item, odds: inItem.odds })}
                      >
                        {item.values[1].val2.substring(1)} <br />
                        {/* {item.values[1].odds}{" "} */}
                        {calCulatePercentage(
                          matchData[0].values[1].odds,
                          item.values[1].val2
                        )}
                      </div>{" "}
                    </div>
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
                        onClick={() => placeBid({ ...item, odds: inItem.odds })}
                      >
                        {inItem.odds}{" "}
                      </div>{" "}
                    </div>
                  );
                })}
            </div>
          );
        }
      })}
    </div>
  );
};
