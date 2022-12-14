import React from "react";

export const Instructions = () => {
  return (
    <div className="instructions-container">
      <h2> How to Play </h2>
      <ul>
        <li>Go to ‘PLAY’ to start a game.</li>
        <li>Click the dice in the corner to roll.</li>
        <li>The first player to reach the end of the board wins.</li>
        <li>
          If you land on the pied piper, follow the music notes to shortcut
          ahead.
        </li>
        <li>
          Be careful not to get stuck in a drainpipe. They’re a slippery slope
          further away from your goal!
        </li>
      </ul>
    </div>
  );
};

export default Instructions;
