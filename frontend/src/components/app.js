import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import Game from "./games/O-X/O-X";

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
        <Route path="O-X" element={<Game />} />
        
      </Routes>
    </Router>
  );
}

export default class App extends Component {


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