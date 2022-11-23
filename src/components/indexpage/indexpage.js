import React, { useState } from "react";
import "./indexpage.css";
import { Instructions } from "../instructions/Instructions.js";
import { StartButton } from "../start-button/startButton";

// const props = {navigate: 'someValue'}
// Destructuring
// const {navigate} = props
// const navigate = props.navigate

const IndexPage = ({ navigate }) => {
  const startGame = () => {
    navigate("/game");
  };

  return (
    <>
      <div className="main-container">
        <div className="title-container">
          <div className="title-content">
            <h1>Rat Race</h1>
          </div>
        </div>
        <div className="instructions">
          <div className="content">
            <Instructions />
          </div>
        </div>
        <div className="button-container">
          <StartButton startGame={startGame} />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
