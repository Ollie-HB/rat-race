import React, { useState } from "react";
import "./quitButton.css";

export const QuitButton = ({ quitGame }) => {
  return (
    <div>
      <button className="button" onClick={quitGame}>
        <span>Quit</span>
      </button>
    </div>
  );
};

export default QuitButton;


