import React, { Component } from "react";
import { render } from "react-dom";
import { Link, NavLink } from 'react-router-dom'
import Col from "react-bootstrap/esm/Col";


export default function Icon(props){
    

    return(
        <Col xs={6} sm={4} md={3} lg={2}>
            <Link to = {`${props.link}`}>
                <div  className = 'icon'>
                    <img src={props.gamePicture}/>
                </div>       
     
            </Link>
        </Col>
    );
    
    
}
