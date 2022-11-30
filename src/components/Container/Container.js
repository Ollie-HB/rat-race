import React, { useState, Fragment } from "react";
import ActivePlayer from '../ActivePlayer/ActivePlayer';
import Board from '../Board/Board';
// import DicePanel from "../Dice/dicePanel";


function Container(){

    const [player1Turn, setPlayer1Turn] = useState(true)

    return (
        <Fragment>
            <div className="container">
                <ActivePlayer player1Turn={player1Turn} setPlayer1Turn={setPlayer1Turn}/>
                <Board player1Turn={player1Turn} setPlayer1Turn={setPlayer1Turn}/>
                {/* <DicePanel /> */}
            </div>
        </Fragment>
    );
}

export default Container;