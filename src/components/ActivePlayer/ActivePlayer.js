import React from 'react';

function ActivePlayer(props){

    return(
        <div>
            <div className="active-player">
                <h2>Players</h2>
                <div className="player player-1"></div>
                <div className="player player-2"></div>
            </div>
        </div>
    );
}

export default ActivePlayer;