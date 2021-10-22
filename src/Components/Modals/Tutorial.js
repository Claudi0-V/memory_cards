function Tutorial(props) {
  const { data, step, handleModal } = props;
  return (
    <div className="tutorial-div">
      <h1 style={{textAlign: 'center'}}>{data[step]}</h1>
      <div className="tutorial-div-buttons">
        {step > 0 && (
          <button name="previous" className="previous-button" onClick={(event) => handleModal(event)}>
            Previous
          </button>
        )}
        <button name="finish" className="finish-button" onClick={(event) => handleModal(event)}>
          Finish
        </button>
        {step < 2 && (
          <button name="next" className="next-button" onClick={(event) => handleModal(event)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Tutorial;
