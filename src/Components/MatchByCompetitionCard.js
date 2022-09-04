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
import MatchByCompetition from "./Controler/MatchByCompetitionRows";
import { Link, useParams } from "react-router-dom";
import CustomLoader from "./CustomLoader";

export function MatchByCompetitionCard({
  heading = "heading",
  navigation = false,
  rightText = "d",
  subTitle = "subtitle",
  team = "team",
  show = "all",
}) {
  const params = useParams();
  console.log(params);

  // -------------------states
  const [InPlayGames, setInPlayGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState("cricket");
  const [showLoader, setShowLoader] = useState(false);

  // -----------use effects
  useEffect(() => {
    setShowLoader(true);
    API.matchByCompetition(
      `/sport/${params.game}/${params.league}/${params.id}`,
      (res) => {
        setInPlayGames(res);
        setShowLoader(false);
        console.log("Match By Competition", res.slice(0, 3));
      }
    );
  }, [selectedGame]);

  //   ------ ONCLCICKS-----
  //   const onChangeGame = (game) => set;
  //   ----

  return (
    <div>
      <CardHead
        heading={params.game}
        rightText="right text"
        navigation={false}
        icon={inPlay}
      />
      {/* <GameSlider
        selectedGame={selectedGame}
        changeGame={(game) => setSelectedGame(game)}
      /> */}

      {/* --------------------------------------------------------- sub heading card */}

      <div className="card-subhead-inplay">
        <button className="live-but">Live</button>
        <button className="upcoming-but">Upcoming</button>
      </div>

      {/* ------------------------------------------------------- today section */}
      {showLoader && <CustomLoader />}
      {!showLoader && !InPlayGames.length && (
        <div
          className="w100 textcenter flex-row just-ctr align-ctr"
          style={{ background: "white", height: "90px" }}
        >
          {" "}
          No Data on {selectedGame}
        </div>
      )}
      {/* <MatchByCompetition /> */}
      {show != "all" &&
        !showLoader &&
        InPlayGames.slice(0, +show)?.map((item, key) => {
          return <MatchByCompetition />;
        })}
      {show == "all" &&
        !showLoader &&
        InPlayGames?.map((item, key) => {
          return (
            <MatchByCompetition
              item={{
                name: item.name,
                odds: item.odds,
                start_datetime: item.start_datetime,
              }}
            />
          );
        })}

      <div className="seemore linktag">
        {/* <Link
          to="/in-play"
          style={{ color: "black", textDecoration: "underLine" }}
        >
          See more in play
        </Link> */}
      </div>
    </div>
  );
}
