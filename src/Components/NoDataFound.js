import React from "react";

function NoDataFound({ selectedGame = "this sport" }) {
  return (
    <div
      className="w100 textcenter flex-row just-ctr align-ctr"
      style={{ background: "white", height: "90px" }}
    >
      {" "}
      No Data on {selectedGame}
    </div>
  );
}

export default NoDataFound;
