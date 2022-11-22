import React from 'react';
import './indexpage.css';
import { Instructions } from '../instructions/Instructions.js';
import { StartButton } from '../start-button/startButton'

const IndexPage = ({ navigate }) => {
  return (
    <>
      <div className='main-container'>
        <div className='title-container'>
          <h1>
            Welcome To Rat Race
          </h1>
        </div>
        <div className="instructions">
          <Instructions />
        </div>
        <div className='button-container'>
          <StartButton />
        </div>
      </div>
    </>
  )
};

export default IndexPage;
