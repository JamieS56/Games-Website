import React, { Component } from "react";
import SearchBar from "./SearchBar"

import Icon  from "./Icon";
import { render } from "react-dom";

function GetAllIcons(){
    var allGames = {
        1: "0/X",
        2: "rps",
        3: "line game",
        4: "Chess"

    }
    var allIcons = []
    let row = <div className='row justify-content-around'><Icon/><Icon/></div>
    let numIcons = 6
    let numRows = numIcons/2

        for (var i = 0; i < numRows; i++) {
            allIcons.push(row)
        }
            
        return allIcons



}

 
function HomePage(){
    return(
        <div className="center mx-auto">

            <h1>Home Page</h1>

            <SearchBar />

            <GetAllIcons />
            
            

        </div>
        
    )
}



export default HomePage