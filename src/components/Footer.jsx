import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";

import "./css/Footer.css";

const GITHUB = {
  name: "GitHub",
  link: "https://github.com/cameronmathis/RockPaperScissors",
  icon: <GitHubIcon fontSize="large" />,
};

const FOOTER_ITEMS = [GITHUB];

const Footer = () => {
  return (
    <div className="footer">
      {FOOTER_ITEMS.map((item) => (
        <a className="item" target="blank" href={item.link} key="{item}">
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Footer;
