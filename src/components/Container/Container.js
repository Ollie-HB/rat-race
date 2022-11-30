import React, { useState, Fragment } from "react";
import ActivePlayer from '../ActivePlayer/ActivePlayer';
import Board from '../Board/Board';
import '../Board/Board.css'
// import DicePanel from "../Dice/dicePanel";


function Container(){

    const [player1Turn, setPlayer1Turn] = useState(true)

    return (
        <Fragment>
            <div>
                <div className="container">
                <Board player1Turn={player1Turn} setPlayer1Turn={setPlayer1Turn}/>
                {/* <DicePanel /> */}
                </div>
                <div className="active-player-panel">
                    <ActivePlayer player1Turn={player1Turn} setPlayer1Turn={setPlayer1Turn}/>
                </div>
            </div>
        </Fragment>
    );
}

export default Container;