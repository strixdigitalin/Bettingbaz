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

export const replaceNAmeAlbabet = (name) => {
  let z = name;
  const alphabet = [
    "Batsman",
    "Alternate",
    " A ",
    " B ",
    " C ",
    " D ",
    " E ",
    " F ",
    " G ",
    " H ",
    " I ",
    " J ",
    " K ",
    " L ",
    " M ",
    " N ",
    " O ",
    " P ",
    " Q ",
    " R ",
    " S ",
    " T ",
    " U ",
    " V ",
    " W ",
    " X ",
    " Y ",
    " Z ",
  ];

  alphabet.map((al) => {
    z = z.replace(al, "");
  });
  return z;
};

export const showOddCustomized = (odd) => {
  const values = [50, 55, 60, 65, 70, 75, 80, 85, 95, 100];
  let sendOdd = odd;
  for (let index = 0; index < values.length; index++) {
    const element = values[index];
    if (odd < values[index]) {
      sendOdd = values[index];
      break;
    }
  }
  return sendOdd;
};
