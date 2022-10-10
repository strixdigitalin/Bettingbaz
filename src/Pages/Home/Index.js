import React from "react";
import Footer from "../../Components/Footer";
import PageCover from "../../Components/PageCover";
import QuickLinks from "../../Components/QuickLinks";
import HomeMiddle from "./HomeMiddle";

export default function Home() {
  return (
    <>
      <PageCover component={<HomeMiddle />} />;
      <Footer />
    </>
  );
}
