import React from "react";

function Game(props) {
  const { resetGame } = props;
  return (
    <div className="endgame-modal">
      <h1>Game Over, try Again</h1>
      <button onClick={() => resetGame()}>New Game</button>
    </div>
  );
}

export default Game;
