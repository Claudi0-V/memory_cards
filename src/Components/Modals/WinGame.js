import React, {useState} from "react"

function WinGame(props){
  const {resetGame} = props
  return(
    <div className="win-modal"> 
      <h1>Congrats, You won!</h1>
      <button onClick={() => resetGame()}>New Game</button>
    </div>
    )
}

export default WinGame
