import React from 'react'
import {useState} from 'react'

export default function NavBar(props)
{
    return(
      <nav className='navBar' style={props.myStyle}>
      <ul className='navList'>

        <li><a style = {props.navTextColor} href='/'>{props.first}</a></li>
        <li><a style = {props.navTextColor} href='/'>{props.second}</a></li>
        <li><a style = {props.navTextColor} href='#aboutPage'>{props.third}</a></li>


        <img onClick={props.toggleMode} src={props.modeIcon}></img>

      </ul>
    </nav>
      );
}


//

