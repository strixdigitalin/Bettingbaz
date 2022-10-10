import React, { useEffect, useState } from "react";
import { GameHeading } from ".";
import { earnAmount, getDataSavedInDb } from "../../ClientApi/BetApi";

function SingleRowRunningBid({ item }) {
  const [bePlaced, setBePlaced] = useState(false);
  const [odds, setOdds] = useState("...");
  useEffect(() => {
    console.log(item.game_id, "<<<<running bidfinal");
    getDataSavedInDb(
      {
        matchId: item.game_id,
      },
      (res) => {
        console.log(res, "<<<<resat singlerow");
        setOdds(res[0].values[0].odds);
      }
    );
  }, [bePlaced]);
  const showGreen = (amount, currAmount) => {
    if (amount > currAmount) return false;
    else return true;
  };
  const claimNow = async () => {
    console.log(item, "<<<item");
    // return null;
    earnAmount(parseFloat(odds * item.amount).toFixed(2), item.id, (res) => {
      console.log(res, "<<<claim now response");
      setBePlaced(!bePlaced);
      window.location.reload(true);
    });
  };

  return (
    <div className="table-row">
      <div
        className="table-col"
        style={{
          width: GameHeading[0].width,
          width: "50%",

          wordBreak: "break-word",
          minWidth: "200px",
        }}
      >
        {item.game_id.toUpperCase()?.split("/")[1] +
          ">" +
          item.game_id.toUpperCase()?.split("/")[4]}
      </div>
      <div
        className="table-col"
        style={{
          // width: GameHeading[1].width,
          // wordBreak: "break-word",
          minWidth: "100px",
        }}
      >
        {item.odds_type != null ? item.odds_type : "--"}
      </div>
      <div
        className="table-col"
        style={{
          width: GameHeading[2].width,
          // wordBreak: "break-word",
          minWidth: "100px",
        }}
      >
        {/* {item?.game_id} */}
        {odds == "..."
          ? "--"
          : odds == null
          ? "--"
          : parseFloat(odds).toFixed(2)}
      </div>
      {/* <div className="table-col">Company</div> */}
      <div className="table-col" style={{ width: GameHeading[4].width }}>
        {/* {item?.created_at} */}
        {/* No */}
        {item?.decision != null ? item.decision : "--"}
      </div>
      <div className="table-col" style={{ width: GameHeading[3].width }}>
        {item?.stake != null ? item.stake : "--"}
      </div>
      <div className="table-col" style={{ width: GameHeading[5].width }}>
        {/* {item?.multiply_value} */}
        {/* {odds} */}
        {(() => {
          const t = new Date(item?.created_at);
          return (
            t.getHours() +
            ":" +
            t.getMinutes() +
            "    " +
            +"   " +
            t.getDate() +
            "-" +
            t.getMonth() +
            1 +
            "-" +
            t.getFullYear()
          );
        })()}
      </div>
      <div
        className="table-col"
        style={{
          width: GameHeading[6].width,
        }}
      >
        {item.settled_date != null ? item.settled_date : "--"}

        {/* {item?.reward_amount} to{" "}
        {parseFloat(odds * item.amount).toFixed(2) == "NaN"
          ? "--"
          : parseFloat(odds * item.amount).toFixed(2)} */}
      </div>
      <div
        className="table-col"
        style={{
          width: GameHeading[6].width,
          color: `${
            showGreen(item.reward_amount, item.amount * odds) ? "green" : "red"
          }`,
        }}
      >
        {/* {item.is_completed && <button>Claim Now</button>} */}
        {/* {(() => {
          if (item.is_completed == 1 && item.is_withdrawl == 0) {
            return (
              <button
                style={{ borderRadius: "10px", padding: "5px 5px" }}
                className="pointer"
                onClick={claimNow}
              >
                Claim Now
              </button>
            );
          }
        })()} */}
        {parseFloat(odds * item.amount).toFixed(2) != null &&
        parseFloat(odds * item.amount).toFixed(2) != "null"
          ? parseFloat(odds * item.amount).toFixed(2)
          : "--"}
        {/* {item?.reward_amount} to {parseFloat(odds * item.amount).toFixed(2)} */}
      </div>
    </div>
  );
}

export default SingleRowRunningBid;
