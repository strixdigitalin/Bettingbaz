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
  { name: "Live Basketball", link: "/in-play/basketball" },
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
    link: "/in-play/cricket",
    name: "Cricket",
  },
  {
    sport: "football",
    icon: football,
    name: "Football",
    link: "/in-play/football",
  },
  {
    sport: "tennis",
    icon: tennis,
    name: "Tennis",
    link: "/in-play/tennis",
  },
  {
    sport: "basketball",
    icon: basketball,
    name: "Baskentball",
    link: "/in-play/basketball",
  },

  {
    sport: "american-football",
    icon: americalFootball,
    name: "American Football",
    link: "/in-play/american-football",
  },
  {
    sport: "australian-rules",
    icon: australianRules,
    name: "Australian Rules",
    link: "/in-play/australian-rules",
  },
  {
    sport: "baseball",
    icon: baseball,
    name: "Baseball",
    link: "/in-play/baseball",
  },
  {
    sport: "snooker",
    icon: snooker,
    name: "Snooker",
    link: "/in-play/snooker",
  },

  {
    sport: "boxing",
    icon: boxing,
    name: "Boxing",
    link: "/in-play/boxing",
  },

  {
    sport: "darts",
    icon: darts,
    name: "Darts",
    link: "/in-play/darts",
  },

  {
    sport: "gaelic-games",
    icon: gaelicGames,
    link: "/in-play/gaelic-games",
    name: "Gaelic Games",
  },
  {
    sport: "handball",
    icon: handball,
    link: "/in-play/handball",
    name: "Handball",
  },
  {
    sport: "ice-hockey",
    icon: iceHockey,
    link: "/in-play/ice-hockey",
    name: "Ice Hockey",
  },
  {
    sport: "mma",
    link: "/in-play/mma",
    icon: mma,
    name: "M M A",
  },
  {
    sport: "rugby-league",
    link: "/in-play/rugby-league",
    icon: rugbyLeague,
    name: "Rugby League",
  },

  {
    sport: "volleyball",
    link: "/in-play/volleyball",
    icon: volleyball,
    name: "Volley Ball",
  },
  {
    link: "/in-play/rugby-union",
    sport: "rugby-union",
    link: "/in-play/sugby-union",

    icon: rugbyUnion,
    name: "Rugby Union",
  },
  {
    sport: "winter-sports",
    icon: winterSports,
    link: "/in-play/winter-sports",
    name: "Winter Sports",
  },
  {
    sport: "inPlayIcon",
    // link: "/in-play",
    icon: inPlayIcon,
    name: "In Play",
  },
  {
    // link: "/in-play/move-down",
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
