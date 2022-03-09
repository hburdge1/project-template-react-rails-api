import React, { useState, createRef } from "react";
import { FlipCard } from "../components/FlipCard.js";
import updateIcebreaker from "../components/App"
function WelcomeCard({ seeIceBreakers }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  return (
    <>
      <h2 className="title">Welcome</h2>
      <div className="card-container">
        {seeIceBreakers.map((ice) => (
          <div className="card-item-container">
            <FlipCard
              content={ice.content}
              category={ice.category}
              flames={ice.flames}
              key={ice.id}
              updateIcebreaker={() => updateIcebreaker(ice.id, ice.flames + 1)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default WelcomeCard;
