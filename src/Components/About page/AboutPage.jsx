import React from 'react'
import './About.css'

function AboutPage()
{
    return(
        <div>
            <h1 className='about'>About</h1>
            

            <div className='flex-container'>

                <div className='flex-item flex-item-1'>
                    <h2 className='subAbout'>Textyy</h2>
                    <p>Welcome to Textyy, the ultimate text utility tool that lets you modify your text just the way you want it. With our user-friendly interface, you can easily input any text and perform a range of modifications to make it fit your needs.
                    Textyy also offers a word and character count feature, allowing you to easily track the length of your text. This is especially useful if you need to adhere to specific character limits, such as in academic papers, social media posts, or emails.</p>
                </div>
                <div className = 'flex-item flex-item-2'>
                    <h2 className='subAbout'>About Me</h2>
                    <p>Hi there! My name is Rahul, and I am the creator of Textyy.
                        I hope this tool helps you improve your texting experience.
                    </p>
                    <p>I am an engineering undergrad from Assam, India with a passion in coding and developing apps.</p>
                    <p>Happy Texting.</p>                    
                </div>
            </div>

            <div className='icon-container'>
                        <a href= "https://www.instagram.com/rahulkr_00771/"><img  className='flex-img img-2' src='./icons8-instagram-48.png'></img></a>
                        <a href = "https://github.com/rahul00771"><img  className='flex-img img-2' src='./icons8-github-64.png' ></img></a>
                        <a href = "https://www.linkedin.com/in/rahul-kumar-sah-5044721ba/"><img  className='flex-img img-1' src='./icons8-linkedin-48.png'></img></a>
            </div>
            
         </div>
    )
}

export default AboutPage