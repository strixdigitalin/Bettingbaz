import React from "react";

function MainScoreHeaderData() {
  return (
    <div>
      <div className="mob-one-eaning">
        <div className="mob-one-eaning-single">
          <img src={indiasvg} />
          <div>India</div>
          <div style={{ color: "#F98417" }}>
            {cricBuzData?.matchScore?.team1Score?.inngs1?.runs}/
            {cricBuzData?.matchScore?.team1Score?.inngs1?.wickets}ddd
          </div>
          <div className="flex-row align-ctr just-ctr" style={{ height: "" }}>
            <div>
              <img src={batsvg} width="40px" />
            </div>
            <div
              style={{
                height: "40%",
                borderLeft: "1px solid #F98417",
                borderRight: "1px solid #F98417",
                padding: "0px 5px",
              }}
            >
              V. Kohli
            </div>
            <div style={{ color: "#F98417", padding: "10px" }}>51 *</div>
          </div>
        </div>
        <div style={{ border: "1px solid #F97D09", height: "40px" }}></div>
        <div className="mob-one-eaning-single">
          <img src={pakistansvg} />
          <div>Pakistan</div>
          <div style={{ color: "#F98417" }}>
            {/* 24/7 */}
            {cricBuzData?.matchScore?.team2Score?.inngs1?.runs}/
            {cricBuzData?.matchScore?.team2Score?.inngs1?.wickets}ddd
          </div>
          <div
            className="flex-row align-ctr just-ctr"
            style={{ height: "", gap: "5%" }}
          >
            <div>
              <img src={ballsvg} width="20px" />
            </div>
            <div
              style={{
                height: "40%",
                borderLeft: "1px solid #F98417",
                borderRight: "1px solid #F98417",
                padding: "0px 5px",
              }}
            >
              Irfan
            </div>
            <div style={{ color: "#F98417", padding: "10px" }}>6.5/1 </div>
          </div>
        </div>
      </div>
      <div className="flex-row just-bet scoreData-mobile ">
        <div
          className="flex-col align-ctr just-bet playerScore scoredata-team"
          style={{
            background: "white",
            borderTopLeftRadius: "25px",
            borderTopRightRadius: "25px",
            borderBottomLeftRadius: "25px",
          }}
        >
          <div
            className="flex-row w100  score-data-single-team"
            style={{
              padding: "5px 10px",
              fontSize: "12px",
              color: "white",
              background: "#6E6E6E",
              borderTopLeftRadius: "25px",
              borderTopRightRadius: "25px",
            }}
          >
            {showLeague(params.legue)}
            <span
              style={{ color: "black", marginLeft: "2px", fontSize: "12px" }}
            ></span>
          </div>
          <div
            className="flex-row  w100 score-data-single-team"
            style={{
              borderTop: "1px solid #707070",
              padding: "5px 10px",
              color: "black",
            }}
          >
            {matchData[0]?.values[0]?.val1}
          </div>
          <div
            className="flex-row  w100 score-data-single-team"
            style={{
              borderTop: "1px solid #707070",
              padding: "5px 10px",
              color: "black",
            }}
          >
            {matchData[0]?.values[1]?.val1}
          </div>
          {params.game == "football" && (
            <div
              className="flex-row  w100 score-data-single-team"
              style={{
                borderTop: "1px solid #707070",
                padding: "5px 10px",
                color: "black",
              }}
            >
              {matchData[0]?.values[2]?.val1}
            </div>
          )}
        </div>
        <div
          className="flex-col align-ctr just-bet playerScore-odd"
          style={{
            background: "#064778",
            borderTopRightRadius: "0px",
            borderTopLeftRadius: "25px",
          }}
        >
          <div
            className="flex-row w100 just-ctr"
            style={{ padding: "5px 0px", color: "wheat", height: "40px" }}
          >
            Back
          </div>
          <div
            className="flex-row w100 just-ctr"
            style={{
              border: "1px solid #707070",
              height: "40px",
              padding: "5px 0px",
              color: "wheat",
            }}
          >
            {parseFloat(matchData[0]?.values[0]?.odds).toFixed(2)}
          </div>

          <div
            className="flex-row w100 just-ctr"
            style={{
              border: "1px solid #707070",
              padding: "5px 0px",
              color: "wheat",
              height: "40px",
            }}
          >
            {parseFloat(matchData[0]?.values[1]?.odds).toFixed(2)}
          </div>
          {params.game == "football" && (
            <div
              className="flex-row w100 just-ctr"
              style={{
                border: "1px solid #707070",
                padding: "5px 0px",
                color: "wheat",
                height: "40px",
              }}
            >
              {parseFloat(matchData[0]?.values[2]?.odds).toFixed(2)}
            </div>
          )}
        </div>
        <div
          className="flex-col align-ctr just-bet playerScore most-right-score"
          style={{
            background: "#F97D09",
            height: "100%",
            borderTopRightRadius: "25px",
            borderTopLeftRadius: "0px",
            borderBottomRightRadius: "25px",
          }}
        >
          <div
            className="flex-row w100 text-center just-ctr"
            style={{ padding: "5px 0px", color: "wheat", height: "40px" }}
          >
            Lay
          </div>
          <div
            className="flex-row w100 text-center just-ctr"
            style={{
              border: "1px solid #707070",
              padding: "5px 0px",
              color: "wheat",
              height: "40px",
            }}
          >
            {parseFloat(
              parseFloat(matchData[0]?.values[0]?.odds) + 0.1
            ).toFixed(1)}
          </div>
          <div
            className="flex-row w100 just-ctr"
            style={{
              border: "1px solid #707070",
              padding: "5px 0px",
              color: "wheat",
              height: "40px",
              // borderTopLeftRadius: "25px",
              borderBottomRightRadius: "25px",
            }}
          >
            {parseFloat(
              parseFloat(matchData[0]?.values[1]?.odds) + 0.1
            ).toFixed(1)}
          </div>
          {params.game == "football" && (
            <div
              className="flex-row w100 just-ctr"
              style={{
                border: "1px solid #707070",
                padding: "5px 0px",
                color: "wheat",
                height: "40px",
                borderBottomRightRadius: "25px",
              }}
            >
              {parseFloat(
                parseFloat(matchData[0]?.values[2]?.odds) + 0.1
              ).toFixed(1)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainScoreHeaderData;
