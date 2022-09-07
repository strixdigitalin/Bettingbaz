export const baseUrl = "https://client.drazs.com/backend/public/api";

export const login = async (cred, successCallback) => {
  var formdata = new FormData();
  const { email, password } = cred;
  console.log(cred);
  formdata.append("email", email);
  formdata.append("password", password);
  formdata.append("user_type", "user");

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch(baseUrl + "/login", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      successCallback(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};
