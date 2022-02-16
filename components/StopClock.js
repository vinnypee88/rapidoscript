import { useState, useContext } from "react";
import { TimeContext } from "../context/TimeContext";

const StopClock = () => {
  const { time, start, stop, reset } = useContext(TimeContext);

  return (
    <>
      <div className="justify-content-center">
        <div className=" border border-3 border-primary">
          <div className="display-1 text-center">
            <span id="minutes">{time.m >= 10 ? time.m : "0" + time.m}</span>:
            <span id="seconds">{time.s >= 10 ? time.s : "0" + time.s}</span>
          </div>
        </div>
      </div>{" "}
      <p className="text-center">
        The clock will start when you enter the first character
      </p>
    </>
  );
};

export default StopClock;
