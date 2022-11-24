import React, { useState } from 'react'


import Dice1 from './images/Dice1.png'
import Dice2 from './images/Dice2.png'
import Dice3 from './images/Dice3.png'
import Dice4 from './images/Dice4.png'
import Dice5 from './images/Dice5.png'
import Dice6 from './images/Dice6.png'

const Dice = () => {
  
  var diceImages = [
    Dice1, 
    Dice2,
    Dice3,
    Dice4,
    Dice5,
    Dice6,
]

const [diceImage, setDiceImage] = useState(diceImages[5])
  
const rollDice = () => {
const randomNum = Math.floor(Math.random() * 6);
  setDiceImage(diceImages[randomNum]);
  }
  
  return (
   <div className='diceContainer'>
   <center>
   <img className='dice-square' alt="" src={diceImage}></img>
   <button type="button" className='diceButton' onClick={rollDice}>Roll Dice</button>
   </center>
   </div>
  

  )
}

export default Dice;