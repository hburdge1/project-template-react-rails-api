import React, { useState } from "react";
import "./FlipCard.css";

function FlipCard({
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
// <div className="flip-card-inner" onClick={() => handleOnClick}>
//   {!isFlipped ? (
//     <div className="flip-card-front">
//       <h3 className="card-title">{category}</h3>
//       <p>{flames}</p>
//     </div>
//   ) : (
//     <div className="flip-card-back">
//       <h2>{content}</h2>
//       <h4>{category}</h4>
//       <p>Flames: {flames}</p>
//       <button className="primary" onClick={updateIcebreaker}>
//         Add flame
//       </button>
//     </div>
//   )}
// </div>
export {FlipCard}
