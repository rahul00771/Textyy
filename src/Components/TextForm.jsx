import React, { useState } from 'react'

//This component is the componenet with the text form
//In this comp, state is used to analyze it and perform the necessary method


export default function  TextForm()
{
    const [text, setText] = useState("");
    let newText = "";

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

    const handleChange = (event)=>
    {
        setText(event.target.value);
    }

    return(
        <>
        <div className='container'>
            <h2>Enter the text to analyze</h2>
            <div className='textForm'>
                <textarea onChange={handleChange} rows={24} type='text' placeholder='Enter text here' value={text} />
            </div>
            <div className='btnContainer'>
                <button onClick={handleUpClick}>Convert to UpperCase</button>
                <button onClick={handleLoClick}>Convert to LowerCase</button>
            </div>

            <h2>Preview:</h2>
            <p>{text}</p>
        </div>
        </>
    );
}