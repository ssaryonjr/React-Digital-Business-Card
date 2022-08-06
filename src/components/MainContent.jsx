import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function MainContent(){
    return (
        <div className='mainContent'>
            <div className="contactInfo">
                
            
                <h1 className='title'>Sam Saryon Jr.</h1>
                <h2 className='subTitle'>Full Stack Developer</h2>
                <a href='#' className='website'>www.samsaryon.com</a>
                <a href='#' className='email'><FontAwesomeIcon icon={faCoffee} />Email</a>
            </div>
            <div className='aboutInfo'>
                <h5>About</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero totam quis tenetur! Laboriosam commodi numquam, quas, aliquid eos enim nesciunt earum dolorem, in id laborum voluptas! Laboriosam, sapiente obcaecati.</p>

                <h5>Interest</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero totam quis tenetur! Laboriosam commodi numquam, quas, aliquid eos enim nesciunt earum dolorem, in id laborum voluptas! Laboriosam, sapiente obcaecati.</p>
            </div>
        </div>
    )
}


export default MainContent