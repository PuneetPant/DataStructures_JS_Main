import { useState } from "react";
export default function StarRating({ max, filled }) {
  const [starCount, setStarCount] = useState(filled);
  const [lastCount, setLastCount] = useState(filled);

  const handleStarClick = (val) => {
    setStarCount(val + 1);
    setLastCount(val + 1);
  };
  const handleMouseEnter = (val) => {
    setStarCount(val + 1);
  };
  const handleMouseLeave = () => {
    setStarCount(lastCount);
  };

  const renderStars = () => {
    let data = new Array(max).fill(0);
    const resp = data.map((key, idx) => {
      return (
        <div
          onClick={() => handleStarClick(idx)}
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={handleMouseLeave}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`star-icon ${idx < starCount ? "star-icon-filled" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </div>
      );
    });
    return resp;
  };
  return <div className="wrapper">{renderStars()}</div>;
}
