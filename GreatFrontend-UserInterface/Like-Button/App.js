import { HeartIcon, SpinnerIcon } from './icons';
import {useState} from 'react';
import './styles.css';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState(false);
  const [error, setError] = useState(false);
  const handleClick = async () => {
    const obj = {
      method : "POST",
       headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action:liked ? 'unlike' : "like",
      }),
    }
    try{
      setLoading(true)
      setError(false);

      const resp = await fetch("https://www.greatfrontend.com/api/questions/like-button",obj)
      if(resp.ok){
        setLiked(!liked);
        setError(false);
      } else{
        setError(true);
      }
    }catch(e){
      console.log("error:", e);
    }finally{
      setLoading(false);
    }
    
  }
  return (
    <div>
      <button 
      className={`buttonStyle ${liked && "liked"}`}
      onClick={handleClick}
      >
        {loading ?<SpinnerIcon className={"iconStyle"} /> : <HeartIcon className={"iconStyle"}/> }
        {liked ? "Liked" : "Like"}
      </button>
      <div className="errorSection">
      {error && "API failed."}
      </div>
    </div>
  );
}
