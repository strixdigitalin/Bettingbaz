import React, { useEffect, useState } from "react";
import { getDataSavedInDb, getUserDetail } from "../../ClientApi/BetApi";
import SingleRowRunningBid from "./SingleRowRunningBid";

export const GameHeading = [
  { name: "Sports Name", width: "5%" },
  { name: "Tournament Id", width: "45%" },
  { name: "Time & Date", width: "25%" },
  { name: "Bid Amount", width: "5%" },
  { name: "Current Odds", width: "5%" },
  { name: "Win/loss", width: "5%" },
  { name: "Action", width: "5%" },
];
function MyBet() {
  const BET_HISTORY = "BET_HISTORY";
  const RUNNING_BET = "RUNNING_BET";
  const PROFITE_LOSS = "PROFITE_LOSS";

  const BetHistory = [
    { name: "id", width: "5%" },
    { name: "From", width: "10%" },
    { name: "to", width: "10%" },
    { name: "Amount", width: "30%" },
    { name: "Date", width: "35%" },
    { name: "Status", width: "10%" },
  ];

  const [userDetails, setuserDetails] = useState([]);
  const [gameTransection, setgameTransection] = useState([]);
  const [coingSentTransaction, setCoingSentTransaction] = useState([]);
  const [coinRieved, setcoinRieved] = useState([]);
  const [switchTab, setSwitchTab] = useState(BET_HISTORY);

  useEffect(() => {
    getUserDetail((res) => {
      console.log(res);
      console.log(res.games, "<<<<< games");
      setuserDetails(res);
      setgameTransection(res.games.reverse());
      // setCoingSentTransaction(res.coin_sent_transactions);
      // setCoingSentTransaction(res.coin_sent_transactions);
      setcoinRieved([
        ...res.coin_recieved_transactions,
        ...res.coin_sent_transactions,
      ]);
    });
  }, []);

  const matchTransaction = (id) => {
    //  received true
    // send false

    if (id == userDetails.user.id) return true;
    else return false;
  };
  const backColor = (item) => {
    return {
      backgroundColor: `${matchTransaction(item.to_id) ? "green" : "red"}`,
    };
  };

  return (
    <div className="my-bet-body">
      <div className="card-group">
        <div className="single-card" onClick={() => setSwitchTab(BET_HISTORY)}>
          Bet History
        </div>
        <div className="single-card" onClick={() => setSwitchTab(RUNNING_BET)}>
          Running Bet
        </div>
        <div className="single-card" onClick={() => setSwitchTab(BET_HISTORY)}>
          Profile/Loss History
        </div>
      </div>
      <div className="middle-cal">
        <input type="date" /> to
        <input type="date" />
      </div>
      <div className="table-div">
        <div className="table-cover">
          {switchTab == RUNNING_BET && (
            <>
              {" "}
              <div className="table-row" style={{ marginBottom: "10px" }}>
                {GameHeading.map((item, index) => (
                  <div
                    className="table-col"
                    style={{
                      width: item.width,
                      minWidth: `${
                        index == 1 || index == 2 ? "200px" : "100px"
                      }`,
                    }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
              {gameTransection.map((item, index) => {
                console.log(item, "<<<<itemsingle");
                return <SingleRowRunningBid item={item} />;
              })}
              {/* {gameTransection.map((item, index) => (
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
                      minWidth: "200px",
                    }}
                  >
                    {item?.game_id}
                  </div>
                  <div
                    className="table-col"
                    style={{ width: GameHeading[2].width, minWidth: "200px" }}
                  >
                    {item?.created_at}
                  </div>
                  <div
                    className="table-col"
                    style={{ width: GameHeading[3].width }}
                  >
                    {item?.amount}
                  </div>
                  <div
                    className="table-col"
                    style={{ width: GameHeading[4].width }}
                  >
                    {item?.multiply_value}
                  </div>
                  <div
                    className="table-col"
                    style={{ width: GameHeading[5].width }}
                  >
                    {item?.reward_amount}
                  </div>
                </div>
              ))} */}
            </>
          )}

          {/* {switchTab == PROFITE_LOSS &&
            coinRieved.map((item) => (
              <div className="table-row">
                <div className="table-col">{item.game_id?.split("/")[2]}</div>
                <div className="table-col">{item?.game_id}</div>
                <div className="table-col">{item?.created_at}</div>
                <div className="table-col">{item?.amount}</div>
                <div className="table-col">{item?.multiply_value}</div>
                <div className="table-col">{item?.reward_amount}</div>
              </div>
            ))} */}

          {switchTab == BET_HISTORY && (
            <>
              {" "}
              <div className="table-row" style={{ marginBottom: "10px" }}>
                {BetHistory.map((item, index) => (
                  <div
                    className="table-col"
                    style={{
                      width: item.width,
                      minWidth: `${
                        index == 1 || index == 2 ? "200px" : "100px"
                      }`,
                    }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
              {coinRieved.map((item, index) => (
                <div
                  className="table-row"
                  // style={backg}
                >
                  <div
                    className="table-col"
                    style={{
                      width: BetHistory[0].width,
                      wordBreak: "break-word",
                    }}
                  >
                    {item.id}
                  </div>
                  <div
                    className="table-col"
                    style={{
                      width: BetHistory[1].width,
                      // wordBreak: "break-word",
                      minWidth: "200px",
                    }}
                  >
                    {item?.from_id}
                  </div>
                  {/* <div className="table-col">Company</div> */}
                  <div
                    className="table-col"
                    style={{ width: BetHistory[2].width, minWidth: "200px" }}
                  >
                    {item?.to_id}
                  </div>
                  <div
                    className="table-col"
                    style={{ width: BetHistory[3].width }}
                  >
                    {item?.amount}
                  </div>
                  <div
                    className="table-col"
                    style={{ width: BetHistory[4].width }}
                  >
                    {item?.created_at}
                  </div>
                  <div
                    className="table-col"
                    style={{ width: BetHistory[5].width, ...backColor(item) }}
                  >
                    {matchTransaction(item.to_id) ? "Received" : "sent"}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyBet;
