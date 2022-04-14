import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./pages/HomePage.js";
import CreateProfile from "./pages/CreateProfile";
import Game from "./components/games/O-X/O-X";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function MyRouter(){
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="create-profile" element={<CreateProfile />} />
        <Route path="O-X" element={<Game />} />
      </Routes>
    </Router>
  );
}

function isUserLoggedIn(){
  if (!sessionStorage.logged_in){
    
  }else{

  }
}

export default class App extends Component {

  isUserLoggedIn

  render() { 
    return (
      <div>
        <MyRouter />
      </div>
    );
  }
}


const appDiv = document.getElementById("root");
render(<App />, appDiv);