import React from "react";
import { SingleGameCard } from "../../Components/Heighlights";

function SingleGameListCover({ show }) {
  const games = [
    { sport: "cricket", icon: "", heading: "Cricket" },
    { sport: "football", icon: "", heading: "Football" },
  ];
  return (
    <>
      {games.map((item, key) => {
        return (
          <SingleGameCard
            heading={item.heading}
            sport={item.sport}
            subTitle={"title"}
            team={"team"}
            show={show}
          />
        );
      })}
    </>
  );
}

export default SingleGameListCover;
