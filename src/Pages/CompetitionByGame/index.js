import React from "react";
import { useParams } from "react-router-dom";
import { fetchImage } from "../../Components/Controler/ImageBySport";
import { SingleGameCard } from "../../Components/Heighlights";
import PageCover from "../../Components/PageCover";
function CompetitionByGame() {
  const params = useParams();
  const { sport } = params;

  return (
    <PageCover
      component={
        <div className="home-middle">
          <div className="home-display-card">
            <SingleGameCard
              icon={fetchImage(sport)}
              heading={sport.toLocaleUpperCase()}
              sport={sport}
              subTitle={"title"}
              team={"team"}
              show="all"
            />
          </div>
        </div>
      }
    />
  );
}

export default CompetitionByGame;
