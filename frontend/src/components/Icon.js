import React, { Component } from "react";
import { render } from "react-dom";
import { Link, NavLink } from 'react-router-dom'

export default class Icon extends React.Component{
    constructor(props){
        super(props);
        this.state={
            link: props.link,
            gamePicture: props.gamePicture

        };
    }
    
    render() {
        return(
            <Link className = 'col-6' to = {`${this.state.link}`}>
                <div  className = 'icon'>
                
                    <div className='GamePicture'>{this.state.gamePicture}</div>
                </div>
            </Link>
        );
    }
    
}
