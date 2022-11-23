import React, { Fragment } from 'react';
// import {Player} from './Player/Player'

function Square(props){

    // const player = <div id="current-player"></div>
    // if (props.number = 1) {
        
    // }
    
    return (
        <Fragment>
            <div className="square">
                {props.number}
                <div id="current-player"></div>
            </div>
        </Fragment>
    )
}

export default Square;