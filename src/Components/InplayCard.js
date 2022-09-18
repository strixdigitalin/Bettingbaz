import React, { useEffect, useState } from "react";
import moveLect from "../Assets/Card/Path -1.png";
import moveRight from "../Assets/Card/Path 3.png";
import movedown from "../Assets/Card/Path2.png";
import inPlay from "../Assets/Card/In Play.png";
import BetMark from "../Assets/Card/Bet Mark.png";
import {
  CardHead,
  GameSlider,
  SingleHeighlighCardHead,
} from "../Parts/CardPart";
import Football from "../Assets/Card/Football icon.png";
import Cricket from "../Assets/Card/Cricket ball icon.png";
import API from "../Api";
import InPlaySingleGame from "./Controler/InPlayControler";
import { Link, useParams } from "react-router-dom";
import CustomLoader from "./CustomLoader";
import NoDataFound from "./NoDataFound";
import { useDispatch, useSelector } from "react-redux";
import {
  BasketBallLiveMatchFun,
  BasketBallMatchList,
  cricketAllLiveMatchFun,
  CricketLiveMatchList,
  FootballAllLiveMatchFun,
  LiveMAtchList,
  TennisAllLiveMatchFun,
  TennisMatchList,
} from "../Redux/Reducers/LiveMatch";

export function InPlayCard({
  heading = "heading",
  navigation = false,
  rightText = "d",
  subTitle = "subtitle",
  team = "team",
  show,
}) {
  const { PlaceBid } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(PlaceBid);

  // -------------------states
  const [InPlayGames, setInPlayGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState("cricket");
  const [showLoader, setShowLoader] = useState(false);
  const { gamename } = useParams();
  const [matchCount, setMatchCount] = useState(null);

  const [liveGame, setLiveGame] = useState([]);
  // -----------use effects
  useEffect(() => {
    setMatchCount("...");
    setShowLoader(true);
    if (gamename) setSelectedGame(gamename);

    API.getInPlay(selectedGame, (res) => {
      setInPlayGames(res);
      setMatchCount(res.length);
      setShowLoader(false);
    });
  }, [selectedGame, gamename]);

  // ---these are live game on home pages----live match ids are being stored in array

  useEffect(() => {
    API.getInPlay("football", (res) => {
      const ThreeGame = res.slice(0, 3);
      dispatch(FootballAllLiveMatchFun(ThreeGame));
    });

    console.log(liveGame, "<<<<checkLive");
  }, []);
  useEffect(() => {
    API.getInPlay("cricket", (res) => {
      const ThreeGame = res.slice(0, 3);
      dispatch(cricketAllLiveMatchFun(ThreeGame));
    });
  }, []);
  useEffect(() => {
    API.getInPlay("basketball", (res) => {
      const ThreeGame = res.slice(0, 3);
      dispatch(BasketBallLiveMatchFun(ThreeGame));
    });
  }, []);
  useEffect(() => {
    API.getInPlay("tennis", (res) => {
      const ThreeGame = res.slice(0, 3);
      dispatch(TennisAllLiveMatchFun(ThreeGame));
    });
  }, []);

  //   ------ ONCLCICKS-----
  //   const onChangeGame = (game) => set;
  //   ----

  return (
    <div>
      <CardHead
        heading="In Play"
        rightText=""
        navigation={false}
        icon={inPlay}
      />
      <GameSlider
        selectedGame={selectedGame}
        matchCount={matchCount}
        changeGame={(game) => setSelectedGame(game)}
      />
      {/* --------------------------------------------------------- sub heading card */}
      <div className="card-subhead-inplay">
        <button className="live-but">Live</button>
        <button className="upcoming-but">Upcoming</button>
      </div>
      {/* ------------------------------------------------------- today section */}
      {showLoader && <CustomLoader />}
      {!showLoader && !InPlayGames.length && (
        <NoDataFound selectedGame={selectedGame} />
      )}
      {show != "all" && !showLoader && InPlayGames.length > 0 && (
        <InPlaySingleGame allMatch={InPlayGames.slice(0, 3)} />
      )}
      {show == "all" && !showLoader && InPlayGames.length > 0 && (
        <InPlaySingleGame allMatch={InPlayGames} />
      )}
      <div className="seemore linktag">
        <Link
          to="/in-play"
          style={{ color: "black", textDecoration: "underLine" }}
        >
          See more in play
        </Link>
      </div>
    </div>
  );
}
