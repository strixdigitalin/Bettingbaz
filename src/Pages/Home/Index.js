import React from "react";
import PageCover from "../../Components/PageCover";
import QuickLinks from "../../Components/QuickLinks";
import HomeMiddle from "./HomeMiddle";

export default function Home() {
  return <PageCover component={<HomeMiddle />} />;
}
