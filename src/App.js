import React, { useState, useEffect } from "react";
import Images from "./Components/Images";
import "normalize.css";
import "./scss/style.scss";
import CardsList from "./Components/cardImages.js";
import Navbar from "./Components/Navbar.js";
import Modals from "./Components/Modals.js";
import FirstGameContent from "./Components/FirstGameContent.js";
import {shuffler, shuffledCardsSetter, getFromLocalStorage} from "./helperFunctions"


function App() {
  const [initialCards, setInitialCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [round, setRound] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    getFromLocalStorage("bestScore", 0)
  );
  const [firstRound, setFirstRound] = useState(true);
  const [firstGame, setFirstGame] = useState(
    getFromLocalStorage("firstGame", true)
  );
  const [step, setStep] = useState(0);
  const [endGame, setEndGame] = useState(false);
  useEffect(() => {
    shuffledCardsSetter(setInitialCards, setCards);
  }, []);

  useEffect(() => {
    if (round >= 1) {
      setCurrentScore((prevState) => prevState + 1);
      setCards(shuffler(CardsList));
    }
  }, [round]);

  useEffect(() => {
    localStorage.setItem("bestScore", JSON.stringify(bestScore));
  }, [bestScore]);

  const handleClick = (name, index) => {
    const isFinalRound = round <= CardsList.length - 1;
    const doesNameMatch = name === initialCards[round]["name"];

    if (firstRound) {
      setFirstRound((prevState) => false);
    } else if (isFinalRound && doesNameMatch) {
      setRound((prevState) => prevState + 1);
    } else {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
    }
    setCards(shuffler(CardsList));
  };

  const handleModal = (event) => {
    const { name } = event.target;
    if (name === "previous") {
      setStep((prevState) => prevState - 1);
    } else if (name === "next") {
      setStep((prevState) => prevState + 1);
    } else {
      setFirstGame(false);
      localStorage.setItem("firstGame", JSON.stringify(false));
    }
  };

  function resetGame() {
    shuffledCardsSetter(setInitialCards, setCards);
    setCurrentScore(0);
    setEndGame(false);
    setFirstRound(true);
  }

  return (
    <div className="content-div">
      {firstGame && (
        <Modals
          data={FirstGameContent}
          type="tutorial"
          step={step}
          setStep={setStep}
          handleModal={handleModal}
        />
      )}
      {endGame && <Modals resetGame={resetGame} />}
      <Navbar scores={{ currentScore, bestScore }} />
      <main className="main-div">
        <Images cards={cards} handleClick={handleClick} />
      </main>
    </div>
  );
}

export default App;
