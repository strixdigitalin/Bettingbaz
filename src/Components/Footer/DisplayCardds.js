import React from "react";

function DisplayCardds({ data }) {
  return (
    <div className="singleContact-cover">
      {data.map((item) => {
        return (
          <div className="singlContact">
            <img src={item.src} width="30px" style={{marginRight:"20px"}}/> {item.text}{" "}
          </div>
        );
      })}
    </div>
  );
}

export default DisplayCardds;
