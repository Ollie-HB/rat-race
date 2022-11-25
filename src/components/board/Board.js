import React, {useState} from "react";
import Square from "../Square/Square.js";

import Dice1 from '../Dice/images/Dice1.png'
import Dice2 from '../Dice/images/Dice2.png'
import Dice3 from '../Dice/images/Dice3.png'
import Dice4 from '../Dice/images/Dice4.png'
import Dice5 from '../Dice/images/Dice5.png'
import Dice6 from '../Dice/images/Dice6.png'

function Board() {

  var diceImages = [
    Dice1, 
    Dice2,
    Dice3,
    Dice4,
    Dice5,
    Dice6,
]

  const squares = new Array(100).fill('')
  // const [playerOne, setPlayerOne] = useState(1)
  const [player1, setPlayer1] = useState(1)
  const [diceImage, setDiceImage] = useState(diceImages[5])
  // const [player2, setPlayer2] = useState(1)
  // squares[0] = 'player1'
const rollDice = () => {
  const randomNum = Math.floor(Math.random() * 6);
  setDiceImage(diceImages[randomNum]);
  setPlayer1(player1 + randomNum)
  
  // setPlayer2(player2 + Math.floor(Math.random() * 6))
}

if (player1 >= 100) {
  return <h1>Game Over!</h1>
}

  return (
    <div id ="board-container">
     <button type="button" className='diceButton' onClick={rollDice}>Roll Dice</button>
     <img className='dice-square' alt="" src={diceImage}></img>
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









