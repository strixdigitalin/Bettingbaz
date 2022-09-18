import React from "react";
import { Link, useParams } from "react-router-dom";
import { leftLinkData } from "./Controler/ImageBySport";

export default function QuickLinks({
  heading = "title",
  left = false,
  data = leftLinkData,
}) {
  return (
    <div className="quick-link">
      <div className="quicklink-heading">{heading}</div>
      <div className="wrapContent-links">
        {data.map((item) => {
          return (
            <Link to={item.link}>
              <div className="quicklink-item">
                <div>{item.name}</div>
                {left && (
                  <div style={{ color: "orange", fontweight: "bold" }}>
                    Live
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
