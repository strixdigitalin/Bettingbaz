import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePasswordApi, PlaceBetApi } from "../ClientApi/BetApi";
import { hideModal } from "../Redux/Reducers/PlaceBid";
import { showResetPasswordModal } from "../Redux/Reducers/ResetPassword.js";
function ResetPasswordModal() {
  const dispatch = useDispatch();
  const pressCancel = () => {
    dispatch(showResetPasswordModal(false));
  };
  const [password, setPassword] = useState("");
  const [reType, setReType] = useState("");

  const resetPAsswordApi = () => {
    if (password == reType) {
      changePasswordApi(password, (res) => {
        console.log(res);
      });
    } else {
      alert("Password and reset password must be same");
    }
  };

  return (
    <div
      className="placeBidModal"
      style={{ alignItems: "center", justifyContent: "center", gap: "2%" }}
    >
      Reset Password
      <div style={{ marginTop: "10px" }}>
        <input
          type="password"
          style={{ padding: "5px", borderRadius: "5px" }}
          placeholder="Enter New Password"
          onChange={(e) => setReType(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          style={{ padding: "5px", borderRadius: "5px" }}
          placeholder="Re-enter New Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex-row just-ctr w100 " style={{ gap: "2%" }}>
        <div>
          <button
            onClick={resetPAsswordApi}
            className="pointer"
            style={{
              padding: "5px",
              borderRadius: "5px",
              backgroundColor: "white",
              color: "green",
            }}
          >
            Submit
          </button>
        </div>
        <div>
          <button
            className="pointer"
            onClick={pressCancel}
            style={{
              padding: "5px",
              borderRadius: "5px",
              backgroundColor: "white",
              color: "red",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordModal;
