import React, { Component } from "react";
import { render } from "react-dom";
import { Link, NavLink } from 'react-router-dom'
import Col from "react-bootstrap/esm/Col";




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
            <Col xs={6} sm={4} md={3} lg={2}>
                <Link to = {`${this.state.link}`}>
                    <div  className = 'icon'>
                        <img src={this.state.gamePicture}/>
                    </div>       
         



                </Link>
            </Col>
        );
    }
    
}
