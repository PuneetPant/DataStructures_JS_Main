import {useState} from 'react';

export default function Tabs({data}) {
  const[activeTab, setActiveTab] = useState("");
  const handleClick = (value) => {
    value === activeTab ? setActiveTab("") : setActiveTab(value);
  }

  return (
    <div>
      <div className="container">
      {
        data.map((val, idx) => {
          return(
            <button 
            className={`buttonStyle ${val.value === activeTab ? "active" : ""}`}
            key={idx}
            onClick={() => handleClick(val.value)}
            >
            {val.buttonName}
            </button>
          )
        })
      }
      </div>
      <div>
      {
        data.map((val, idx) => {
          if(activeTab === "" || activeTab === val.value){
            return(
              <p key={idx}>{val.text}</p>
            )
          } 
        })
      }
      </div>
    </div>
  );
}
