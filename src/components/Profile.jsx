import React from 'react';
import ProfilePic from '../images/samprofile.png'

function Profile(){
    return (
        <>
            <img src={ProfilePic} alt='Me' className='profilePic'/>
        </>
    )
}

export default Profile