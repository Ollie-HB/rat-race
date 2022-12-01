import React, { useState, Fragment } from "react";
import ActivePlayer from '../ActivePlayer/ActivePlayer';
import Board from '../Board/Board';

import '../Board/Board.css'



function Container(){

    const [player1Turn, setPlayer1Turn] = useState(true)

    return (
        <Fragment>
            <div>
                <div className="container">
                <Board player1Turn={player1Turn} setPlayer1Turn={setPlayer1Turn}/>

                <div className="active-player-panel">
                    <ActivePlayer player1Turn={player1Turn} setPlayer1Turn={setPlayer1Turn}/>
                </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Container;