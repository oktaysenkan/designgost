import React from "react";
import { useSpring, animated } from "react-spring";

import "../styles.css";

const ANIMATION_SPEED = 5;

const upDown = (i) => (r) =>
  `translate3d(0, ${
    ANIMATION_SPEED * Math.sin(r + (i * 2 * Math.PI) / 1.6)
  }px, 0)`;

const leftUpper = (i) => (r) =>
  `translate3d(${ANIMATION_SPEED * Math.sin(r - (i * 2 * Math.PI) / 1.6)}px, ${
    ANIMATION_SPEED * Math.sin(r - (i * 2 * Math.PI) / 1.6)
  }px, 0)`;

const rightDown = (i) => (r) =>
  `translate3d(${ANIMATION_SPEED * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, ${
    ANIMATION_SPEED * Math.sin(r - (i * 2 * Math.PI) / 1.6)
  }px, 0)`;

const animations = {
  upDown,
  leftUpper,
  rightDown,
};

const Illustration = ({ image, animation = "leftUpper" }) => {
  const animationStyle = animations[animation];

  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  });
  return (
    <animated.img
      style={{ transform: radians.interpolate(animationStyle(1)) }}
      className="illustration"
      src={image}
    />
  );
};

export default Illustration;
