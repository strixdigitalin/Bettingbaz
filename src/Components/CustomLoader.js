import React from "react";

function CustomLoader() {
  return (
    <div
      className="flex-row just-ctr w100 align-ctr"
      style={{ height: "80px", background: "white" }}
    >
      {" "}
      <div class="custom-loader"></div>
    </div>
  );
}

export default CustomLoader;
