import React from "react";

import Illustration from "./Illustration";

const Illustrations = (props) => {
  return (
    <div className="illustrations">
      <Illustration image="./static/left.png" animation="leftUpper" />
      <Illustration image="./static/middle.png" animation="upDown" />
      <Illustration image="./static/right.png" animation="rightDown" />
    </div>
  );
};

export default Illustrations;
