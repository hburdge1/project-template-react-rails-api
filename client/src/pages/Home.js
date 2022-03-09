import React, { useState, useEffect, createRef } from "react";
import { FlipCard } from "../components/FlipCard.js";
import updateIcebreaker from "../components/App";

function WelcomeCard({ user }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [seeIceBreakers, setIceBreakers] = useState([]);

  // get all icebreakers
  useEffect(() => {
    fetch("/icebreakers")
      .then((res) => res.json())
      .then((data) => setIceBreakers(data));
  }, []);

  //update icebreakers
  const updateIcebreaker = (id, flames) => {
    //PATCH
    fetch(`/icebreakers/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ flames }),
    }).then(() => {
      setIceBreakers(
        seeIceBreakers.icebreakers.map((ice) => {
          if (ice.id === id) {
            ice.flames = flames;
          }
          return ice;
        })
      );
    });
  };

  return (
    <>
      <h2 className="title">Welcome, {user.username}!</h2>
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
