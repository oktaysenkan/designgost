import React from "react";

import { Logo, Slogan, ComingSoon, Footer, Illustrations } from "./components";

import "./styles.css";

const App = () => {
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
};

export default App;
