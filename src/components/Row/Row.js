import React, { Fragment } from "react";
import Square from "../Square/Square.js";

// const createNumberArray = (n) => {
//   return new Array(n).fill('').map((_, i) => { return i })
// }

function Row(props) {
  console.log(props)
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (props.isReversed) {
    squares.reverse();
  }
  
  const calculateSquareNumber = (rowIndex, squareIndex) => {
    return rowIndex * -10 + squareIndex + 91;
  }

  return (
    <Fragment>
      {squares.map((i) => {
        
        return <Square
          number={calculateSquareNumber(props.number, i)}
          playerPosition={props.playerPosition}
          playerPosition2={props.playerPosition2}
          pipePositions={props.pipePositions}
          notePositions={props.notePositions} 
        />
      })}
    </Fragment>
  );
}

export default Row;
// first step, getting one player moving through the board
// make special squares - choose our special numbers, eg. if land on 25, set state to 5(snake)
// pass in state to a square as a prop - if the player's number (kept in state variable) matches the square number, show player icon
// get numeric value from dice roll (not just image) and add that to playerState to move them through the board



