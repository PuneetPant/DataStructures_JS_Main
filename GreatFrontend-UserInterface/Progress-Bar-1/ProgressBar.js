export default function ProgressBar({status}) {
    return (<div className="progress">
      <div className="bar" style={{width:`${status}%`, borderRadius : `8px ${status === 100 ? "8px" : "0px"} ${status === 100 ? "8px" : "0px"} 8px`}}>{status}%</div>
    </div>)
  }
  