import React from "react";

function ActivePlayer(props) {
  const player1Turn = props.player1Turn;
  if (player1Turn) {
    return (
      <div className="act-pnl-cont">
        <div className="circle-blue">
          <img className="remy-p1" src="Remy.webp" alt=""></img>
        </div>
        <p>Player 1's Turn</p>
        <div>
          <img className="stuart-p1" src="Stuart_Little_Hero.webp" alt=""></img>
        </div>
      </div>
    );
  } else {
    return (
      <div className="act-pnl-cont">
        <div>
          <img className="remy-p2" src="Remy.webp" alt=""></img>
        </div>
        <div className="circle-red">
          <img src="Stuart_Little_Hero.webp" alt=""></img>
          <p className="p2">Player 2's Turn</p>
        </div>
      </div>
    );
  }
}

export default ActivePlayer;
