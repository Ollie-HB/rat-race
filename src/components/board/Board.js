import React, {useState} from "react";
import Square from "../Square/Square.js";
import Swal from 'sweetalert2';
import QuitButton from "../QuitButton/quitButton.js";

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
  Swal.fire({
    title: 'You won!',
    text: 'Congratulations, You Won The Game',
    background: '#fdfded',
    color: '#fa7b00',
    showDenyButton: true,
    confirmButtonText: 'Start Again',
    confirmButtonColor: '#ffd60a',
    denyButtonText: 'Back',
    denyButtonColor: '#77CEF9',
  }).then((result) => {
    if (result.isConfirmed) {
    window.location.reload();
    } else if (result.isDenied) {
      window.location = "/"
    }
  });
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









