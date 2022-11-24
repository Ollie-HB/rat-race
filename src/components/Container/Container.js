import React, { Fragment } from "react";
import Dice from '../Dice/Dice'

import ActivePlayer from '../ActivePlayer/ActivePlayer';
import Board from '../Board/Board';

function Container(){
    return (
        <Fragment>
            <div className="container">
                <ActivePlayer />
                <Board />
                <Dice />
            </div>
        </Fragment>
    );
}

export default Container;