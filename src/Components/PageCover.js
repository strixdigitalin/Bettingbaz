import React from "react";

import QuickLinks from "../Components/QuickLinks";

function PageCover({ component }) {
  return (
    <div style={{ backgroundColor: "#C7C7C7" }}>
      <div className="home-body">
        <QuickLinks heading="Quick Links" item={[1, 2, 3]} />
        {component}
        <QuickLinks heading="Quick Links" item={[1, 2, 3]} />
      </div>
    </div>
  );
}

export default PageCover;
