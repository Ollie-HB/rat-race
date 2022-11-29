import React, {useState} from "react";
import Square from "../Square/Square.js";
import Swal from 'sweetalert2';
import Dice1 from '../Dice/images/Dice1.png';
import Dice2 from '../Dice/images/Dice2.png';
import Dice3 from '../Dice/images/Dice3.png';
import Dice4 from '../Dice/images/Dice4.png';
import Dice5 from '../Dice/images/Dice5.png';
import Dice6 from '../Dice/images/Dice6.png';

function Board() {

  const diceImages = [
    Dice1, 
    Dice2,
    Dice3,
    Dice4,
    Dice5,
    Dice6,
  ]

  const squares = new Array(100).fill('')
  const [player1, setPlayer1] = useState(1)
  const [player2, setPlayer2] = useState(1)
  const [diceImage, setDiceImage] = useState(diceImages[5])
  const [player1Turn, setPlayer1Turn] = useState(true)

  const pipe= [[56, 47, 38],
                [83,72, 61],
                [90,79,68],
               ] 

  const note = [[12, 23, 34],
                 [75,86, 97],
                 [8,19,30],
                 ] 
                 

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6);
    setDiceImage(diceImages[randomNum]);
    
    if (player1Turn === true) {
      setPlayer1(player1 + randomNum + 1);
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
      setPlayer1Turn(false)
    }
    else if (player1Turn === false) {
      setPlayer2(player2 + randomNum + 1);
      if (player2 === pipe[0][0]) {
        setPlayer2(pipe[0][2])
      } else if (player2 === pipe[1][0]) {
        setPlayer2(pipe[1][2])
      } else if (player2 === pipe[2][0]) {
        setPlayer2(pipe[2][2])
      } else if (player2 === note[0][0]) {
        setPlayer2(note[0][2])
      } else if (player2 === note[1][0]) {
        setPlayer2(note[1][2])
      } else if (player2 === note[2][0]) {
        setPlayer2(note[2][2])
      }
      setPlayer1Turn(true)
    }
    };
  
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
   <>
    <div className="title-container-board">
        <div className="title-content-board">
          <div class="bouncing-text">
            <div class="r">R</div>
            <div class="a">A</div>
            <div class="t">T</div>
            <div class="r2">R</div>
            <div class="a2">A</div>
            <div class="c">C</div>
            <div class="e">E</div>
            <div class="shadow"></div>
            <div class="shadow-two"></div>
          </div>
            <img src="_com.apple.Pasteboard.crud9d.png" alt=""></img>
          </div>
        </div>
    <div id ="board-container">
      <button type="button" className='diceButton' onClick={rollDice}><img className='dice-square' alt="" src={diceImage}></img></button>
      <div id="board">
        {squares.map((_, i) => {
          return <Square number={100 - i} playerPosition={player1} playerPosition2={player2} pipePositions={pipe} notePositions={note}  />
        })}
        <img src="Board.png" alt=""></img>
      </div>
    </div>
      </>
      );
    };
    export default Board;
