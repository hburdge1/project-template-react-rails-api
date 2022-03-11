import React, { useState } from "react";
import "./FlipCard.css";
import Popup from 'reactjs-popup';
import ResponseForm from "./ResponseForm";
import FavoriteButton from "./FavoriteButton"

function FlipCard({
  content,
  category,
  addIcebreaker,
  flames,
  updateIcebreaker,
  icebreaker,
  responses,
  id,
  favorite,
  user,
  tags,
}) {
  const [showResponse, setShowResponse] = useState(false)
  const onClick = () => setShowResponse(!showResponse)
  // const [isFlipped, setIsFlipped] = useState(false);

  // const handleOnClick = () => {
  //   setIsFlipped(!isFlipped);
  // };
  return (
    <>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h2>Flip a card to see the intro</h2>
          <h3>Activity or Question?</h3>
          <h4>{category}</h4>
        </div>
        <div className="flip-card-back">
          <h2>Type: {tags}</h2>
          <p>{content}</p>
          <p>🔥 : {flames}</p>
          <FavoriteButton favorite={favorite} id={id} />
          <button className="primary" onClick={updateIcebreaker}>
            Add flame
          </button>
          <button id='btn' className="primary" onClick={onClick}>
            Respond
          </button>
          {showResponse? (
          <Popup trigger={<button> Trigger</button>} position="right center">
          <ResponseForm user={user} icebreaker={icebreaker} addIcebreaker={addIcebreaker}/>
          
          </Popup>
  ) : (null)}
      </div>
    </div>
    </div>
    </>
  )
            }
export { FlipCard }