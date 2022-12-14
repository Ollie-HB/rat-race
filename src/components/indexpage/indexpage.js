import React from "react";
import "./indexpage.css";
import { Instructions } from "../Instructions/Instructions.js";
import { StartButton } from "../StartButton/startButton";
import ReactAudioPlayer from "react-audio-player";

const IndexPage = ({ navigate }) => {
  const startGame = () => {
    navigate("/game");
  };

  return (
    <div className="main-container">
      <div className="title-container">
        <div className="title-content">
          <div class="bouncing-text">
            <div class="r">R</div>
            <div class="a">A</div>
            <div class="t">T</div>
            <div class="r2">R</div>
            <div class="a2">A</div>
            <div class="c">C</div>
            <div class="e">E</div>
            <div class="shadow"></div>
            <div class="shadow-two"></div>
          </div>
          <img className="pied" src="Pied Piper Large.png" alt=""></img>
          <img className="note-index" src="PngItem_101787.png" alt=""></img>
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
      <ReactAudioPlayer src="Rat Race D&B.mp3" autoPlay="true" loop="true" />
    </div>
  );
};

export default IndexPage;
