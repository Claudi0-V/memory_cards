import CardsList from "./Components/cardImages.js";

function shuffler(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function shuffledCardsSetter(firstSetter, secondSetter) {
  const shuffled = shuffler(CardsList);
  firstSetter(shuffled);
  secondSetter(shuffled);
}

function getFromLocalStorage(item, altValue) {
  const saved = JSON.parse(localStorage.getItem(item));
  if (typeof saved === "boolean" && saved === false) {
    return saved;
  }
  return saved || altValue;
}

function startGame(setFirstRound, setCards) {
  setFirstRound((prevState) => false);
  setCards(shuffler(CardsList));
}

export { shuffler, shuffledCardsSetter, getFromLocalStorage, startGame };
