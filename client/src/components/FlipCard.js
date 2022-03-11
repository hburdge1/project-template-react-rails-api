import React, { useState } from "react";
import "./FlipCard.css";
import Popup from 'reactjs-popup';
import ResponseForm from "./ResponseForm";

function FlipCard({
  content,
  category,
  flames,
  updateIcebreaker,
  icebreaker,
  responses,
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
          <p>{category}</p>
        </div>
        <div className="flip-card-back">
          <h2>Type: {tags}</h2>
          <p>Description: {content}</p>
          <p>{tags}</p>
          <p>🔥 : {flames}</p>
          <button className="primary" onClick={updateIcebreaker}>
            Add flame
          </button>
          <button id='btn' className="primary" onClick={onClick}>
            Respond
          </button>
          {showResponse? (
          <Popup trigger={<button> Trigger</button>} position="right center">
            <p>{responses.map(r=> r.response)}</p>
          </Popup>
  ) : (null)}
          {showResponse? <ResponseForm icebreaker ={icebreaker} user = {user}/> : null}
        </div>
      </div>
    </div>
  );
}

export { FlipCard };