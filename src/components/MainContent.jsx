import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons' //make sure to use camel case.
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons" //Imports brands icons like facebook, twitter, etc.

function MainContent(){
    return (
        <div className='mainContent'>
            <div className="contactInfo">
                
            
                <h1 className='title'>Sam Saryon Jr.</h1>
                <h2 className='subTitle'>Full Stack Developer</h2>
                <a href='#' className='website'>www.samsaryon.com</a>
                <ul className='topContacts'>
                    <li><a href='#' className='email'><FontAwesomeIcon icon={faEnvelope} /> Email</a></li>
                    <li><a href="#" className='linkedin'><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a></li>
                </ul>
                
            </div>
            <div className='aboutInfo'>
                <h5>About</h5>
                <p>I am in love with the fast-paced data driven world that we live in and study it daily. It is my unique combination of passion, drive, and discipline that aids me to develop and deliver world-class software solutions. I am currently open to any new clients or opportunities. Please feel free to contact me through email or Linkedin.</p>

                <h5>Interest</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero totam quis tenetur! Laboriosam commodi numquam, quas, aliquid eos enim nesciunt earum dolorem, in id laborum voluptas! Laboriosam, sapiente obcaecati.</p>
            </div>
        </div>
    )
}


export default MainContent