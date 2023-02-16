import React from 'react';
import NavBar from './NavBar';

function MyProfile ({currentUser}) {
    return (
        <>
            <NavBar/>
            <h1>{currentUser.first_name}'s Kitchen</h1>
        </>
    )
}

export default MyProfile;