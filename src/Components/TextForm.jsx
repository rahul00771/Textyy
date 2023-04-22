import React, { useState } from 'react'

//This component is the componenet with the text form
//In this comp, state is used to analyze it and perform the necessary method


export default function  TextForm()
{
    const [text, setText] = useState("");

    function handleClick()
    {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleChange = (event)=>
    {
        setText(event.target.value);
    }

    return(
        <>
            <h2>Enter the text to analyze</h2>
            <div className='textForm'>
                <textarea onChange={handleChange} rows={24} type='text' placeholder='Enter text here' value={text} />
            </div>
            <div className='btnContainer'>
                <button onClick={handleClick}>Convert to UpperCase</button>
            </div>
        </>
    );
}