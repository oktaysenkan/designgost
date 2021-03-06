import React from "react";

import SocialMedia from "./SocialMedia";

const Footer = (props) => {
  return (
    <div className="footer">
      <SocialMedia
        image="./static/twitter.png"
        text="DesignGost"
        link="https://twitter.com/designgost"
      />
      <SocialMedia
        image="./static/instagram.png"
        text="designgostcom"
        link="https://www.instagram.com/designgostcom/"
      />
      <SocialMedia
        image="./static/youtube.png"
        text="DesignGost"
        link="https://www.youtube.com/channel/UCMLbZZElW190lLG6YlAE61Q"
      />
    </div>
  );
};

export default Footer;
