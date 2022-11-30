import React, {useState} from "react";
//  import Square from "../Square/Square.js";
import Row from "../Row/Row.js";
import Swal from 'sweetalert2';
import './Board.css'
import Dice1 from '../Dice/images/Dice1.png';
import Dice2 from '../Dice/images/Dice2.png';
import Dice3 from '../Dice/images/Dice3.png';
import Dice4 from '../Dice/images/Dice4.png';
import Dice5 from '../Dice/images/Dice5.png';
import Dice6 from '../Dice/images/Dice6.png';
import ReactAudioPlayer from 'react-audio-player';

function Board(props) {

  const diceImages = [
    Dice1, 
    Dice2,
    Dice3,
    Dice4,
    Dice5,
    Dice6,
  ]

  const rows = new Array(10).fill('')

  // const squares = new Array(100).fill('')
  const [player1, setPlayer1] = useState(1)
  const [player2, setPlayer2] = useState(1)
  const [diceImage, setDiceImage] = useState(diceImages[5])

  const player1Turn = props.player1Turn;
  const setPlayer1Turn = props.setPlayer1Turn;

  // const [player1Turn, setPlayer1Turn] = useState(true)

  // const player1Turn = props.player1Turn;
  // const setPlayer1Turn = props.setPlayer1Turn;
  // const {player1Turn, setPlayer1Turn} = props;

  const pipe= [[56, 44, 38],
                [83,79, 61],
                [90,72,68],
               ] 

  const note = [[3, 17, 25],
                 [75, 85, 97],
                 [8,12,30],
                 ] 

  const isReversed = (index) => {
    return index % 2 === 0;
  }              

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6);
    setDiceImage(diceImages[randomNum]);
    return randomNum;
  }
  const handleRoll = () => {
    const roll = rollDice();
    movePlayer(roll);
  }

  const movePlayer = (roll) => {
    if (player1Turn === true) {
      // if (props.player1Turn === true) {
      setPlayer1(player1 + roll + 1);
      // getNewSquare(player1, setPlayer1);
      setPlayer1Turn(false);
      console.log("Player 1's turn - it has moved with the dice roll", player1)
    } else {
      setPlayer2(player2 + roll + 1);
      // getNewSquare(player2, setPlayer2);
      setPlayer1Turn(true);
      console.log("Player 2's turn - it has moved with the dice roll", player2)
    }
  }

  // const getNewSquareP1 = (squareNumber) => {
  //   if (player1 === pipe[0][0]) {
  //     return pipe[0][2]
  // if none of the special squares apply, return original number

  //write this as a forEach loop?

  const getNewSquareP1 = () => {
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
  }

  const getNewSquareP2 = () => {
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
  }
 
  getNewSquareP1()
  getNewSquareP2()

  
if (player1 >= 100) {
  Swal.fire({
    title: 'You won!',
    text: 'Congratulations Player 1, You Won The Game',
    background: '#fdfded',
    color: '#fa7b00',
    showDenyButton: true,
    confirmButtonText: 'Start Again',
    confirmButtonColor: '#ffd60a',
    denyButtonText: 'Back',
    denyButtonColor: '#77CEF9',
    imageUrl: 'Remy.webp',
    imageWidth: 500,
    imageHeight: 500,
    imageAlt: 'Custom image',
  }).then((result) => {
    if (result.isConfirmed) {
    window.location.reload();
    } else if (result.isDenied) {
      window.location = "/"
    }
  });
} else if(player2 >=100) {
  Swal.fire({
    title: 'You won!',
    text: 'Congratulations Player 2, You Won The Game',
    background: '#fdfded',
    color: '#fa7b00',
    showDenyButton: true,
    confirmButtonText: 'Start Again',
    confirmButtonColor: '#ffd60a',
    denyButtonText: 'Back',
    denyButtonColor: '#77CEF9',
    imageUrl: 'Stuart_Little_Hero.webp',
    imageWidth: 500,
    imageHeight: 500,
    imageAlt: 'Custom image',
  }).then((result) => {
    if (result.isConfirmed) {
    window.location.reload();
    } else if (result.isDenied) {
      window.location = "/"
    }
  });
}

// const playersTurn = () => {
//   if (player1Turn === true) {
//     return <h1>player 1 turn</h1>
//   } else {
//     return <h1>player 2 turn</h1>
//   }
// }



  return (
    
   <div className="main-container-board">
    {/* <div className="title-container-board">
        <div className="title-content-board">
          <div className="bouncing-text">
            <div className="r">R</div>
            <div className="a">A</div>
            <div className="t">T</div>
            <div className="r2">R</div>
            <div className="a2">A</div>
            <div className="c">C</div>
            <div className="e">E</div>
            <div className="shadow"></div>
            <div className="shadow-two"></div>
          </div>
            <img src="_com.apple.Pasteboard.crud9d.png" alt=""></img>
        </div>
    </div> */}
    <div id ="board-container">
      <button type="button" className='diceButton' onClick={handleRoll}><img className='dice-square' alt="" src={diceImage}></img></button>
      <div id="board">
        {rows.map((_, i) => {
          return <Row number={i} playerPosition={player1} playerPosition2={player2} pipePositions={pipe} notePositions={note} isReversed={isReversed(i)} />
        })}
        <img src="Board.png" alt=""></img>
        {/* {squares.map((_, i) => {
          return <Square number={100 - i} playerPosition={player1} playerPosition2={player2} pipePositions={pipe} notePositions={note}  /> */}
        {/* })} */}
      </div>
    </div>
    <ReactAudioPlayer
      src="Rat Race Jingle 2.mp3"
      autoPlay="true"
      loop="true"
    />
  </div>
      );
    };
    export default Board;
