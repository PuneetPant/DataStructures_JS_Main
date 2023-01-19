import './styles.css';
import {useState} from 'react';

function ProgressBar({value, barId}){
  return(
    <div className="progressBarOuter">
    <div className="bar" style={{width:`${status}%`}}></div>
    </div>
  )
}
export default function App() {
  const [barCount, setBarCount] = useState(0)
  return (
    <div>
      <button onClick={() => setBarCount(barCount + 1)}>Add {barCount}</button>
      <div className="wrapper">
      {
        Array(barCount).fill(0).map((val, idx) => {
          return(
            <ProgressBar value={10} barId={idx + 1}/>
          )
        })
      }
      </div>
    </div>
  );
}
