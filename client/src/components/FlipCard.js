import React, { useState } from "react";
import "./FlipCard.css";
import ResponseForm from "./ResponseForm";
function FlipCard({
  content,
  category,
  flames,
  updateIcebreaker,
  icebreaker,
  seeIceBreakers, 
  setIceBreakers,
  user,
  tags
}) {

  const [showResponse, setShowResponse] = useState(false)
  const onClick = () => setShowResponse(!showResponse)
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
          <h2>Type: {tags}</h2>
          <p>Description: {content}</p>
          <p>🔥 : {flames}</p>
          <button className="primary" onClick={updateIcebreaker}>
            Add flame
          </button>
          <button className="primary" onClick={onClick}>
            Respond
          </button>
          {showResponse? <ResponseForm icebreaker ={icebreaker} user = {user}/> : null}
        </div>
      </div>
    </div>
  );
}

export { FlipCard };
