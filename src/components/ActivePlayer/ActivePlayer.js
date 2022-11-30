import React from 'react';

function ActivePlayer(props){
    
    const player1Turn = props.player1Turn
        if (player1Turn) {
            return <div className="act-pnl-cont"><div className="circle-red">
            <img src='Remy.webp' alt=""></img>
            </div>
            <p>Player 1's Turn</p>
            <div>
            <img src='Stuart_Little_Hero.webp' alt=""></img>
            </div></div>
        } else {
            return <div className="act-pnl-cont"><div>
            <img src='Remy.webp' alt=""></img>
            </div>
            <div className="circle-blue">
            <img src='Stuart_Little_Hero.webp' alt=""></img>
            <p>Player 2's Turn</p>
            </div></div>
        }
}

export default ActivePlayer;