import './styles.css';
import {useState, useEffect} from 'react';
export default function App() {
  const [arr, setArr] = useState([]);
  const [flag , setFlag] = useState(false);
  const handleClick = (idx) => {
    if(!arr.includes(idx)){
      setArr([...arr, idx])
    }
    
  }
  useEffect(() => {
    console.log(arr.length)
    if(arr.length == 8){
      setFlag(true);
    }
    if(arr.length == 0){
      setFlag(false);
    }
   
  },[arr])
  useEffect(() => {
    let timer;
    if(flag){
      timer = setInterval(() => {
        console.log("here", arr)
        let newArr = [...arr];
        newArr.pop();
        setArr(newArr)
      }, 300)

    }
     return () => {
    clearInterval(timer);
    };
  })

  console.log(arr)
  return (
    <div className="container">
    {
      Array(9).fill(0).map((val, idx) => {
        if(idx !== 4){
          return(
          <div 
          className={`cell ${arr.includes(idx) ? "active" : ""}`}
          onClick={() => handleClick(idx)}
          >
            {idx}
          </div>
          )
        } else {
          return <span></span>
        }
        
      })
    }

    </div>)
}
