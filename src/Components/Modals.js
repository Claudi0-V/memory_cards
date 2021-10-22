import React from "react";
import Tutorial from "./Modals/Tutorial.js";
import Game from "./Modals/Game.js";
import WinGame from "./Modals/WinGame.js"

function Modals(props) {
  const { data, step, handleModal, type, resetGame } = props;
  return (
    <div className="modal-container">
      <div className="modal">
        {type === "tutorial" && (
          <Tutorial data={data} step={step} handleModal={handleModal} />
        )}
        {type === "gameLost" && <Game resetGame={resetGame} />}
{type === "gameWin" && <WinGame resetGame={resetGame}  />}
      </div>
    </div>
  );
}

export default Modals;
