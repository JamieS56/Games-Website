import React, { Component } from "react";
import SearchBar from "./SearchBar"

import Icon  from "./Icon";
import { render } from "react-dom";

function GetAllIcons(){
    let allIcons = [1, 2, 3, 4, 5, 6]
    let iconsList = allIcons.map(function(allIcons){
        return <Icon key={allIcons.toString()}/>
    })

    return <div id='gamesContainer'>{ iconsList }</div>


}

 
function HomePage(){
    return(
        <div>

            <h1>Home Page</h1>

            <SearchBar />

            <GetAllIcons />
            
            

        </div>
        
    )
}



export default HomePage