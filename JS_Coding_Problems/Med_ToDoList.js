import { useState, useRef } from "react";
export default function App() {
  let [data, setData] = useState([
    "Walk the dog",
    "Water the plants",
    "Wash the dishes",
  ]);
  const inputRef = useRef("");
  const handleSubmit = () => {
    console.log("INPUT VALUE: ", inputRef.current?.value);
    setData([...data, inputRef.current?.value]);
  };
  const handleDelete = (idx) => {
    console.log(idx);
    let arr = data.filter((val, id) => {
      if (id != idx) {
        return val;
      }
    });
    console.log(arr);
    setData(arr);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input ref={inputRef} type="text" placeholder="Add your task" />
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <ul>
        {data.map((val, idx) => {
          return (
            <li key={idx}>
              <span>{val}</span>
              <button onClick={() => handleDelete(idx)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
