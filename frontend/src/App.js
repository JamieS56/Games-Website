import React, { Component } from "react";
// import * as ReactDOM from 'react-dom';
import * as ReactDOM from 'react-dom/client';
import HomePage from "./pages/HomePage.js";
import CreateProfile from "./pages/CreateProfile";
import Game from "./components/games/O-X/O-X";
import { getCookie } from '../helpers/postFormData'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function MyRouter(props){
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage user={props.user}/>} />
        <Route path="create-profile" element={<CreateProfile />} />
        <Route path="O-X" element={<Game />} />
      </Routes>
    </Router>
  );
}

function isUserLoggedIn(){
  if (!sessionStorage.logged_in){
    sessionStorage.logged_in = false
    return false
  }else{
    sessionStorage.logged_in = true
    return true
    
  }
}

async function getUser(){
  let userData = new FormData();
  userData.append('username', sessionStorage.user)

  let response = await fetch('http://127.0.0.1:8000/api/get-profile/',{
    method: 'POST',
    headers:{
      'X-CSRFToken': getCookie('csrftoken'),
    },
    body: userData
  })
  let user = response.json()
  console.log(user)
  return user
}

export default function App() {


 isUserLoggedIn
  
  let user = getUser()
  

  return(
      <div>
        <MyRouter user={user} />
      </div>
  )
  
}


const appDiv = document.getElementById("root");

const root = ReactDOM.createRoot(appDiv)
root.render(<App />);