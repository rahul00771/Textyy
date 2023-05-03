import React, { useState } from 'react';
import TextForm from './Components/TextForm';

//This component is the componenet with the text form
//In this comp, state is used to analyze it and perform the necessary method


export default function  TextForm()
{
    const [text, setText] = useState("");
    let newText = "";


    const handleTextChange = (event)=>
    {
        setText(event.target.value);
    }

    function handleUpClick()
    { 
        newText = text.toUpperCase();
        setText(newText);
    }

    function handleLoClick()
    {
        newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=>{
        newText = "";
        setText(newText);
        document.querySelector(".xInput").value = 0;
    }

    let x = 1;
    const handleRepeatChange = (event)=>{
        x = event.target.value;
    }

    const handleRepeatClick = ()=>{
        newText = text.repeat(x);
        setText(newText);
    }
    
    function wordCount(str) {
        var m = str.match(/[^\s]+/g)
        return m ? m.length : 0;
      }

    const copyToClipboard = ()=>{

        navigator.clipboard.writeText(text);
    }

    return(
        <>
        <div className='container' >
            <h1>Enter the text to analyze</h1>
            <div className='textForm'>
                <textarea onChange={handleTextChange} rows={24} type='text' placeholder='Enter text here' value={text} />
            </div>
            <div className='btnContainer'>
                <button onClick={handleUpClick}>Convert to UpperCase</button>
                <button onClick={handleLoClick}>Convert to LowerCase</button>
                <button onClick={handleClearClick}>Reset</button>
            </div>
            <button style={props.textFormColor} onClick={handleRepeatClick}>Repeat 'x' number of times</button>
            <input style={props.textFormColor} className='xInput' size={1} onChange={handleRepeatChange} placeholder ='   x'></input>
            <h2>Preview:</h2>
            <p>The text has {wordCount(text)} words and {text.length} characters<img onClick={copyToClipboard} className='copyImage' src='../public/copyIcon.png'></img></p>
            <p className='output'><b>{text}</b></p>
        </div>
        </>
    );
}
