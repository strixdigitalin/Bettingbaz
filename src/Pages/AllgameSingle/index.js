import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../Api";
import banner from "../../Assets/Banner.png";
import logo from "../../Assets/Header/logo.png";
import { Heighlights, SingleGameCard } from "../../Components/Heighlights";
import { InPlayCard } from "../../Components/InplayCard";
import PageCover from "../../Components/PageCover";
import InPlayGame from "./InplayGame";

function InPlayIndex() {
  const { gamename } = useParams();
  // useEffect(() => {
  //   API.get("cricket", (res) => console.log(res));
  // }, []);

  return (
    <PageCover gamename={gamename} component={<InPlayGame />} cover={false} />
  );
}

export default InPlayIndex;
