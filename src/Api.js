let API = {};
const axios = require("axios");
//  / bettingbaaz old key
// const headers = {
//   "X-RapidAPI-Key": "290fd5be0fmsh6cbd06c612060b1p174658jsn61b406721b77",
//   "X-RapidAPI-Host": "betfair-sportsbook.p.rapidapi.com",
// };
const headers = {
  "X-RapidAPI-Key": "a58cf9baf1msh54ab6765c6533c2p151ccejsn85832d4e5eb2",
  "X-RapidAPI-Host": "betfair-sportsbook.p.rapidapi.com",
};
//  personal key for testing
// const headers = {
//   "X-RapidAPI-Key": "3af9616a04mshb875af32508e23cp1b113bjsncbd8310da7d1",
//   "X-RapidAPI-Host": "betfair-sportsbook.p.rapidapi.com",
// };

//  Outrights by competition
const getHighlights = async (sport, successCallback) => {
  // const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://betfair-sportsbook.p.rapidapi.com/outrights-by-competition",
    params: {
      competitionid: "/sport/football/english-premier-league/10932509",
      lang: "en",
    },
    headers,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      successCallback(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

// ---in play game
const getInPlay = async (sport, successCallback) => {
  // const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://betfair-sportsbook.p.rapidapi.com/live-matches-by-sport",
    params: { sport, lang: "en" },
    headers,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log("API CALLED", sport, "-->\t", response.data);
      successCallback(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

//  get competition show in down of inplay cards

const competitionBySports = (sport, successCallback) => {
  const options = {
    method: "GET",
    url: "https://betfair-sportsbook.p.rapidapi.com/competitions-by-sport",
    params: { sport: sport, lang: "en" },
    headers,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      successCallback(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

// ---Match by competition----
const matchByCompetition = async (id, successCallback) => {
  const options = {
    method: "GET",
    url: "https://betfair-sportsbook.p.rapidapi.com/matches-by-competition",
    params: {
      competitionid: id,
      lang: "en",
    },
    headers,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log("Match by competition", response.data);
      successCallback(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const betbySingleMatc = async (params, successCallBack) => {
  const options = {
    method: "GET",
    url: "https://betfair-sportsbook.p.rapidapi.com/markets-by-match",
    params: {
      matchid: `/sport/${params.game}/${params.legue}/${params.teams}/${params.id}`,
      lang: "en",
    },
    headers,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      successCallBack(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
export const betBysingleGameUsingId = async (id, successCallBack) => {
  console.log("api called to get live");
  const options = {
    method: "GET",
    url: "https://betfair-sportsbook.p.rapidapi.com/markets-by-match",
    params: {
      matchid: id,
      lang: "en",
    },
    headers,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data, "<<<< match by id response");
      successCallBack(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

API.getInPlay = getInPlay;
API.competitionBySports = competitionBySports;
API.matchByCompetition = matchByCompetition;

export default API;

export const getCricBuzMatch = (callBack) => {
  // const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live",
    headers: {
      "X-RapidAPI-Key": "a58cf9baf1msh54ab6765c6533c2p151ccejsn85832d4e5eb2",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      callBack(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getScoreCard = (matchId, callBack) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a58cf9baf1msh54ab6765c6533c2p151ccejsn85832d4e5eb2",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

  fetch(
    "https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/" + matchId + "/scard",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response, "<<<<matchCricbuzdata");
      callBack(response);
    })
    .catch((err) => console.error(err));
};
