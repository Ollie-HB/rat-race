import React, { Fragment } from "react";
// import {Player} from './Player/Player'
function Square(props) {

  const pipeVisible = () => {
    return props.notePositions.map((notePosition) => {
      return notePosition.map((ele) => {
        if (props.number === ele) {
          return (

            <img id="musical_note"
              alt=""
              src="/musical_note.png"
              style={{ height: "80px", width: "40px", zIndex: "2", position: "fixed" }}>
            </img>
          );
        }
      });
    });
  };

  // left: "-10px", top: "-10px">

  const ladderVisible = () => {
    return props.pipePositions.map((pipePosition) => {
      return pipePosition.map((ele) => {
        if (props.number === ele) {
          return (

            <img id="pipe"
              alt=""
              src="/pipe.png"
              style={{ height: "80px", width: "40px", zIndex: "2", position: "fixed" }}>
            </img>
          );
        }
      });
    });
  };

  //left: "-10px", top: "-10px">

  return (
    <Fragment>
      <div className="square" id={props.number}>
        {props.number}
        {
          props.playerPosition === props.number && (
            <div>
              {" "}
              <div id="player_1"></div>
            </div>
          ) //returns the last expression which is html
        }
        {
          props.playerPosition2 === props.number && (
            <div>
              {" "}
              <div id="player_2"></div>
            </div>
          ) //returns the last expression which is html
        }
        {pipeVisible()}
        {ladderVisible()}
      </div>
    </Fragment>
  );
}

export default Square;
