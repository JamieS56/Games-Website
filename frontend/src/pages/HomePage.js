import React, { Component } from "react";
import Row from "react-bootstrap/esm/Row";
import SearchBar from "../components/SearchBar"
import Leaderboard from "../components/Leaderboard"
import Profile from "../components/Profile";
import OXIcon from "../components/icons/O-X-Icon"
import ChessIcon from "../components/icons/Chess-Icon";
import Connect4Icon from "../components/icons/Connect-4-Icon";
import LineGameIcon from "../components/icons/LineGame-Icon";
import RPSIcon from "../components/icons/RPS-Icon";
import SpeedDotsIcon from "../components/icons/SpeedDots-Icon";


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
            <div className="button-footer">
                <Row id="buttons-row" absolute="bottom" >
                        <Leaderboard/>
                        <Profile/>
                </Row>
            </div>
        </div> 
    )
}


export default HomePage