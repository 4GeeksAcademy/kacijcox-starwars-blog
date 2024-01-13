import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home"


// Your component
const MyPlanet = () => {
  // ... component logic ...
  return <div>My Component</div>;
};

const App = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MyPlanet} />
        </Switch>
      </BrowserRouter>
    );
  };
  
  const Home = () => <div>Home</div>;

export default MyPlanet;
