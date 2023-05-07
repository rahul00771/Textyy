import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';

export default function NavBar(props)
{
    return(
      <nav className='navBar' style={props.myStyle}>
      <ul className='navList'>

        <li><Link style = {props.navTextColor} to ='/'>{props.first}</Link></li>
        <li><Link style = {props.navTextColor} to ='/'>{props.second}</Link></li>
        <li><Link style = {props.navTextColor}  to ='about'>{props.third}</Link></li>


        <img onClick={props.toggleMode} src={props.modeIcon}></img>

      </ul>
    </nav>
      );
}


//

