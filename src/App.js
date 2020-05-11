import ReactDOM from "react-dom";
import React from "react";

import { Logo, Slogan, ComingSoon, Footer, Illustrations } from "./components";

import "./styles.css";

export default function App() {
  return (
    <div className="homepage">
      <Illustrations />

      <div className="logo-wrapper">
        <Logo />
        <Slogan />
      </div>

      <ComingSoon />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
