import React from "react";

function ImageAndText({ text, image }) {
  const imageTextData = [
    {
      label: "Powered By",
      src: require("../../Assets/Header/betfair-logo-1.png"),
      width: "200px",
    },
    {
      label: "Copyrighted By",
      src: require("../../Assets/Header/BettingBaaz Yxd Logo.png"),
      width: "100px",
    },
  ];
  return (
    <div className="upper-cover">
      {imageTextData.map((item) => {
        return (
          <div className="">
            {item.label}
            <div className="flex-row align-ctr h100">
              <img src={item.src} width={item.width} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ImageAndText;
