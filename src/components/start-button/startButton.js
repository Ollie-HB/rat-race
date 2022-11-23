import React, { useState } from 'react'
import './startButton.css'

export const StartButton = ({ startGame }) => {
 
  
  return (
    <div>
      <button className='button' onClick={ startGame }><span>Play</span></button>
    </div>
  );
};

export default StartButton;