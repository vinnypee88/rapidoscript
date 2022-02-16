const ScoreCard = ({ correct, incorrect, restart }) => {
  return (
    <>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="d-flex flex-row m-3">
          <h2 className="bg-success mb-0 mx-1 p-2 rounded-pill">{correct}</h2>
          <h2 className="bg-danger mb-0 mx-1 p-2 rounded-pill">{incorrect}</h2>
        </div>
      </div>
    </>
  );
};

export default ScoreCard;
