import React, { Fragment } from "react";

import ActivePlayer from './ActivePlayer';
import Board from './Board';

function Container(){
    return (
        <Fragment>
            <div className="container">
                <ActivePlayer />
                <Board />
            </div>
        </Fragment>
    );
}

export default Container;