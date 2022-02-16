import { useEffect } from "react";

const ResultsModal = ({ correct, incorrect, time, restart }) => {
  let seconds = time.s;
  let minutes = time.m;
  if (time.s + incorrect > 59) {
    minutes = minutes + 1;
    seconds = time.s + incorrect - 60;
  } else {
    seconds += incorrect;
  }
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex flex-column text-center">
                <h3>Your Score</h3>
                <div className="">Your time</div>
                <div className="display-6">
                  {time.m > 9 ? time.m : "0" + time.m}:
                  {time.s > 9 ? time.s : "0" + time.s}:
                  {time.ms > 9 ? time.ms : "0" + time.ms}
                </div>
                <div className="">
                  Penalty: {incorrect} seconds for {incorrect} mistakes
                </div>
                <div>Final Score</div>
                <div className="display-1">
                  {minutes > 9 ? minutes : "0" + minutes}:
                  {seconds > 9 ? seconds : "0" + seconds}:
                  {time.ms > 9 ? time.ms : "0" + time.ms}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={restart}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsModal;
