import React, { useEffect, useState } from "react";
import { GameHeading } from ".";
import { earnAmount, getDataSavedInDb } from "../../ClientApi/BetApi";

function SingleRowRunningBid({ item }) {
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
  }, []);
  const showGreen = (amount, currAmount) => {
    if (amount > currAmount) return false;
    else return true;
  };
  const claimNow = async () => {
    console.log(item, "<<<item");
    // return null;
    earnAmount(parseFloat(odds * item.amount).toFixed(2), item.id, (res) => {
      console.log(res, "<<<claim now response");
    });
  };

  return (
    <div className="table-row">
      <div
        className="table-col"
        style={{
          width: GameHeading[0].width,
          wordBreak: "break-word",
        }}
      >
        {item.game_id?.split("/")[2]}
      </div>
      <div
        className="table-col"
        style={{
          width: GameHeading[1].width,
          // wordBreak: "break-word",
          minWidth: "200px",
        }}
      >
        {item?.game_id}
      </div>
      {/* <div className="table-col">Company</div> */}
      <div
        className="table-col"
        style={{ width: GameHeading[2].width, minWidth: "200px" }}
      >
        {item?.created_at}
      </div>
      <div className="table-col" style={{ width: GameHeading[3].width }}>
        {item?.amount}
      </div>
      <div className="table-col" style={{ width: GameHeading[4].width }}>
        {/* {item?.multiply_value} */}
        {odds}
      </div>
      <div
        className="table-col"
        style={{
          width: GameHeading[5].width,
          color: `${
            showGreen(item.reward_amount, item.amount * odds) ? "green" : "red"
          }`,
        }}
      >
        {item?.reward_amount} to {parseFloat(odds * item.amount).toFixed(2)}
      </div>
      <div
        className="table-col"
        style={{
          width: GameHeading[5].width,
          // color: `${
          //   showGreen(item.reward_amount, item.amount * odds) ? "green" : "red"
          // }`,
        }}
      >
        {/* {item.is_completed && <button>Claim Now</button>} */}
        {(() => {
          if (item.is_completed) {
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
        })()}
        {/* {item?.reward_amount} to {parseFloat(odds * item.amount).toFixed(2)} */}
      </div>
    </div>
  );
}

export default SingleRowRunningBid;
