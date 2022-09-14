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
import { Link } from "react-router-dom";
import CustomLoader from "./CustomLoader";
import NoDataFound from "./NoDataFound";
import { useDispatch, useSelector } from "react-redux";
import {
  CricketLiveMatchList,
  LiveMAtchList,
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
  const [liveGame, setLiveGame] = useState([]);
  // -----------use effects
  useEffect(() => {
    setShowLoader(true);

    API.getInPlay(selectedGame, (res) => {
      setInPlayGames(res);
      setShowLoader(false);
      // const ThreeGame = res.slice(0, 3);
      // const setThisToLiveGame = ThreeGame.map((item) => item.id);
      // console.log(setThisToLiveGame, "<<<setthistolivegame");
      // setLiveGame(ThreeGame.map((item) => item.id));
      // dispatch(LiveMAtchList(ThreeGame.map((item) => item.id)));
    });
  }, [selectedGame]);

  useEffect(() => {
    console.log("cricket data live");
    let allLive = [];
    API.getInPlay("football", (res) => {
      // setInPlayGames(res);
      // setShowLoader(false);
      const ThreeGame = res.slice(0, 3);
      const setThisToLiveGame = ThreeGame.map((item) => item.id);
      console.log(setThisToLiveGame, "<<<setthistolivegame");
      setLiveGame(setThisToLiveGame);
      dispatch(LiveMAtchList(setThisToLiveGame));
      allLive = setThisToLiveGame;
      // allLive = [...allLive, [...setThisToLiveGame]];
    });

    console.log(liveGame, "<<<<checkLive");
  }, []);
  useEffect(() => {
    console.log("cricket data live");
    let allLive = [];
    API.getInPlay("football", (res) => {
      // setInPlayGames(res);
      // setShowLoader(false);
      const ThreeGame = res.slice(0, 3);
      const setThisToLiveGame = ThreeGame.map((item) => item.id);
      console.log(setThisToLiveGame, "<<<setthistolivegame");
      setLiveGame(setThisToLiveGame);
      dispatch(CricketLiveMatchList(setThisToLiveGame));
      allLive = setThisToLiveGame;
      // allLive = [...allLive, [...setThisToLiveGame]];
    });

    console.log(liveGame, "<<<<checkLive");
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
      {show != "all" &&
        !showLoader &&
        InPlayGames.slice(0, +show)?.map((item, key) => {
          return <InPlaySingleGame item={item} />;
        })}
      {show == "all" &&
        !showLoader &&
        InPlayGames?.map((item, key) => {
          return <InPlaySingleGame item={item} />;
        })}

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
