import React, { Fragment } from "react";
import Dice from '../Dice/Dice'
import ActivePlayer from '../ActivePlayer/ActivePlayer';
import Board from '../Board/Board';
import { pipePositions, notesPositions} from '../Note/NoteAndPipe';

function Container(){
    return (
        <Fragment>
            <div className="container">
                <ActivePlayer />
                <Board /> <pipePositions /> <notesPositions />
                <Dice />
            </div>
        </Fragment>
    );
}

export default Container;