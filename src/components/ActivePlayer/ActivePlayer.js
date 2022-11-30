import React from 'react';

function ActivePlayer(props){
    
    const player1Turn = props.player1Turn
        if (player1Turn) {
            return <h1>player 1 turn</h1>
        } else {
            return <h1>player 2 turn</h1>
        }
}

export default ActivePlayer;