import React from 'react';
import Logo from '../images/react.png'

function Navbar(){
    return (
        <nav className='navBar'>
            <div className='logoContainer'>
                <img src={Logo} alt='Logo' className='logo'/>
                <h2 className='logoTitle'>ReactFacts</h2>
            </div>
            <h3 className='subTitle'>React Course  - Project 1</h3>
        </nav>
    )
}

export default Navbar