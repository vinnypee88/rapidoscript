import { useState } from "react";
import styles from "../styles/Game.module.css";

const StopClock = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // zero 0, started ===1, stopped===2

  const start = () => {
    // Avoid multiple starts if start button is pressed repeatedly
    //could also disable the button too
    if (status === 1) {
      return;
    }
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  let updatedMs = time.ms;
  let updatedS = time.s;
  let updatedM = time.m;

  const run = () => {
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  return (
    <div className="container">
      <div className=" border border-3 border-danger ">
        <div>
          <span id="minutes">{time.m >= 10 ? time.m : "0" + time.m}</span>:
          <span id="seconds">{time.s >= 10 ? time.s : "0" + time.s}</span>:
          <span id="hundredths">{time.ms >= 10 ? time.ms : "0" + time.ms}</span>
        </div>
        {/* For Testing purposes the buttona are added */}
        <button onClick={() => start()}>
          {status === 2 ? "resume" : "start"}
        </button>
        <button onClick={() => stop()}>stop</button>
        <button onClick={() => reset()}>reset</button>
      </div>
    </div>
  );
};

export default StopClock;
