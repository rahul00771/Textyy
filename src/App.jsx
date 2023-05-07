import './App.css'
import NavBar from './Components/NavBar'
import TextForm from './Components/TextForm'
import { useState } from 'react'
import AboutPage from './Components/About page/AboutPage'
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  //background color of navbar
  const [navStyle, setnavStyle] = useState({
    backgroundColor : '#0E8388'
});

  //body color and dark mode icon
  const [mode, setMode]  = useState({
    iconSrc : './public/moon.png',
  });

  //for text of navbar
  const [textColorNav, setTextColorNav] = useState({
    color : "black",
  })

  //for textForm
  const [textFormStyle, setTextFormStyle] = useState({
    backgroundColor : "white",
    color : "black",
  })


  //toggle dunction(will be sent to NavBar as a Prop)
  const toggleMode = ()=>{
    setMode(                //for navbar icon and body
      mode.iconSrc == "./public/moon.png" 
      ? {
        iconSrc : './public/brightness.png',
      } 
      : {
        iconSrc : './public/moon.png',
      }
    )
    setnavStyle(
      navStyle.backgroundColor == '#0E8388'
      ? {
          backgroundColor : '#2E4F4F'
        }
      : {
        backgroundColor : '#0E8388'
        }
    )

    setTextColorNav(
      textColorNav.color == "black"
      ? {
        color : "white"
      }
      :
      {
        color: "black"
      }
    )

    setTextFormStyle(
      mode.iconSrc == "./public/brightness.png" 
      ? {
        backgroundColor : "white",
        color : "black",
      }
      : {
        backgroundColor : "#2D2727",
        color : "white",
      }
    )

  }

  document.body.style.backgroundColor = mode.iconSrc == "./public/moon.png" ? "#CBE4DE" : "#2C3333";
  document.body.style.color = mode.iconSrc == "./public/moon.png" ? "black" : "white";

  return (
    <Router>
      <div>

        <NavBar first = "Textyy" second = "Home"  third = "About" modeIcon = {mode.iconSrc} toggleMode = {toggleMode} myStyle = {navStyle} navTextColor = {textColorNav}/>

        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          
          <Route path="/">
            <TextForm textFormColor = {textFormStyle}/>
          </Route>
        </Switch>

        {/* <TextForm textFormColor = {textFormStyle}/> */}
        {/* <AboutPage/> */}

      </div>
      </Router>
  );
  
}

export default App
