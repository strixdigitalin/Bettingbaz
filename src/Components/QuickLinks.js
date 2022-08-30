import React from "react";

export default function QuickLinks({ heading = "title", items = [] }) {
  return (
    <div className="quick-link">
      <div className="quicklink-heading">{heading}</div>
      <div className="wrapContent-links">
        {[1, 2, 3, 4].map((item) => {
          return <div className="quicklink-item"> Daily Cricket MAtches</div>;
        })}
      </div>
    </div>
  );
}
