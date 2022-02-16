import { createContext, useEffect, useState } from "react";

export const TimeContext = createContext();

const TimeContextProvider = (props) => {
  const [time, setTime] = useState({ s: 0, m: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // zero 0, started ===1, stopped===2

  const start = () => {
    // Avoid multiple starts if start button is pressed repeatedly
    //could also disable the button too
    if (status === 1) {
      return;
    }
    setInterv(setInterval(run, 1000));
    setStatus(1);
  };

  let updatedS = time.s;
  let updatedM = time.m;

  const run = () => {
    updatedS++;
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }

    return setTime({ s: updatedS, m: updatedM });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ s: 0, m: 0 });
  };

  return (
    <TimeContext.Provider value={{ time, start, stop, reset }}>
      {props.children}
    </TimeContext.Provider>
  );
};

export default TimeContextProvider;
