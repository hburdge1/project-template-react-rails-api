import React, { useState, createRef } from "react";
import { FlipCard } from "../components/FlipCard.js";
function WelcomeCard({ seeIceBreakers }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <ul className="cards">
      {seeIceBreakers.map((ice) => (
        <FlipCard seeIceBreakers={seeIceBreakers} key={seeIceBreakers.id} />
      ))}
    </ul>
  );
}

export default WelcomeCard;
