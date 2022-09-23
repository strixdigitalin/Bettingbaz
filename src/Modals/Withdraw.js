import React, { useState } from "react";
import { useDispatch } from "react-redux";
import withdrawsvg from "../Assets/Header/Svgs/withdraw.svg";
import { withdrawApi } from "../ClientApi/BetApi";
import { showWithdrawFun } from "../Redux/Reducers/SigninModal";
function Withdraw() {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const [status, setStatus] = useState({ status: false, message: "" });
  const submitWithdraw = async () => {
    setStatus({ status: false, message: "" });
    withdrawApi(amount, (res) => {
      console.log(res, "<<<<<withdrawlres");
      setStatus({ status: true, message: res.message });
    });
  };
  return (
    <div className="sign-in-modal">
      <div>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        {" "}
        <img
          src={withdrawsvg}
          onClick={submitWithdraw}
          className="withdraw-img"
          width={window.StyleSheet.width < 768 ? "200px" : "200px"}
        />
      </div>
      <div>{status.status == true && status.message}</div>

      <div>
        <button
          style={{ padding: "10px", width: "7rem", borderRadius: "15px" }}
          onClick={() => dispatch(showWithdrawFun(false))}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Withdraw;
