import React, { useState } from "react";

function FlipCard({ seeIceBreakers }) {
  const { content, category, flames } = seeIceBreakers;

  const [isFlipped, setIsFlipped] = useState(false);

  const handleOnClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <li className="card" onClick={() => handleOnClick}>
      {!isFlipped ? (
        <div className="front-card">
          <h3 className="card-title">{category}</h3>
          <p>{flames}</p>
        </div>
      ) : (
        <div className="back-card">
          <h2>{content}</h2>
          <h4>{category}</h4>
          <p>Flames: {flames}</p>
          <button className="primary">Add flame</button>
        </div>
      )}
    </li>
  );
}

export default FlipCard;
