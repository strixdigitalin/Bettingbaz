import React from "react";
import banner from "../../Assets/Banner.png";
import logo from "../../Assets/Header/logo.png";
import {
  Heighlights,
  InPlayCard,
  SingleGameCard,
} from "../../Components/Heighlights";
import {
  CurrTournament,
  SingleHeightHead,
  TopLeague,
} from "../../Components/SingleCards";
import { SingleHeighlighCardHead } from "../../Parts/CardPart";

function SingleMiddle({ name = "Cricket" }) {
  return (
    <div className="home-middle">
      <div>
        <div className="single-top-head">{name}</div>
        <img src={banner} width="100%" />
      </div>
      <div className="home-display-card" style={{marginTop:"20px"}}>
        <SingleHeightHead />
        <TopLeague />
        <CurrTournament />
      </div>
    </div>
  );
}

export default SingleMiddle;
