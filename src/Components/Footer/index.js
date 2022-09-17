import React from "react";
import { Link } from "react-router-dom";
import DisplayCardds from "./DisplayCardds";
import ImageAndText from "./ImageAndText";

function Footer() {
  const socialCards1 = [
    {
      src: require("../../Assets/Header/pngwing.com (5).png"),
      text: "+91 7827506565",
    },
    {
      src: require("../../Assets/Header/pngwing.com (6).png"),
      text: "@bettingbaazhelp",
    },
    {
      src: require("../../Assets/Header/pngwing.com (7).png"),
      text: "support@bettingbaaz.com",
    },
  ];
  const footerTexts = [
    { label: "Privacy Policy", link: "/privacy-policy" },
    { label: "Terms and Conditions", link: "/terms-and-conditions" },
    { label: "Rules and Regulation", link: "/rules-and-regulations" },
    { label: "Responsible Gaming", link: "/responsible-gaming" },
    { label: "About Us", link: "/responsible-gaming" },
    { label: "Self-exclusion Policy", link: "/self-exclusion-policy" },
    { label: "Underage Policy", link: "/underage-policy" },
  ];

  return (
    <div className="footer-cover text-center">
      <div>
        <ImageAndText />
      </div>
      <div className="footer-support">support</div>
      {/* <div>mid</div> */}
      <div>
        <DisplayCardds data={socialCards1} />
      </div>
      <div className="footer-support">Contact Us</div>
      <div>
        <DisplayCardds data={socialCards1} />
      </div>
      <div className="links-cover">
        {footerTexts.map((item) => (
          <div className="footer-links">
            <Link className="links" to={`/terms${item.link}`}>
              {" "}
              {item.label}
            </Link>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
