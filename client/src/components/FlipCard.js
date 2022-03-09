import React, { useState } from "react";
import "./FlipCard.css";

export default function FlipCard({
  content,
  category,
  flames,
  updateIcebreaker,
}) {
  // const [isFlipped, setIsFlipped] = useState(false);

  // const handleOnClick = () => {
  //   setIsFlipped(!isFlipped);
  // };
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h2>{category}</h2>
        </div>
        <div className="flip-card-back">
          <h2>Type: {category}</h2>
          <p>Description: {content}</p>
          <p>🔥 : {flames}</p>
          <button className="primary" onClick={updateIcebreaker}>
            Add flame
          </button>
        </div>
      </div>
    </div>
  );
}

export { FlipCard };
