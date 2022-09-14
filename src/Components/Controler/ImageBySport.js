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
  { name: "Live Cricekt", link: "/all-competition-by-sports/cricket" },
  { name: "Live Football", link: "/all-competition-by-sports/football" },
  { name: "Live Tennis", link: "/all-competition-by-sports/tennis" },
  { name: "Live Snooker", link: "/all-competition-by-sports/snooker" },
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
  },
  {
    sport: "football",
    icon: football,
  },
  {
    sport: "snooker",
    icon: snooker,
  },
  {
    sport: "tennis",
    icon: tennis,
  },
  {
    sport: "american-football",
    icon: americalFootball,
  },
  {
    sport: "australian-rules",
    icon: australianRules,
  },
  {
    sport: "baseball",
    icon: baseball,
  },
  {
    sport: "australian-rules",
    icon: australianRules,
  },

  {
    sport: "basketball",
    icon: basketball,
  },
  {
    sport: "boxing",
    icon: boxing,
  },

  {
    sport: "darts",
    icon: darts,
  },

  {
    sport: "gaelic-games",
    icon: gaelicGames,
  },
  {
    sport: "handball",
    icon: handball,
  },
  {
    sport: "ice-hockey",
    icon: iceHockey,
  },
  {
    sport: "mma",
    icon: mma,
  },
  {
    sport: "rugby-league",
    icon: rugbyLeague,
  },

  {
    sport: "volleyball",
    icon: volleyball,
  },
  {
    sport: "rugby-union",
    icon: rugbyUnion,
  },
  {
    sport: "winter-sports",
    icon: winterSports,
  },
  {
    sport: "inPlayIcon",
    icon: inPlayIcon,
  },
  {
    sport: "movedown",
    icon: movedown,
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
