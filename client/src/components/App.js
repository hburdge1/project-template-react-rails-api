import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import IcebreakerList from "../pages/IcebreakerList";
import NewIcebreaker from "../pages/NewIcebreaker";
import Home from "../pages/Home";

function App() {
  const [user, setUser] = useState(null);
  const [iceBreakers, setIceBreakers] = useState([]);

  useEffect(() => {
    fetch( "localhost:3000/me").then((res) => setIceBreakers(res));
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Home />
      <main>
        <Switch>
          <Route path="/new">
            <NewIcebreaker user={user} />
          </Route>
          <Route path="/icebreakers">
            <IcebreakerList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
