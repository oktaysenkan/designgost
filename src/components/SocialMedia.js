import React from "react";
import "../styles.css";

const SocialMedia = ({ image, text, link }) => {
  return (
    <a href={link} target="_blank">
      <div className="social-media">
        <img className="logo" src={image} />
        {text}
      </div>
    </a>
  );
};

export default SocialMedia;
