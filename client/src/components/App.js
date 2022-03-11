import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import NewIcebreaker from "../pages/NewIcebreaker";
import IcebreakerList from "../pages/IcebreakerList";
import Home from "../pages/Home";
import SignUpForm from "./SignUpForm";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App() {
  const [user, setUser] = useState(null);
  const [seeIceBreakers, setIceBreakers] = useState("");
  const history = useHistory();

  // handle auth
  const onAuth = (user) => {
    setUser(user);
  };

  const addIceBreaker = (i) => {
    setIceBreakers((icebreakers) => [...icebreakers, i]);
  };

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((u) => setUser(u));
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <div>
          <NavBar seeIceBreakers={seeIceBreakers} setIceBreakers={setIceBreakers} user={user} setUser={setUser} />
          <main>

            <Switch>
              <Route exact path="/">
                <Home user={user} seeIceBreakers={seeIceBreakers} addIcebreaker={addIceBreaker} />
              </Route>
              <Route path="/me">
                <Home user={user} />
              </Route>
              <Route path="/new">
                <NewIcebreaker user={user} addIcebreaker={addIceBreaker} />
              </Route>
            </Switch>
          </main>
        </div>
      ) : (
        <Switch>
          <Route path="/signup">
            <SignUpForm user={user} />
          </Route>
          <Route path="/">
            <Login onLogin={onAuth} history={history} />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
