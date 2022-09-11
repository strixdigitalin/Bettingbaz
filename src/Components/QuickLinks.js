import React from "react";
import { Link } from "react-router-dom";
import { leftLinkData } from "./Controler/ImageBySport";

export default function QuickLinks({ heading = "title", data = leftLinkData }) {
  return (
    <div className="quick-link">
      <div className="quicklink-heading">{heading}</div>
      <div className="wrapContent-links">
        {data.map((item) => {
          return (
            <Link to={item.link}>
              <div className="quicklink-item"> {item.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
