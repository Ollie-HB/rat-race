import React, {useState} from "react";
import Square from "../Square/Square.js";
import Dice from "../Dice/Dice.js"
import { pipePositions, notesPositions } from "../Note/NoteAndPipe";
function Board() {
  const squares = new Array(100).fill('')
  // const [playerOne, setPlayerOne] = useState(1)
  const [player1, setPlayer1] = useState(1)

  const snake= [[38, 47, 56],
                [83,72, 71],
                [90,79,68],
               ] 
             
              
              

                
               
  // const [player2, setPlayer2] = useState(1)
  // squares[0] = 'player1'
  const rollDice = () => {
    setPlayer1(player1 + Math.floor(Math.random() * 6))
    // setPlayer2(player2 + Math.floor(Math.random() * 6))
  };
console.log(player1)
  
  return (
    <div id ="board-container">
      <button type="button" className='diceButton' onClick={rollDice}>Roll Dice</button>
      <div id="board">
        {squares.map((_, i) => {
          // You can pass as many props as you like to components!  //if player position === snake square change position to first value of snake (setPlayer position to lowest)
          return <Square number={100 - i} playerPosition={player1} snakePositions={snake}  />
        })}
      </div>
    </div>
      );
    }
    export default Board;









