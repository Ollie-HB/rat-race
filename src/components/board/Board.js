import React from 'react'
import './Board.css'

//const verticalAxis = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
const verticalAxis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const horizontalAxis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


export default function Board () {
    let board = [] //declaring variable

    for (let i = 0; i < verticalAxis.length; i++) { //logic for one loop 
      for (let j = 0; j < horizontalAxis.length; j++) { //logic for the other loop 
        board.push
        (<div className= "tile">[{horizontalAxis[i]}{verticalAxis[j]}]
        </div>)
      }
    }
  return <div id = "board">{board}</div>;
}