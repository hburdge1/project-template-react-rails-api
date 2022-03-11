import React, { useState, useEffect, createRef } from "react";
import "../components/FlipCard.css";
import IcebreakerList from "./IcebreakerList";
import { FlipCard } from "../components/FlipCard";
function Home({ user, seeIceBreakers, setIceBreakers, updateIcebreaker, addIceBreaker }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <h2 className="title">Welcome, {user.username}!</h2>
      <div className="card-container">
        {Array.from(seeIceBreakers).map((ice) => (
          <div className="card-item-container">
            <FlipCard seeIceBreakers={seeIceBreakers} 
              setIceBreakers={setIceBreakers}
              content={ice.content}
              tags={ice.tags}
              responses={ice.responses}
              flames={ice.flames}
              key={ice.id}
              id={ice.id}
              favorite={ice.favorite}
              icebreaker={ice}
              addIcebreaker={addIceBreaker} 
              updateIcebreaker={() => updateIcebreaker(ice.id, ice.flames + 1)}
            />
          </div>
          
        ))
        }
      </div>
      <h2 className="title">
        Hi <span className="title-span">{user.username}</span>!
      </h2>
      <IcebreakerList />
    </>
  );

}

export default Home;
