import React, { Fragment } from 'react';
// import {Player} from './Player/Player'
function Square(props){
    return (
        <Fragment>
            <div className="square">
                {props.number}
                {/* Conditional rendering */}
                {props.player === props.number && <div> <div id="current-player"></div></div>}
            </div>
        </Fragment>
    )
}
export default Square;
// first step, getting one player moving through the board
// make special squares - choose our special numbers, eg. if land on 25, set state to 5(snake)
// pass in state to a square as a prop - if the player's number (kept in state variable) matches the square number, show player icon
// get numeric value from dice roll (not just image) and add that to playerState to move them through the board
