import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../ClientApi/Auth";
import { getUserDetail, PlaceBetApi } from "../ClientApi/BetApi";
import { hideModal, placeBid } from "../Redux/Reducers/PlaceBid";
import SigninModal, { showSigninModal } from "../Redux/Reducers/SigninModal";
import loginsvg from "../Assets/Header/Svgs/login.svg";
import signup from "../Assets/Header/Svgs/signup.svg";
import { Link } from "react-router-dom";
function SignInModal() {
  const { PlaceBid } = useSelector((state) => state);
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  console.log(PlaceBid);
  const pressCancel = () => {
    dispatch(hideModal());
  };
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [bidAmount, setBidAmount] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const stringUser = localStorage.getItem("betting_user");
    console.log(stringUser, "<<<is");
    if (stringUser == null || stringUser == "" || stringUser == "null") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
      getUserDetail((res) => {
        setLoggedInUser(res.user);
      });
    }
    // const parseIt = JSON.parse(stringUser);
  }, []);

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
        // alert("success");
        localStorage.setItem(
          "betting_user",
          JSON.stringify({ ...res.user, bearer: res["bearer-token"] })
        );
        dispatch(showSigninModal(false));
        window.location.href = "/home";
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
      {/* <button className="submit-but" onClick={handleSubmit}>
        Sign in
      </button> */}
      <img onClick={handleSubmit} src={loginsvg} />
      <Link to="/sign-up">
        <img onClick={handleSubmit} src={signup} />
      </Link>
    </div>
  );
}

export default SignInModal;
