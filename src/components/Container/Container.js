import React, { Fragment } from "react";
import ActivePlayer from '../ActivePlayer/ActivePlayer';
import Board from '../Board/Board';
import DicePanel from "../Dice/dicePanel";


function Container(){
    return (
        <Fragment>
            <div className="container">
                <ActivePlayer />
                <Board />
                <DicePanel />
            </div>
        </Fragment>
    );
}

export default Container;