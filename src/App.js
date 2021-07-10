import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UseStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51J1EAWSB6OGGT4V7ruOujRmkjxUoLmZAKwgylX9DU7wPRL1rGpVVao4EpPec9RTOZnZh1CQ0q3dMqFgoPn3oQp1J00yFwN0vfr');
function App() {
  const [{}, dispatch] = UseStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
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
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
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
