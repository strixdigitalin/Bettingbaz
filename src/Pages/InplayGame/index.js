import React, { useEffect } from "react";
import API from "../../Api";
import banner from "../../Assets/Banner.png";
import logo from "../../Assets/Header/logo.png";
import { Heighlights, SingleGameCard } from "../../Components/Heighlights";
import { InPlayCard } from "../../Components/InplayCard";
import PageCover from "../../Components/PageCover";
import InPlayGame from "./InplayGame";

function InPlayIndex() {
  // useEffect(() => {
  //   API.get("cricket", (res) => console.log(res));
  // }, []);

  return <PageCover component={<InPlayGame />} cover={false} />;
}

export default InPlayIndex;
