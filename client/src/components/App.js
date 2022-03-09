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
  const history = useHistory();

  // handle auth
  const onAuth = (user) => {
    setUser(user.username, user.password, user.id);
    history.push("/");
  };

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



  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      {user ? (
        <div>
          <NavBar user={user} setUser={setUser} />
          <main>
            <Switch>
              <Route path="/new">
                <NewIcebreaker user={user} />
              </Route>
              <Route path="/">
                <Home user={user} />
              </Route>
              <Route path="/new">
                <NewIcebreaker user={user} addIcebreaker={addIcebreaker} />
              </Route>
            </Switch>
          </main>
        </div>
      ) : (
        <Switch>
          <Route path="/signup">
              <SignUpForm user={user}/>
          </Route>
          <Route path="/login">
              <Login onLogin={onAuth}/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
