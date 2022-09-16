import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { betBysingleGameUsingId } from "../../Api";
import { fetchImage } from "../../Components/Controler/ImageBySport";
import { SingleGameCard } from "../../Components/Heighlights";
import { ShowLiveMatchCard } from "../../Components/ShowLiveMatchCard";
import { CardHead } from "../../Parts/CardPart";

function SingleGameListCover({ show }) {
  const { LiveMatch } = useSelector((state) => state);
  const [LiveMatchData, setLiveMatchData] = useState([]); // for football
  const [cricketLiveMatchData, setcricketLiveMatchData] = useState([]); // for football

  useEffect(() => {}, []);
  console.log(LiveMatch, "<<<<livematch");
  useEffect(() => {
    let liveData = [];
    LiveMatch.liveMatch.map((item) => {
      betBysingleGameUsingId(item, (res) => {
        console.log("Live match response data", res);
        // liveData = [...liveData, res[0]];
        // console.log(liveData, "<<<live Data");
        setLiveMatchData([...LiveMatchData, res[0]]);
      });
    });

    console.log(LiveMatchData, "<<<<<< Live match odd data");

    // betBysingleGameUsingId()
  }, [LiveMatch]);
  useEffect(() => {
    let liveData = [];
    LiveMatch.cricketLiveMatch.map((item) => {
      betBysingleGameUsingId(item, (res) => {
        console.log("Live match response data", res);
        // liveData = [...liveData, res[0]];
        // console.log(liveData, "<<<live Data");
        setcricketLiveMatchData([...LiveMatchData, res[0]]);
      });
    });

    console.log(LiveMatchData, "<<<<<< Live match odd data");

    // betBysingleGameUsingId()
  }, [LiveMatch]);
  console.log("LiveMatchData", LiveMatchData);
  const games = [
    { sport: "cricket", icon: "", heading: "Cricket" },
    { sport: "football", icon: "", heading: "Football" },
    { sport: "australian-rules", icon: "", heading: "Australian Rules" },
    { sport: "basketball", icon: "", heading: "Basket ball" },
  ];

  // const placeBid = (item) => {
  //   console.log(">>>", item);
  //   const user = localStorage.getItem("betting_user");
  //   if (user == null || user == "null") {
  //     alert("Log in to place bid");
  //   } else {
  //     console.log(user, "<<<user");
  //     dispatch(
  //       showModal({
  //         show: true,
  //         matchId: `/sport/${params.game}/${params.legue}/${params.teams}/${params.id}`,
  //         team: name,
  //         odds: item.odds,
  //       })
  //     );
  //   }
  // };
  return (
    <>
      {/* {LiveMatchData?.map((item) => {
        console.log("Livematch", item);
        // return item.map((inItem) => {
        // console.log(inItem, "<<<< Livematch data");
        return (
          <div style={{ marginTop: "20px" }}>
            <CardHead
              heading={"Live"}
              rightText=""
              navigation={false}
              icon={fetchImage("cricket")}
            />
            <div className="card-today" style={{ backgroundColor: "#EAEAEA" }}>
              <div>
                <img src={fetchImage("movedown")} width="15px" />
                <span style={{ marginLeft: "15px" }}>{item?.name}</span>{" "}
                <span className="cardTeam"> englend</span>
              </div>
            </div>

            {inItem?.values.map((inItem2) => {
                return (
                  <div className="flex-row just-bet w100 cricket-data-table">
                    <div className="cricket-heighlight-row-left">
                      {inItem2.val1}
                    </div>{" "}
                    <div
                      className="heighlight-row-right pointer"
                      // onClick={() => placeBid({ ...item, odds: inItem.odds })}
                    >
                      {inItem2.odds}{" "}
                    </div>{" "}
                  </div>
                );
              })}
          </div>
        );
      })} */}
      {/* for footballonly */}
      {LiveMatchData?.map((item, key) => {
        console.log("map this value,", item);
        return (
          <ShowLiveMatchCard
            heading={item.name}
            icon={fetchImage("football")}
            sport={item.values}
            subTitle={"title"}
            team={"team"}
            show={true}
            matchId={LiveMatch.liveMatch[key]}
          />
        );
      })}
      {cricketLiveMatchData?.map((item, key) => {
        console.log("map this value,", item);
        return (
          <ShowLiveMatchCard
            heading={item.name}
            icon={fetchImage("cricket")}
            sport={item.values}
            subTitle={"title"}
            team={"team"}
            show={true}
            matchId={LiveMatch.cricketLiveMatch[key]}
          />
        );
      })}
      {games.map((item, key) => {
        return (
          <SingleGameCard
            heading={item.heading}
            icon={fetchImage(item.sport)}
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
