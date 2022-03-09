import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import NewIcebreaker from "../pages/NewIcebreaker";
import Home from "../pages/Home";

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  // handle auth
  const onAuth = (user) => {
    setUser(user.username, user.password, user.id);
    history.push("/");
  };

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;

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
            </Switch>
          </main>
        </div>
      ) : (
        <Switch>
          <Route path="/signup">
            <Login onLogin={onAuth} />
          </Route>
          <Route path="*">
            <Redirect to="/signup" />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
