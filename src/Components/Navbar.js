function Navbar(props) {
  const { currentScore, bestScore } = props.scores;
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
    </nav>
  );
}

export default Navbar;
