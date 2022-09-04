let API = {};
const axios = require("axios");

const headers = {
  "X-RapidAPI-Key": "290fd5be0fmsh6cbd06c612060b1p174658jsn61b406721b77",
  "X-RapidAPI-Host": "betfair-sportsbook.p.rapidapi.com",
};

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

API.getInPlay = getInPlay;
API.competitionBySports = competitionBySports;
API.matchByCompetition = matchByCompetition;

export default API;
