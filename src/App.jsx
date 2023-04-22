
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <nav className='navBar'>
        <ul>
          <li><a href='/'>TextUtils</a></li>
          <li><a href='/'>Home</a></li>
          <li><a href='#aboutPage'>About</a></li>
          <div className='searchBox'>
            <input type="text" placeholder='Search..'></input>
            <button>ok</button>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default App
