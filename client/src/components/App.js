import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import { fetchAllIcebreakers } from "../api";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import IcebreakerList from "../pages/IcebreakerList";
import NewIcebreaker from "../pages/NewIcebreaker";
import Home from "../pages/Home";

function App() {
  const [user, setUser] = useState(null);
  const [seeIceBreakers, setIceBreakers] = useState([]);
  const history = useHistory();
  // get all icebreakers
  useEffect(() => {
    fetchAllIcebreakers().then((res) => setIceBreakers(res));
  }, [seeIceBreakers]);

  // add icebreakers
  const addIcebreaker = (icebreaker) => {
    setIceBreakers([...seeIceBreakers, icebreaker]);
  };
  // handle auth
  const onAuth = (user) => {
    setUser(user);
    history.push("/");
  };

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
                <NewIcebreaker user={user} addIcebreaker={addIcebreaker} />
              </Route>
              <Route path="/">
                <Home
                  seeIceBreakers={seeIceBreakers}
                  updateIcebreaker={updateIcebreaker}
                />
                {/* <IcebreakerList /> */}
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
