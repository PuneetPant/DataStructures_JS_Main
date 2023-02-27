import { useState } from "react";
export default function App() {
  const [cel, setCel] = useState(0);
  const [fah, setFah] = useState(1.8 * cel + 32);

  handleValueConversion = (fieldName, event) => {
    let value = event.target.value;
    if (fieldName == "cel") {
      let val = 1.8 * value + 32;
      setFah(val);
      setCel(value);
    } else {
      let val = (value - 32) / 1.8;
      setCel(val);
      setFah(value);
    }
  };

  return (
    <>
      <input
        type="number"
        value={cel}
        onChange={(e) => handleValueConversion("cel", e)}
      />
      =
      <input
        type="number"
        value={fah}
        onChange={(e) => handleValueConversion("fah", e)}
      />
    </>
  );
}
