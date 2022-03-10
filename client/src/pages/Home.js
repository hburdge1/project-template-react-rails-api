import React, { useState, useEffect, createRef } from "react";
import "../Components/FlipCard.css";
import IcebreakerList from "./IcebreakerList";

function WelcomeCard({ user }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <h2 className="title">
        Hi <span className="title-span">{user.username}</span>!
      </h2>
      <IcebreakerList />
    </>
  );
}

export default WelcomeCard;
