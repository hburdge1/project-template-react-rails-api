import React, { useState, useEffect } from "react";
import FlipCard from "../Components/FlipCard";
import { fetchAllIcebreakers } from "../api";

function WelcomeCard({ user }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [seeIceBreakers, setIceBreakers] = useState([]);

  // get all icebreakers
  useEffect(() => {
    fetchAllIcebreakers().then((res) => setIceBreakers(res));
  }, []);

  //update icebreakers
  const updateIcebreaker = (id, flames) => {
    //PATCH
    fetch(`http://localhost:6001/icebreakers/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ flames }),
    }).then(() => {
      setIceBreakers(
        seeIceBreakers.map((ice) => {
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
      <h2 className="title">Welcome, {user}!</h2>
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
