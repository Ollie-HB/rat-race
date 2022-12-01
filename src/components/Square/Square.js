import React, { Fragment } from "react";
// import {Player} from './Player/Player'
function Square(props) {

  return (
    <Fragment>
      <div className="square" id={props.number}>
        {props.number}
        {
          props.playerPosition === props.number && (
            <div>
              {" "}
              <div id="player_1" className="player-icon"></div>
            </div>
          ) //returns the last expression which is html
        }
        {
          props.playerPosition2 === props.number && (
            <div>
              {" "}
              <div id="player_2" className="player-icon"></div>
            </div>
          ) //returns the last expression which is html
        }
      </div>
    </Fragment>
  );
}

export default Square;
