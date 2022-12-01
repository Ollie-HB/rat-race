import React, { Fragment } from "react";
import Square from "../Square/Square.js";

function Row(props) {
  console.log(props);
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (props.isReversed) {
    squares.reverse();
  }

  const calculateSquareNumber = (rowIndex, squareIndex) => {
    return rowIndex * -10 + squareIndex + 91;
  };

  return (
    <Fragment>
      {squares.map((i) => {
        return (
          <Square
            number={calculateSquareNumber(props.number, i)}
            playerPosition={props.playerPosition}
            playerPosition2={props.playerPosition2}
            pipePositions={props.pipePositions}
            notePositions={props.notePositions}
          />
        );
      })}
    </Fragment>
  );
}

export default Row;
