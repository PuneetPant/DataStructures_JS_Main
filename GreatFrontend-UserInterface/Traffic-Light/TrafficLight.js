import {useState, useEffect, useRef} from "react";
export default function TrafficLight() {
  const [color, setColor] = useState("red");
  const lights = ["red", "yellow", "green"]
  const timer = useRef(4000);
  const colorFunc = () => {
    if(color === "red"){
      timer.current = 5000;
      setColor("yellow")
    } else if(color === "yellow"){
      timer.current = 3000
      setColor("green");
    } else{
      timer.current = 4000;
      setColor("red")
    }
  }

  useEffect(
    () => {
      let timer1 = setTimeout(() => colorFunc(), timer.current);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    [color]
  );
  return (
    <div className="wrapper">
    <div className="frame">
    {
      lights.map((val) => {
        let flag = val === color;
        return (
          <div 
          className="light"
          style={{backgroundColor : flag ? color : ""}}
          >
          </div>
        )
      })
    }
    </div>
    
    </div>
    )

}
