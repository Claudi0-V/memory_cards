import React, { useState } from "react";
import Tutorial from "./Modals/Tutorial.js";
import Game from "./Modals/Game.js";

function Modals(props) {
  const {data, step, handleModal, type, resetGame} = props;
  const typeTest = type === "tutorial";
  return (
    <div className="modal-container">
      <div className="modal">
        {typeTest ? (
          <Tutorial data={data} step={step}  handleModal={handleModal} />
        ) : 
          <Game resetGame={resetGame} />
        }
      </div>
    </div>
  );
}

export default Modals;
