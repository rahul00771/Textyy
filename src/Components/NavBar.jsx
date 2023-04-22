import React from 'react'

export default function NavBar(props)
{
    return(
    <nav className='navBar'>
        <ul>
          <li><a href='/'>{props.first}</a></li>
          <li><a href='/'>{props.second}</a></li>
          <li><a href='#aboutPage'>{props.third}</a></li>
          <div className='searchBox'>
            <input type="text" placeholder='Search..'></input>
            <button>ok</button>
          </div>
        </ul>
      </nav>
      );
}

