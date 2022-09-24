import React from "react";

function index() {
  const signupButtons = [
    { label: "Whatsapp", href: "https://wa.me/message/6MQXGNAEKN5UM1" },
    { label: "Telegram", href: "https://t.me/bettingbaazhelp" },
    { label: "Email", href: "mailto:register@bettingbaaz.com" },
  ];
  return (
    <div className="signup-outer">
      <div className="signup-cover">
        Sign Up
        {signupButtons.map((item) => (
          <a className="signup-button" href={item.href} target="_blank">
            <buttons>{item.label}</buttons>
          </a>
        ))}
      </div>
    </div>
  );
}

export default index;
