import { useState } from 'react';
export default function Accordion() {
  const [arr, setArr] = useState([true, true, true])
  const handleClick = (idx) => {
    let newArr = [...arr];
    newArr[idx] = !arr[idx];
    setArr(newArr);
  }
  return (
    <div>
      <div>
        <div onClick={() => handleClick(0)}>
          HTML{' '}
          <span
            aria-hidden={true}
            className={`accordion-icon ${arr[0] === false ? "accordion-icon--rotated" : ""}`}
          />
        </div>
        <div className={`${arr[0] === false ? "hidden" : ""}`} >
          The HyperText Markup Language or HTML is the
          standard markup language for documents designed to
          be displayed in a web browser.
        </div>
      </div>
      <div>
        <div onClick={() => handleClick(1)}>
          CSS{' '}
          <span
            aria-hidden={true}
            className={`accordion-icon ${arr[1] === false ? "accordion-icon--rotated" : ""}`}
          />
        </div>
        <div className={`${arr[1] === false ? "hidden" : ""}`}>
          Cascading Style Sheets is a style sheet language
          used for describing the presentation of a document
          written in a markup language such as HTML or XML.
        </div>
      </div>
      <div>
        <div onClick={() => handleClick(2)}>
          JavaScript{' '}
          <span
            aria-hidden={true}
            className={`accordion-icon ${arr[2] === false ? "accordion-icon--rotated" : ""}`}
          />
        </div>
        <div className={`${arr[2] === false ? "hidden" : ""}`}>
          JavaScript, often abbreviated as JS, is a
          programming language that is one of the core
          technologies of the World Wide Web, alongside HTML
          and CSS.
        </div>
      </div>
    </div>
  );
}
