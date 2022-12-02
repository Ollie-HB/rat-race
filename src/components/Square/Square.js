import React, { Fragment } from "react";

function Square(props) {
  return (
    <Fragment>
      <div className="square" id={props.number}>
        {props.number}
        {props.playerPosition === props.number && (
          <div id="player_1">
            {" "}
          </div>
        )}
        {props.playerPosition2 === props.number && (
          <div id="player_2">
            {" "}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Square;
