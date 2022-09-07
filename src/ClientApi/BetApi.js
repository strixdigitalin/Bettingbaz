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
