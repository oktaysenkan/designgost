import React from "react";

const SocialMedia = ({ image, text, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="social-media">
        <img className="logo" alt="logo" src={image} />
        {text}
      </div>
    </a>
  );
};

export default SocialMedia;
