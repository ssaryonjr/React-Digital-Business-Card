import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons' //make sure to use camel case.
import { faGithub, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons" //Imports brands icons like facebook, twitter, etc.


export default function Footer(){
    return (
        <footer>
            <ul className='footerContact'>
                <li><a href='https://github.com/ssaryonjr'><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href='https://twitter.com/samsaryonjr'><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href='https://www.linkedin.com/in/sam-saryon/'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
            </ul>
        </footer>
    )
}
