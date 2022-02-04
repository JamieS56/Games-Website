import React, { Component } from "react";
import Game from "./O-X";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { render } from "react-dom";

function Title(){
    return(
        <h1>Home Page</h1>
    )
}

function HomePage(){
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Title />} />
        <Route path="O-X" element={<Game />} />
        
      </Routes>
    </Router>
  );
}

export default HomePage