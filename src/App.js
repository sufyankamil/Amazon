import React, {useEffect} from "react";
import "./App.css";
// import { Router } from 'react-router';
// eslint-disable-next-line no-unused-vars
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user, setUser}, dispatch] = useStateValue(null);


  useEffect(() => {
    // will run when the app component is mounted
    auth.onAuthStateChanged(
      authUser => {

        console.log("THE USER IS: ", authUser);

        if (authUser) {
          // user logged in
          dispatch(
            // dispatch the user(creating object {})
            {
              type: "SET_USER",
              user: authUser
            }
          )
        } else {
          // user not logged in
          dispatch(
            {
              type: "SET_USER",
              user: null
            }
          )
        }
      }
    )
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
