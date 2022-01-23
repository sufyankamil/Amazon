import React, { useEffect } from "react";
import "./App.css";
// import { Router } from 'react-router';
// eslint-disable-next-line no-unused-vars
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KIbbuSDUComm5F9vFvuvRbjTB8OdlGEls8x4bi2N1CmfETkWWM2ekdBY5aZ6NvdJ3o3ujxfNb0f1VIrJAJ7WtBi00YgQzqIFk"
);

function App() {
  const [{ user, setUser }, dispatch] = useStateValue(null);

  useEffect(() => {
    // will run when the app component is mounted
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS: ", authUser);

      if (authUser) {
        // user logged in
        dispatch(
          // dispatch the user(creating object {})
          {
            type: "SET_USER",
            user: authUser,
          }
        );
      } else {
        // user not logged in
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
