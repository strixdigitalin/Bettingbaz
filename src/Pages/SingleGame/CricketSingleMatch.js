import React, { useEffect, useState } from "react";
import PageCover from "../../Components/PageCover";
import india from "../../Assets/Card/india.png";
import pakistan from "../../Assets/Card/pakistan.png";
import bat from "../../Assets/Card/bat.png";
import ball from "../../Assets/Card/Cricket ball icon.png";
import movedown from "../../Assets/Card/Path2.png";
import { useParams } from "react-router-dom";
import { betbySingleMatc } from "../../Api";
import { useDispatch } from "react-redux";
import { showModal } from "../../Redux/Reducers/PlaceBid";

export default function CricketSingleMatch() {
  return <PageCover component={<CricketSingle />} />;
}

const CricketSingle = ({ name = "India - Pakistan" }) => {
  const dispatch = useDispatch();

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
      {matchData.map((item) => {
        return (
          <div style={{ marginTop: "20px" }}>
            <div className="card-today" style={{ backgroundColor: "#EAEAEA" }}>
              <div>
                <img src={movedown} width="15px" />
                <span style={{ marginLeft: "15px" }}>{item?.name}</span>{" "}
                {/* <span className="cardTeam"> englend</span> */}
              </div>
            </div>
            {item?.values.map((inItem) => {
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
      })}
    </div>
  );
};
