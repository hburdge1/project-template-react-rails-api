import React, { useState, createRef } from "react";
import { FlipCard } from "../components/FlipCard.js";
import updateIcebreaker from "../components/App"


function WelcomeCard({ user }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [seeIceBreakers, setIceBreakers] = useState([]);

  // get all icebreakers
  useEffect(() => {
    fetch("http://localhost:6001/icebreakers").then((res) =>
      setIceBreakers(res)
    );
  }, []);

  //update icebreakers
  const updateIcebreaker = (id, flames) => {
    //PATCH
    fetch(`http://localhost:6001/icebreakers/${id}`, {
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
