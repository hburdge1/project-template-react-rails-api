import React, { createRef } from "react";
import { FlipCard } from "./FlipCard";
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
