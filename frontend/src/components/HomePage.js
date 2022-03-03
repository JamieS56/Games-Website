import React, { Component } from "react";

import Row from "react-bootstrap/esm/Row";
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'

import SearchBar from "./SearchBar"
import Example from "./Leaderboard"

import OXIcon from "./icons/O-X-Icon"
import ChessIcon from "./icons/Chess-Icon";
import Connect4Icon from "./icons/Connect-4-Icon";
import LineGameIcon from "./icons/LineGame-Icon";
import RPSIcon from "./icons/RPS-Icon";
import SpeedDotsIcon from "./icons/SpeedDots-Icon";



function GetAllIcons(){
    var allGames = {
        1: <OXIcon key={1}/>,
        2: <RPSIcon key={2}/>,
        3: <LineGameIcon key={3}/>,
        4: <ChessIcon key={4}/>,
        5: <Connect4Icon key={5}/>,
        6: <SpeedDotsIcon key={6}/>,

    }
    var allIcons = []
    let numIcons = 6
    let numRows = numIcons/2

    for (const game in allGames) {
        allIcons.push(allGames[game])
    }
  
            
    return allIcons



}

 
function HomePage(){
    return(
        <div className="center mx-auto">

            <div className="container">
                <SearchBar />
            </div>

            <div className="seperator"></div>

            <div className="container">
                <Row>
                    <GetAllIcons />
                </Row>
            </div>

            {/* <Example/> */}

        </div>
        
        
    )
}



export default HomePage