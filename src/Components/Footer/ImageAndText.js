import React from "react";

function ImageAndText({ text, image }) {
  const imageTextData = [
    {
      label: "Powered By",
      src: require("../../Assets/Header/betfair-logo-1.png"),
    },
    {
      label: "Copyrighted By",
      src: require("../../Assets/Header/BettingBaaz Yxd Logo.png"),
    },
  ];
  return (
    <div className="upper-cover">
      {imageTextData.map((item) => {
        return (
          <div className="">
            {item.label}
            <div className="flex-row align-ctr h100">
              <img src={item.src} width="100px" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ImageAndText;
