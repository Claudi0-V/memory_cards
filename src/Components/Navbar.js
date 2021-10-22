function Navbar(props) {
  const {currentScore, bestScore} = props.scores;
  const {setFirstGame} = props
  return (
    <nav>
      <div className="scores">
        <p>Current Score:</p>
        <p>{currentScore} </p>
      </div>
      <div className="scores">
        <p>Best Score</p>
        <p>{bestScore}</p>
      </div>
      <div className="scores"><p class="redo-tutorial" onClick={() => setFirstGame(true)}>?</p></div>
    </nav>
  );
}

export default Navbar;
