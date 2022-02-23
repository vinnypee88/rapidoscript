import { useState, useContext } from "react";
import { TimeContext } from "../context/TimeContext";

const StopClock = () => {
  const { time, start, stop, reset } = useContext(TimeContext);

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="display-1 text-center bg-secondary p-3 border rounded-pill">
          <span id="minutes" data-testid="stopclock">
            {time.m >= 10 ? time.m : "0" + time.m}
          </span>
          :
          <span id="seconds" data-testid="stopclock">
            {time.s >= 10 ? time.s : "0" + time.s}
          </span>
        </div>
      </div>{" "}
      <p className="text-center">
        The clock will start when you enter the first character
      </p>
    </>
  );
};

export default StopClock;
