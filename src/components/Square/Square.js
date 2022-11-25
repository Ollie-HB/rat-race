import React, { Fragment } from 'react';
// import {Player} from './Player/Player'
function Square(props){
   const snakeVisible = () => { 
        
    //    return props.snakePositions.map((element) => {
    //          if(props.number === element){
    //         return <img alt ="" src= "/pipe.png" style = {{height:'80px', width:'40px'}} ></img>
    //      }
    //     });

            return props.snakePositions.map((snakePosition) => {
                return snakePosition.map((ele) => {  if(props.number === ele){
                   
                    return <img alt ="" src= "/pipe.png" style = {{height:'80px', width:'40px'}} ></img>
                     }


                } ) 
            
            
            })
       
        // if(props.snakePositions === props.number){
            
        //     return <div>snake</div>
        // }
    }

    // //props.snakePositions.map(position=> position.map((ele) => if(props.number === element){
    //         return <img alt ="" src= "/pipe.png" style = {{height:'80px', width:'0px'}} ></img>
    //     }))
    return (
        <Fragment>
            <div className="square" id={props.number}>
                {props.number}
                {/* {props.id} */}
                {/* Conditional rendering */}
                {
                  props.playerPosition === props.number && <div> <div id="current-player"></div></div> //returns the last expression which is html
                }
                {
                  snakeVisible()
                }
            </div>
        </Fragment>
    )
}


export default Square;
// first step, getting one player moving through the board
// make special squares - choose our special numbers, eg. if land on 25, set state to 5(snake)
// pass in state to a square as a prop - if the player's number (kept in state variable) matches the square number, show player icon
// get numeric value from dice roll (not just image) and add that to playerState to move them through the board
