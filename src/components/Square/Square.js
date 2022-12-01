import React, { Fragment } from "react";

function Square(props) {
  return (
    <Fragment>
      <div className="square" id={props.number}>
        {props.number}
        {props.playerPosition === props.number && (
          <div>
            {" "}
            <div id="player_1" className="player-icon"></div>
          </div>
        )}
        {props.playerPosition2 === props.number && (
          <div>
            {" "}
            <div id="player_2" className="player-icon"></div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Square;
