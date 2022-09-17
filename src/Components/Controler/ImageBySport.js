import cricket from "../../Assets/gameicon/Cricket.png";
import football from "../../Assets/gameicon/football.png";
import tennis from "../../Assets/gameicon/tennis.png";
import americalFootball from "../../Assets/gameicon/american-football.png";
import australianRules from "../../Assets/gameicon/australian-rules.png";
import baseball from "../../Assets/gameicon/Baseball.png";
import basketball from "../../Assets/gameicon/basketball.png";
import betMark from "../../Assets/gameicon/Bet mark.png";
import boxing from "../../Assets/gameicon/boxing.png";
import darts from "../../Assets/gameicon/darts.png";
import gaelicGames from "../../Assets/gameicon/gaelic-games.png";
import handball from "../../Assets/gameicon/handball.png";
import iceHockey from "../../Assets/gameicon/ice-hockey.png";
import inPlayIcon from "../../Assets/Header/In Play.png";
import mma from "../../Assets/gameicon/mma.png";
import rugbyLeague from "../../Assets/gameicon/rugby-league.png";
import rugbyUnion from "../../Assets/gameicon/rugby-union.png";
import snooker from "../../Assets/gameicon/snooker.png";
import volleyball from "../../Assets/gameicon/volleyball.png";
// import winterSports from "../../Assets/gameicon/winter-sports.png";
import winterSports from "../../Assets/gameicon/winter-sports.png";
import movedown from "../../Assets/Card/Path2.png";

export const leftLinkData = [
  { name: "In Play", link: "/in-play" },
  { name: "Live Cricekt", link: "/in-play/cricket" },
  { name: "Live Football", link: "/in-play/football" },
  { name: "Live Tennis", link: "/in-play/tennis" },
  { name: "Live Snooker", link: "/in-play/snooker" },
];
export const rightLinkData = [
  { name: "Cricket Tournaments", link: "/all-competition-by-sports/cricket" },
  { name: "Football Tournaments", link: "/all-competition-by-sports/football" },
  { name: "Tennis Tournaments", link: "/all-competition-by-sports/tennis" },
  // { name: "Tennis", link: "/all-competition-by-sports/tennis" },
  // { name: "Live Snooker", link: "/all-competition-by-sports/snooker" },
];

const sports = [
  {
    sport: "cricket",
    icon: cricket,
    name: "Cricket",
  },
  {
    sport: "football",
    icon: football,
    name: "Football",
  },
  {
    sport: "tennis",
    icon: tennis,
    name: "Tennis",
  },
  {
    sport: "basketball",
    icon: basketball,
    name: "Baskentball",
  },

  {
    sport: "american-football",
    icon: americalFootball,
    name: "American Football",
  },
  {
    sport: "australian-rules",
    icon: australianRules,
    name: "Australian Rules",
  },
  {
    sport: "baseball",
    icon: baseball,
    name: "Baseball",
  },
  {
    sport: "snooker",
    icon: snooker,
    name: "Snooker",
  },

  {
    sport: "boxing",
    icon: boxing,
    name: "Boxing",
  },

  {
    sport: "darts",
    icon: darts,
    name: "Darts",
  },

  {
    sport: "gaelic-games",
    icon: gaelicGames,
    name: "Gaelic Games",
  },
  {
    sport: "handball",
    icon: handball,
    name: "Handball",
  },
  {
    sport: "ice-hockey",
    icon: iceHockey,
    name: "Ice Hockey",
  },
  {
    sport: "mma",
    icon: mma,
    name: "M M A",
  },
  {
    sport: "rugby-league",
    icon: rugbyLeague,
    name: "Rugby League",
  },

  {
    sport: "volleyball",
    icon: volleyball,
    name: "Volley Ball",
  },
  {
    sport: "rugby-union",
    icon: rugbyUnion,
    name: "Rugby Union",
  },
  {
    sport: "winter-sports",
    icon: winterSports,
    name: "Winter Sports",
  },
  {
    sport: "inPlayIcon",
    icon: inPlayIcon,
    name: "In Play",
  },
  {
    sport: "movedown",
    icon: movedown,
    name: "Move Down",
  },
];
export const fetchImage = (sport) => {
  {
    if (sport == "in-play") return inPlayIcon;
    const currSport = sports.filter((item) => item.sport == sport);
    if (currSport.length) return currSport[0].icon;
    else return cricket;
  }
  //   if (sport == "tennis") return tennis;
};

export const allSports = sports;
