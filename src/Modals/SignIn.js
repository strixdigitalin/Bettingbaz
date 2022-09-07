import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../ClientApi/Auth";
import { PlaceBetApi } from "../ClientApi/BetApi";
import { hideModal, placeBid } from "../Redux/Reducers/PlaceBid";
import SigninModal, { showSigninModal } from "../Redux/Reducers/SigninModal";
function SignInModal() {
  const { PlaceBid } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(PlaceBid);
  const pressCancel = () => {
    dispatch(hideModal());
  };
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [bidAmount, setBidAmount] = useState(0);

  const submitBid = () => {
    PlaceBetApi({ ...PlaceBid, amount: bidAmount }, (res) => {
      console.log(res);
    });
  };

  const inputArray = [
    { name: "email", type: "email" },
    { name: "password", type: "password" },
  ];
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
    login(formData, (res) => {
      console.log(res);
      if (res.user) {
        alert("success");
        localStorage.setItem(
          "betting_user",
          JSON.stringify({ ...res.user, bearer: res["bearer-token"] })
        );
        dispatch(showSigninModal(false));
      } else {
        alert("fail");
      }
    });
  };

  return (
    <div className="sign-in-modal">
      <div className="modal-heading">Sign In</div>
      {inputArray.map((item) => {
        return (
          <input
            className="signin-input"
            type={item.type}
            name={item.name}
            onChange={(e) => handleChange(e)}
          />
        );
      })}
      <button className="submit-but" onClick={handleSubmit}>
        Sign in
      </button>
    </div>
  );
}

export default SignInModal;
