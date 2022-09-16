import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Aboutus from "./Aboutus";
import PrivacyPolicy from "./PrivacyPolicy";
import ResponsibleGaming, { GamingPolicy } from "./ResponsibleGaming";
import RulesAndRegulations from "./RulesAndRegulations";
import SelfExclusionPolicy from "./SelfExclusionPolicy";
import TermsAndConditions from "./TermsAndConditions";
import UnderAgePolicy from "./UnderAgePolicy";
const PagesContent = [
  {
    content: <ResponsibleGaming />,
    url: "responsible-gaming",
    heading: "Responsible Gaming",
  },
  {
    content: <RulesAndRegulations />,
    url: "rules-and-regulations",
    heading: "Rules And Regulation",
  },
  {
    content: <TermsAndConditions />,
    url: "terms-and-conditions",
    heading: "Terms And Conditions",
  },
  {
    content: <PrivacyPolicy />,
    url: "privacy-policy",
    heading: "Privacy Policy",
  },
  {
    content: <UnderAgePolicy />,
    url: "underage-policy",
    heading: "Underage Policy",
  },
  {
    content: <SelfExclusionPolicy />,
    url: "self-exclusion-policy",
    heading: "Self Exclusion Policy",
  },
  {
    content: <Aboutus />,
    url: "about-us",
    heading: "About Us",
  },
];
function Terms() {
  const { terms } = useParams();
  const [showContent, setShowContent] = useState({});
  useEffect(() => {
    // if(terms)

    const data = PagesContent.filter((item) => item.url == terms);
    // console.log(data, terms);
    setShowContent(data[0]);
  }, [terms]);

  console.log(PagesContent);
  return (
    <div style={{ background: "rgb(199, 199, 199)" }}>
      <div className="terms-cover">
        <h1 className="terms-head">{showContent.heading}</h1>
        <div className="terms-content">{showContent.content}</div>
        {/* <div
          className="terms-content"
          dangerouslySetInnerHTML={{ __html: showContent.content }}
        ></div> */}
      </div>
    </div>
  );
}

export default Terms;
