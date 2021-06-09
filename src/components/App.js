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
import { setAuthHeaders } from "../apis/axios";
import PageLoader from "./PageLoader";

function App() {
  const [user, setUser] = useState(null);
  const [isAuthComplete, setIsAuthComplete] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    console.log("render in App.js useEffect");
    setIsAuthComplete(false);
    fetch("https://desolate-anchorage-67445.herokuapp.com/api/v1/user/me", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then(({ user }) => {
        setUser(user);
        setIsAuthComplete(true);
      });
  }, []);

  if (!isAuthComplete) {
    return <PageLoader />;
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser, token, setToken }}>
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
  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen">
      <h1 className="text-2xl font-semibold leading-5 text-red-600">
        Page Not Found !!
      </h1>
    </div>
  );
}
export default App;
