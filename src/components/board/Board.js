import React, {useState} from "react";
import Square from "../Square/Square.js";
import gameOver from "../GameOver/gameOver.js"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Swal from 'sweetalert2'

function Board() {
  const squares = new Array(100).fill('')
  // const [playerOne, setPlayerOne] = useState(1)
  const [player1, setPlayer1] = useState(1)
  // const [player2, setPlayer2] = useState(1)
  // squares[0] = 'player1'
const rollDice = () => {
  setPlayer1(player1 + Math.floor(Math.random() * 6))
  // setPlayer2(player2 + Math.floor(Math.random() * 6))
}

if (player1 >= 100) {
  Swal.fire(
    'You Won!',
  )
}
  return (
    <div id ="board-container">
      <button type="button" className='diceButton' onClick={rollDice}>Roll Dice</button>
      <div id="board">
        {squares.map((_, i) => {
          // You can pass as many props as you like to components!
          return <Square number={100 - i} player={player1} />
        })}
          </div>
          </div>
      );
    }
    export default Board;









