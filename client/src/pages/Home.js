import React, { useState, useEffect, createRef } from "react";
import { FlipCard } from "../components/FlipCard.js";
import updateIcebreaker from "../components/App";

function Home({ user }) {
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
    let flames_a = flames + 1
    fetch(`/icebreakers/${id}`, {
      method: "POST",
      body: JSON.stringify({ flames: flames_a }),
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
      <h2 className="title">Welcome, {user.username}!</h2>
      <div className="card-container">
        {Array.from(seeIceBreakers).map((ice) => (
          <div className="card-item-container">
            <FlipCard
              content={ice.content}
              tags={ice.tags}
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

export default Home
