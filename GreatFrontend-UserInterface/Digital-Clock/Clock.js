import {useState, useEffect} from 'react';
export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setDate(new Date());
    }, 1000)

    return () => {
      clearTimeout(timer);
    }
  },[date])
  const converTensValue = (val) => {
    return val < 10 ? "0"+val : val;
  }
  const hours = converTensValue(date.getHours() %12);
  const minutes = converTensValue(date.getMinutes());
  const seconds = converTensValue(date.getSeconds())
  return (
    <div className="wrapper">
    {`${hours}:${minutes}:${seconds}`}
    </div>
    )
}
