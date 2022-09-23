import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlaceBetApi } from "../ClientApi/BetApi";
import { hideModal, placeBid } from "../Redux/Reducers/PlaceBid";
function PlaceBidModal() {
  const { PlaceBid } = useSelector((state) => state);
  const [bidStatus, setbidStatus] = useState({
    status: null,
    msg: "",
  });
  const dispatch = useDispatch();
  console.log(PlaceBid, "placebid");
  const pressCancel = () => {
    dispatch(hideModal());
  };

  const [bidAmount, setBidAmount] = useState(0);

  const submitBid = () => {
    setbidStatus({ status: null, msg: "" });

    PlaceBetApi({ ...PlaceBid, amount: bidAmount }, (res) => {
      console.log(res);
      if (res.status) {
        setbidStatus({ status: true, msg: res.message });
      } else {
        setbidStatus({ status: false, msg: res.message });
      }
    });
  };

  return (
    <div className="placeBidModal">
      <div className="flex-row just-bet">
        {[100, 500, 1000, 2000,5000].map((item) => {
          return (
            <div className="bid-but pointer" onClick={() => setBidAmount(item)}>
              {item}{" "}
            </div>
          );
        })}
      </div>
      <div className=" bid-input-but">
        <div className="bid-input">
          <input
            className=""
            placeholder="Enter Bid Amount"
            style={{ padding: "5px", borderRadius: "8px", width: "100%" }}
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
          />
        </div>
        <div className="flex-row just-bet bid-buttons">
          <div
            style={{ background: "green", color: "white" }}
            className="bid-but pointer"
            onClick={submitBid}
          >
            Place bid
          </div>
          <div
            style={{ background: "red", color: "white" }}
            className="bid-but pointer"
            onClick={pressCancel}
          >
            Cancel
          </div>
          <div style={{ fontSize: "12px" }}>
            Est ret
            <br />
            {parseFloat(parseFloat(bidAmount * PlaceBid?.odds)).toFixed(1)}
          </div>
        </div>
      </div>
      {bidStatus.status != null && (
        <div
          className="bid-placed"
          style={{
            display: `${bidStatus.status == null && "none"}`,
            color: `${bidStatus.status == true ? "green" : "red"}`,
          }}
        >
          {" "}
          {bidStatus.msg}
        </div>
      )}
    </div>
  );
}

export default PlaceBidModal;
