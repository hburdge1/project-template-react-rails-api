import React, { useState, useEffect, createRef } from "react";
import "../components/FlipCard.css";
import IcebreakerList from "./IcebreakerList";

function Home({ user }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <h2 className="title">Welcome, {user.username}!</h2>
      <div className="card-container">
        {Array.from(seeIceBreakers).map((ice) => (
          <div className="card-item-container">
            <FlipCard seeIceBreakers={seeIceBreakers} 
              setIceBreakers={seeIceBreakers}
              content={ice.content}
              tags={ice.tags}
              flames={ice.flames}
              key={ice.id}
              responses={ice.responses}
              updateIcebreaker={() => updateIcebreaker(ice.id, ice.flames + 1)}
            />
          </div>
        ))}
      </div>
      <h2 className="title">
        Hi <span className="title-span">{user.username}</span>!
      </h2>
      <IcebreakerList />
    </>
  );
}

export default Home;
