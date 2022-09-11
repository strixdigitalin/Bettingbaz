import { baseUrl } from "./Auth";

export const PlaceBetApi = async (item, successCallback) => {
  var myHeaders = new Headers();
  const user = localStorage.getItem("betting_user");
  const userData = JSON.parse(user);
  const token = userData.usertoken;
  const { bearer } = userData;
  console.log(user);
  const payloadData = {
    token,
    game_id: item.matchId,
    amount: item.amount,
    multiply_value: item.odds,
    status: "running",
  };
  myHeaders.append("Authorization", "Bearer " + bearer);

  var formdata = new FormData();
  formdata.append("token", token);
  formdata.append("game_id", payloadData.game_id);
  formdata.append("amount", payloadData.amount);
  formdata.append("multiply_value", payloadData.multiply_value);
  formdata.append("status", "running");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(baseUrl + "/Bet", requestOptions)
    .then((response) => response.text())
    .then((result) => successCallback(JSON.parse(result)))
    .catch((error) => {
      successCallback({ status: false, msg: "Unable to place bid" });
    });
};

export const getUserDetail = async (successCallback) => {
  // WARNING: For POST requests, body is set to null by browsers.
  var myHeaders = new Headers();
  const user = localStorage.getItem("betting_user");
  const userData = JSON.parse(user);
  const token = userData.usertoken;
  const { bearer } = userData;

  myHeaders.append("Authorization", "Bearer " + bearer);
  var formdata = new FormData();
  formdata.append("token", token);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    "https://client.drazs.com/backend/public/api/getUser?user_type=user",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      const data = JSON.parse(result);
      console.log(data, "<<<<user details");
      successCallback(data);
    })
    .catch((error) => console.log("error", error));
};

export const changePasswordApi = async (password, successCallback) => {
  const user = localStorage.getItem("betting_user");
  const userData = JSON.parse(user);
  const token = userData.usertoken;
  console.log(userData, "<<<user");
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + userData.bearer);

  var formdata = new FormData();
  console.log(userData.usertoken, userData.email, password, userData.bearer);
  formdata.append("token", userData.usertoken);
  formdata.append("email", userData.email);
  formdata.append("password", password);
  formdata.append("user_type", "user");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    "https://client.drazs.com/backend/public/api/updateUser",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => successCallback(result))
    .catch((error) => console.log("error", error));
};