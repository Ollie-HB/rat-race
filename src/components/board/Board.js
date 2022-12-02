import React, { useState } from "react";
import Row from "../Row/Row.js";
import Swal from "sweetalert2";
import "./Board.css";
import Dice1 from "../Dice/images/Dice1.png";
import Dice2 from "../Dice/images/Dice2.png";
import Dice3 from "../Dice/images/Dice3.png";
import Dice4 from "../Dice/images/Dice4.png";
import Dice5 from "../Dice/images/Dice5.png";
import Dice6 from "../Dice/images/Dice6.png";
import ReactAudioPlayer from "react-audio-player";

function Board(props) {
  const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  const rows = new Array(10).fill("");

  const [player1, setPlayer1] = useState(1);
  const [player2, setPlayer2] = useState(1);
  const [diceImage, setDiceImage] = useState(diceImages[5]);

  const player1Turn = props.player1Turn;
  const setPlayer1Turn = props.setPlayer1Turn;

  const pipes = [
    [14, 7],
    [40, 17],
    [70, 31],
    [87, 45],
    [99, 79],
  ];

  const notes = [
    [3, 15],
    [11, 34],
    [37, 83],
    [47, 67],
    [64, 93],
  ];

  const isReversed = (index) => {
    return index % 2 === 0;
  };

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6);
    setDiceImage(diceImages[randomNum]);
    return randomNum;
  };
  const handleRoll = () => {
    const roll = rollDice();
    movePlayer(roll);
  };

  const movePlayer = (roll) => {
    if (player1Turn === true) {
      setPlayer1(player1 + roll + 1);
      setPlayer1Turn(false);
    } else {
      setPlayer2(player2 + roll + 1);
      setPlayer1Turn(true);
    }
  };

  const getNewSquare = (player, setPlayer) => {
    pipes.forEach((element) => {
      if (player === element[0]) {
        setPlayer(element[1]);
      }
    });
    notes.forEach((element) => {
      if (player === element[0]) {
        setPlayer(element[1]);
      }
    });
  };

  getNewSquare(player1, setPlayer1);
  getNewSquare(player2, setPlayer2);

  if (player1 >= 100) {
    Swal.fire({
      title: "You won!",
      text: "Congratulations Player 1, You Won The Game",
      background: "#fdfded",
      color: "#fa7b00",
      showDenyButton: true,
      confirmButtonText: "Start Again",
      confirmButtonColor: "#ffd60a",
      denyButtonText: "Back",
      denyButtonColor: "#77CEF9",
      imageUrl: "tumblr_2374e4a72a250144f743db1170dacd6e_2709a9f4_540.gif",
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: "Custom image",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      } else if (result.isDenied) {
        window.location = "/";
      }
    });
  } else if (player2 >= 100) {
    Swal.fire({
      title: "You won!",
      text: "Congratulations Player 2, You Won The Game",
      background: "#fdfded",
      color: "#fa7b00",
      showDenyButton: true,
      confirmButtonText: "Start Again",
      confirmButtonColor: "#ffd60a",
      denyButtonText: "Back",
      denyButtonColor: "#77CEF9",
      imageUrl: "later-later-dude.gif",
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: "Custom image",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      } else if (result.isDenied) {
        window.location = "/";
      }
    });
  }

  return (
    <div className="main-container-board">
      <div id="board-container">
        <button type="button" className="diceButton" onClick={handleRoll}>
          <img className="dice-square" alt="" src={diceImage}></img>
        </button>
        <div id="board-content">
          {rows.map((_, i) => {
            return (
              <Row
                number={i}
                playerPosition={player1}
                playerPosition2={player2}
                pipePositions={pipes}
                notePositions={notes}
                isReversed={isReversed(i)}
              />
            );
          })}
          <img src="Board4.png" alt=""></img>
        </div>
      </div>
      <ReactAudioPlayer
        src="Rat Race Jingle 2.mp3"
        autoPlay="true"
        loop="true"
      />
    </div>
  );
}
export default Board;
