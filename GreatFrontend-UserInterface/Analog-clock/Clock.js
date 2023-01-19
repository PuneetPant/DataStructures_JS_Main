import {useEffect, useState} from 'react';
function Hand({handName, angle}){
  return(
     <div className={`hand ${handName}`}
        style={{transform : `rotate(${angle}deg)`}}
      >
      </div>
  )
}
export default function Clock() {
  const [date, setDate] = useState(new Date());

  // Works - 1
  useEffect(() => {
    let timer = setTimeout(() => {
      setDate(new Date())
      // console.log('here', date)
    }, 1000);

  return () => {
      setTimeout(timer);
    };
  },[date])
  
  // Works -2
  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     setDate(new Date())
  //     // console.log('here', date)
  //   }, 1000);

  // return () => {
  //     window.clearInterval(timer);
  //   };
  // })

  // Works - 3
  // useEffect(() => {
  //   console.log('in useEffect')
  //   let timer = setInterval(() => {
  //     console.log('inside setInterval function')
  //     setDate(new Date())
  //     // console.log('here', date)
  //   }, 1000);

  // return () => {
  //     window.clearInterval(timer);
  //   };
  // },[])

  // Works - 4
  // useEffect(() => {
  //   setDate(new Date());
  // },[date])

  

  // Works -5
  //  setInterval(() => {
  //     setDate(new Date())
  //     // console.log('here', date)
  //   }, 1000);
  
  const hourA = date.getHours() % 12 * 30;
  const minutesA = date.getMinutes() * 6;
  const secondsA = date.getSeconds() * 6;
  return (
    <div className="clock-wrapper">
    <div className="pivot">
    </div>
      <Hand handName="hour" angle={hourA} />
      <Hand handName="minute" angle={minutesA} />
      <Hand handName="second" angle={secondsA} />
    </div>
  )
}
