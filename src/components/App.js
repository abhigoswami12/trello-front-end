import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import ShowBoard from "./ShowBoard";
import LandingPage from "./landingPage/LandingPage";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/board">
          <ShowBoard />
        </Route>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
