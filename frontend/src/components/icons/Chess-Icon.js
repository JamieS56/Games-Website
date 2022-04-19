import Icon from "../Icon";
import { Link, NavLink } from 'react-router-dom'
import React, { Component } from "react";

import logo from '../../../static/images/icons/Chess.png'


export default function ChessIcon(){
    return(
        <Icon gamePicture={logo} link={""}/>
    )
}