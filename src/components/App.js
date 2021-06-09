import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import ShowBoard from "./board/ShowBoard";
import LandingPage from "./landingPage/LandingPage";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import Dashboard from "./dashboard/Dashboard";
import { useState } from "react";
import UserContext from "../components/Context/UserContext";
import { useEffect } from "react";

function App() {
  let [user, setUser] = useState(null);

  useEffect(() => {
    console.log("render in App.js useEffect");
    fetch("https://desolate-anchorage-67445.herokuapp.com/api/v1/user/me")
      .then((res) => res.json())
      .then(({ user }) => setUser(user));
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        {user ? <PrivateRoute /> : <PublicRoute />}
      </UserContext.Provider>
    </BrowserRouter>
  );
}

function PublicRoute() {
  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/signup" exact>
        <Signup />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route component={FourOFour}></Route>
    </Switch>
  );
}

function PrivateRoute() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/dashboard" />
      </Route>
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>
      <Route path="/boards/:boardId" exact>
        <ShowBoard />
      </Route>

      <Route component={FourOFour}></Route>
    </Switch>
  );
}
function FourOFour() {
  return <h1>Page Not Found</h1>;
}
export default App;

// remove login signup and landing page from privateRoute
