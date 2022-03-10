import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import NewIcebreaker from "../pages/NewIcebreaker";
import Home from "../pages/Home";
import SignUpForm from "./SignUpForm";

function App() {
  const [user, setUser] = useState(null);
  const [seeIceBreakers, setIceBreakers] = useState("");
  const history = useHistory();

  // handle auth
  const onAuth = (user) => {
    setUser(user);
  };

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((u) => setUser(u));
      }
    });
  }, []);
  //update icebreakers
  const updateIcebreaker = (id, flames) => {
    //PATCH
    fetch(`/icebreakers/${id}`, {
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
      {user ? (
        <div>
          <NavBar user={user} setUser={setUser} />
          <main>
            <Switch>
              <Route path="/">
                <Home user={user} />
              </Route>
              <Route path="/me">
                <Home user={user} />
              </Route>
              <Route path="/new">
                <NewIcebreaker user={user} addIcebreaker={updateIcebreaker} />
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
