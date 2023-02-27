import {useState, useEffect} from 'react';
export default function Stopwatch() {
  const [ms, setMs] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    let timer;
    if(start){
      timer = setTimeout(() => {
        setMs(ms + 1)
      }, 1)
    }
    return () => {
      clearTimeout(timer)
    }
  },[ms, start])
  const handleStart = () => {
    setStart(!start);
  }
  const handleReset = () => {
    setMs(0);
    setStart(false);
  }
  const convertTime = (milliseconds) => {
    
    if(milliseconds === 0){
      return ["0", "00"]
    } else{
      milliseconds = milliseconds / 1000;
      milliseconds = milliseconds.toString();
      const arr = milliseconds.split(".")
      return [arr[0], typeof Math.floor(arr[1]/10) === NaN ? "00" :  Math.floor(arr[1]/10)];
    }
  }
  const time = convertTime(ms);
  return (
    <div>
      <div className="timeWrapper" onClick={handleStart}>
        <p className="seconds">{`${time[0]}s`}</p>
        <p className="ms">{`${time[1]}`}</p>
      </div>
      <div className="btnWrapper">
        <button onClick={handleStart}>{start ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
