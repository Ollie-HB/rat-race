import React, {useState} from "react";
import Square from "../Square/Square.js";
import Dice from "../Dice/Dice.js"

function Board() {
  const squares = new Array(100).fill('')
  // const [playerOne, setPlayerOne] = useState(1)
  const [player1, setPlayer1] = useState(1)

  const pipe= [[56, 47, 38],
                [83,72, 61],
                [90,79,68],
               ] 

  const note = [[12, 23, 34],
                 [75,86, 97],
                 [8,19,30],
                 ] 
              
// if (player1 === 56) {
//     setPlayer1(pipe[0][2])
//   }
//   else{
//     return;
//   }

  const rollDice = () => {
    setPlayer1(player1 + Math.floor(Math.random() * 6))
    if (player1 === pipe[0][0]) {
      setPlayer1(pipe[0][2])
    } else if (player1 === pipe[1][0]) {
      setPlayer1(pipe[1][2])
    } else if (player1 === pipe[2][0]) {
      setPlayer1(pipe[2][2])
    } else if (player1 === note[0][0]) {
      setPlayer1(note[0][2])
    } else if (player1 === note[1][0]) {
      setPlayer1(note[1][2])
    } else if (player1 === note[2][0]) {
      setPlayer1(note[2][2])
    }
  };
console.log(player1)
  




  return (
    <div id ="board-container">
      <button type="button" className='diceButton' onClick={rollDice}>Roll Dice</button>
      <div id="board">
        {squares.map((_, i) => {
          // You can pass as many props as you like to components!  //if player position === snake square change position to first value of snake (setPlayer position to lowest)
          return <Square number={100 - i} playerPosition={player1} pipePositions={pipe} notePositions={note}  />
        })}
      </div>
    </div>
      );
    }
    export default Board;









